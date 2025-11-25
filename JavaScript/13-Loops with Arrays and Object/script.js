
// Custom console.log function to display on page
const originalConsoleLog = console.log;
console.log = function(...args) {
    // Call original console.log
    originalConsoleLog.apply(console, args);
    
    // Display on page
    const consoleOutput = document.getElementById('console-output');
    const logLine = document.createElement('div');
    logLine.className = 'console-line';
    
    // Format each argument properly
    const formattedArgs = args.map(arg => {
        if (typeof arg === 'object' && arg !== null) {
            return JSON.stringify(arg, null, 2);
        }
        return String(arg);
    });
    
    logLine.textContent = formattedArgs.join(' ');
    consoleOutput.appendChild(logLine);
    
    // Auto scroll to bottom
    consoleOutput.scrollTop = consoleOutput.scrollHeight;
};


// LOOPS WITH ARRAYS AND OBJECTS

let cities = ["Ankara", "Istanbul", "Izmir", "Denizli", "Bursa"];

//Arrays

for (let i = 0; i < cities.length; i++) {
    console.log(i, cities[i]);
}

console.log("----------");

for (let city of cities) {
    console.log(city);
}

console.log("----------");


//for-in

for (let index in cities) {
    console.log(index, cities[index]);
}

console.log("----------");

//forEach

cities.forEach(function(city, index) {
    console.log(index, city);
});

console.log("----------");

//Objects

let users = [
    {firstName: "John", lastName: "Doe"},
    {firstName: "Jane", lastName: "Smith"},
    {firstName: "Alice", lastName: "Johnson"},
    {firstName: "Bob", lastName: "Brown"},
];

for (let i = 0; i < users.length; i++) {
    console.log(i, users[i].firstName, users[i].lastName);
}

console.log("----------");

for (let user of users) {
    console.log(user.firstName, user.lastName);
}

console.log("----------");

for (let index in users) {
    console.log(index, users[index].firstName, users[index].lastName);
}

console.log("----------");

users.forEach(function(user, index) {
    console.log(index, user.firstName, user.lastName);
});

console.log("----------");

// for-in with object properties

for (let index in users) {
    console.log(index);
    let user = users[index];
    for (let key in user) {
        console.log(" ", key, ":", user[key]);
    }
    console.log("----------");
}


//map

let fullNames = users.map(function(user) {
    return user.firstName + " " + user.lastName;
});

console.log(fullNames);

console.log("----------");

let numberArray = [1, 2, 3, 4, 5];

let squaredNumbers = numberArray.map(function(number) {
    return number * number;
});

console.log(squaredNumbers);
console.log("----------");