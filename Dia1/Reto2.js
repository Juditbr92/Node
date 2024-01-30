// Crea un objeto con las siguientes propiedades: name, surname, age.
// Utilizando los métodos writeFile y readFile, guarda el objeto en un archivo con extensión .json y lee el objeto e imprimelo por consola.
// Todo ello en una única ejecución de JavaScript. Al hacer cada intento, borra el json anterior antes de ejecutar el archivo de nuevo.


var fs = require('fs');

let newObject = {
    name: 'Judit',
    surname: 'Bardón',
    age: 31
}

fs.writeFile('test.json', JSON.stringify(newObject), () => {
    console.log("El archivo se ha creado correctamente")
    fs.readFile('test.json', 'utf-8', (error, res) => {
        if(error){
            console.log(error);
        } else {
            console.log(JSON.parse(res));
        }
    })
});


