
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


// LOOPS EXAMPLES

//while loop

let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}

let j = 10;

while (j>0) {
    console.log(j);
    j--;
}

//break and continue

let k = 0;
while (k < 10) {
    console.log(k);
    if (k === 5) {
        console.log('Breaking at', k);
        break;
    }
    k++;
}

let m = 0;
while (m < 10) {
    m++;
    if (m % 2 === 0) {
        continue; // Skip even numbers
    }
    console.log(m); // Only odd numbers will be logged
}


//do while loop

let n = 0;
do {
    console.log(n);
    n++;
} while (n < 5);


//for loop

for (let p = 0; p < 10; p++) {
    console.log(p);
}

for (let q = 10; q > 0; q--) {
    console.log(q);
}

let sum = 0;
for (let r = 1; r <= 5; r++) {
    sum += r;
}
console.log('Sum from 1 to 5 is:', sum);
