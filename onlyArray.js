/*[.::Javascript para estudiantes::.]----------------------------------------------------------
|Profesor: Ing. Asdrubal José Corales Pérez, +58-4811678, asdrubalcorales92@gmail.com         |
|Tema: arreglos en Javascript (.push(),.pop(),.shift(),.unshift(), vacios,índices, matrices)  |
---------------------------------------------------------------------------------------------*/

//Archivos Externos:
    const color = require('colors'); //Add color.
    const fs = require('fs');//File system.

//Declaración de Varibles:
    //let avfrutas = new array();//Declaración de arreglos vacios.
    //let avFrutas = [];        //otra declaración de arreglos vacios
    //let arr = new Array("Apple","Pear","etc");
    let xPais = ['Venezuela']
    let fruit = ['Cambur','Manzana','Naranja','Pera'];
    let fruta =['Fruta',{name:'Apple',pais:'Canada',cod:'02173'},'Empresa',{name:'Cada',pais:xPais,cod:'+58'}];
    let vector =['Neo','Trinitry','Morfeo','Agnt Smith','Nabuconodosor','Mause','Cerrajero','Oraculo','KARE'];
    let matrix =[[1,2,3],[4,5,6],[7,8,9]];
    let sizeVector = [];//vector vacio que contendrá el tamaño de los arreglos.
    let i,op;

try
{
    console.clear();//Limpia el terminal.

    //console.log('Table of sizes');
    //showSizeArray();//Mustra el tamaño de los arrglos definidos en la declaración de variables.
    showFruit();
    

    //forOf();
    //forIn();


}catch(err){
        console.log('Sorry!'.bold.red);
        console.error('Ha ocurrido un error!'+err.name);
        console.info(err.message);
    }

function showFruit()
{
    //Loop para ver el contenido de fuit[]
    //for(i=0; i<= fruit.length-1;i++)
    //{
      //  console.log('\t['+i+']['+fruit[i]+']');
    //}
    console.log("Tabla Inicial");
    console.table(fruit);
    console.log('-Último elemento de la tabla inicial: '+fruit.pop());//.pop() extrae el último elemento del vector
    fruit.push('Guanabana');//es igual a fruits[fruits.length] = ...., .push() agrega un elemento al final del vector
    console.log('-Último elemento agregado a la tabla inicial: '+fruit.pop());//Muestra el último elemento de la pila
    console.log('-Primer elemento de la tabla inicial:'+fruit.shift());//Muestra el primer elemento de la pila
    fruit.unshift('Mango');//Agrega un elemento al principio de la pila
    console.log('-Primer elemento agregado ala tabla inicial:'+fruit.shift().yellow);
    fruit[2]='Lechoza';//Reemplazo de valor en el índice 2
    console.table(fruit);//Muestra el contenido del vector.
    //console.log(fruit.length-1);
}

function showFruta()
{
    console.table(fruta);
    console.log('Resultado con at es '+fruit.at(-1)+',Resultado con length-1 es '+fruit[fruit.length-1]);
    console.log('Tamaño del vector frutas:'+fruta.length);
    console.log('Tamaño del vector fruit:'+fruit.length);
}

    function showSizeArray()
{
    sizeVector.push(`${fruit.length}`);
    sizeVector.push(`${fruta.length}`);
    sizeVector.push(`${vector.length}`);
    console.log('\tTable 01: Sizes of arrray'+color.yellow.bold);
    console.table(sizeVector);
}


function frutas()
{

}


function showMatriz()
{
    //Loop para imprimir el contenido de la matriz
    for(i=0; i<=matrix.length-1;i++)
    {
        for(j=0; j<=matrix.length-1;j++)
        {
            console.log(matrix[i][j]);
        }
    }
}

function forOf(){
    console.clear();
    for(vector of vector)
    {
        console.log(vector);
    }
    /*for..of no da acceso al número del elemento en curso, 
    solamente a su valor, pero en la mayoría de los casos 
    eso es suficiente. Y es más corto.*/
}

function forIn()
{
    console.clear();
    for (let key in vector)
    {
        console.table(vector[key]);
    }
}