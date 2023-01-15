// Write a function that takes two positive numbers as input and compute the greatest common divisor.	
// The input comes as two positive integer numbers.
// The output should be printed on the console.

function greatestCommonDivisorGCD(a, b) {
    if (b) {
        return greatestCommonDivisorGCD(b, a % b);
    } else {
        return Math.abs(a);
    }
}

console.log(greatestCommonDivisorGCD(15, 5))

console.log(greatestCommonDivisorGCD(2154, 458))
