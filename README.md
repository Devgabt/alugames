# AluGames

O **AluGames** é um projeto de gerenciamento de aluguel de boardgames. O site permite visualizar jogos disponíveis para aluguel e gerenciar o status de cada jogo, alternando entre "Alugar" e "Devolver".

## Descrição

O site possui:
- Uma página principal com uma lista de jogos de tabuleiro disponíveis para aluguel.
- Funcionalidade para alterar o status dos jogos entre disponível e alugado.

## Estrutura do Projeto

O projeto é organizado da seguinte forma:
- **`index.html`**: Arquivo HTML principal.
- **`css/main.css`**: Arquivo CSS para estilização do site.
- **`js/app.js`**: Arquivo JavaScript para manipulação dos estados dos jogos.

## Funcionamento

A página exibe uma lista de jogos com um botão para alugar ou devolver. O JavaScript gerencia o estado do botão e da imagem do jogo quando o botão é clicado.

### Funções JavaScript

A função `alterarStatus(gameId)`:
- Alterna o status do jogo entre "Alugar" e "Devolver".
- Atualiza a classe do botão e a aparência do item de jogo.

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript

## Como Executar

1. Clone este repositório:
    ```bash
    git clone https://github.com/Devgabt/alugames.git
    ```
2. Navegue até o diretório do projeto:
    ```bash
    cd <DIRETORIO_DO_PROJETO>
    ```
3. Abra o arquivo `index.html` em um navegador web para visualizar o site.
