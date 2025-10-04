
//DATE OBJECTS

let date = new Date();
console.log(date);
console.log(typeof date);

//Get Methods

console.log(date.getMonth()); //0-11
console.log(date.getDate()); //1-31
console.log(date.getFullYear()); //4 digit year
console.log(date.getDate());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getMilliseconds());

//Set Methods

date.setDate(15);
console.log(date);

date.setMonth(11);
console.log(date);

date.setFullYear(2031);
console.log(date);

date.setHours(5);
console.log(date);

date.setMinutes(30);
console.log(date);

date.setSeconds(25);
console.log(date);

date.setMilliseconds(500);
console.log(date);

let birthDate = new Date(2004, 12,12);
console.log(birthDate);

console.log(date.getFullYear()-birthDate.getFullYear());
console.log(date.getMonth()-birthDate.getMonth());