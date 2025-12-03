//EVENT LİSTENER VE EVENT OBJECT

const btn = document.querySelector("#btnDeleteAll");
const btn2 = document.querySelector("#btnAddNewTask");

// btn.addEventListener("click", function (e) {
//     console.log("Silme işlemi gerçekleşti");
//     e.preventDefault(); //default işlemi engeller

// });

btn.addEventListener("click", btnClick);

btn2.addEventListener("click", btnClick);


function btnClick(e) {
    console.log("Butona tıklandı");
    e.preventDefault();

    console.log(e.target);
    console.log(e.type);
    console.log(e.clientX);
    console.log(e.clientY);
}


