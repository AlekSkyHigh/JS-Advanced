// Write a function that calculates and returns the sum of the first and the last elements in an array.
// The input comes as an array of string elements holding numbers.
// The output is the return value of your function and should be a number.

// Solution 1 of 3:
function sumFirstLast(inputArray) {

    let firstEl = Number(inputArray.shift());
    let lastEl = Number(inputArray.pop());

    return (firstEl + lastEl);
}
console.log(sumFirstLast(['20', '30', '40']));
console.log(sumFirstLast(['5', '10']));
// ------------------------------------------------------
// Solution 2:
function sumFirstLast(inputArray) {
    return Number(inputArray.pop()) + Number(inputArray.shift());
}
console.log(sumFirstLast(['20', '30', '40']));
console.log(sumFirstLast(['5', '10']));
// ------------------------------------------------------
// Solution 3:
function sumFirstLast(arr) {
    const first = Number(arr[0]);
    const last = Number(arr[arr.length - 1]);
    return first + last;
}
console.log(sumFirstLast(['20', '30', '40']));
console.log(sumFirstLast(['5', '10']));


