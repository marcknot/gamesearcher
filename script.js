function pesquisar() {
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value
    console.log(campoPesquisa)

    // se campo pesquisa for vazio, nao deve mostrar nada
    if (campoPesquisa == "") {
        section.innerHTML = "<p>Campo de Pesquisa Vazio. Digite o Nome de um Jogo!</p>"
        return
    }
    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
    // Itera sobre cada dado na array de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            //Cria um novo elemento
            resultados += `
            <div class="item-resultado">
                <h2> 
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Saiba Mais</a>
            </div>
        `;}
    }
    if(!resultados) {
        resultados = "<p> Jogo Fora da Base de Dados. Tente Outro Jogo!</p>"
    }
    // Atribui o HTML gerado à propriedade innerHTML da seção
    section.innerHTML = resultados;
}