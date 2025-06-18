function alterarStatus(numeroJogo){
    let jogoClicado = document.getElementById(`game-${numeroJogo}`);
    let imagem = jogoClicado.querySelector('.dashboard__item__img');
    let botao = jogoClicado.querySelector('.dashboard__item__button');
    let nomeJogo = jogoClicado.querySelector('.dashboard__item__name');
    
    if (imagem.classList.contains('dashboard__item__img--rented')){
        // Está alugado - quero Devolver
        if(confirm(`Você tem certeza que deseja devolver o jogo ${nomeJogo.textContent} ?`)){

        imagem.classList.remove('dashboard__item__img--rented');
        botao.textContent = 'Alugar';
        botao.classList.remove('dashboard__item__button--return');

        }
    
    } else {
        // Está disponível - Quero Alugar
        imagem.classList.add('dashboard__item__img--rented');
        botao.textContent = 'Devolver';
        botao.classList.add('dashboard__item__button--return'); 

    }
    contarJogosAlugados();

}

function contarJogosAlugados() {
    let contador = 0; // começa com zero jogos alugados

    // percorre os 3 jogos: 1, 2 e 3
    for (let i = 1; i <= 3; i++) {
        // pega o jogo atual pelo ID
        let jogo = document.getElementById(`game-${i}`);

        // pega a div da imagem
        let imagem = jogo.querySelector('.dashboard__item__img');

        // se a imagem tiver a classe de "alugado", soma 1 no contador
        if (imagem.classList.contains('dashboard__item__img--rented')) {
            contador++;
        }
    }

    // Exibe o resultado no console
    if (contador === 0) {
        console.log("Nenhum jogo alugado.");
    } else if (contador === 1) {
        console.log("Você alugou 1 jogo.");
    } else {
        console.log(`Você alugou ${contador} jogos.`);
    }
}
