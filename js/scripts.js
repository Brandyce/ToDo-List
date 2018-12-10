const todo = [];
const done = [];

function deleteTask() {
     const item = this.parentNode.parentNode;
     const parent = item.parentNode;
     parent.removeChild(item);
};

function doneTask() {
     
}


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

// console.log(todoList);



// function editTask() {
//      const newItem = this.parentNode;
//      console.log(newItem);
//      const editInput = listItem.querySelector('input[type=text]');
//      const containsClass=listItem.classList.contains("editMade");
// };


//if(containsClass) {
     //           label.innerText=editInput.value;
     //      } else{
     //           editInput.value=label.innerText;
     //      }
     // };


//connecting the buttons to the functions
 //delete button
 


//    var bindTaskEvents = function(taskListItem) {
//      //select taskListItem's children
//      var deleteButton = document.querySelector("button.delete"); //Delete button
//      //bind tasks to delete button
//      deleteButton.onclick = deleteTask;
//    };

/* <form action="" name="todoForm" class="text-center">
          <label for="todo-list"></label>
          <input id="todo-input" type="text" name="entry">
          <button type="submit" name="btn" class="btn-dark">Enter</button>
        </form> */

