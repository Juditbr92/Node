const res = require('express/lib/response');
var fs = require('fs/promises');

const readline = require('readline')

function pregunta(pregunta) {
    const question = new Promise((resolve, reject) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question(pregunta, (respuesta) => {
            resolve(respuesta);
            rl.close();
        });
    });
    return question
}

async function asyncAwait() {
    try {
        const respuestaName = await pregunta("What is your name?");
        const respuestaSurname = await pregunta("What is your surname?");
        const respuestaAge = await pregunta("How old are you?");
        let newPerson = { respuestaName, respuestaSurname, respuestaAge };
        await fs.writeFile('newTest2.json', JSON.stringify(newPerson));
        console.log('El archivo se ha creado correctamente');
        let res = await fs.readFile('newTest2.json', 'utf-8');
        console.log(JSON.parse(res))
    }        
    catch (error) {
    console.log(error)
    }
} 

asyncAwait()


