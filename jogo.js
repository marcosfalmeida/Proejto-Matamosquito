let largura = 0
let altura = 0
let vidas = 1
let tempo = 15

let criaMosquitoTempo = 1500

//Altera o grau de dificuldade
let nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'normal') {
    //1500
    criaMosquitoTempo = 1500

} else if(nivel === 'dificil') {
    //1000
    criaMosquitoTempo = 1000

} else if(nivel === 'chucknorris') {
    //750
    criaMosquitoTempo = 750
}

function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight
    largura = window.innerWidth

    console.log(largura, altura)
}

ajustaTamanhoPalcoJogo()

//Cronometro
let cronometro = setInterval(function() {
    
    tempo -= 1

    if( tempo < 0) {
        clearInterval(cronometro)
        clearTimeout(criaMosquito)
        window.location.href = 'vitoria.html'
    } else {
        document.getElementById('cronometro').innerHTML = tempo
    }
    
}, 1000)

//Posição do elemento mosquito de forma aleatória na tela
function posicaoRandomica() {

    //Remove o elemento mosquito anterior (caso exista)
    if(document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()

        //Diminui a vida caso o jogador não clique sobre o elemento
        //mosquito a tempo      
        if(vidas > 3) {
           
            window.location.href = 'fim_de_jogo.html'
        } else {
        console.log('elemento selecionado foi: v' + vidas)
        document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"
        
        vidas++
        }
    }

    //Comportamento do elemento mosquito na tela
    let posicaoX = Math.floor(Math.random() * largura) - 90
    let posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)

    //Cria o elemento mosquito html
    let mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosquito.png'
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function() {
        this.remove()
    }

    document.body.appendChild(mosquito)
    
    console.log(ladoAleatorio())
}

//Altera o tamanho do elemento mosquito a cada ciclo
function tamanhoAleatorio () {
    let classe = Math.floor(Math.random() * 3)

    switch(classe) {
        case 0:
            return 'mosquito1'

        case 1:
            return 'mosquito2'

        case 2:
            return 'mosquito3'
    }
}

//Altera o ponto de vista do mosquito em relação a tela
function ladoAleatorio () {
    let classe = Math.floor(Math.random() * 2)

    switch(classe) {
        case 0:
            return 'LadoA'

        case 1:
            return 'LadoB'
    }
}