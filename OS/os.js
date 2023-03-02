/*[.::Javascript para estudiantes::.]---------------------------------------------------
|Profesor: Ing. Asdrubal José Corales Pérez, +58-4811678, asdrubalcorales92@gmail.com  |
|Tema: Usos del módulo SO (sistema operatvo)                                                         |
--------------------------------------------------------------------------------------*/

//Package Externals (paquetes externos):
const color = require('colors');
const os = require('os');

//Diferentes formas de usar os:
console.log(os.type().america);//os.type() devuelve el tipo de sistema operativo que usas.
console.log(os.homedir().rainbow);//os.homedir() devuelve el directorio donde estas ubicado.
console.log(os.uptime());//os.uptimee() devuelve el tiempo que se ha estado ejecutando el sistema operativo.
console.log(os.userInfo());////os.userInfo() devuelve la información de usuario.