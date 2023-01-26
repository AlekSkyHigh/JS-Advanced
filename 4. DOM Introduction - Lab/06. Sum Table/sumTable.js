// Write a JS function that finds the first table in a document and sums the values in the last column. The result is then displayed in an element with ID "sum".
// Input/Output
// There will be no input/output, your program should instead modify the DOM of the given HTML document.

function sumTable() {

    let costElements = document.querySelectorAll('tr td:nth-of-type(2)');

    let sum = Array.from(costElements).reduce((acc, curr) => {

        let currentValue = Number(curr.textContent) || 0;

        return acc + currentValue;
    }, 0);

    let resultElement = document.getElementById('sum');
    resultElement.textContent = sum;
}
