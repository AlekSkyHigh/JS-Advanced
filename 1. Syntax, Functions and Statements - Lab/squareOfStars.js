// Write a function that prints a rectangle made of stars with variable size, depending on an input parameter. If there is no parameter specified, the rectangle should always be of size 5. Look at the examples to get an idea.
// The input comes as a single number argument.
// The output is a series of lines printed on the console, forming a rectangle of variable size.

function squareOfStars(input) {

    let n = input;

    let stringRectangle = "";

    for (let i = 1; i <= n; i++) {

        for (let j = 1; j <= n; j++) {

            stringRectangle += `* `
        }
        stringRectangle += '\n';
    }

    console.log(stringRectangle);

}
// squareOfStars(2)
// squareOfStars(5)
squareOfStars(7)



