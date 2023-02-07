function janNotation(input) {

    const numbers = [];
    const operators = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b,
        operatorsCounter: 0,
    };

    for (let i = 0; i < input.length; i++) {
        const element = input[i];
        if (typeof element == 'number') {
            numbers.push(element);
        } else {
            operators.operatorsCounter++;
            if (numbers.length < 2) {
                console.log(`Error: not enough operands!`);
            } else {
                let num2 = numbers.pop();
                let num1 = numbers.pop();
                let result = operators[element](num1, num2);
                operators.operatorsCounter--;
                numbers.push(result);
            }
        }
    };

    if (numbers.length === 1 && operators.operatorsCounter === 0) {
        console.log(numbers.join());
    } else if (numbers.length > 1) {
        console.log(`Error: too many operands!`);
    };

}

janNotation([3, 4, '+'])
janNotation([5, 3, 4, '*', '-'])
janNotation([7, 33, 8, '-'])
janNotation([15, '/'])
