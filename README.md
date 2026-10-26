# ToDo Refactor Lab

Aplicación sencilla para administrar tareas. El proyecto practica refactorización y pruebas unitarias con JavaScript y Vitest.

## Funciones

- Agregar tareas.
- Marcar tareas como terminadas o pendientes.
- Eliminar tareas.
- Filtrar tareas pendientes y terminadas.
- Consultar el total de tareas, cuántas están pendientes y cuántas están terminadas.
- Ver el porcentaje de avance.

## Requisitos

- Node.js y npm.
- Git.

## Instalación

Clona el repositorio y entra a la carpeta del proyecto:

```bash
git clone https://github.com/cafagoren/todo-refactor-lab.git
cd todo-refactor-lab
```

Instala las dependencias:

```bash
npm install
```

## Pruebas

Ejecuta la suite una vez:

```bash
npm test
```

Para dejar las pruebas observando cambios:

```bash
npm run test:watch
```

## Estructura principal

Esta lista describe archivos que forman parte del proyecto. **Va aquí mismo, en el README; no tienes que crear ni mover nada.**

- `src/taskService.js`: contiene la lógica de las tareas.
- `src/app.js`: maneja los eventos y actualiza la página.
- `tests/taskService.test.js`: contiene las pruebas unitarias.
- `index.html`: contiene la estructura de la aplicación.
- `package.json`: define las dependencias y los comandos disponibles.

## Decisiones de refactorización

La lógica de las tareas se concentró en `src/taskService.js` para separarla de la interfaz. `src/app.js` utiliza las funciones del servicio para agregar, filtrar, cambiar el estado y eliminar tareas, y después actualiza la página.

Las funciones del servicio reciben datos y devuelven resultados. Las operaciones de las colecciones evitan modificar directamente la colección original.

## Pruebas realizadas

Las pruebas cubren la creación y adición de tareas, la búsqueda por ID, los filtros de tareas pendientes y terminadas, el cambio de estado, la eliminación y el resumen. También incluyen casos de colecciones vacías e IDs inexistentes.

## Extensión seleccionada

En la Misión 11 se implementó la opción C: porcentaje de avance. La función `obtenerPorcentajeAvance()` devuelve `0` cuando no hay tareas y calcula el porcentaje de tareas terminadas cuando sí las hay.

## Trabajo individual

El trabajo se realizó individualmente. La implementación y revisión del código fueron realizadas por la misma persona.

## Evidencias

Las capturas de las pruebas y de la aplicación se entregan por separado en la plataforma del curso.