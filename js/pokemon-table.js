import html from './html.js';


const tableBody = document.getElementById('pokemon-body');



function rowTemplater(pokemon) {
    return html`<tr>
        <img src = "../assets/pokemon/${pokemon.id}.png"/>
        <td>${pokemon.pokemon}</td>
        <td>${pokemon.type1}</td>
        <td>${pokemon.type2}</td>
        <td>${pokemon.defense}</td>
        <td>${pokemon.attack}</td>
    </tr>`;
}

const pokemonsTable = {
    init(pokemons) {
        pokemons.forEach(function(pokemon) {
            const tr = rowTemplater(pokemon);
            tableBody.appendChild(tr);
        });
    }
};

export default pokemonsTable;