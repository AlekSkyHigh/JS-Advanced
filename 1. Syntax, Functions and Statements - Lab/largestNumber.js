// Write a function that takes three number arguments as input and finds the largest of them. Print the following text on the console:  `The largest number is {number}.`.
// The input comes as three number arguments passed to your function.
// The output should be printed to the console.

function largestNumber(a, b, c) {

    if (a > b && a > c) {
        console.log(`The largest number is ${a}.`);
    } else if (b > a && b > c) {
        console.log(`The largest number is ${b}.`);
    } else {
        console.log(`The largest number is ${c}.`);
    }

}

largestNumber(5, -3, 16)

largestNumber(-3, -5, -22.5)
