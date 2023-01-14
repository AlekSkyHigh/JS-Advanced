// Write a program that performs different operations on an array of elements. Implement the following operations:
// •	Sum(ai) - calculates the sum of all elements from the input array
// •	Sum(1/ai) - calculates the sum of the inverse values (1/ai) of all elements from the array
// •	Concat(ai) - concatenates the string representations of all elements from the array
// The input comes as an array of number elements.
// The output should be printed on the console on a new line for each of the operations.

// Solve 1 of 2:
function aggregateElements(array) {
    
    let numbersArray = array.map(Number);
 
    let sum = numbersArray.reduce((a, b) => a + b);
    let inverseValuesSum = numbersArray.reduce((a, b) => a + 1 / b, 0);    
    let stringConcat = numbersArray.join('');
 
    console.log(sum);
    console.log(inverseValuesSum);
    console.log(stringConcat);
}

aggregateElements([1, 2, 3])

aggregateElements([2, 4, 8, 16])

// Solve 2 of 2:
function aggregateElements(array) {

    let sum = 0;
    let concat = '';
    let result = 0;

    for (let index = 0; index < array.length; index++) {

        sum += array[index];
        concat += array[index];
        result += 1 / array[index];
    }

    console.log(sum);
    console.log(result);
    console.log(concat);
}

solve([2, 4, 8, 16]);
