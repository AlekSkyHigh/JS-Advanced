// Write a function that takes an integer number as an input and check if all the digits in a given number are the same or not.
// Print on the console true if all numbers are the same and false if not. On the next line print the sum of all digits.
// The input comes as an integer number.
// The output should be printed on the console.

function sameNumbers(input) {

    let inputAsString = input.toString();
    let isSame = true;
    let sum = 0;
    let firstLetter = inputAsString[0];

    for (let i = 0; i < inputAsString.length; i++) {

        if (firstLetter !== inputAsString[i]) {

            isSame = false;
        }
        sum += Number(inputAsString[i])
    }

    console.log(isSame);
    console.log(sum);
}

sameNumbers(2222222)

sameNumbers(1234)
