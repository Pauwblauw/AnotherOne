function todoApp() {
    const todoButton = document.querySelector('.todo-button')
    const form = document.getElementById("todo-form")
    const todoList = document.querySelector('.todo-list')
    form.addEventListener("submit", addToDo)

    todoButton.addEventListener("click", addToDo)
}
function addToDo(event) {
    console.log(event);
    event.preventDefault()
    const todoInput = document.querySelector('.todo-input')
    console.log("yeet")
    if (todoInput.value === "") {
        return;
    }
    const todo = CreateToDo(todoInput.value)
    const todoList = document.querySelector('.todo-list')

    todoList.appendChild(todo);

    todoInput.value = ""

}

function CreateToDo(todoText) {
    const newTodo = document.createElement('li');
    newTodo.innerText = todoText;
    newTodo.classList.add('todo_item');
    const todoInput = document.querySelector('.todo-input')
    console.log("hai")
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fa fa-check"></i>';
    completedButton.classList.add('btn')
    completedButton.classList.add('btn-primary')
    newTodo.appendChild(completedButton);

    const deleteButton = document.createElement('button');
    deleteButton.addEventListener("click", deleteCheck)
    deleteButton.innerHTML = '<i class="fa fa-trash"></i>';
    deleteButton.classList.add('btn')
    deleteButton.classList.add('btn-secondary')
    newTodo.appendChild(deleteButton);

    return newTodo
}

function deleteCheck(e) {
    const item = e.target;
    const todo = item.parentElement.parentElement;
    todo.remove()
}

function completeCheck(e) {
    //COMPLETE ITEM
    if (item.classList[0] === "complete_btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completedItem")
    }
}


window.addEventListener("load", todoApp)
