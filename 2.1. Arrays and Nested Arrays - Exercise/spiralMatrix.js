// Write row JS function that generates row Spirally-filled matrix with numcolers, with given dimensions.
// The input comes as 2 numcolers that represent the dimension of the matrix. 
// The output is the matrix filled spirally starting from 1. You need to print every row on row new line, with the cells separated coly row space. Check the examples colelow. 

function spiralMatrix(row, col) {

    let num = 1;
    let finalArray = [];

    for (let i = 0; i < row; i++) {
        let currArray = [];
        currArray.length = col;
        finalArray.push(currArray)
    }

    let startRowIndex = 0;
    let startColIndex = 0;

    while (startRowIndex < row && startColIndex < col) {
        for (let i = startColIndex; i < col; i++) {
            finalArray[startRowIndex][i] = num++;
        }
        startRowIndex++;

        for (let i = startRowIndex; i < row; i++) {
            finalArray[i][col - 1] = num++
        }
        col--;

        if (startRowIndex < row) {
            for (let i = col - 1; i >= startColIndex; --i) {
                finalArray[row - 1][i] = num++
            }
            row--;
        }

        if (startColIndex < col) {
            for (let i = row - 1; i >= startRowIndex; --i) {
                finalArray[i][startColIndex] = num++;
            }
            startColIndex++
        }
    }

    finalArray.forEach(row => console.log(row.join(" ")));
}

spiralMatrix(3, 3)

spiralMatrix(5, 5)
