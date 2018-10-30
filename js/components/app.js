import pokemonApi from '../pokemon-api.js';
import pokemonsTable from './pokemon-table.js';
import pokemonsFilter from './pokemon-filter.js';

const pokemons = pokemonApi.getAll();

pokemonsTable.init(pokemons);

pokemonsFilter.init(function(nameFilter) {
    let filtered;

    if(nameFilter) {
        nameFilter = nameFilter.toLowerCase();
    
        filtered = pokemons.filter(function(pokemon) {
            const hasName = !nameFilter
            || pokemon.pokemon.toLowerCase().includes(nameFilter);

            return hasName;
        });
    } else {
        filtered = pokemons;
    }
// will only show filtered pokemon
    pokemonsTable.update(filtered);
});
