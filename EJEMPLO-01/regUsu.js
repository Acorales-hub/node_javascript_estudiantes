//Module area
const color = require('colors');
const rl = require('readline').createInterface({input:process.stdin, output:process.stdout});
const fs = require('fs');
const oS =require('os');
const { throws } = require('assert');
const fecha = new Date();

//Var area:
let input;
let firtsName;
let phoneNumber;
let data;
let data2;

mainInit();

function mainInit(a)
{
  //Registration Users
    try{
        console.clear();
        console.log('\t.::CORALESoftware::.'.bold.yellow.underline);
        console.log('\nUsers Registration'.bold.yellow+' '+fecha);
        
        rl.question("What is your name?:",(firtsName) => { 
        rl.question("What is your phone number?:",(phoneNumber) => {
            
            showData(firtsName,phoneNumber); rl.close();
        })});
        
    }catch(err)
            {
                console.log("\nSorry!".bold.red);
                console.error('Error: '+err.name);
                console.info('!Info Error: '+err.message+'\n');
                rl.close();
            }//finally{console.log('\nEnd')} 
}


        function showData(vars,vars2)
        {
            try
            {
                os = oS.type()
                console.log('User: '.cyan+''+vars+' Phone number:'+vars2);
                registration = fs.createWriteStream('registration.txt',{'flags':'a'});
                registration.write('New Reg: '+vars+'|'+vars2+'|'+fecha+'|'+os+'\n'); 
            }catch(err)
                {
                    console.log("\nSorry!".bold.red);
                    console.error('Error: '+err.name);
                    console.info('!Info Error: '+err.message+'\n');
                }

        }