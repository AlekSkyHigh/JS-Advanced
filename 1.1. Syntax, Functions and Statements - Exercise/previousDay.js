// Write a JS function that calculates the date of the previous day by given year, month, and day.
// The input comes as three numeric parameters. The first element is the year, the second is the month and the third is the day.
// The output must be the return date of the previous day in the format: `{year}-{month}-{day}`

function previousDay(year, month, day) {

    const currentDate = new Date(year, month - 1, day - 1);
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    const previousDate = currentDate.getDate();

    console.log(`${currentYear}-${currentMonth}-${previousDate}`);
}

previousDay(2016, 9, 30)

previousDay(2015, 5, 10)
