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

}