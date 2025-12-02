// ELEMENT DELETION

const taskList = document.querySelector("#task-list");

//taskList.remove(); // removes the entire task list

//taskList.childNodes[1].remove(); // removes the second child node (first task item)

//taskList.children[0].remove(); // removes the first child element (first task item)

//taskList.removeChild(taskList.children[2]); // removes the third child element (third task item)

//Atribute Deletion

//taskList.children[1].removeAttribute("class"); // removes the class attribute from the second task item

for (let i = 0; i < taskList.children.length; i++) {
    taskList.children[i].removeAttribute("class");
}





console.log(taskList);