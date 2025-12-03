const text = document.getElementById("txtTaskName");

//Focus Event
text.addEventListener("focus", run);

//Blur Event
text.addEventListener("blur", run);

//Paste Event
text.addEventListener("paste", run);

//Copy Event
text.addEventListener("copy", run);

//Cut Event
text.addEventListener("cut", run);

//Keydown Event
text.addEventListener("keydown", run);

//Keypress Event
text.addEventListener("keypress", run);

//Keyup Event
text.addEventListener("keyup", run);

//Select Event
text.addEventListener("select", run);




function run(event) {
    console.log(`Event type: ${event.type}`);
}