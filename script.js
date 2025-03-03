// Exercício 1: Criando um array para armazenar as tarefas e adicionando uma tarefa inicial 

let tarefas = [
    { id: 1, titulo: 'Tarefa Inicial', concluida: false }
];

// Exercício 2: Capturarando o valor do input e adicionar uma nova tarefa ao clciar no botão

// Referências ao DOM

const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
// const filterBtn = document.getElementById('filterBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', adicionarTarefa);

// Exercício 3: Exibindo um alert informando que a tarefa foi adicionada com sucesso

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

// Exercício 4: Exibindo a lista de tarefas sempre que uma nova for adicionada

function renderizarTarefas(lista = tarefas) {
    taskList.innerHTML = "";

    lista.forEach(({ id, titulo, concluida }) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="${concluida ? "completed" : ""}">${titulo}</span>
            <button onclick="concluirTarefa(${id})">Concluir</button>
            `;
        taskList.appendChild(li);
    });
}

// Exercício 5: Criando um botão "Concluir" para marcar tarefas como concluídas

function concluirTarefa(id) {
    tarefas = tarefas.map(tarefa =>
        tarefa.id === id ? {...tarefa, concluida: true} : tarefa
    );

    renderizarTarefas();
}

// Exercício 6: Criando um botão para exibir apenas tarefas não concluídas

const filterBtn = document.getElementById('filterBtn');

function filtrarPendentes() {
    const tarefasPendentes = tarefas.filter(tarefa => !tarefa.concluida);
    renderizarTarefas(tarefasPendentes);
}

// Evento de clique no botão de filtrar pendentes
filterBtn.addEventListener('click', filtrarPendentes);

// Exercício 7: Criando uma nova lista de tarefas com os títulos em maiúsculas e exibi-la no console

function exibirTitulosMaiusculos() {
    const titulosMaiusculos = tarefas.map(tarefa => tarefa.titulo.toUpperCase());
    console.log('Lista de Tarfefas em Maiúsculas: ', titulosMaiusculos);
}

// Chamada para exibir os títulos ao adicionar uma tarefa
exibirTitulosMaiusculos();

// Exercício 8: Calculando o total de tarefas concluídas e exibir um alert

function contarConcluidas() {
    const totalConcluidas = tarefas.reduce((acc, tarefa) => acc + (tarefa.concluida ? 1 : 0), 0);
    alert(`Total de tarefas concluídas: ${totalConcluidas}`);
}

// Exercício 9: Utilizando destructuring para extrair informações de um tarefa específica

function exibirDetalhesTarefa(id) {
    const tarefa = tarefas.find(t => t.id === id);

    if (tarefa) {
        const {titulo, concluida} = tarefa; // Aplicando destructuring
        alert(`Tarefa: ${titulo}\nStatus: ${concluida ? 'Concluída' : 'Pendente'}`);
    } else {
        alert ('Tarefa não encontrada.')
    }
}

