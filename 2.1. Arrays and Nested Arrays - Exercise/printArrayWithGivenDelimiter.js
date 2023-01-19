// The input comes as two parameters – an array of strings and a string. The second parameter is the delimiter.
// The output is the elements of the array, printed on the console, each element separated from the others by the given delimiter.

function printArrayWithGivenDelimiter(arrayOfStrings, delimiter) {

    console.log(arrayOfStrings.join(delimiter));
}

printArrayWithGivenDelimiter([
    'One',
    'Two',
    'Three',
    'Four',
    'Five'],
    '-'
)

printArrayWithGivenDelimiter([
    'How about no?',
    'I',
    'will',
    'not',
    'do',
    'it!'],
    '_'
)
