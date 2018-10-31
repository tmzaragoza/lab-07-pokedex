const nameInput = document.getElementById('filter-name');
const type1Input = document.getElementById('filter-type-1');
const type2Input = document.getElementById('filter-type-2');
const attackInput = document.getElementById('filter-attack-min');
// const hpInput = document.getElementById('filter-hp');

const pokemonsFilter = {
    init(onFilter) {
        nameInput.addEventListener('keyup', function() {
            onFilter(nameInput.value, type1Input.value, type2Input.value, attackInput.value);
        });

        type1Input.addEventListener('keyup', function() {
            onFilter(nameInput.value, type1Input.value, type2Input.value, attackInput.value);
        });

        type2Input.addEventListener('keyup', function() {
            onFilter(nameInput.value, type1Input.value, type2Input.value, attackInput.value);
        });

        attackInput.addEventListener('keyup', function() {
            onFilter(nameInput.value, type1Input.value, type2Input.value, attackInput.value);
        });

        // hpInput.addEventListener('keyup', function() {
        //     onFilter(nameInput.value, type1Input.value, type2Input.value, attackInput.value);
        // });
    }
};

export default pokemonsFilter;