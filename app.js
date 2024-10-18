function sortear() {   
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate =  parseInt(document.getElementById('ate').value);
    let resposta = document.getElementById('resultado');
    let sorteados = [];
    let respostaQtd = quantidade > 1 ? "Números Sorteados:" : "Número Sorteado:";
    
    for (let i = 0; i < quantidade; i++) {
        let numero = ` ${gerarNumeroAleatorio(de, ate)}`;
        while(sorteados.includes(numero)) {
            numero = ` ${gerarNumeroAleatorio(de, ate)}`;
        }
        sorteados.push(numero);
    }

    resposta.innerHTML = `<label class="texto__paragrafo">${respostaQtd}${sorteados}</label>`;
    alterarStatusBotao('btn-reiniciar', true);
}

function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao(id, ativar) {
    let botao = document.getElementById(id);
    if(ativar == true) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.add('container__botao-desabilitado');
        botao.classList.remove('container__botao');
    }
}

function reiniciar() {
    quantidade = document.getElementById('quantidade').value = '';
    de = document.getElementById('de').value = '';
    ate =  document.getElementById('ate').value = '';
    resposta = document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusBotao('btn-reiniciar', false);
}