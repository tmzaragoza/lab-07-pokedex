import html from '../html.js';

const tableBody = document.getElementById('pokemon-body');

export default pokemonTable;

function rowTemplate(pokemon) {
    return html` <tr>
    <td>${pokemon.pokemon}</td>
    <td>${pokemon.type1}</td>
    <td>${pokemon.type2}</td>
    <td>${pokemon.defense}</td>
    <td>${pokemon.attack}</td>
</tr>`;
}
