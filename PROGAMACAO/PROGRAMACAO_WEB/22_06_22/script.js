const filmes = [];

function salvarFilme(event){
    event.preventDefault();
    console.log('salvar filme');

    let titulo = document.querySelector('#titulo').value;
    let link = document.querySelector('#link').value;

    let filme = {
        titulo: titulo,
        link: link
    }
    filmes.push(filme);

    console.log(filmes);
    exibirFilmes();

    document.querySelector('#titulo')
}


function exibirFilmes(){
    let template = '';
    for (let i = 0; i < filmes.length; i++){
        template = template + `<div class="filme">`;
        template = template + `<p>${filmes[i].titulo}</p>`;
        template = template + `<img src="${filmes[i].link}"></img>`;
        template = template + '</div>'
    }
    document.querySelector('#listaDeFilmes').innerHTML = template;
}