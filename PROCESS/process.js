//Módulo de procesos de Node
console.clear();
const color = require('colors');
let array = {};
let i;
let cantMemory;
console.log('\t.::CORALESoftware::.\n'.yellow.bold.underline);
//console.log(process);//muestra la información completa del proceso
//console.log(process.argv);//Muestra resumen de la info del proceso en un vector, argv->argumento
//console.log(process.argv[2]);
//console.log(process.argv[3]);
console.log('Table of index argv cath'.yellow)
for (i=2; i < process.argv.length;i++)
{
        array[i]=process.argv[i];
}
console.table([array]);
console.info('Info!'.bgCyan+' The memory usage is:'.cyan.inverse);
console.log(process.memoryUsage());