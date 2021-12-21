componentePokemon = function (pokemon) {

    divPokemonInterna = document.createElement('div')
    divPokemonInterna.classList.add('row', 'fundo-apagado', 'p-3')
    divPokemonInterna.appendChild(
        componenteDadosGerais(pokemon.id, pokemon.nome, pokemon.tipos))
    divPokemonInterna.appendChild(componenteImagem(pokemon.imagemURL))

    divPokemonExterna = document.createElement('div')
    divPokemonExterna.classList.add('col','mx-4','shadow', 'arredondado', pokemon.tipos[0], 'apagado', 'mb-4')
    divPokemonExterna.setAttribute('id', pokemon.id)
    divPokemonExterna.setAttribute('data-pokemon-nome', pokemon.nome)
    divPokemonExterna.appendChild(divPokemonInterna)
    divPokemonExterna.setAttribute('data-pokemon-id', pokemon.id)
    divPokemonExterna.setAttribute('style', 'min-width: 672px')


    return divPokemonExterna

}

componenteId = function (id) {
    compId = document.createElement('div')
    compId.classList.add('col', 'd-flex', 'align-items-center', 'fs-3', 'text-white', )
    compId.innerText = `# ${id}`
    return compId
}

componenteNome = function (nome) {
    compNome = document.createElement('div')
    compNome.classList.add(
        'col', 'escuro', 'fs-1', 'fonte-grande', 'text-poke', `text-${pokemon.tipos[0]}`)
    compNome.innerText = `${nome[0].toUpperCase() + nome.substring(1)}`
    return compNome
}

componenteStats = function (nome) {
    //pokemon.stats

    // espaco = document.createElement('div')
    // espaco.classList.add('col')
    // espaco2 = document.createElement('div')
    // espaco2.classList.add('row','h-100','d-flex','flex-column','align-items-center')

    // stats = pegaStatsPokemon(pokemon.nome)

    // statsValores = ['hp', 'ataque', 'defesa', 'ataqueEspecial', 'defesaEspecial', 'velocidade']

    // for (i=0; i<6; i++){
    //     espaco3 = document.createElement('div')
    //     espaco3.classList.add('col','d-flex','align-items-end','fs-5')
    //     span = document.createElement('span')
    //     span.classList.add('text-fire','text-poke','ms-2')
    //     span.innerText = stats[i]
    //     p = document.createElement('p')
    //     p.classList.add('escuro','text-light','d-inline')
    //     p.innerText = statsValores[i]+span
    //     p.appendChild(span)
    //     espaco3.appendChild(p)
    //     espaco2.appendChild(espaco3)
    // }


    // espaco.appendChild(espaco2)
    // divSecundaria.appendChild(espaco)

    // <div class="col">Espaço
    //     <div class="row h-100 d-flex flex-column align-items-center"> Espaço 2
    //         <div class="col d-flex align-items-end fs-5"> Espaço3
    //             <p class="escuro text-light d-inline">HP<span class="text-fire text-poke ms-2">46</span></p>
    //         </div>
    //         <div class="col d-flex align-items-end fs-5">
    //             <p class="escuro text-light d-inline">Ataque<span class="text-fire text-poke ms-2">46</span></p>
    //         </div>
    //         <div class="col d-flex align-items-end fs-5">
    //             <p class="escuro text-light d-inline">Defesa<span class="text-fire text-poke ms-2">46</span></p>
    //         </div>
    //         <div class="col d-flex align-items-end fs-5">
    //             <p class="escuro text-light d-inline">Ataque Especial<span class="text-fire text-poke ms-2">46</span></p>
    //         </div>
    //         <div class="col d-flex align-items-end fs-5">
    //             <p class="escuro text-light d-inline">Defesa Especial<span class="text-fire text-poke ms-2">46</span></p>
    //         </div>
    //         <div class="col d-flex align-items-end fs-5">
    //             <p class="escuro text-light d-inline">Velocidade<span class="text-fire text-poke ms-2">46</span></p>
    //         </div>
    //     </div>
    // </div>
}

componenteDadosGerais = function (id, nome, tipos) {
    divDadosGerais = document.createElement('div')
    divDadosGerais.classList.add('row', 'h-100', 'd-flex', 'flex-column', 'align-items-center')
    divDadosGerais.appendChild(componenteId(id))
    divDadosGerais.appendChild(componenteNome(nome))
    divDadosGerais.appendChild(componenteTipos(tipos))

    /* div com o único intuito de organizar a aparência 
    sem ela os elementos ficam quebrados (p causa do BootStrap) */
    divColunaAparenciaBootstrap = document.createElement('div')
    divColunaAparenciaBootstrap.classList.add('col')
    divColunaAparenciaBootstrap.appendChild(divDadosGerais)

    return divColunaAparenciaBootstrap
}

componenteTipos = function (tipos) {
    compTipos = document.createElement('div')
    compTipos.classList.add('col', 'd-flex', 'align-items-center')

    linha = document.createElement('div')
    linha.classList.add('row', 'd-flex', 'flex-row', 'flex-nowrap', 'p-0', 'm-0')

    tipos.forEach(tipo => {

        imgTipo = document.createElement('img')
        imgTipo.classList.add('img-tipo')
        imgTipo.src = "img/tipos/" + "Pokémon_" + tipo[0].toUpperCase() + tipo.substring(1) + "_Type_Icon.svg"

        divTipo = document.createElement('div')
        divTipo.classList.add('col', 'tipo', tipo, 'fundo-apagado-leve', 'd-flex', 'd-flex-row', 'me-3', 'align-items-center')

        spanTipo = document.createElement('span')
        spanTipo.classList.add('col', 'text-light', 'fs-5')
        spanTipo.innerText = dicionario_de_tipos[tipo]

        divTipo.appendChild(imgTipo)
        divTipo.appendChild(spanTipo)

        linha.appendChild(divTipo)
    });

    compTipos.appendChild(linha)

    return compTipos
}

componenteImagem = function (urlImagem) {

    divImg = document.createElement('div')
    divImg.classList.add('col', 'd-flex', 'justify-content-end')

    imgPokemon = document.createElement('img')
    imgPokemon.classList.add('img-pokemon', )
    imgPokemon.classList.add('mx-auto','d-block')
    imgPokemon.src = urlImagem
    imgPokemon.setAttribute('width', '200px')

    imgFundo = document.createElement('img')
    imgFundo.src = "img/fundoPokemon.svg"
    imgFundo.classList.add('img-fundo')

    divImg.appendChild(imgPokemon)
    divImg.appendChild(imgFundo)

    return divImg
}