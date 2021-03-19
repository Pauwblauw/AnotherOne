function todoApp() {
    const todoButton = document.querySelector('.todo-button')
    const form = document.getElementById("todo-form")
    const todoList = document.querySelector('.todo-list')
    form.addEventListener("submit", addToDo)

    todoButton.addEventListener("click", addToDo)
    todoList.addEventListener("click", deleteCheck)
}
function addToDo(event) {
    console.log(event);
    event.preventDefault()
    const todoInput = document.querySelector('.todo-input')
    console.log("yeet")
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo_item');
    todoDiv.appendChild(newTodo);
    if (todoInput.value === "") {
        return;
    }
    const todo = CreateToDo(todoDiv)
    const todoList = document.querySelector('.todo-list')

    todoList.appendChild(todo);

}

function CreateToDo(todoDiv) {
    const todoInput = document.querySelector('.todo-input')
    console.log("hai")
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete_btn')
    todoDiv.appendChild(completedButton);

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add('delete_btn')
    todoDiv.appendChild(deleteButton);

    todoInput.value = ""

    return todoDiv
}

function deleteCheck(e) {
    const item = e.target;
    if (item.classList[0] === "delete_btn") {
        const todo = item.parentElement;
        todo.classList.add("fall")
        todo.addEventListener('transitionend', function () {
            todo.remove()
        })
    }
    //COMPLETE ITEM
    if (item.classList[0] === "complete_btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completedItem")
    }
}


window.addEventListener("load", todoApp)
