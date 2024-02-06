const questModal = document.querySelector('.questModal'); //Modal to create task
const openModal = document.querySelector('.addTask'); //Open "forge a quest" modal
const closeModal = document.querySelector('.close-button'); //Open "forge a quest" modal
const saveQuest = document.querySelector('.saveQuest'); //Save task button
const todoList = document.querySelector('.taskList');


openModal.addEventListener('click', () => {
    questModal.showModal();
})


saveQuest.addEventListener('click', () => {
    questModal.close();

    let li = document.createElement("li");
    let inputValue = document.getElementById("questForm").value;
    let task = document.createTextNode(inputValue);
    li.appendChild(task);
    if (inputValue === '') {
        alert("ERROR: Task cannot be found. Note that tasks should be written clearly and concisely for effective results. If you do not wish to enter a task, press the 'ESC' button on your keyboard.");
    } else {
        taskList.appendChild(li);
    }
    inputValue.value = "";

    let span = document.createElement("SPAN");
    span.appendChild(txt);
    li.appendChild(span);

})
