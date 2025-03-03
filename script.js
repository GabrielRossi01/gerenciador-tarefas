// Exercício 1: Criando um array para armazenar as tarefas e adicionando uma tarefa inicial 

let tarefas = [
    {id: 1, titulo: 'Tarefa Inicial', concluida: false}
];

// Exercício 2: Capturar o valor do input e adicionar uma nova tarefa ao clciar no botão

// Referências ao DOM

const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const filterBtn = document.getElementById('filterBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', adicionarTarefa);

// Exercício 3: Exibir um alert informando que a tarefa foi adicionada com sucesso

function adicionarTarefa() {
    if (taskInput.value.trim() === "") {
        alert('Digite uma tarefa válida!');
        return;
    }

    const novaTarefa = {
        id: tarefas.lenght + 1,
        titulo: taskInput.value,
        concluida: false
    };

    tarefas = [...tarefas, novaTarefa];

    alert('Tarefa adicionada com sucesso!');

    taskInput.value = "";
    renderizarTarefas();
}