document.getElementById("buscar").addEventListener("click", () => {
    findPokemon();
});

async function findPokemon() {
    try {
        const pokemon_name = document.getElementById("name").value;

        let url = "https://pokeapi.co/api/v2/pokemon";

        if (pokemon_name !== "") {
            url += `/${pokemon_name}`;
        } else {
            console.log("Debes ingresar un nombre de Pokemon");
            return;
        }

        const params = {
            headers: { "Content-type": "application/json" },
            method: "GET",
        };

        const data = await fetch(url, params);
        const result = await data.json();

        console.log(result);

        document.getElementById("nameAnswer").innerHTML = result.name;
        document.getElementById("img").src = result.sprites.front_default;
        const abilities = result.abilities;
        document.getElementById("abilities").innerHTML = abilities.map(ability => ability.ability.name);
    }
    
    catch (error) {
        console.log(error)
    }
}

