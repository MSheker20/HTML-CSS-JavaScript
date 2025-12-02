
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


// FUNCTIONS

function hello() {
    console.log("Hello World!");
}

hello();

function greet(name) {
    console.log("Hello " + name + "!");
}

greet("Mustafa");

function add(a, b) {
    console.log(a + b);
}

add(5, 3);

function calculateAge(birthYear) {
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;
    return age;
}

const myAge = calculateAge(2005);
console.log("I am " + myAge + " years old.");
console.log("I am " + calculateAge(1990) + " years old.");

function checkLicense(birthYear, name) {
    let age = calculateAge(birthYear);
    if (age >= 18) {
        console.log(name + " is eligible for a driving license.");
    } else {
        console.log(name + " is not eligible for a driving license.");
    }
}

checkLicense(2005, "Mustafa");
checkLicense(2010, "Ayla");
checkLicense(1995, "John");
