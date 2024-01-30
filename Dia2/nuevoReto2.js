var fs = require("fs/promises");

let newObject = {
    name: "Judit",
    surname: "Bardón",
    age: 31,
};

// con asyncAwait
async function asyincAwait() {
    await fs.writeFile("newTest.json", JSON.stringify(newObject));
    const readObject = await fs.readFile("newTest.json", "utf-8");
    console.log(readObject);
}

asyincAwait();

// con then/catc
let object2 = {
    name: "Maria",
    surname: "Hernandez",
    age: 34,
};

fs.writeFile("object2.json", JSON.stringify(object2))
    .then(() => {
        return fs.readFile("object2.json", "utf-8");
    })
    .then((response) => console.log(response))
    .catch((error) => {
        console.log(error);
    });
