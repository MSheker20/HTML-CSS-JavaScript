//Element Selection

//Select one element

//document.getElementById()

let data1 = document.getElementById('header');
console.log(data1);
let data2 = document.getElementById('header').id;
console.log(data2);
console.log(data2.length);

data1.style.color = 'blue';
data1.style.fontSize = '40px';
data1.style.backgroundColor = 'yellow';

document.getElementById("header").innerText = "Hello World!";
document.getElementById("header").innerHTML = "<b>Hello World!</b>";

//document.querySelector()

console.log(document.querySelector('#header'));

console.log(document.querySelector('.container'));

console.log(document.querySelector('div'));

document.querySelector("li").style.color = "blue"; //first li
document.querySelector("li:last-child").style.color = "orange"; //last li
document.querySelector("li:nth-child(2)").style.color = "green"; //second li

document.querySelector("li").className = "list-group-item list-group-item-primary"; //first li
document.querySelector("li").classList.add("active"); //first li




