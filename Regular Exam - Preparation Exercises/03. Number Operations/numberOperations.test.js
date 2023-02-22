const numberOperations = require('./03. numberOperations');
const { assert } = require('chai');


describe("numberOperations function tests", () => {

    describe("powNumber function tests", () => {

        it("should return the power of the inputed number", () => {
            assert.equal(numberOperations.powNumber(1), 1)
        });
        it("should return the power of the inputed number", () => {
            assert.equal(numberOperations.powNumber(2), 4)
        });
        it("should return the power with negative umber", () => {
            assert.equal(numberOperations.powNumber(-3), 9)
        });
        it("should return the power with decimal umber", () => {
            assert.equal(numberOperations.powNumber(3.5), 12.25)
        });

    })

    describe("numberChecker function tests", () => {

        it("should parse the string number to number", () => {
            assert(numberOperations.numberChecker("6"), 6)
        });
        it("should parse a negative string number to number", () => {
            assert(numberOperations.numberChecker("-6"), -6)
        });
        it("should thrown an error if the input is text", () => {
            assert.throw(() => { numberOperations.numberChecker("Test") }, Error)
        });
        it("should thrown an error if the input is object", () => {
            assert.throw(() => { numberOperations.numberChecker({}) }, Error)
        });
        it("should thrown an error if the input is undefined", () => {
            assert.throw(() => { numberOperations.numberChecker(undefined) }, Error)
        });
        it("should return message if the input number is lower than 100", () => {
            assert.equal(numberOperations.numberChecker(99), "The number is lower than 100!")
        });
        it("should return message if the input number is negative", () => {
            assert.equal(numberOperations.numberChecker(-10), "The number is lower than 100!")
        });
        it("should return message if the input number is equal to 100", () => {
            assert.equal(numberOperations.numberChecker(100), "The number is greater or equal to 100!")
        });
        it("should return message if the input number is greater than 100", () => {
            assert.equal(numberOperations.numberChecker(101), "The number is greater or equal to 100!")
        });

    })

    describe("sumArrays function tests", () => {

        it("should return the sum of the two arrays", () => {
            assert.deepEqual(numberOperations.sumArrays([1, 2, 3], [3, 2, 1]), [4, 4, 4]);
        });
        it("should return the sum of the two arrays with differen lengths", () => {
            assert.deepEqual(numberOperations.sumArrays([1, 2, 3, 5], [3, 2, 1]), [4, 4, 4, 5]);
        });
        it("should return the sum of the two arrays with differen lengths", () => {
            assert.deepEqual(numberOperations.sumArrays([1, 2, 3], [3, 2, 1, 4, 5]), [4, 4, 4, 4, 5]);
        });

    })

});
