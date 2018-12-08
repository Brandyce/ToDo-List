const btn = document.forms.todoForm.btn;
//list arrays
const todoList = [];
const doneList = [];


btn.addEventListener('click', e => {
 e.preventDefault();
 //makes list
 const list = document.createElement('ul');
//connects input to variable
 const entry = document.forms.todoForm.entry;
 //turns variable to a value you can use
 const item = entry.value;
 //pushes input into the todoList array and into text
 todoList.push(item);
 const toDoList = document.createTextNode(item);
 list.appendChild(toDoList);
//makes list item and puts text in list item
 const todoItem = document.createElement('li');
 todoItem.textContent = item;
 document.body.append(list);
 console.log(todoItem);
 console.log(todoList);
});

// //make arrays and button
// const btn = document.forms.todoForm.btn;
// const done = [];
// const todo = [];
// //button event listener(click)get rid of default reaction
// btn.addEventListener('click', e => {
//      e.preventDefault();
//      //add item to array
//     const entry = document.forms.todoForm.entry;
//     const item = entry.value;
//     console.log(item);
//     todo.push(item);
//     console.log(todo);
// });

// //end of event listener
// function makeList(todo) {
//     // Create the list element:
//     const list = document.createElement('ul');

//     for (var i = 0; i < array.length; i++) {
//         // Create the list item:
//         var item = document.createElement('li');

//         // Set its contents:
//         item.appendChild(document.createTextNode(array[i]));

//         // Add it to the list:
//         list.appendChild(item);
//     }

//     // Finally, return the constructed list:
//     return list;
// };

// // Add the contents of options[0] to #foo:
// document.getElementById('foo').appendChild(makeList(todo[0]));
// //make foreach loop to make li and buttons for each array item
// const firstList = document.getElementById("todoList");
// const secondList = document.getElementById("doneList");

