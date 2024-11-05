const novatarefa = document.getElementById("nova_tarefa");
const listaTarefas = document.getElementById("lista-tarefas");
const tarefasRestantes = document.getElementById("tarefas-restantes");

function addTask() {
    const taskText = novatarefa.value.trim(); // Pegando o valor do input

    // Verifica se o campo não está vazio
    if (taskText !== "") {
        const li = document.createElement("li"); // Cria um novo elemento <li>
        
        // Adiciona o texto da tarefa e o botão de remover
        li.innerHTML = `
            <span class="tarefa-texto">${taskText}</span>
            <button class="deletebutton" onClick="deleteTask(this)">Remover</button>
        `;

        // Adiciona o evento de clique no <li> para marcar/desmarcar como completo
        li.addEventListener("click", function(event) {
            // Verifica se o clique não foi no botão de remover
            if (!event.target.classList.contains("deletebutton")) {
                li.classList.toggle("completa"); // Alterna a classe 'completa' no <li>
                updateCounter(); // Atualiza o contador sempre que uma tarefa é marcada/desmarcada
            }
        });

        listaTarefas.appendChild(li); // Adiciona o novo <li> na lista
        novatarefa.value = ""; // Limpa o campo de input

        updateCounter(); // Atualiza o contador após adicionar uma nova tarefa
    }
}

// Função para deletar tarefa
function deleteTask(button) {
    const li = button.parentElement; // Pega o <li> onde o botão foi clicado
    listaTarefas.removeChild(li); // Remove o <li> da lista
    updateCounter(); // Atualiza o contador após remover uma tarefa
}

// Função para atualizar o contador de tarefas
function updateCounter() {
    const totalTarefas = listaTarefas.querySelectorAll("li").length;
    const tarefasCompletas = listaTarefas.querySelectorAll("li.completa").length;
    const tarefasRestantesCount = totalTarefas - tarefasCompletas;

    tarefasRestantes.textContent = tarefasRestantesCount;
}

// Adiciona nova tarefa ao pressionar Enter
novatarefa.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask(); // Chama a função para adicionar a tarefa
    }
});
