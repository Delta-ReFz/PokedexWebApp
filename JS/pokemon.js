const pokmemonInfo = [
    {
        image: "https://img.pokemondb.net/artwork/avif/pikachu.avif",
        name: "Pikachu",
        type1: "Electric",
        type2:"",
        generation: 1,
        height: "0.4 m",
        weight: "6.0 kg",
    }
]

let pokemonHTML = '';

pokmemonInfo.forEach((pokemon) => {

    const {image, name, type1, type2, generation, height, weight} = pokemon;

    pokemonHTML += `
      <img class="pokemon-picture" src="${image}"
                alt="Picture of pikachu">

            <h2 class="pokemon-name">${name}</h2>

            <div class="card-stats">
                <p><strong>Types:</strong>${type1} ${type2}</p>
                <p><strong>Generation:</strong>${generation}</p>
                <p><strong>Height:</strong>${height}</p>
                <p><strong>Weight: </strong>${weight}</p>
            </div>
    `
})

document.querySelector('.pokemon-card').innerHTML = pokemonHTML



