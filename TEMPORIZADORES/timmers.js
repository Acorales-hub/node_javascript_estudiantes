/*[.::Javascript para estudiantes::.]---------------------------------------------------
|Profesor: Ing. Asdrubal José Corales Pérez, +58-4811678, asdrubalcorales92@gmail.com  |
|Tema: Uso de los Teporizadores                                                        |
--------------------------------------------------------------------------------------*/

//Packages (paquetes externos), variables
const color = require('colors');
let nomFusion;
let retraso;
let argumento;
let tema ='Node js';
//setTimeout(nomFuncion,retraso,argumento1,argumento2);//Ejecuta código después de un número especifico de milisegundo
//setImmediate(nomFuncion,argumento,argumento1)//Ejecuta código asincrono en la proxima iteración de ciclos de ventos lo más pronto posible
//setInterval(nomFuncion,intervalo,argumento,argumento1)//Ejecuta un código un número finito de veces con un retraso especifico en milisegundos
// 1seg = 1000 milisegndos
console.clear();
function mostrarTema(tema)
{
    console.log(`\tEstoy aprendiendo ${tema}`.rainbow.inverse);
}//setTimeout(mostrarTema,5000,tema);
//mostrarTema(tema);
let a,b;
function suma(a,b)
{
    console.log(`${a} + ${b} = ${a+b}`);
}setTimeout(suma,2000,5,4);
let i=1;
function nVeces()
{
    i+=i;
    console.log(`Aumento`.bgYellow+` en:`+` ${i}`.america.inverse);
}

console.info('!'.bgCyan+"Ejecutando temposrizador en Node Js".cyan.inverse);
setImmediate(mostrarTema,tema);
setInterval(nVeces,2000)
