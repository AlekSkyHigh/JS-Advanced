// Write a JS function that takes three string arguments as an input. Calculate the sum of the length of the strings and the average length of the strings rounded down to the nearest integer.
// The input comes as three string arguments passed to your function.
// The output should be printed on the console in two lines.

function stringLength(first, second, third) {

    let sumLength = first.length + second.length + third.length;
    let averageLength = Math.floor(sumLength / 3)

    console.log(sumLength);
    console.log(averageLength);
}

stringLength('chocolate', 'ice cream', 'cake')

stringLength('pasta', '5', '22.3')
