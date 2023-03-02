//Package Externals:
const color = require('colors');
const saludos = require('./saludos');//los módulos se asignan a una constante que debe llevar el nombre del módulo que se importa 
const os = require('os');
//forma normal:
console.log(saludos.saludar('epa'));
//forma de destructuración:pemite tomar una fracción de otra estructura en especifico
const {saludar,saludarMundo} = require('./saludos');
console.log(`-> ${saludarMundo()}`)
console.log(`-> ${saludar('Node js')}`)