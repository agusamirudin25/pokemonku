import $ from "jquery";
import Swal from 'sweetalert2';
const main = () => {
    const pokemonList = document.querySelector("#pokemon-list");

    let pokemons = [];
    let hppokemon = [];


    const loadPokemon = () => {
        let htmlPokemon = ''
        $.get("https://pokeapi.co/api/v2/pokemon/", (data) => {
            pokemons = data.results

            pokemons.forEach(pokemon => {
                htmlPokemon += `
                    <div class="col-sm-3 mb-3">
                        <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">${pokemon.name}</h5>
                            <p class="card-text">Klik Detail untuk melihat rincian nya.</p>
                            <button type="button" class="btn btn-primary" onclick="alert('${pokemon.url}')" >Detail</button>
                        </div>
                        </div>
                    </div>`

                $('#pokemon-list').html(htmlPokemon)
                hppokemon.push(pokemon)
            })

        });
    }

    // Pencarian
    cari.addEventListener('click', (e) => {
        const searchString = searchBar.value

        const filterPokemon = hppokemon.filter((pokemon) => {
            return (
                pokemon.name.toLowerCase().includes(searchString) || pokemon.url.toLowerCase().includes(searchString)
            );
        });
        displayPokemon(filterPokemon);
    });

    const displayPokemon = (pokemons) => {
        const htmlString = pokemons
            .map((pokemon) => {
                return `
                <div class="col-sm-3 mb-3">
                <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${pokemon.name}</h5>
                    <p class="card-text">Klik Detail untuk melihat rincian nya.</p>
                    <a href="#" class="btn btn-primary">Detail</a>
                </div>
                </div>
                </div>`
            })
            .join('');
        if (htmlString == null) {
            alert('Pokemon tidak ditemukan :)')
        } else {
            $('#pokemon-list').html(htmlString)
        }
    };

    loadPokemon();
};
export default main;