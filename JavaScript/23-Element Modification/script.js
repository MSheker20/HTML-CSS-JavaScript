//ELEMENT MODIFICATION

const cardHeader = document.querySelector(".card-header");
const h2 = document.createElement("h2");

h2.setAttribute("class", "card-header");
h2.appendChild(document.createTextNode("Yeni Başlık"));

const parent = document.querySelector(".card");
parent.replaceChild(h2, cardHeader);

//Class

const taskList = document.querySelector("#task-list");

let value;

link = taskList.children[0].children[0];

value = link.className;
value = link.classList;

link.classList.add("new");
link.classList.add("new2");
link.classList.remove("new2");

//attribute

value = link.getAttribute("href");
value = link.setAttribute("href", "https://www.google.com.tr");

value = link.hasAttribute("href");





console.log(value);