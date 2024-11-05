const novatarefa = document.getElementById("nova_tarefa");
const listaTarefas = document.getElementById("lista-tarefas");
const tarefasRestantes = document.getElementById("tarefas-restantes");

function addTask() {
    const taskText = novatarefa.value.trim(); 

    if (taskText !== "") {
        const li = document.createElement("li"); 
        
        li.innerHTML = `
            <span class="tarefa-texto">${taskText}</span>
            <button class="deletebutton" onClick="deleteTask(this)">Remover</button>
        `;

        li.addEventListener("click", function(event) {
            if (!event.target.classList.contains("deletebutton")) {
                li.classList.toggle("completa");
                updateCounter();
            }
        });

        listaTarefas.appendChild(li);
        novatarefa.value = ""; 

        updateCounter(); 
    }
}

function deleteTask(button) {
    const li = button.parentElement; 
    listaTarefas.removeChild(li); 
    updateCounter(); 
}

function updateCounter() {
    const totalTarefas = listaTarefas.querySelectorAll("li").length;
    const tarefasCompletas = listaTarefas.querySelectorAll("li.completa").length;
    const tarefasRestantesCount = totalTarefas - tarefasCompletas;

    tarefasRestantes.textContent = tarefasRestantesCount;
}


novatarefa.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask(); 
    }
});
