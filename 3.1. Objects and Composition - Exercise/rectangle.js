// Write a function that creates and returns a rectangle object. The rectangle needs to have a width (Number), height (Number), and color (String) properties, which are set via arguments during creation, and a calcArea() method, that calculates and returns the rectangle’s area.
// Input
// The function will receive three valid parameters – width (Number), height (Number), and color (String).
// Output
// Your function must return an object with all properties and methods as described. The calcArea() method of the object should return a number. The first letter in the color must be upperCase().

function rectangle(width, height, color) {

    let object = {
        width,
        height,
        color: color[0].toUpperCase() + color.slice(1),
        calcArea
    }
    return object;

    function calcArea() {
        return this.width * this.height;
    }
}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
