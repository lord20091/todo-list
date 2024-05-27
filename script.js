function addTodo() {
    let input = document.getElementById('todo-input');
    let todoText = input.value.trim();
    if (todoText !== '') {
        let li = document.createElement('li');
        li.textContent = todoText;
        document.getElementById('todo-list').appendChild(li);
        input.value = ''; 
    } else {
        alert("Iltimos, vazifa matnini kiriting!");
    }
}