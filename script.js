// Exercício 1: Criando um array para armazenar as tarefas e adicionando uma tarefa inicial 
let tarefas = [
    {id: 1, titulo: 'Tarefa Inicial', concluida: false}
];

// Referências ao DOM
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const filterBtn = document.getElementById('filterBtn');
const taskList = document.getElementById('taskList');

// Exercício 2: Função para capturar o valor do input e criar uma nova tarefa
function adicionarTarefa() {
    if (taskInput.attributeStyleMap() === "") return alert('Digite uma tarefa válida!');
}
