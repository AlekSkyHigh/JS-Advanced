// Write a function that calculates how long it takes a student to get to university. 
// The function takes three numbers:
// •	The first is the number of steps the student takes from their home to the university
// •	Тhe second number is the length of the student's footprint in meters
// •	Тhe third number is the student speed in km/h
// Every 500 meters the student rests and takes a 1-minute break.
// Calculate how long the student walks from home to university and print on the console the result in the following format: `hours:minutes:seconds`.
// The input comes as three numbers.
// The output should be printed on the console.

function timeToWalk(steps, stepLength, speed) {

    let distance = steps * stepLength;
    let speedInMetersPerSecond = speed / 3.6;
    let rest = Math.floor(distance / 500) * 60;
    let time = distance / speedInMetersPerSecond + rest;

    let hours = Math.floor(time / 3600);
    let minutes = Math.floor(time / 60);
    let seconds = Math.round(time % 60);

    if (hours < 10) {
        hours = `0${hours}`
    }
    if (minutes < 10) {
        minutes = `0${minutes}`
    }
    if (seconds < 10) {
        seconds = `0${seconds}`
    }
    console.log(`${hours}:${minutes}:${seconds}`);

    // or, instead of the conditional statement above, the following can be used as well: 
    // console.log(`${hours < 10 ? "0" : ""}${hours}:${minutes < 10 ? "0" : ""}${minutes}:${
    // seconds < 10 ? "0" : ""}${seconds}`)
}

timeToWalk(4000, 0.60, 5)

timeToWalk(2564, 0.70, 5.5)
