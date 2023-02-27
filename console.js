/*[.::Javascript para estudiantes::.]---------------------------------------------------
|Profesor: Ing. Asdrubal José Corales Pérez, +58-4811678, asdrubalcorales92@gmail.com  |
|Tema: Usos del modulo console                                                         |
--------------------------------------------------------------------------------------*/

//Declaración de variables más archivos y/o modulos externos:
const color = require('colors');
const car = "Dodge Charger";
const someObject = { str: "Algún texto", id: 5 };

//Diferentes formas de usar el módulo console
console.clear()//Limpia el terminar es con el comdo clear o cls
console.table(['manzana','pera','cambur']);//Crea una tabla de forma gráfica
console.error('Error: Ha ocurrido un error!'.red);//módulo para mostrar errores
console.error(new Error('Ha ocurrido un error!').message.red);//Otra forma de mostrar un error
console.warn('Warning: Posible fallo del sistema!'.yellow);//módulo de posible errores
console.info("Mi primer automóvil fue un ", car, ". El objeto es:", someObject);//módulo de mensajes tipo información
console.info('!'.bgCyan+" Mensaje:".cyan.inverse);