const color = require('colors');//Add color
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
let vars,vars2;

  
  try
  {
        readline.question(`¿Cuál es tu nombre? `, (name) => {
            console.log(`Hola ${name}!`)
            readline.question(`¿Cuál es tu edad? `, (age) => {
            console.log(`Tu edad es ${age}.`)
            captura(name,age);
            readline.close()
            })
        })

    }catch(err)
        {
            console.log('Error: '.bold.red+' '+err.name+', '+err.message);
            readline.close();
        }

        function captura(vars,vars2)
        {
            console.log('\nName:'+vars+'\nAge:'+vars2);
        }