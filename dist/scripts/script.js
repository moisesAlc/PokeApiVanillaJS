limite = 3;
idAtual = 1;
ultimoIdAdicionadoEmGrupo = 0

lista = document.querySelector('[data-lista-pokemons]')

dicionario_de_tipos = {
    "bug": "Inseto",
    "dark": "Sombrio",
    "dragon": "Dragão",
    "electric": "Elétrico",
    "fairy": "Fada",
    "fighting": "Lutador",
    "fire": "Fogo",
    "flying": "Voador",
    "ghost": "Fantasma",
    "grass": "Planta",
    "ground": "Terra",
    "ice": "Gelo",
    "normal": "Normal",
    "poison": "Venenoso",
    "psychic": "Psíquico",
    "rock": "Pedra",
    "steel": "Metálico",
    "water": "Água",
}

adicionaPokemons = function () {

    /*
    ids = Array.from(Array(limite).keys()).map( (i) => i + idAtual)

    requisicoes = ids.map(id => addElementoPokemon(id));

    Promise.all(requisicoes).then( () => { idAtual = idAtual + limite })
    */

    //for (numero = idAtual; numero <= idAtual + limite - 1; numero++) {
        addElementoPokemon(idAtual) //sem setInverval
    //}

    

}

inicia = function () {
    input = document.querySelector('[data-input]');
    input.addEventListener('input', () => {
        if (input.value.length > 0) input.classList.add('maiusculo')
        else input.classList.remove('maiusculo')
        pokes = document.querySelectorAll('[data-pokemon-nome]')
        pokes.forEach(compPokemon => {
            if (!compPokemon.dataset.pokemonNome.includes(input.value)) {
                compPokemon.classList.add("d-none")
            } else {
                compPokemon.classList.remove("d-none")
            }
        })
    });

    adicionaPokemons()

    busca = document.querySelector('[data-busca-pokemon]')
    busca.addEventListener('click', () => {

        document.querySelectorAll('[data-pokemon-vazio').forEach(vazio => vazio.remove())

        adicionaPokemons()

    });

}

extraiPokemonDeJSON = function (resultadoEmJSON) {
    pokemon = {}

    pokemon.id = resultadoEmJSON.id;
    pokemon.nome = resultadoEmJSON.name;
    pokemon.imagemURL = resultadoEmJSON.sprites.other["official-artwork"].front_default;
    // pokemon.imagemURL = resultadoEmJSON.sprites.other["dream_world"].front_default;
    pokemon.stats = {}
    pokemon.stats.hp = resultadoEmJSON.stats[0].base_stat
    pokemon.stats.ataque = resultadoEmJSON.stats[1].base_stat
    pokemon.stats.defesa = resultadoEmJSON.stats[2].base_stat
    pokemon.stats.ataqueEspecial = resultadoEmJSON.stats[3].base_stat
    pokemon.stats.defesaEspecial = resultadoEmJSON.stats[4].base_stat
    pokemon.stats.velocidade = resultadoEmJSON.stats[5].base_stat


    pokemon.tipos = []
    resultadoEmJSON.types.forEach(
        typeRes => pokemon.tipos.push(typeRes.type.name)
    );

    return pokemon
}

addElementoPokemon = function (id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(resposta => resposta.json())
        .then(respostaEmJSON => {
            pokemon = extraiPokemonDeJSON(respostaEmJSON)
            lista.appendChild(componentePokemon(pokemon))

        }).then(() => {
            if ( idAtual < ultimoIdAdicionadoEmGrupo + limite) {
                console.log(id+ " S");
                addElementoPokemon(idAtual+1)
            }
            else{
                console.log(id+ " N");
                ultimoIdAdicionadoEmGrupo = idAtual
            }
            idAtual++
        })
}

inicia()