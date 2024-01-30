// Teniendo en cuenta el reto anterior, en vez de rellenar a mano las propiedades del objeto, utiliza el módulo readline de node y solicita los valores del name, surname y age a través de la consola.
// Con estos tres valores, genera un objeto, guárdalo en un fichero json y léelo utilizando el método readline.
// Este ejercicio debe hacerse en una única ejecución de JavaScript

var readline = require('readline');
var fs = require('fs');

var rl = readline.createInterface(process.stdin, process.stdout);

rl.question('What is your name?', (name) => {
    rl.question('What is your surname?', (surname) =>{
        rl.question('What is your age?', (age) => {
            let newPerson = {name, surname, age};
            fs.writeFile('newTest.json', JSON.stringify(newPerson), () => {
                console.log("El archivo se ha creado correctamente")
                fs.readFile('newTest.json', 'utf-8', (error, res) => {
                    if(error){
                        console.log(error);
                    } else {
                        console.log(JSON.parse(res));
                    }
                })
            });
        })
    })
})



