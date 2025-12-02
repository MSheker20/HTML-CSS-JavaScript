// Custom console.log function to display on page
const originalConsoleLog = console.log;
console.log = function(...args) {
    // Call original console.log
    originalConsoleLog.apply(console, args);
    
    // Display on page
    let consoleOutput = document.getElementById('console-output');
    
    // If console-output doesn't exist, create it
    if (!consoleOutput) {
        consoleOutput = document.createElement('div');
        consoleOutput.id = 'console-output';
        consoleOutput.style.cssText = 'background: #1e1e1e; color: #d4d4d4; padding: 20px; font-family: monospace; max-height: 400px; overflow-y: auto; border: 1px solid #333; margin: 20px 0;';
        document.body.appendChild(consoleOutput);
    }
    
    const logLine = document.createElement('div');
    logLine.className = 'console-line';
    logLine.style.cssText = 'padding: 5px 0; border-bottom: 1px solid #333;';
    
    // Format each argument properly
    args.forEach((arg, index) => {
        if (typeof arg === 'object' && arg !== null) {
            const objectContainer = document.createElement('span');
            objectContainer.style.cssText = 'cursor: pointer; color: #4ec9b0;';
            
            const arrow = document.createElement('span');
            arrow.textContent = '▶ ';
            arrow.style.cssText = 'display: inline-block; width: 12px; transition: transform 0.2s;';
            
            const objectLabel = document.createElement('span');
            if (arg === window) {
                objectLabel.textContent = 'Window';
            } else if (Array.isArray(arg)) {
                objectLabel.textContent = `Array(${arg.length})`;
            } else {
                objectLabel.textContent = arg.constructor?.name || 'Object';
            }
            
            const details = document.createElement('div');
            details.style.cssText = 'display: none; margin-left: 20px; color: #d4d4d4;';
            
            objectContainer.appendChild(arrow);
            objectContainer.appendChild(objectLabel);
            logLine.appendChild(objectContainer);
            logLine.appendChild(details);
            
            // Toggle expand/collapse
            objectContainer.onclick = function() {
                const isExpanded = details.style.display === 'block';
                if (isExpanded) {
                    details.style.display = 'none';
                    arrow.style.transform = 'rotate(0deg)';
                } else {
                    details.style.display = 'block';
                    arrow.style.transform = 'rotate(90deg)';
                    
                    // Load properties on first expand
                    if (details.innerHTML === '') {
                        const props = Object.getOwnPropertyNames(arg).slice(0, 100); // Limit to 100 properties
                        props.forEach(prop => {
                            try {
                                const value = arg[prop];
                                const propLine = document.createElement('div');
                                propLine.style.cssText = 'padding: 2px 0;';
                                
                                let valueStr = '';
                                if (typeof value === 'function') {
                                    valueStr = `ƒ ${prop}()`;
                                } else if (typeof value === 'object' && value !== null) {
                                    valueStr = Array.isArray(value) ? `Array(${value.length})` : 'Object';
                                } else if (typeof value === 'string') {
                                    valueStr = `"${value}"`;
                                } else {
                                    valueStr = String(value);
                                }
                                
                                propLine.innerHTML = `<span style="color: #9cdcfe;">${prop}</span>: <span style="color: #ce9178;">${valueStr}</span>`;
                                details.appendChild(propLine);
                            } catch (e) {
                                // Skip properties that can't be accessed
                            }
                        });
                        
                        if (props.length === 100) {
                            const moreText = document.createElement('div');
                            moreText.textContent = '... (more properties)';
                            moreText.style.color = '#888';
                            details.appendChild(moreText);
                        }
                    }
                }
            };
        } else {
            const textSpan = document.createElement('span');
            if (typeof arg === 'string') {
                textSpan.style.color = '#ce9178';
                textSpan.textContent = `"${arg}"`;
            } else if (typeof arg === 'number') {
                textSpan.style.color = '#b5cea8';
                textSpan.textContent = String(arg);
            } else {
                textSpan.textContent = String(arg);
            }
            logLine.appendChild(textSpan);
        }
        
        if (index < args.length - 1) {
            logLine.appendChild(document.createTextNode(' '));
        }
    });
    
    consoleOutput.appendChild(logLine);
    
    // Auto scroll to bottom
    consoleOutput.scrollTop = consoleOutput.scrollHeight;
};


//Scope

//Global Scope Example
var globalVar = "I am a global variable";

function checkScope() {
    console.log(globalVar); // Accessible here
}

//Function Scope Example
function functionScopeExample() {
    var functionVar = "I am a function-scoped variable";
    console.log(functionVar); // Accessible here
}

functionScopeExample();
// console.log(functionVar); // Uncaught ReferenceError: functionVar is not defined

//Block Scope Example
if (true) {
    let blockVar = "I am a block-scoped variable";
    console.log(blockVar); // Accessible here
}
// console.log(blockVar); // Uncaught ReferenceError: blockVar is not defined

