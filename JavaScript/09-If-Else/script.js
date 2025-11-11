
// Custom console.log function to display on page
const originalConsoleLog = console.log;
console.log = function(...args) {
    // Call original console.log
    originalConsoleLog.apply(console, args);
    
    // Display on page
    const consoleOutput = document.getElementById('console-output');
    const logLine = document.createElement('div');
    logLine.className = 'console-line';
    logLine.textContent = args.join(' ');
    consoleOutput.appendChild(logLine);
    
    // Auto scroll to bottom
    consoleOutput.scrollTop = consoleOutput.scrollHeight;
};


// Conditional statements (koşul ifadeleri)

const firstName = "Anıl";
const userName = "anilseker";
const age = 10;
const isStudent = true;
const school = "Middle School";

// if-else statement
if (userName === "anilseker") {
    console.log("Welcome back, " + firstName + "!");
} else {
    console.log("User not recognized.");
}

// if-else if-else statement
if (age < 12) {
    console.log("You are a child.");
} else if (age >= 12 && age < 20) {
    console.log("You are a teenager.");
} else {
    console.log("You are an adult.");
}

// nested if statement
if (isStudent) {
    if (school === "Middle School") {
        console.log("You are a middle school student.");
    } else {
        console.log("You are a student at another level.");
    }
} else {
    console.log("You are not a student.");
}


// checking undefined
let id = 12345;

if (typeof id != "undefined") {
    console.log("ID: " + id);
} else {
    console.log("No ID found.");
}
