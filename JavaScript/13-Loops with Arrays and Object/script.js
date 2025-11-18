
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
