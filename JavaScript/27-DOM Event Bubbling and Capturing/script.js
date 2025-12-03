//Event Bubbling

const form = document.querySelector('form');
const cardBody = document.querySelector('.card-body');
const card = document.querySelector('.card');
const container = document.querySelector('.container');

form.addEventListener('click', function(e) {
    console.log('Form');
    e.stopPropagation(); //bubbling i durdurur
});

cardBody.addEventListener('click', function(e) {
    console.log('Card Body');
});

card.addEventListener('click', function(e) {
    console.log('Card');
});

container.addEventListener('click', function(e) {
    console.log('Container');
});

//Event Capturing

form.addEventListener('click', function(e) {
    console.log('Form');
}, true);

cardBody.addEventListener('click', function(e) {
    console.log('Card Body');
}, true);

card.addEventListener('click', function(e) {
    console.log('Card');
}, true);
container.addEventListener('click', function(e) {
    console.log('Container');
}, true);


const deleteItems = document.querySelectorAll('.fa-times');
const ul = document.querySelector('ul');

deleteItems.forEach(function(item) {
    item.addEventListener('click', function(e) {
        console.log(e.target);
    });
});

ul.addEventListener('click', function(e) {
    if (e.target.className === 'fas fa-times') {
        e.target.parentElement.parentElement.remove();
    }
});