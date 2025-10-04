// ARRAYS

let names = ["Ali", "Veli", "Ayse", "Fatma"];
let years = [1990, 1995, 2000, 2005];
let mixed = ["Ali", 1990, true, null, undefined, "Veli",["progralama", "futbol"]];


console.log(names);
console.log(typeof names); // object
console.log(names.length); // 4

console.log(years);
console.log(mixed);

// get array item
console.log(names[0]); // Ali
console.log(names[2]); // Ayse
console.log(names[names.length - 1]); // Fatma
console.log(mixed[6][0]); // programlama

// set array item
names[1] = "Canan";
console.log(names); // ["Ali", "Canan", "Ayse", "Fatma"]

// add item to array
names[4] = "Cem"; // not recommended
names[names.length] = "Cem"; // not recommended
names.push("Cem"); // recommended
names.push("Deniz");
console.log(names); // ["Ali", "Canan", "Ayse", "Fatma", "Cem", "Deniz"]

// add item to beginning
names.unshift("Seda");
console.log(names); // ["Seda", "Ali", "Canan", "Ayse", "Fatma", "Cem", "Deniz"]

// remove last item
let lastName = names.pop();
console.log(names); // ["Seda", "Ali", "Canan", "Ayse", "Fatma", "Cem"]
console.log(lastName); // Deniz

// remove first item
let firstName = names.shift();
console.log(names); // ["Ali", "Canan", "Ayse", "Fatma", "Cem"]
console.log(firstName); // Seda

// index of item
let index = names.indexOf("Ayse");
console.log(index); // 2
index = names.indexOf("Mehmet");
console.log(index); // -1

// reverse array
names.reverse();
console.log(names); // ["Cem", "Fatma", "Ayse", "Canan", "Ali"]

// sort array
names.sort();
console.log(names); // ["Ali", "Ayse", "Canan", "Cem", "Fatma"]

years.sort();
console.log(years); // [1990, 1995, 2000, 2005] (correct order)
mixed.sort();
console.log(mixed); // [1990, 2000, 1995, null, true, undefined, "Ali", "Veli"] (not correct order)

// concat array
let val = years.concat(names);
console.log(val); // [1990, 1995, 2000, 2005, "Ali", "Ayse", "Canan", "Cem", "Fatma"]

// splice
names.splice(2, 0, "Murat");
console.log(names); // ["Ali", "Ayse", "Murat", "Canan", "Cem", "Fatma"]
names.splice(3, 1);
console.log(names); // ["Ali", "Ayse", "Murat", "Cem", "Fatma"]