// Crea un objeto con las siguientes propiedades: name, surname, age.
// Utilizando los métodos writeFile y readFile, guarda el objeto en un archivo con extensión .json y lee el objeto e imprimelo por consola.
// Todo ello en una única ejecución de JavaScript. Al hacer cada intento, borra el json anterior antes de ejecutar el archivo de nuevo.


var fs = require('fs');

let newObject = {
    name: 'Pepe',
    surname: 'Garcia',
    age: 31
}

var JSONstring = JSON.stringify(newObject);

fs.writeFile("nuevo2.json", JSONstring, function (err) {
    if (err) {
        console.log(err);
    }else {
        console.log("Archivo creado correctamente")
    }
});

const route = 'nuevo2.json';

fs.readFile(route, 'utf8', (err, data) => {
    if(err){
        console.log("Error al leer el archivo");
    } else{
        const JSONstring = JSON.parse(data);
        console.log("Objeto leido correctamente", JSONstring)
    }
})