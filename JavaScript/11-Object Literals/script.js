
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


// Object literal example

let data;

let user = {
    username: "anilseker",
    firstName: "Anıl",
    lastName: "Şeker",
    age: 10,
    hobbies: ["reading", "gaming", "coding"],
    address: {
        street: "123 Main St",
        city: "Ankara",
        country: "Turkey"
    }
};
data = user;

console.log(data);
console.log(typeof user);
console.log("Username: " + user.username);
console.log("Full Name: " + user.firstName + " " + user.lastName);
console.log("Age: " + user.age);
console.log("Hobbies: " + user.hobbies.join(", "));
console.log("City: " + user.address.city);
console.log("Country: " + user.address.country);

// Modifying object properties
user.age = 11;
user.hobbies.push("drawing");
user.address.city = "Istanbul";

console.log("Updated Age: " + user.age);
console.log("Updated Hobbies: " + user.hobbies.join(", "));
console.log("Updated City: " + user.address.city);

// Adding new properties
user.email = "anil.seker@example.com";
console.log("Email: " + user.email);

// Deleting a property
delete user.lastName;
console.log("After deleting lastName:", user);
