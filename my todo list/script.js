let input = document.querySelector('#taskInput');
let addBtn = document.querySelector('#addTaskBtn');
let taskList = document.querySelector('#taskList');


addBtn.addEventListener('click', () => {
    let inputValue = input.value.trim().slice(0,1).toUpperCase()+input.value.trim().slice(1).toLowerCase()

    if (inputValue != '') {
        adding(inputValue)
        input.value = ''
    }
})

input.addEventListener('keydown', (event) => {
    let inputValue = input.value.trim().slice(0,1).toUpperCase()+input.value.trim().slice(1).toLowerCase()
    if (event.key === 'Enter') {

        if (inputValue != '') {
            adding(inputValue)
            input.value = ''
        }
    }
})

function adding(inputValue) {
    let deletedd = document.createElement('button');
    deletedd.setAttribute('id', 'deleteBtn');
    deletedd.textContent = 'Delete';


    let li = document.createElement('li');
    li.textContent = inputValue;

    li.appendChild(deletedd)
    taskList.appendChild(li);
    deletedd.addEventListener('click', () => {
        taskList.removeChild(li)
    })
    li.addEventListener('click', () => {
        li.classList.add('underline')
    })
}