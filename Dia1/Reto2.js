// Crea un objeto con las siguientes propiedades: name, surname, age.
// Utilizando los métodos writeFile y readFile, guarda el objeto en un archivo con extensión .json y lee el objeto e imprimelo por consola.
// Todo ello en una única ejecución de JavaScript. Al hacer cada intento, borra el json anterior antes de ejecutar el archivo de nuevo.


var fs = require('fs');

let newObject = {
    name: 'Judit',
    surname: 'Bardón',
    age: '31'
}

var JSONstring = JSON.stringify(newObject);

fs.writeFile("/nuevo.json", JSONstring, function(err){
    if(err){
        console.log(err);
    }
    console.log("El archivo fue creado correctamente")
});