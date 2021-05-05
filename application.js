document.addEventListener('DOMContentLoaded', function () {

    var request = new XMLHttpRequest()
    request.open('GET', 'https://pokeapi.co/api/v2/pokemon/', true)
    request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == 200) {
            console.log(request.responseText);

            var response = JSON.parse(request.responseText),
                pokemonList = document.querySelector('#pokemon-list'),
                name = document.querySelector('.name'),
                aboutPokemon = document.querySelector('#about-pokemon'),
                abilities = document.querySelector('#abilities'),
                type = document.querySelector('#type'),
                moves = document.querySelector('#moves'),
                generations = document.querySelector('#generations'),
                morePokemons = document.querySelector('#more-pokemons')

            name.textContent = response.results.forEach(function (n) {
                pokemonList.insertAdjacentHTML('beforeend', '<p>' + n.name + '</p>' + "<button type='button' class='btn btn-primary pokemon-info' data-bs-toggle='modal' data-bs-target='#pokemonModal' >I'd like to know more about this pokemon!</button>");
            })
            aboutPokemon.textContent = response.results.forEach(function (ap) {
                aboutPokemon.insertAdjacentHTML('beforeend', '<p>' + ap.name + '</p>')
            })
            abilities.textContent = response.abilities.forEach(function (a) {
                abilities.insertAdjacentHTML('beforeend', '<p>' + a.ability.name + '</p>')
            });
            type.textContent = response.types.forEach(function (t) {
                type.insertAdjacentHTML('beforeend', '<p>' + t.type.name + '</p>')
            });
            moves.texContent = response.moves.forEach(function (m) {
                moves.insertAdjacentHTML('beforeend', '<p>' + m.moves.name + '</p>')
            });
            generations.textContent = response.version.forEach(function (g) {
                generations.insertAdjacentHTML('beforeend', '<p>' + g.generations.name + '</p>')
            });
            morePokemons.appendChild("<button>I'd like to see more pokemons!</button>"),
                morePokemons.onclick(function () {
                    window.location = response.next
                });
        }
    }
    request.send();
})