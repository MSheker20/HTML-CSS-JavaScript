const btn = document.querySelector("#btnAddNewTask");
const ul = document.querySelector("#task-list");

btn.addEventListener("click", run);
ul.addEventListener("click", run);

btn.addEventListener("dblclick", run);
ul.addEventListener("dblclick", run);

btn.addEventListener("mousedown", run);
ul.addEventListener("mouseup", run);

btn.addEventListener("mouseenter", run);
ul.addEventListener("mouseleave", run);

btn.addEventListener("mouseover", run);
ul.addEventListener("mouseout", run);

function run(event) {
    console.log(`Event type: ${event.type}`);
}
///dsad
