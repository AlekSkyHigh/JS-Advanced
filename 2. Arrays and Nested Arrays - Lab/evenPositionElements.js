// Write a function that finds the elements at even positions in an array.
// The input comes as an array of string elements.
// The output is printed on the console. Collect all elements in a string, separated by space.

function evenPositionElements(inputArray) {

    let printLine = "";

    for (let i = 0; i < inputArray.length; i++) {

        if (i % 2 === 0) {
            printLine += `${inputArray[i]} `;
        }
    }

    console.log(printLine);
}

evenPositionElements(['20', '30', '40', '50', '60'])

evenPositionElements(['5', '10'])
