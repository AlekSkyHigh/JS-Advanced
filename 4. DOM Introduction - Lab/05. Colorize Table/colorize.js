// Write a JS function that changes the color of all even rows when the user clicks a button. Apply the color "Teal" to the target rows.
// Input/Output
// There will be no input/output, your program should instead modify the DOM of the given HTML document.

function colorize() {

    let rowElements = document.getElementsByTagName('tr')

    // Convert to array
    let rowElementsArr = Array.from(rowElements);

    rowElementsArr.forEach((x, i) => {
        if (i % 2 !== 0) {
            x.style.backgroundColor = 'teal'
        }
    })
}

// Solve 2 with CSS selector:
// function colorize() {

//     let rowElements = document.querySelectorAll('tr:nth-of-type(2n) td')

//     rowElements.forEach(x => {
//         x.style.backgroundColor = 'teal';
//     });
// }
