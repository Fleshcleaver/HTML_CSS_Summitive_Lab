
//Functions for addition
function add(a, b) {
    const result = a + b;
    history.push(`${a} + ${b} = ${result}`);
    return result;
}

//Function for subtraction
function subtract(a, b) {
    const result = a - b;
    history.push(`${a} - ${b} = ${result}`);
    return result;
}
//Function for multiplication
function multiply(a, b) {
    const result = a * b;
    history.push(`${a} * ${b} = ${result}`);
    return result;
}
//Function for division with divide by 0 flag
function divide(a, b) {
    if (b === 0) {
        history.push(`Division error: Cannot divide ${a} by 0`);
        return "Error: Cannot divide by zero";
    }
    const result = a / b;
    history.push(`${a} / ${b} = ${result}`);
    return result;
}
//History array
let history = [];

// Display history log with index adding 1
function showHistory() {
    if (history.length === 0) {
        console.log("No calculations made yet.");
    } else {
        console.log("Calculation History:");
        history.forEach((entry, index) => {
            console.log(`${index + 1}. ${entry}`);
        });
    }
}
