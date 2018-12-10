const todo = [];
const done = [];

function deleteTask() {
     const newItem = this.parentNode;
     const parent = newItem.parentNode;
     parent.removeChild(newItem);
};

function doneTask() {
     const newItem = this.parentNode;
     const strike = newItem.style.textDecoration = 'line-through';
     setTimeout(strike, 3000);
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
     const editInput = document.createElement("input");
     
     //types
     checkBox.type="checkbox";
     editInput.type="text";

     //innertext and classes
     deleteBtn.textContent = "Delete";
     deleteBtn.className = "delete";
     deleteBtn.addEventListener("click", deleteTask);
     checkBox.addEventListener('click', doneTask);
     editButton.innerText = "Edit";
     editButton.className = "edit";
     // editButton.addEventListener("click", editTask);

     //styling
     deleteBtn.style.float = "right";
     checkBox.style.float = "left";
     editButton.style.float = "right";
     
     //list item
     todo.push(item);
     console.log(todo);
     const newItem = document.createElement('li');
     console.log(newItem);
     newItem.appendChild(text);
     document.getElementById("todoList").appendChild(newItem);

     //appending
     newItem.appendChild(checkBox);
     newItem.appendChild(deleteBtn);
     newItem.appendChild(editButton);
     newItem.appendChild(editInput);
     // return newItem;

};




