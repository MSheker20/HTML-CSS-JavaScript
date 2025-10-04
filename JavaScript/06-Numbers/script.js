//NUMBERS

let num1;

num1 = Number("5"); //Converts string to number
console.log(num1);
console.log(typeof num1);

num1 = parseInt("5");
console.log(num1);
console.log(typeof num1);

num1 = parseFloat("5.5");
console.log(num1);
console.log(typeof num1);

num1 = parseInt("5car");
console.log(num1);
console.log(typeof num1);

num1 = parseInt("car5"); //NaN: Not a Number
console.log(num1);
console.log(typeof num1);

num1 = isNaN("car5");
console.log(num1);
console.log(typeof num1);

num1 = isNaN("5car");
console.log(num1);
console.log(typeof num1);

let data1;

var num2 = 10.5789534432;

data1 = num2.toPrecision(5); //Defines the number of significant digits
console.log(data1);

data1 = num2.toFixed(2); //Defines the number of digits after the decimal point
console.log(data1);

data1 = Math.PI;
console.log(data1);

data1 = Math.round(3.5); //Rounds to the nearest integer
console.log(data1);

data1 = Math.round(3.2); //Rounds to the nearest integer
console.log(data1);

data1 = Math.ceil(3.2); //Always rounds up
console.log(data1);

data1 = Math.floor(3.7); //Always rounds down
console.log(data1);

data1 = Math.pow(2, 3); //2^3
console.log(data1);

data1 = Math.sqrt(16); //Square root
console.log(data1);

data1 = Math.abs(-5.5);
console.log(data1);

data1 = Math.min(5, 3, 8, 1, 4);
console.log(data1);

data1 = Math.max(5, 3, 8, 1, 4);
console.log(data1);

data1 = Math.random()*100; //Random number between 0 and 100
console.log(data1);

data1 = Math.floor(Math.random()*100+1); //Random integer between 1 and 100
console.log(data1);

