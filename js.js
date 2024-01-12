document.addEventListener("DOMContentLoaded", function() {
    
    // Calculator Operations Variables
    let num1 = "";
    let operator = "";
    let num2 = "";
    let isOperatorPressed = false;

    let screen = document.querySelector(".screen");
    let numberButtons = document.querySelectorAll(".num-btn");

    numberButtons.forEach(function(button) {
        button.addEventListener("click", function(){
            if(isOperatorPressed) {
                num2 += button.textContent;
                screen.textContent = num2;
            } else {
                num1 += button.textContent;
                screen.textContent = num1;
            }
        })
    });

    let decimalButton = document.querySelector("#decimal");
    decimalButton.addEventListener("click", function() {
        if(isOperatorPressed) {
            if(!num2.includes(".")) {
                num2 += ".";
                screen.textContent = num2;
            }
        } else {
            if(!num1.includes(".")) {
                num1 += ".";
                screen.textContent = num1;
            }
        }
    })
    let clearButton = document.querySelector(".clear-btn");
    clearButton.addEventListener("click", function() {
        clearScreen();
    });

    function clearScreen() {
        screen.textContent = "";
        num1 = "";
        num2 = "";
        operator = "";
        isOperatorPressed = false;
    }

    function setOperator(op) {
        operator = op;
        isOperatorPressed = true;
    }   

    let addBtn = document.querySelector("#add-btn");
    addBtn.addEventListener("click", function() {
        setOperator("+");
    });

    let subBtn = document.querySelector("#sub-btn");
    subBtn.addEventListener("click", function() {
        setOperator("-");
    });

    let multBtn = document.querySelector("#multiply-btn");
    multBtn.addEventListener("click", function() {
        setOperator("*");
    });

    let divBtn = document.querySelector("#divide-btn");
    divBtn.addEventListener("click", function() {
        setOperator("/");
    });

    const equalBtn = document.querySelector("#equals-btn");
    equalBtn.addEventListener("click", function() {
        operate();
    });

    // Operate function
    function operate() {
        if (num1 && num2 && operator) {
            let result = calculateResult(parseFloat(num1), parseFloat(num2), operator);
            screen.textContent = result;
            num1 = String(result);
            num2 = "";
            operator = "";
            isOperatorPressed = false;
        }
    }

    // Basic 2-number math functions
    function calculateResult(a, b, operator) {
        switch (operator) {
            case "+":
                return add(a, b);
            case "-":
                return subtract(a, b);
            case "*":
                return multiply(a, b);
            case "/":
                return divide(a, b);
            default:
                return "error";
        }
    }


    // Basic 2-number math functions
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

  
});

    let heart = document.querySelector("#heart");
    let star = document.querySelector("#star");
    let backgroundColor = document.querySelector("#calculator-outline");

    function purple() {
        backgroundColor.style.backgroundColor = "#CBC3E3";
    }

    heart.addEventListener("click", function() {
        purple();
    });

    function pink() {
        backgroundColor.style.backgroundColor = "#ffcad9";
    };

    star.addEventListener("click", function() {
        pink();
    });



