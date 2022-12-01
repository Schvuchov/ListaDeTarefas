const listaTarefas = document.querySelector('#listaTarefas'); //id da ul
const caixaTexto = document.querySelector('#caixaDeTexto'); //id do input
const botaoAdicionar = document.querySelector('#botaoAdicionar'); //id do button

botaoAdicionar.addEventListener('click', function(){
    const textoDaTarefa = caixaTexto.value; //pega o valor colocado no input
    caixaTexto.value = '';

    listaTarefas.appendChild();
});

function adicionaTarefa(textoDaTarefa) {
    
}
