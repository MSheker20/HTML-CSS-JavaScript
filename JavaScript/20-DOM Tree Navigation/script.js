//DOM TREE NAVIGATION

const todoList = document.querySelector(".list-group");
const todo = document.querySelector(".list-group-item:nth-child(2)");
const card = document.querySelector(".card");

let value1 = todoList;
console.log(value1);

let value2 = todo;
console.log(value2);

let value3 = card;
console.log(value3);

// Child Nodes

let value4 = todoList.childNodes; //text nodes
console.log(value4);

let value5 = todoList.children; //element nodes
console.log(value5);

let value6 = todoList.children[0];
console.log(value6);

todoList.children[1].textContent = "Changed Item";

let value7 = card.children;
console.log(value7);

let value8 = card.children[1].children[0];
console.log(value8);

value8.textContent = "New Header";

let value9 = todoList.firstElementChild;
console.log(value9);

let value10 = todoList.lastElementChild;
console.log(value10);

// Parent Nodes

let value11 = card.parentElement;
console.log(value11);

let value12 = card.parentElement.parentElement;
console.log(value12);

// Sibling Nodes

let value13 = todo.previousElementSibling;
console.log(value13);

let value14 = todo.nextElementSibling;
console.log(value14);

let value15 = todo.nextElementSibling.nextElementSibling;
console.log(value15);




