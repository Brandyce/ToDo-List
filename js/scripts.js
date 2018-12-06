const btn = document.forms.todoForm.btn;
const todoList = [];


btn.addEventListener('click', e => {
 e.preventDefault();
 const list = document.createElement('li');

 const entry = document.forms.todoForm.entry;
 const item = entry.value;
 todoList.push(item);
 const toDoList = document.createTextNode(item);
 list.appendChild(toDoList);

todoList.push();

 const todoItem = document.createElement('li');
 todoItem.textContent = item;
 document.body.append(list);
 console.log(todoItem);
});


