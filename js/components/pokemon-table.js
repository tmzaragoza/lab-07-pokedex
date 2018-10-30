import html from '../html.js';


const tableBody = document.getElementById('pokemon-body');



function rowTemplater(pokemon) {
    return html`<tr>
        <td><img src="../assets/pokemon/${pokemon.id}.png"/></td>
        <td>${pokemon.pokemon}</td>
        <td>${pokemon.type_1}</td>
        <td>${pokemon.type_2}</td>
        <td>${pokemon.defense}</td>
        <td>${pokemon.attack}</td>
        <td>${pokemon.hp}</td>

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