//MULTI-ELEMENT SELECTION

//document.getElementsByClassName()

let data1 = document.getElementsByClassName('list-group-item');
console.log(data1);

let data2 = document.getElementsByClassName('list-group-item')[2];
console.log(data2);

console.log(data1[0]);

data1[1].style.fontSize = '40px';
data1[2].style.color = 'red';
data1[1].textContent = 'Hello 2';

for(let i = 0; i < data1.length; i++){
    data1[i].style.fontWeight = 'bold';
}


//document.getElementsByTagName()

data3 = document.getElementsByTagName('li');
console.log(data3);

data3[3].style.color = 'blue';
data3[2].textContent = 'Hello 5';

let data4 = document.getElementById("task-list").getElementsByTagName("a");
console.log(data4);

//document.querySelectorAll()

let data5 = document.querySelectorAll('.list-group-item');
console.log(data5);

data5.forEach(function(item, index){
    item.textContent = `Hello ${index + 1}`;
});


