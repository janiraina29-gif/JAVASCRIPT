//create a new list item <li> New Task </li> and add it to the end of ul.
let list= document.querySelector("ul");
let li = document.createElement("li");
li.textContent="New Task";
list.appendChild(li);