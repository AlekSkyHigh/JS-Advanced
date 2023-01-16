// Write a program that extracts all words from a passed-in string and converts them to upper case. The extracted words in the upper case must be printed on a single line separated by ", ".
// The input comes as a single string argument - the text to extract and convert words from.
// The output should be a single line containing the converted string.

// function wordsUppercase(string) {

//     console.log(string.match(/[A-z0-9]+/gm).join(', ').toUpperCase());
// }

// wordsUppercase('Hi, how are you?')
// wordsUppercase('hello')


function wordsUppercase(string) {

    return string
        .match(/[A-z0-9]+/g)
        .join(', ')
        .toUpperCase();
}

console.log(wordsUppercase('Hi, how are you?'))
console.log(wordsUppercase('hello'))
