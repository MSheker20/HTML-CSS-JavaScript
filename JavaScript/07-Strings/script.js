//STRINGS

const firstName = "Mustafa";
const lastName = "ŞEKER";
const age = 21;
let hobbies = "Formula1 sinema kitap"

let data1;

//string concatenation

data1 = firstName + " " + lastName;
console.log(data1);

data1 = "Mustafa";
data1 += " ŞEKER"; //data1 = data1 + " ŞEKER"
console.log(data1);

data1 = "My name is " + firstName + " " + lastName + " and I'm " + age + " years old.";
console.log(data1);

data1 = firstName.concat(" ", lastName);
console.log(data1);

data1 = firstName + " " + lastName;

data1 = data1.toUpperCase();
console.log(data1);

data1 = firstName + " " + lastName;

data1 = data1.toLowerCase();
console.log(data1);

data1 = firstName + " " + lastName;

data1 = data1.substring(3, 7);
console.log(data1);

data1 = firstName + " " + lastName;

data1 = data1.slice(0, 4);
console.log(data1);

data1 = firstName + " " + lastName;

data1 = data1.indexOf("t");
console.log(data1);

data1 = firstName + " " + lastName;

data1 = data1.indexOf("x");
console.log(data1); //-1 (not found)

data1 = firstName + " " + lastName;

data1 = data1.replace("Mustafa", "Enes");
console.log(data1);

data1 = firstName + " " + lastName;

console.log(data1.length);

data2 = hobbies.split(" "); //["Formula1", "sinema", "kitap"]
console.log(data2);


