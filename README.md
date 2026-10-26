# ToDo Refactor Lab

Proyecto individual de Ingeniería de Software para practicar refactorización y pruebas unitarias con Vitest.

## Inicio del proyecto

En la terminal de VS Code, dentro de la carpeta del proyecto, ejecuté:

```bash
npm install
npm test
```

## Estructura del proyecto
- index.html: estructura de la interfaz.
- styles.css: presentación de la aplicación.
- src/legacy.js: versión inicial que se analiza antes del refactor.
- src/taskService.js: funciones y reglas de las tareas.
- src/app.js: eventos y actualización de la interfaz.
- tests/taskService.test.js: pruebas unitarias con Vitest.
Misión 0 · Comprender antes de cambiar
¿Dónde guardar el estado de una tarea?
Lo guardaré como una propiedad de cada tarea, por ejemplo completada: false.
¿Qué pasa si después agrego prioridad, fecha o responsable?
Al usar objetos, puedo agregar esas propiedades a cada tarea. Con una lista de strings sería más difícil guardar esos datos.
¿Qué parte son los datos y cuál es la interfaz?
La colección de tareas contiene los datos. El código que usa innerHTML, crea elementos o responde a eventos pertenece a la interfaz.
¿Qué comportamiento debe conservarse?
La aplicación debe mostrar las tareas, permitir agregar una tarea con título y permitir eliminarla.
Comportamientos que no deben cambiar
1. Al agregar un título válido, la tarea aparece en la lista.
2. Si el título está vacío, no se agrega y se muestra un mensaje.
3. Al eliminar una tarea, esta desaparece de la lista.
## Trabajo individual
Realizaré las funciones de Driver y Navigator. Antes de cada cambio decidiré qué modificaré, revisaré posibles casos límite y comprobaré que las pruebas correspondan al comportamiento esperado. Al terminar cada misión, explicaré con mis palabras la función y su prueba.
## Registro RED → GREEN → REFACTOR
- RED: anotaré qué prueba escribí y por qué falló.
- GREEN: explicaré el cambio mínimo que hizo pasar la prueba.
- REFACTOR: describiré qué mejoré sin cambiar el comportamiento.
## Misiones
1. Cambiar las tareas de strings a objetos.
2. Implementar y probar crearTarea(id, titulo).
3. Implementar y probar agregarTarea(tareas, nuevaTarea).
4. Buscar tareas por identificador con find().
5. Obtener pendientes y terminadas con filter().
6. Cambiar el estado con map() sin modificar la colección original.
7. Eliminar tareas y probar casos límite.
8. Calcular el resumen de tareas.
9. Integrar la lógica probada con la interfaz.
10. Mejorar nombres y estructura, ejecutando las pruebas después de cada cambio.
11. Agregar una extensión y escribir primero sus pruebas.
Extensión elegida · Evitar títulos duplicados
No permitiré agregar dos tareas con el mismo título. La comparación ignorará mayúsculas y espacios al inicio y al final. Por ejemplo, Comprar leche y comprar leche contarán como duplicados.

Probaré que un título nuevo se agregue, que uno repetido se rechace y que las diferencias de mayúsculas y espacios no eviten detectar el duplicado.
Evidencia
Al finalizar, guardaré una captura de las pruebas en verde y registraré una prueba que haya fallado, la causa y el cambio que la corrigió.
## Reflexión individual
Escribiré una reflexión de 200–250 palabras sobre el cambio que más mejoró la mantenibilidad y la prueba que me dio más confianza.
```