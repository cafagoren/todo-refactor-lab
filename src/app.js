import {
  crearTarea,
  agregarTarea,
  cambiarEstado,
  eliminarTarea,
  obtenerPendientes,
  obtenerTerminadas,
  obtenerResumen,
  obtenerPorcentajeAvance,
} from "./taskService.js";

const form = document.querySelector("#task-form");
const input = document.querySelector("#task-input");
const list = document.querySelector("#task-list");
const message = document.querySelector("#message");
const summary = document.querySelector("#summary");
const filters = [...document.querySelectorAll("[data-filter]")];

let tareas = [
  crearTarea(1, "Revisar requisitos"),
  crearTarea(2, "Diseñar pruebas"),
  crearTarea(3, "Refactorizar código"),
];

let siguienteId = 4;
let filtro = "todas";

function render() {
  list.innerHTML = "";

  let tareasVisibles = tareas;

  if (filtro === "pendientes") {
    tareasVisibles = obtenerPendientes(tareas);
  } else if (filtro === "terminadas") {
    tareasVisibles = obtenerTerminadas(tareas);
  }

  tareasVisibles.forEach((tarea) => {
    const li = document.createElement("li");
    li.className = "task";

    const titulo = document.createElement("span");
    titulo.className = "title";
    titulo.textContent = tarea.titulo;

    if (tarea.completada) {
      titulo.classList.add("completed");
    }

    const acciones = document.createElement("span");
    acciones.className = "task-actions";

    const botonEstado = document.createElement("button");
    botonEstado.dataset.toggle = tarea.id;
    botonEstado.textContent = tarea.completada
      ? "Marcar pendiente"
      : "Completar";

    const botonEliminar = document.createElement("button");
    botonEliminar.dataset.delete = tarea.id;
    botonEliminar.textContent = "Eliminar";

    acciones.append(botonEstado, botonEliminar);
    li.append(titulo, acciones);
    list.appendChild(li);
  });

  renderResumen();
}

function renderResumen() {
  const resumen = obtenerResumen(tareas);
  const porcentaje = Math.round(obtenerPorcentajeAvance(tareas));
  summary.textContent =
  `Total: ${resumen.total} | Pendientes: ${resumen.pendientes} | ` +
  `Terminadas: ${resumen.terminadas} | Avance: ${porcentaje}%`;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const titulo = input.value.trim();

  if (!titulo) {
    message.textContent = "Escribe un título antes de agregar.";
    return;
  }

  const nuevaTarea = crearTarea(siguienteId, titulo);
  tareas = agregarTarea(tareas, nuevaTarea);
  siguienteId += 1;

  input.value = "";
  message.textContent = "";
  render();
});

list.addEventListener("click", (event) => {
  const idEliminar = event.target.dataset.delete;
  const idCambiarEstado = event.target.dataset.toggle;

  if (idEliminar !== undefined) {
    tareas = eliminarTarea(tareas, Number(idEliminar));
    render();
    return;
  }

  if (idCambiarEstado !== undefined) {
    const id = Number(idCambiarEstado);
    const tarea = tareas.find((tarea) => tarea.id === id);

    if (tarea) {
      tareas = cambiarEstado(tareas, id, !tarea.completada);
      render();
    }
  }
});

filters.forEach((button) => {
  button.addEventListener("click", () => {
    filtro = button.dataset.filter;

    filters.forEach((filterButton) => {
      filterButton.classList.toggle("active", filterButton === button);
    });

    message.textContent = "";
    render();
  });
});

render();