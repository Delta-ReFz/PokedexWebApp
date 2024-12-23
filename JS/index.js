const pokemons = [
    {
        image: "https://img.pokemondb.net/artwork/avif/bulbasaur.avif",
        name: "Bulbasaur",
        Type1: "Grass",
        Type2: "Poison",
        Generation: 1,
        link: "pokemon.html?no=1"
    },
    {
        image: "https://img.pokemondb.net/artwork/avif/ivysaur.avif",
        name: "Ivysaur",
        Type1: "Grass",
        Type2: "Poison",
        Generation: 1,
        link: "pokemon.html?no=2"
    },
    {
        image: "https://img.pokemondb.net/artwork/avif/venusaur.avif",
        name: "Venusaur",
        Type1: "Grass",
        Type2: "Poison",
        Generation: 1,
        link: "pokemon.html?no=3"
    },
    {
        image: "https://img.pokemondb.net/artwork/avif/charmander.avif",
        name: "Charmander",
        Type1: "Fire",
        Type2: "",
        Generation: 1,
        link: "pokemon.html?no=4"
    },
    {
        image: "https://img.pokemondb.net/artwork/avif/charmeleon.avif",
        name: "Charmeleon",
        Type1: "Fire",
        Type2: "",
        Generation: 1,
        link: "pokemon.html?no=5"
    },
    {
        image: "https://img.pokemondb.net/artwork/avif/charizard.avif",
        name: "Charizard",
        Type1: "Fire",
        Type2: "Flying",
        Generation: 1,
        link: "pokemon.html?no=6"
    },
    {
        image: "https://img.pokemondb.net/artwork/avif/squirtle.avif",
        name: "Squirtle",
        Type1: "Water",
        Type2: "",
        Generation: 1,
        link: "pokemon.html?no=7"
    },
    {
        image: "https://img.pokemondb.net/artwork/avif/wartortle.avif",
        name: "Wartortle",
        Type1: "Water",
        Type2: "",
        Generation: 1,
        link: "pokemon.html?no=8"
    },
    {
        image: "https://img.pokemondb.net/artwork/avif/blastoise.avif",
        name: "Blastoise",
        Type1: "Water",
        Type2: "",
        Generation: 1,
        link: "pokemon.html?no=9"
    },
    {
        image: "https://img.pokemondb.net/artwork/avif/caterpie.avif",
        name: "Caterpie",
        Type1: "Bug",
        Type2: "",
        Generation: 1,
        link: "pokemon.html?no=10"
    }
];

let productsHTML = '';

pokemons.forEach((pokemon) => {
    productsHTML += `
                <li class="pokemon-card">
                    <img class="pokemon-picture" src="${pokemon.image}"
                        alt="Image de Bulbasaur">
                    <a class="pokemon-link" href="${pokemon.link}">${pokemon.name}</a>
                    <p class="pokemon-type">Types: ${pokemon.Type1} ${pokemon.Type2}</p>
                    <p class="pokemon-generation">Generation: ${pokemon.Generation}</p>
                </li>
            `;
});

document.querySelector('.pokemon-list').innerHTML = productsHTML;



