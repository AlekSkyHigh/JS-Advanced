// Write a JS function that takes two numbers and a string as an input.
// The string may be one of the following: '+', '-', '*', '/', '%', '**'.
// Print on the console the result of the mathematical operation between both numbers and the operator you receive as a string.
// The input comes as two numbers and a string argument passed to your function.
// The output should be printed on the console.

function mathOperations(numberOne, numberTwo, operator) {

    let result

    switch (operator) {
        case "+": result = numberOne + numberTwo; break;
        case "-": result = numberOne - numberTwo; break;
        case "/": result = numberOne / numberTwo; break;
        case "*": result = numberOne * numberTwo; break;
        case "%": result = numberOne % numberTwo; break;
        case "**": result = numberOne ** numberTwo; break;
    }

    console.log(result);
}

mathOperations(5, 6, '+')

mathOperations(3, 5.5, '*')
