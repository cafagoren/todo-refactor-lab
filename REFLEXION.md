# Reflexión

Durante este proyecto aprendí que separar la lógica de las tareas de la interfaz facilita entender y mantener el código. Las funciones de `taskService.js` se encargan de operaciones como agregar, buscar, filtrar, cambiar el estado y eliminar tareas. Por otro lado, `app.js` recibe los eventos y actualiza lo que se muestra en la página. Así, cada archivo tiene una responsabilidad más clara.

Las pruebas unitarias me ayudaron a revisar los resultados esperados antes de dar por terminada cada función. Las que más confianza me dieron fueron las de cambio de estado y eliminación, porque comprueban que se afecte la tarea correcta y que el resto de la colección se conserve. También revisé casos como una colección vacía y un ID que no existe.

Para la extensión de la Misión 11 elegí mostrar el porcentaje de avance. La función calcula qué parte de las tareas está terminada y devuelve cero cuando todavía no hay tareas. Comprobar esos casos me ayudó a tener más confianza en el resultado.

Realicé individualmente la implementación y la revisión del proyecto. Esta actividad me mostró que conviene ejecutar las pruebas después de los cambios y comprobar también la aplicación, porque una suite aprobada no sustituye la revisión de los botones y filtros en la página. En futuros cambios, comenzaré definiendo los casos que debe cubrir cada función y después verificaré que la interfaz los utilice correctamente.