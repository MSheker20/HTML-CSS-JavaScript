//ELEMENT CREATION

const li = document.createElement("li");

//add class
li.className = "list-group-item list-group-item-secondary";

//attribute
li.setAttribute("title", "New Item");
li.setAttribute("data-id", "5");

const text = document.createTextNode("New List Item");
li.appendChild(text);

const a = document.createElement("a");
a.setAttribute("href", "#");
a.className = "delete-item float-right";
a.innerHTML = '<i class="fas fa-times"></i>';
li.appendChild(a);

document.querySelector("#task-list").appendChild(li);



console.log(li); // <li></li>


