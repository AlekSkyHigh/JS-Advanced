// Write a JS function that takes two numbers n and m as an input and prints the sum of all numbers from n to m.
// The input comes as two string elements that need to be parsed as numbers.
// The output should return the sum.

function sumOfNumbersNM(stringOne, stringTwo) {

    let numberOne = Number(stringOne);
    let numberTwo = Number(stringTwo);

    let result = 0;

    for (let i = numberOne; i <= numberTwo; i++) {

        result += i;
    }

    console.log(result);

}

sumOfNumbersNM('1', '5')

sumOfNumbersNM('-8', '20')
