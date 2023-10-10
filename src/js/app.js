const cards = document.querySelectorAll('.card');
const dropzones = document.querySelectorAll('.dropzone');
const newTaskInput = document.getElementById('newTaskInput');

cards.forEach(card => {
    card.addEventListener('dragstart', dragstart);
    card.addEventListener('drag', drag);
    card.addEventListener('dragend', dragend);
});

function dragstart() {
    dropzones.forEach(dropzone => dropzone.classList.add('highlight'));
    this.classList.add('is-dragging');
}

function drag() {}

function dragend() {
    dropzones.forEach(dropzone => dropzone.classList.remove('highlight'));
    this.classList.remove('is-dragging');
}

dropzones.forEach(dropzone => {
    dropzone.addEventListener('dragenter', dragenter);
    dropzone.addEventListener('dragover', dragover);
    dropzone.addEventListener('dragleave', dragleave);
    dropzone.addEventListener('drop', drop);
});

function dragenter() {}

function dragover(event) {
    event.preventDefault();
    this.classList.add('over');
    const cardBeingDragged = document.querySelector('.is-dragging');
    this.appendChild(cardBeingDragged);
}

function dragleave() {
    this.classList.remove('over');
}

function drop() {
    this.classList.remove('over');
}

function addNewTask() {
    const taskContent = newTaskInput.value;
    if (taskContent.trim() !== '') {
        const newTask = document.createElement('div');
        newTask.classList.add('card');
        newTask.draggable = true;
        newTask.innerHTML = `
            <div class="status green"></div>
            <div class="content">${taskContent}</div>
        `;
        newTaskInput.value = '';
        newTask.addEventListener('dragstart', dragstart);
        newTask.addEventListener('drag', drag);
        newTask.addEventListener('dragend', dragend);
        cards.forEach(card => {
            card.addEventListener('dragstart', dragstart);
            card.addEventListener('drag', drag);
            card.addEventListener('dragend', dragend);
        });
        dropzones[0].appendChild(newTask);

        // После добавления новой задачи, добавила обработчики событий для нее
        newTask.addEventListener('dragstart', dragstart);
        newTask.addEventListener('drag', drag);
        newTask.addEventListener('dragend', dragend);
    }
}
