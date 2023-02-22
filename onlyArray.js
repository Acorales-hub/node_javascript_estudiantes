/*[.::Javascript para estudiantes::.]------------------------------------------------
|Profesor: Ing. Asdrubal José Corales Pérez, +58-4811678, asdrubalcorales@gmail.com |
|Tema: arreglos en Javascript                                                       |
-----------------------------------------------------------------------------------*/



const color = require('colors')
//const fs = require('fs');
//let avfrutas = new array();//av:arreglos vacios
//let arr = new Array("Apple", "Pear", "etc");
//let avFrutas = [];//otra declaración de arreglos vacios
let fruit = ['Cambur','Manzana','Naranja','Pera'];
let xPais = 'Venezuela';
let fruta =['Fruta',{name:'Apple',pais:'Canada',cod:'02173'},'Empresa',{name:'Cada',pais:xPais,cod:'+58'}];
let i;
let vector =['Neo','Trinitry','Morfeo','Agnt Smith','Nabuconodosor','Mause','Cerrajero','Oraculo','KARE'];
let matrix =[[1,2,3],[4,5,6],[7,8,9]];
let sizeVector = [];


try
{
    console.clear();


    console.log('Último elemento:'+fruit.pop());
    console.log('Primer elemento:'+fruit.shift());
    fruit.unshift('Mango');
    console.log('Add primer elemento:'+fruit.shift().yellow);
    fruit[2]='Lechoza';//Reemplazo del valor en el índice 2
    console.table(fruit);
    //console.log(fruit.length-1);
    console.table(fruta);
    console.log('Resultado con at es '+fruit.at(-1)+',Resultado con length-1 es '+fruit[fruit.length-1]);
    console.log('Tamaño del vector frutas:'+fruta.length);
    console.log('Tamaño del vector fruit:'+fruit.length);
    console.log('Matrix size:'+matrix.length);


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
    for(i=0; i<= fruit.length-1;i++)
    {
        console.log(fruit[i]);
    }
    console.log('Extrae el último elemento:'+fruit.pop());//.pop() extrae el último elemento del vector
    fruit.push('Guanabana');//es igual a fruits[fruits.length] = ...., .push() agrega un elemento al final del vector
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