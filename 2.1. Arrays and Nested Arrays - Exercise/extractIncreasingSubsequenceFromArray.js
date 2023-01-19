// Write a function that extracts only those numbers that form a non-decreasing subset. In other words, you start from the first element and continue to the end of the given array of numbers. Any number which is LESS THAN the current biggest one is ignored, alternatively if it’s equal or higher than the current biggest one you set it as the current biggest one and you continue to the next number. 
// The input comes as an array of numbers.
// The output is the processed array after the filtration, which should be a non-decreasing subset. Return the array of numbers.

// Solve 1 of 2:
function extractIncreasingSubsequenceFromArray(arrayOfNumbers) {

    let currentBigest = arrayOfNumbers.shift();
    let resultArr = [currentBigest];

    for (let num of arrayOfNumbers) {

        if (num >= currentBigest) {
            currentBigest = num;
            resultArr.push(currentBigest);
        }
    }

    return resultArr;
}

console.log(extractIncreasingSubsequenceFromArray([
    1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24
]))

console.log(extractIncreasingSubsequenceFromArray([
    1,
    2,
    3,
    4
]))

console.log(extractIncreasingSubsequenceFromArray([
    20,
    3,
    2,
    15,
    6,
    1
]))


// Solve 2 of 2: using .reduce():
// function extractIncreasingSubsequenceFromArray(arrayOfNumbers) {

//     let currBigest = arrayOfNumbers[0];
//     return arrayOfNumbers.reduce((acc,currEl) => {
//         if(currBigest <= currEl){
//             acc.push(currEl);
//             currBigest = currEl
//         }
//         return acc;

//     }, [])

// }
