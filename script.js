const questModal = document.querySelector('.questModal'); //Modal to create task
const openModal = document.querySelector('.addTask'); //Open "forge a quest" modal
const closeModal = document.querySelector('.close-button'); //Open "forge a quest" modal
const saveQuest = document.querySelector('.saveQuest'); //Save task button
const todoList = document.querySelector('.listArea'); 


openModal.addEventListener('click', () => {
    questModal.showModal();
})

closeModal.addEventListener('click', () => {
    questModal.close();
})

saveQuest.addEventListener('click', () => {
    questModal.close();

//todo: add task
})
