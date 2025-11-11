
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
// switch-case statement

let process = 6;

switch (process) {
    case 1:
        console.log("Process 1 selected.");
        break;
    case 2:
        console.log("Process 2 selected.");
        break;
    case 3:
        console.log("Process 3 selected.");
        break;
    default:
        console.log("No valid process selected.");
        break;
}

// Example: Day of the week

let day;

switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
}

console.log("Today is: " + day);

let time = new Date().getHours();

switch (true) {
    case (time >= 6 && time < 12):
        console.log("Good morning!");
        break;
    case (time >= 12 && time < 18):
        console.log("Good afternoon!");
        break;
    case (time >= 18 && time < 22):
        console.log("Good evening!");
        break;
    default:
        console.log("Good night!");
        break;
}


