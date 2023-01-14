// Write a JavaScript function to get the number of days in a month.
// The input comes as two numeric parameters. The first element is the month, the second is the year.
// The output must return the number of days in a month for a given year.
// Hints · Use Date()

function daysInAMonth(month, year) {

    return new Date(year, month, 0).getDate();
}

console.log(daysInAMonth(1, 2012))

console.log(daysInAMonth(2, 2021))
