// You are given an array of numbers. Write a JS function that returns the elements at odd positions from the array, doubled and in reverse order.
// The input comes as an array of number elements.
// The output is the return on the console on a single line, separated by space.

function processOddPositions(inputArray) {

    return inputArray.filter((a, i) => i % 2 !== 0)
        .map(x => x * 2)
        .reverse()
        .join(' ');
}

console.log(processOddPositions([10, 15, 20, 25]));

console.log(processOddPositions([3, 0, 10, 4, 7, 3]));
