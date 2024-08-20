function alterarStatus(gameId) {
    // Seleciona o item de jogo pelo ID passado
    let gameItem = document.getElementById(`game-${gameId}`);
    
    // Seleciona o botão e a imagem dentro do item de jogo
    let botao = gameItem.querySelector('.dashboard__item__button');
    let img = gameItem.querySelector('.dashboard__item__img');
    
    // Verifica se o botão já está na classe de "devolver"
    if (botao.classList.contains('dashboard__item__button--return')) {
        // Remove a classe de "devolver" e a classe de "alugado"
        botao.classList.remove('dashboard__item__button--return');
        img.classList.remove('dashboard__item__img--rented');
        botao.innerHTML = 'Alugar';
    } else {
        // Adiciona a classe de "devolver" e a classe de "alugado"
        botao.classList.add('dashboard__item__button--return');
        img.classList.add('dashboard__item__img--rented');
        botao.innerHTML = 'Devolver';
    }
}
