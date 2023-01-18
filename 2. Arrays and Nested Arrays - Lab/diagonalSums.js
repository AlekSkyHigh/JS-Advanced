// A square matrix of numbers comes as an array of arrays, each array holding numbers. Write a function that finds the sum at the main and the secondary diagonals.
// The input comes as an array of arrays, containing number elements (2D matrix of numbers).
// The output is printed on the console, on a single line separated by space. First print the sum at the main diagonal, then the sum at the secondary diagonal.

// Solve 1 of 3:
// function diagonalSums(arrayOfArrays) {

//     let firstDiagonalSum = 0;
//     let secondDiagonalSum = 0;
//     let firstIndex = 0;
//     let secondIndex = arrayOfArrays[0].length - 1;

//     arrayOfArrays.forEach(arrayOfArrays => {
//         firstDiagonalSum += arrayOfArrays[firstIndex++];
//         secondDiagonalSum += arrayOfArrays[secondIndex--];
//     });
//     console.log(firstDiagonalSum + ' ' + secondDiagonalSum);

// }

// diagonalSums([
//     [20, 40],
//     [10, 60]
// ])

// diagonalSums([
//     [3, 5, 17],
//     [-1, 7, 14],
//     [1, -8, 89]
// ])


// Solve 2 of 3:
// function diagonalSums(arrayOfArrays) {

//     let firstDiagonalSum = 0;
//     let secondDiagonalSum = 0;

//     for(let i = 0; i < arrayOfArrays.length; i++){

//         firstDiagonalSum += arrayOfArrays[i][i];
//         secondDiagonalSum += arrayOfArrays[i][arrayOfArrays.length - i - 1];
//     }

//     console.log(firstDiagonalSum + ' ' + secondDiagonalSum);
// }

// diagonalSums([
//     [20, 40],
//     [10, 60]
// ])

// diagonalSums([
//     [3, 5, 17],
//     [-1, 7, 14],
//     [1, -8, 89]
// ])


// Solve 3 of 3:
function diagonalSums(arrayOfArrays) {

    let firstDiagonalSum = 0;
    let secondDiagonalSum = 0;

    for (let i = 0; i < arrayOfArrays.length; i++) {

        firstDiagonalSum += arrayOfArrays[i][i];
    }

    arrayOfArrays.reverse();

    for (let i = 0; i < arrayOfArrays.length; i++) {

        secondDiagonalSum += arrayOfArrays[i][i];
    }

    console.log(firstDiagonalSum + ' ' + secondDiagonalSum);
}

diagonalSums([
    [20, 40],
    [10, 60]
])

diagonalSums([
    [3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]
])
