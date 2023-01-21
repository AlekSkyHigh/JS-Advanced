// Write a function that checks if a given matrix of numbers is magical. A matrix is magical if the sums of the cells of every row and every column are equal. 
// The input comes as an array of arrays, containing numbers (number 2D matrix). The input numbers will always be positive.
// The output is a Boolean result indicating whether the matrix is magical or not.

// Solve 1 of 2:
function magicMatrices(arrayOfArrays) {

    let sumRows = 0;
    let sumCols = 0;

    for (let i = 0; i < arrayOfArrays.length; i++) {

        let currentArray = arrayOfArrays[i].join("");

        for (let j = 0; j < currentArray.length; j++) {

            sumRows += Number(currentArray[j]);
            sumCols += Number(currentArray[0]);
        }
    }

    if (sumRows === sumCols) {
        console.log("true");
    } else {
        console.log("false");
    }
}

magicMatrices([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
])

magicMatrices([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]
])

// Solve 2 of 2:
// function magicMatrices(arrayOfArrays) {

//     let sum = arrayOfArrays[0].reduce((a, b) => a + b);

//     for (let i = 0; i < arrayOfArrays[0].length; i++) {

//         let currentColSum = 0;

//         for (let j = 0; j < arrayOfArrays.length; j++) {

//             currentColSum += arrayOfArrays[j][i];
//         }

//         if (currentColSum !== sum) {
//             return false;
//         }
        
//     }
//     return true;
// }

