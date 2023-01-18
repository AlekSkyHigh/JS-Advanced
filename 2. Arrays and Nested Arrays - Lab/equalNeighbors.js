// Write a function that finds the number of equal neighbor pairs inside a matrix of variable size and type (numbers or strings).
// The input comes as an array of arrays, containing string elements (2D matrix of strings).
// The output is the return value of your function. Save the number of equal pairs you find and return it.

function equalNeighbors(arrayOfArrays) {

    let counter = 0;

    for (let i = 0; i < arrayOfArrays.length; i++) {
        let row = arrayOfArrays[i];

        for (let j = 0; j < row.length; j++) {
            let col = row[j];

            if (i !== arrayOfArrays.length - 1) {

                if (col === row[j + 1]) {
                    counter++;
                }
                if (col === arrayOfArrays[i + 1][j]) {
                    counter++;
                }

            } else if (col === row[j + 1] || col === arrayOfArrays[i][j + 1]) {
                counter++;
            }
        }
    }
    console.log(counter);
}

equalNeighbors([
    ['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']
])

equalNeighbors([
    ['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']
])
