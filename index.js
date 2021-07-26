const criarItem = (tarefa) => {
    const item = document.createElement('label');
    item.classList.add('todo__item');
    item.innerHTML = `
        <input type="checkbox">
        <div>${tarefa}</div>
        <input type="button" value="X">
    `
    document.getElementById('todoList').appendChild(item);

}

var form = document.querySelector("#form");
var btnSalvar = document.querySelector("#btnSalvar");
var inputItens = document.getElementById("inputItens");
var todoList = document.querySelector("#todo-list");
var btnExcluir = document.querySelector("#btnExcluir");

var tarefasDaLista = [];
btnExcluir.addEventListener("click", excluirTarefa)

btnSalvar.addEventListener("click", salvarTarefa);

form.addEventListener("submit", function(event) {
    event.preventDefault();
    addTarefaNaLista(inputItens.value);
});

carregarListaDoLocalStorage();

function addTarefaNaLista(textTarefa) {
    /* var optDefault = document.getElementById("optDefault") */
    if (textTarefa) {
     /*   var novaTarefa = document.createElement("label");
       novaTarefa.classList.add("todo-list") */
       novaTarefa = criarItem(textTarefa);
        /* novaTarefa.innerText = textTarefa; */
        /* novaTarefa.value = textTarefa;
        listaTarefa.appendChild(novaTarefa); */
        tarefasDaLista.push(textTarefa);
       /*  if (optDefault) {
            listaTarefa.remove(optDefault);
        } */
    } else {
        alert("Campo vazio por favor insira uma tarefa. ")
    }
    inputItens.value = "";
    inputItens.focus();
    }

function salvarTarefa() {
    localStorage.setItem("todoList", JSON.stringify(tarefasDaLista)); 
    }

function carregarListaDoLocalStorage() {
    var listaLocalStorage = localStorage.getItem("todoList");
    listaLocalStorage = JSON.parse(listaLocalStorage);
    for (i = 0; i < listaLocalStorage.length; i++) {
        addTarefaNaLista(listaLocalStorage[i]);
    }
    console.log(listaLocalStorage);
    console.log(typeof listaLocalStorage);
}
function excluirTarefa() {
    tarefasDaLista.pop(tarefasDaLista);
}
 
