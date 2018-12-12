const todo = [];
const done = [];

function newerItem() {
     const newTodo = document.getElementById('edit-input').value;
     const text = document.createTextNode(newTodo);
     const itemText = document.createElement('span');
     const newerTodo = this.parentNode;
     const ridInput = this.previousSibling;
     const ridButton = this.parentNode.lastChild;
     const editButton = document.createElement("button");

     itemText.appendChild(text);
     editButton.innerText = "Edit";
     editButton.className = "edit";
     editButton.className = "btn-dark";
     editButton.addEventListener('click', editTask);
     editButton.style.float = "right";

     console.log(newerTodo);

     newerTodo.removeChild(ridInput);
     newerTodo.removeChild(ridButton);
     newerTodo.appendChild(itemText);
     newerTodo.appendChild(editButton);
     
}
function deleteTask() {
     const newItem = this.parentNode;
     const parent = newItem.parentNode;
     parent.removeChild(newItem);
};

function editTask() {
     const newItem = this.parentNode;
     const editButton = this;
     const editInput = document.createElement("input");
     const newButton = document.createElement('button');
     const btnSib = this.previousSibling;

     newButton.textContent = "Edit Item";
     newButton.addEventListener('click', newerItem);
     editInput.id = "edit-input";
     editInput.type="text";
     

     newItem.removeChild(btnSib);
     newItem.removeChild(editButton);
     newItem.appendChild(editInput);
     newItem.appendChild(newButton);
}

function doneTask() {
     const newItem = this.parentNode;
     const strike = newItem.style.textDecoration = 'line-through';
     const parent = newItem.parentNode;
     const destination = document.getElementById('doneList');
     parent.removeChild(newItem);
     destination.appendChild(newItem);
     done.push(newItem);
};

function todoList() {
     const item = document.getElementById('todoInput').value;
     const text = document.createTextNode(item);
     const deleteBtn = document.createElement("button");
     const checkBox = document.createElement("input");
     const editButton = document.createElement("button");
     
     //types
     checkBox.type="checkbox";
     
     //innertext and classes
     deleteBtn.textContent = "Delete";
     deleteBtn.className = "delete";
     deleteBtn.className = "btn-dark";
     deleteBtn.addEventListener("click", deleteTask);
     checkBox.addEventListener('click', doneTask);
     editButton.innerText = "Edit";
     editButton.className = "edit";
     editButton.className = "btn-dark";
     editButton.addEventListener('click', editTask);
     


     //styling
     deleteBtn.style.float = "right";
     checkBox.style.float = "left";
     editButton.style.float = "right";
     
     //list item
     todo.push(item);
     console.log(todo);
     const newItem = document.createElement('li');
     const itemText = document.createElement('span');
     console.log(newItem);
     itemText.appendChild(text);
     newItem.appendChild(itemText);
     document.getElementById("todoList").appendChild(newItem);

     //appending
     newItem.appendChild(itemText);
     newItem.appendChild(editButton);
     newItem.appendChild(checkBox);
     newItem.appendChild(deleteBtn);
     

};




