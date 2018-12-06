const btn = document.forms.todoForm.btn;
const todoList = [document.querySelector('#todoList'), ];
const todolist = document.createElement('ul');
document.body.appendChild(todoList);

btn.addEventListener('click', e => {
 e.preventDefault();
 let entry = document.forms.todoForm.entry;
 let item = entry.value;
 todoList.push(item);
 console.log(todoList);
});

todoList.forEach(todoItem => {
 const todoItem = document.createElement('li');
 todoItem.textContent = item;
 document.body.list.append();
 console.log(todoItem);
});
