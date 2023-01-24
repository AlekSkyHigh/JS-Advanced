// You're tasked to create and print a JSON from a text table. You will receive input as an array of strings, where each string represents a row of a table, with values on the row encompassed by pipes "|" and optionally spaces. The table will consist of exactly 3 columns "Town", "Latitude" and "Longitude". The Latitude and Longitude columns will always contain valid numbers. Check the examples to get a better understanding of your task.
// Input
// The input comes as an array of strings – the first string contains the table’s headings, each next string is a row from the table.
// Output
// •	The output should be an array of objects wrapped in JSON.stringify(). 
// •	Latitude and Longitude must be parsed to numbers, and represented till the second digit after the decimal point!

function townsToJSON(input) {

    const towns = [];

    for (let index = 1; index < input.length; index++) {

        const tokens = input[index].split(/\s*\|\s*/g);
        const town = tokens[1];
        const latitude = Number(tokens[2]).toFixed(2);
        const longitude = Number(tokens[3]).toFixed(2);

        const currentObj = {
            Town: town,
            Latitude: Number(latitude),
            Longitude: Number(longitude)
        }
        towns.push(currentObj)
    }
    console.log(JSON.stringify(towns));
}

townsToJSON([
    '| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'
])

townsToJSON([
    '| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |'
])

