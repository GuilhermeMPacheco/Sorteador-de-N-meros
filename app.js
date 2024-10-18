function sortear() {
    let resposta = document.getElementById('resultado');
    
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate =  parseInt(document.getElementById('ate').value);
    
    let qtdNumero = 0;
    let numero = [];
    let respostaQtd = quantidade > 1 ? "Números Sorteados:" : "Número Sorteado:";
    
    while (quantidade != qtdNumero) {
        qtdNumero++
        numero.push(` ${gerarNumeroAleatorio(de, ate)}`);
    }
    
    resposta.innerHTML = respostaQtd + numero;
}

function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
