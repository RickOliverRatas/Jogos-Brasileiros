function pesquisar() {
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
  
    // Obtém o valor digitado pelo usuário no campo de pesquisa e converte para minúsculas
    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();
  
    // Verifica se o usuário digitou algum termo de pesquisa. Se não, exibe uma mensagem de erro
    if (!campoPesquisa) {
      section.innerHTML = "<p>Nenhum jogo encontrado. Voce precisa digitar o nome do jogo</p>";
      return; // Interrompe a função se não houver termo de pesquisa
    }
  
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
  
    // Itera sobre cada jogo nos dados
    for (let dado of dados) {
      // Converte o título, descrição e tags do jogo para minúsculas para facilitar a comparação
      let titulo = dado.titulo.toLowerCase();
      let descricao = dado.descricao.toLowerCase();
      let tags = dado.tags.toLowerCase();
  
      // Verifica se o termo de pesquisa está presente no título, descrição ou tags do jogo
      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        // Se o jogo corresponder à pesquisa, adiciona uma nova div com os detalhes do jogo à string de resultados
        resultados += `<div class="item-resultado">
          <h2><a href="#" target="_blank">${dado.titulo}</a></h2>
          <P class="descricao-meta">${dado.descricao} </P>
          <a href="${dado.link}" target="_blank">Mais informações</a>
        </div>`;
      }
    }
  
    // Verifica se algum jogo foi encontrado. Se não, exibe uma mensagem de que nenhum jogo foi encontrado
    if (!resultados) {
      resultados = "<p>Nenhum jogo encontrado</p>";
    }
  
    // Atualiza o conteúdo da seção de resultados com a string de resultados gerada
    section.innerHTML = resultados;
  }







