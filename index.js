const listaTarefas = document.querySelector('#listaTarefas'); //id da ul
const caixaTexto = document.querySelector('#caixaDeTexto'); //id do input
const botaoAdicionar = document.querySelector('#botaoAdicionar'); //id do button
const listaSuspensa = document.querySelector('#listaSuspensa');

botaoAdicionar.addEventListener('click', function(){
    const textoDaTarefa = caixaTexto.value; //pega o valor colocado no input
    caixaTexto.value = '';

    listaTarefas.appendChild(adicionaTarefa(textoDaTarefa));
    exibeOcultaListaSuspensa();
    caixaTexto.focus(); //após add tarefa, mantem o cursor na caixaTexto para digitar mais
});

function adicionaTarefa(textoDaTarefa) {
    const elementoLI = document.createElement('li'); //cria um li
    const elementoSPAN = document.createElement('span'); //cria um span

    elementoSPAN.setAttribute('id','tarefa'); //atribui um id tarefa ao span
    elementoSPAN.textContent = textoDaTarefa; //atribui ao texto do span o textoDaTarefa que foi digitado no input

    elementoLI.className = 'naoRealizada';
    elementoLI.appendChild(elementoSPAN);
    elementoLI.appendChild(adicionaBotaoRemover());

    elementoSPAN.addEventListener('click',function(){
        if(this.id === 'tarefa'){  //verifica se o id do span clicado é 'tarefa'
            if(this.parentNode.className === 'naoRealizada') { //verifica se o pai li tem classe naoRealizada
                this.parentNode.className = 'realizada'  //se tiver, troca pra realizada
            } else{
                this.parentNode.className = 'naoRealizada' // troca/desfaz
            }
        }
    });

    return elementoLI;
}

function adicionaBotaoRemover() {
    const botaoRemover = document.createElement('button'); //cria o elemento button
    botaoRemover.textContent = 'X';  //conteudo do button
    botaoRemover.className = 'remover'; //atribui uma classe ao button

    botaoRemover.addEventListener('click', function(){
        listaTarefas.removeChild(this.parentNode); //listaTarefas é ul e removeChild que é um li, this é o button .parentNode é o li
        exibeOcultaListaSuspensa();
    });

    return botaoRemover;
}

function exibeOcultaListaSuspensa() {
    const elementoSPAN = document.querySelector('#tarefa');
    if(elementoSPAN === null) {
        listaSuspensa.setAttribute('hidden', 'hidden');
    } else{
        listaSuspensa.removeAttribute('hidden');
    }
}

listaSuspensa.addEventListener('change', function(){
    if(listaSuspensa.selectedIndex === 1 || listaSuspensa.selectedIndex === 2) {
        const vetorTarefas = document.querySelectorAll('#tarefa');
        for(tarefa of vetorTarefas){ //percorre todas as tarefas
            tarefa.dispatchEvent(new Event('click'));
        }
    } else if(listaSuspensa.selectedIndex === 3) {
        const vetorTarefas = document.querySelectorAll('.remover');
        for(tarefa of vetorTarefas){
            tarefa.dispatchEvent(new Event('click'));
        }
    }

});
