const color = require('colors');
const usuario = require('./pracJson.json');
const fs = require('fs');
const date = new Date();
const os = require('os');

try{
    console.clear();
    console.log('Usuario:'+usuario.nombre.yellow+', contacto '+usuario.telefono.yellow+',Hobbies:'+usuario.hobbies[1].yellow+', casado:'+usuario.casado);
    console.log('Estudios:'+usuario.estudios);
    console.log('------------------------------------[FORMATO DE OBJETO JSON]'.america);
    console.log(JSON.stringify(usuario));
    //console.log('------------------------------------[FORMATO DE OBJETO JAVASCRIPT]'.rainbow);
    //console.log(JSON.parse(usuario));

    reg = fs.createWriteStream('regJson.txt',{'flags':'a'});
    reg.write(usuario.nombre+'|'+usuario.telefono+'|'+usuario.casado+'|'+usuario.hobbies+'|'+date+'|'+os.type+'\n');
    
    let output = '';
    
    for(let i=0; i<=usuario.length; i++)
    {
        output = output + `<li>${usuario[i].name}</li>`;
    }

    document.getElementById('regUsuario').innerHTML =output;
}catch(err)
    {
        console.log('Ha ocurrido un error!'.red.bold);
        console.error(err.name);
        console.info(err.info);
    }