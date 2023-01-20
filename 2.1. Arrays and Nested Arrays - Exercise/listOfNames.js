// You will receive an array of names. 
// Sort them alphabetically in ascending order and print a numbered list of all the names, each on a new line.

// Solution 1 of 2:
function listOfNames(arrayOfStrings) {

    arrayOfStrings.sort((a, b) => a.localeCompare(b));

    arrayOfStrings.forEach(name => console.log(`${arrayOfStrings.indexOf(name) + 1}.${name}`));
}

listOfNames(["John", "Bob", "Christina", "Ema"])

//  Solution 2 of 2:
// function listOfNames(arrayOfStrings) {

//     arrayOfStrings
//         .sort((a, b) => a.localeCompare(b))
//         .forEach((name, i) => console.log(`${i + 1}.${name}`));
// }

