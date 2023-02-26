/*[.::Javascript para estudiantes::.]------------------------------------------------------------------------
|Profesor: Ing. Asdrubal José Corales Pérez, +58-4811678, asdrubalcorales92@gmail.com                       |
|Tema: Operaciones utiles con File System: Crear,Eliminar,Leer,Modificar,Copiar,Cambiar nombre de archivo   |
-----------------------------------------------------------------------------------------------------------*/
//Nota: todos los métodos (funciones) de este módulo son asíncronos, pero se pueden agregar métodos síncronos
//agregando la palabra Sync a sal final de sus nombres, ejemplo fs.rename() -> fs.renameSync().

//Declaración de variables más archivos y/o modulos externos:
const fs = require('fs');
const color = require('colors');//Add color
let err, contenido,error;


    //Funciones:
    //Leer el acintenido del archivo de ejemplo fileSytem.html
    //fs.readFile('nombre de archivo','tipo de codificación de caracteres',llamada de la función de control);
    fs.readFile('fileSystem.html','utf-8',(err, contenido) =>{
        if(err)
        {
            //console.error('Ha ocurrido un error!\n'+err);
            throw err;//Detine la ejecución por completo cuando aparece el error
        }/*else{
            console.log(contenido);
        }*/
        console.log('Mensaje...')
    });

    //Cambiar nombre a un archivo:
    // fs.rename('nombre del archivo','nombre nuevo del archivo', función de control);
    fs.rename('fileSystem.txt','fileSistema.txt',(error)=>{
        if(error)
        {
            throw error;
        }
        console.log('Nombre cambiado exitosamente!');
    });
