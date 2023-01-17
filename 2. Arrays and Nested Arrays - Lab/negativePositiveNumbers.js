// Write a JS function that processes the elements in an array one by one and produces a new array. If the current element is a negative number you must add it to the front of the array (as the first element of the array). Otherwise, if the current element is a positive number (or 0), you must add it to the end of the array (as the last element of the array).
// The input comes as an array of number elements.
// The output is printed on the console, each element on a new line.

function negativePositiveNumbers(inputArray) {

    let result = [];

    for (let i = 0; i < inputArray.length; i++) {

        if (inputArray[i] < 0) {
            result.unshift(inputArray[i]);
        } else {
            result.push(inputArray[i]);
        }
    }

    console.log(result.join('\n'));
}

negativePositiveNumbers([7, -2, 8, 9])

negativePositiveNumbers([3, -2, 0, -1])
