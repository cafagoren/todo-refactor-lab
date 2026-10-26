import { describe, it, expect } from "vitest";
import {
  crearTarea,
  agregarTarea,
  buscarTarea,
  obtenerPendientes,
  obtenerTerminadas,
  cambiarEstado,
  eliminarTarea,
  obtenerResumen,
  obtenerPorcentajeAvance,
} from "../src/taskService.js";

/*
 * TODO REFACTOR LAB · SUITE STARTER
 *
 * Activa/crea pruebas misión por misión. No escribas todas las soluciones de
 * una vez. Para cada comportamiento sigue RED → GREEN → REFACTOR.
 */

describe("crearTarea", () => {
  it("crea una tarea pendiente con id y título", () => {
    // Arrange
    const id = 10;
    const titulo = "Diseñar pruebas";

    // Act
    const tarea = crearTarea(id, titulo);

    // Assert
    expect(tarea).toEqual({ id: 10, titulo: "Diseñar pruebas", completada: false });
  });
});

describe("agregarTarea", () => {
  it("agrega una tarea y devuelve una nueva colección", () => {
    const tareas = [
      { id: 1, titulo: "Leer", completada: false },
    ];
    const nuevaTarea = {
      id: 2,
      titulo: "Estudiar",
      completada: false,
    };

    const resultado = agregarTarea(tareas, nuevaTarea);

    expect(resultado).toEqual([...tareas, nuevaTarea]);
    expect(resultado).not.toBe(tareas);
  });

  it("no modifica la colección original", () => {
    const tareas = [
      { id: 1, titulo: "Leer", completada: false },
    ];
    const nuevaTarea = {
      id: 2,
      titulo: "Estudiar",
      completada: false,
    };

    agregarTarea(tareas, nuevaTarea);

    expect(tareas).toHaveLength(1);
  });
});

describe("buscarTarea", () => {
  const tareas = [
    { id: 1, titulo: "Leer", completada: false },
    { id: 2, titulo: "Estudiar", completada: true },
  ];

  it("encuentra una tarea por su id", () => {
    expect(buscarTarea(tareas, 2)).toEqual(tareas[1]);
  });

  it("devuelve undefined si el id no existe", () => {
    expect(buscarTarea(tareas, 99)).toBeUndefined();
  });
});

describe("obtenerPendientes", () => {
  const tareas = [
    { id: 1, titulo: "Leer", completada: false },
    { id: 2, titulo: "Estudiar", completada: true },
  ];

  it("devuelve solo las tareas pendientes", () => {
    expect(obtenerPendientes(tareas)).toEqual([tareas[0]]);
  });

  it("devuelve una colección vacía si no hay pendientes", () => {
    expect(obtenerPendientes([tareas[1]])).toEqual([]);
  });

  it("devuelve una colección vacía si no recibe tareas", () => {
    expect(obtenerPendientes([])).toEqual([]);
  });
});

describe("obtenerTerminadas", () => {
  const tareas = [
    { id: 1, titulo: "Leer", completada: false },
    { id: 2, titulo: "Estudiar", completada: true },
  ];

  it("devuelve solo las tareas terminadas", () => {
    expect(obtenerTerminadas(tareas)).toEqual([tareas[1]]);
  });

  it("devuelve una colección vacía si no hay tareas terminadas", () => {
    expect(obtenerTerminadas([tareas[0]])).toEqual([]);
  });

  it("devuelve una colección vacía si no recibe tareas", () => {
    expect(obtenerTerminadas([])).toEqual([]);
  });
});

describe("cambiarEstado", () => {
  const tareas = [
    { id: 1, titulo: "Leer", completada: false },
    { id: 2, titulo: "Estudiar", completada: true },
  ];

  it("cambia el estado de la tarea indicada", () => {
    const resultado = cambiarEstado(tareas, 1, true);

    expect(resultado[0].completada).toBe(true);
  });

  it("conserva intactas las demás tareas", () => {
    const resultado = cambiarEstado(tareas, 1, true);

    expect(resultado[1]).toEqual(tareas[1]);
  });

  it("devuelve la colección igual si el id no existe", () => {
    const resultado = cambiarEstado(tareas, 99, true);

    expect(resultado).toEqual(tareas);
  });
});

describe("eliminarTarea", () => {
  const tareas = [
    { id: 1, titulo: "Leer", completada: false },
    { id: 2, titulo: "Estudiar", completada: true },
  ];

  it("elimina la tarea con el id indicado", () => {
    expect(eliminarTarea(tareas, 1)).toEqual([tareas[1]]);
  });

  it("conserva la colección si el id no existe", () => {
    expect(eliminarTarea(tareas, 99)).toEqual(tareas);
  });

  it("devuelve una colección vacía si no hay tareas", () => {
    expect(eliminarTarea([], 1)).toEqual([]);
  });
});

describe("obtenerResumen", () => {
  it("devuelve el total, las pendientes y las terminadas", () => {
    const tareas = [
      { id: 1, titulo: "Leer", completada: false },
      { id: 2, titulo: "Estudiar", completada: true },
      { id: 3, titulo: "Practicar", completada: false },
    ];

    expect(obtenerResumen(tareas)).toEqual({
      total: 3,
      pendientes: 2,
      terminadas: 1,
    });
  });

  it("devuelve ceros si la colección está vacía", () => {
    expect(obtenerResumen([])).toEqual({
      total: 0,
      pendientes: 0,
      terminadas: 0,
    });
  });
});

describe("obtenerPorcentajeAvance", () => {
  it("devuelve 0 si no hay tareas", () => {
    expect(obtenerPorcentajeAvance([])).toBe(0);
  });

  it("devuelve 50 cuando la mitad de las tareas está terminada", () => {
    const tareas = [
      { id: 1, titulo: "Leer", completada: true },
      { id: 2, titulo: "Estudiar", completada: false },
    ];

    expect(obtenerPorcentajeAvance(tareas)).toBe(50);
  });

  it("devuelve 100 si todas las tareas están terminadas", () => {
    const tareas = [
      { id: 1, titulo: "Leer", completada: true },
      { id: 2, titulo: "Estudiar", completada: true },
    ];

    expect(obtenerPorcentajeAvance(tareas)).toBe(100);
  });
});

// MISIÓN 3: agrega al menos dos pruebas para agregarTarea().
// MISIÓN 4: prueba id existente e inexistente para buscarTarea().
// MISIÓN 5: prueba colección mixta, sin coincidencias y vacía.
// MISIÓN 6: prueba cambio correcto, otra tarea intacta e id inexistente.
// MISIÓN 7: prueba eliminar existente, inexistente y colección vacía.
// MISIÓN 8: prueba obtenerResumen(), incluyendo colección vacía.

// Los imports anteriores quedan preparados para que construyas la suite de forma incremental.
void agregarTarea;
void buscarTarea;
void obtenerPendientes;
void obtenerTerminadas;
void cambiarEstado;
void eliminarTarea;
void obtenerResumen;
