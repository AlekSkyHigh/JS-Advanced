// Write a function that sorts an array of numbers so that the first element is the smallest one, the second is the biggest one, the third is the second smallest one, the fourth is the second biggest one, and so on. 
// Return the resulting array.

function sortingNumbers(arrayOfNumbers) {

    let resultArr = [];
    arrayOfNumbers.sort((a, b) => a - b);

    while (arrayOfNumbers.length !== 0) {
        resultArr.push(arrayOfNumbers.shift());
        resultArr.push(arrayOfNumbers.pop());
    }

    return resultArr;
}

console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))
