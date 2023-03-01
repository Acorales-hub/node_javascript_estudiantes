
/*[.::Javascript para estudiantes::.]---------------------------------------------------
|Profesor: Ing. Asdrubal José Corales Pérez, +58-4811678, asdrubalcorales92@gmail.com  |
|Tema: Operación útil con try,catch,finally                                            |
--------------------------------------------------------------------------------------*/
//Declaración de variables más archivos y/o modulos externos:
const color= require('colors');

try //<-intenta
{
        console.clear();
        hola('Hello wordl');
        throw 'Failure->';//throw termina la secuencia de instrucciones si la hubiese
    
}catch(error)//<-captura
{
    console.error("Failure name:".bold.red+error.name);//Reference error
    console.info('!System Message:'.bold.cyan+error.message);//Error message
    //console.log("Stack:\n".bold.yellow+error.stack);//Muestra el mensaje completo del error
}finally//<-finalmente
        {
            console.log('Break!')
        }