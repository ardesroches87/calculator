//Basic 2-number math functions
let array = [];

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

console.log(add(3, 4));
console.log(subtract(10, 1));
console.log(multiply(3, 3));
console.log(divide(12, 3));

//Calculator Operations Variables
let num1;
let operator;
let num2;

//Operate function

function operate(num1, num2, operator) {
    switch (operator) {
        case "+":
           return add(num1, num2);
            break;
        case "-":
           return subtract(num1, num2);
            break;
        case "*":
           return multiply(num1, num2);
            break;
        case "/":
           return divide(num1, num2);
            break;
            default:
                console.log("Error");            
    }
}
console.log(operate(3, 3, "*")); 