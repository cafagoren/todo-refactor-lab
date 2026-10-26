import { describe, it, expect } from "vitest";
import {
  crearTarea,
  agregarTarea,
  buscarTarea,
  obtenerPendientes,
  obtenerTerminadas,
  cambiarEstado,
  eliminarTarea,
  obtenerResumen
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
