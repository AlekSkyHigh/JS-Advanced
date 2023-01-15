// Write a function that determines whether a driver is within the speed limit. You will receive the speed and the area. Each area has a different limit: 
// •	On the motorway, the limit is 130 km/h
// •	On the interstate, the limit is 90 km/h
// •	In the city, the limit is 50 km/h 
// •	Within a residential area, the limit is 20 km/h
// If the driver is within the limits, there should be a printed speed and the speed limit. 
//                 `Driving {speed} km/h in a {speed limit} zone`
// If the driver is over the limit, however, your function should print the severity of the infraction and the difference in speeds. 
// `The speed is {difference} km/h faster than the allowed speed of {speed limit} - {status}`
// For speeding up to 20 km/h over the limit, the status should be speeding.
// For speeding up to 40 km/h over the limit, the status should be excessive speeding.
// For anything else, status should be reckless driving.
// The input comes as 2 string parameters. The first element is the current speed (number), the second element is the area.
// The output should be printed on the console.

// Solution 1 of 2: (not optimised):
function roadRadar(speed, area) {

    switch (area) {

        case "motorway":
            if (speed <= 130) {
                console.log(`Driving ${speed} km/h in a 130 zone`);
            } else {
                let status = speed - 130;
                if (status <= 20) {
                    status = "speeding"
                } else if (status <= 40) {
                    status = "excessive speeding"
                } else {
                    status = "reckless driving"
                }
                console.log(`The speed is ${speed - 130} km/h faster than the allowed speed of 130 - ${status}`);
            }
            break;

        case "interstate":
            if (speed <= 90) {
                console.log(`Driving ${speed} km/h in a 90 zone`);
            } else {
                let status = speed - 90;
                if (status <= 20) {
                    status = "speeding"
                } else if (status <= 40) {
                    status = "excessive speeding"
                } else {
                    status = "reckless driving"
                }
                console.log(`The speed is ${speed - 90} km/h faster than the allowed speed of 90 - ${status}`);
            }
            break;

        case "city":
            if (speed <= 50) {
                console.log(`Driving ${speed} km/h in a 50 zone`);
            } else {
                let status = speed - 50;
                if (status <= 20) {
                    status = "speeding"
                } else if (status <= 40) {
                    status = "excessive speeding"
                } else {
                    status = "reckless driving"
                }
                console.log(`The speed is ${speed - 50} km/h faster than the allowed speed of 50 - ${status}`);
            }
            break;

        case "residential":
            if (speed <= 20) {
                console.log(`Driving ${speed} km/h in a 20 zone`);
            } else {
                let status = speed - 20;
                if (status <= 20) {
                    status = "speeding"
                } else if (status <= 40) {
                    status = "excessive speeding"
                } else {
                    status = "reckless driving"
                }
                console.log(`The speed is ${speed - 20} km/h faster than the allowed speed of 20 - ${status}`);
            }
            break;
    }

}

roadRadar(40, 'city')
roadRadar(21, 'residential')
roadRadar(120, 'interstate')
roadRadar(200, 'motorway')


// Solution 2 of 2: (optimised)

function roadRadar(speed, area) {

    let limit = 0;

    switch (area) {
        case "motorway": limit = 130; break;
        case "interstate": limit = 90; break;
        case "city": limit = 50; break
        case "residential": limit = 20; break;
    }

    const speeding = speed - limit;
    if (speeding <= 0) {
        return console.log(`Driving ${speed} km/h in a ${limit} zone`)
    }

    let status = "";
    if (speeding <= 20) {
        status = "speeding"
    } else if (speeding <= 40) {
        status = "excessive speeding"
    } else {
        status = "reckless driving"
    }
    return console.log(`The speed is ${speeding} km/h faster than the allowed speed of ${limit} - ${status}`)

}

roadRadar(40, 'city')

roadRadar(21, 'residential')

roadRadar(120, 'interstate')

roadRadar(200, 'motorway')
