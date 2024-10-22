let listaDeNumerosSorteados = [];
let tentativas = 1;
let numeroMaximo = 10;

let numeroSecreto = gerarNumeroAleatorio();
console.log(`o número secreto é ${numeroSecreto}.`)

document.getElementById('chutar').removeAttribute('disabled');

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Bem vindo!');
    exibirTextoNaTela('p', `Chute algum número entre 1 e ${numeroMaximo}!`);
}

exibirMensagemInicial();

function verificarChute(){
    let chute = parseInt(document.querySelector('input').value);

    let maiorMenor = chute > numeroSecreto? 'menor' : 'maior';

    if(chute == numeroSecreto){
        exibirTextoNaTela('h1','Parabéns, você acertou!');
        let pluralTentativa = tentativas > 1? 'tentativas' : 'tentativa';
        let foiForam = tentativas > 1? 'Foram' : 'Foi';
        let mensagemTentativas = `Parabéns, você acertou o número secreto. ${foiForam} apenas ${tentativas} ${pluralTentativa}!`;

        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.getElementById('chutar').setAttribute('disabled', true);
    }

    else if(chute > numeroMaximo){
        exibirTextoNaTela('p', `Tente apenas números entre 1 e ${numeroMaximo}`);
    }

    else if(chute != numeroSecreto){
        exibirTextoNaTela('p', `O número secreto é ${maiorMenor}.`);
    }

    tentativas ++;
    limparCampo();
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroMaximo + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeElementosNaLista == parseInt(numeroMaximo/3)){
        listaDeNumerosSorteados = [];
    }

    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio()
    console.log(`o número secreto é ${numeroSecreto}.`)
    exibirMensagemInicial();
    tentativas = 1;
    limparCampo();
    document.getElementById('chutar').removeAttribute('disabled')
    document.getElementById('reiniciar').setAttribute('disabled', true);
}