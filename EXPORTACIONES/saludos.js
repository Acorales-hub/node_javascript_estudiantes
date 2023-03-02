function saludar(nombre)
{
    return `Hola ${nombre}`;
}

function saludarMundo(variable)
{
    return 'Hola mundo';
}

//console.log(module.exports);
//exports.saludar = saludar;//es útil asignar el mismo nombre pero son independientes
//console.log(module.exports)
//exports.saludarMundo = saludarMundo;

//Objeto Vacio: Importante usar la palabra module para exportar el objeto
module.exports={
    saludar:saludar,
    saludarMundo:saludarMundo
};//Usando esta estructutras nos ahorramos códigos