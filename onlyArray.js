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
    let xPais = 'Venezuela';
    let fruit = ['Cambur','Manzana','Naranja','Pera'];
    let fruta =['Fruta',{name:'Apple',pais:'Canada',cod:'02173'},'Empresa',{name:'Cada',pais:xPais,cod:'+58'}];
    let vector =['Neo','Trinitry','Morfeo','Agnt Smith','Nabuconodosor','Mause','Cerrajero','Oraculo','KARE'];
    let matrix =[[1,2,3],[4,5,6],[7,8,9]];
    let sizeVector = [];//vector vacio que contendrá el tamaño de los arreglos.
    let i,op;

try
{
    console.clear();//Limpia el terminal.
    showFruit();
    showFruta();
    showMatriz();
    xVector();
    showSizeArray();//Mustra el tamaño de los arrglos definidos en la declaración de variables.
    //forOf();
    //forIn();


}catch(err){
        console.log('Sorry!'.bold.red);
        console.error('Ha ocurrido un error!'+err.name);
        console.info(err.message);
    }finally{console.info('Fin del programa!'.cyan);}

function showFruit()
{
    //Loop para ver el contenido de fuit[]
    //for(i=0; i<= fruit.length-1;i++)
    //{
      //  console.log('\t['+i+']['+fruit[i]+']');
    //}
    console.log("Tabla Inicial");
    console.table(fruit);
    console.log('-Último elemento de la tabla inicial: '+fruit.pop().yellow);//.pop() extrae el último elemento del vector
    console.log('----------------------------------------------------'.rainbow)
    console.log("Tabla O1");
    fruit.push('Guanabana');//es igual a fruits[fruits.length] = ...., .push() agrega un elemento al final del vector
    console.table(fruit);
    console.log('-Último elemento agregado a la tabla inicial: '+fruit.pop().yellow);//Muestra el último elemento de la pila
    console.log('-Primer elemento de la tabla inicial:'+fruit.shift().yellow);//Muestra el primer elemento de la pila
    console.log('----------------------------------------------------'.rainbow)
    console.log("Tabla O2");
    fruit.unshift('Mango');//Agrega un elemento al principio de la pila
    console.table(fruit);
    console.log('-Primer elemento agregado a la tabla inicial:'+fruit.shift().yellow);
    console.log('----------------------------------------------------'.rainbow)
    console.log("Tabla 03");
    fruit[1]='Lechoza';//Reemplazo de valor en el índice 1
    fruit[2]='Coco';//Reemplazo de valor en el índice 1
    console.table(fruit);//Muestra el contenido del vector.
    console.log('Observación'.cyan.underline+': Elemento en índice 1: '+fruit[1].yellow+', elemnto en índice 2: '+fruit[2].yellow+',Tamaño del vector:'+fruit.length);
}

function showFruta()
{
    console.log('-----------------------[VECTOR FRUTAS]-----------------------------'.rainbow)
    console.table(fruta);
    console.log('Resultado con at es '+fruit.at(-1)+',Resultado con length-1 es '+fruit[fruit.length-1]);
    console.log('Tamaño del vector frutas:'+fruta.length);
    console.log('Tamaño del vector fruit:'+fruit.length);
}

function xVector()
{
    console.log('-----------------------[VECTOR PELICULA MATRIX]-----------------------------'.rainbow)
    console.table(vector);
    vector.splice(2,0,'Asdrubal');//Add elemento al vector 'vector.splice(posicion,elemento a borrar,valor a agregar)'
    console.table(vector);
    vector.splice(8,1);//borra un elemento a partir del índice 8
    console.table(vector); 
}

function showSizeArray()
{
    console.log('-----------------------[TAMAÑO DE LOS VECTORES]-----------------------------'.rainbow)
    sizeVector.push(`${fruit.length}`);
    sizeVector.push(`${fruta.length}`);
    sizeVector.push(`${vector.length}`);
    console.log('Tabla tamaño vectores'.yellow.bold);
    console.table(sizeVector);
}


function showMatriz()
{
    console.log('-----------------------[MATRIZ]-----------------------------'.rainbow)
    //Loop para imprimir el contenido de la matriz
    for(i=0; i<=matrix.length-1;i++)
    {  
        for(j=0; j<=matrix.length-1;j++)
        {
            //console.log(matrix[i][j]);
            console.log(i+':'+matrix[i][j]);
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