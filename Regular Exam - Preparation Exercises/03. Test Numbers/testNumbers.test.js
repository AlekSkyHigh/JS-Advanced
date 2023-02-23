const testNumbers = require('./testNumbers');
const { assert } = require('chai');

describe('testNumbers`s functions tests', () => {

    describe('sumNumber function tests', () => {

        it('should return undefined if parameters are not numbers', () => {
            assert.equal(testNumbers.sumNumbers('10', 10), undefined)
        });
        it('should return undefined if parameters are not numbers', () => {
            assert.equal(testNumbers.sumNumbers(10, '10'), undefined)
        });
        it('should return undefined if parameters are not numbers', () => {
            assert.equal(testNumbers.sumNumbers(10, []), undefined)
        });
        it('should return undefined if parameters are not numbers', () => {
            assert.equal(testNumbers.sumNumbers({}, 10), undefined)
        });
        it('should return correct result', () => {
            assert.equal(testNumbers.sumNumbers(10, 10), '20.00')
        });
        

    })

    describe('numberChecker function tests', () => {

        it('should throw an error if the parameter is not a number', () => {
            assert.throw(() => testNumbers.numberChecker({}), Error, /The input is not a number!/)
        });
        it('should throw an error if the parameter is not a number', () => {
            assert.throw(() => testNumbers.numberChecker('number'), Error, /The input is not a number!/)
        });
        it('should return correct result', () => {
            assert.equal(testNumbers.numberChecker(2), 'The number is even!')
        });
        it('should return correct result', () => {
            assert.equal(testNumbers.numberChecker(1), 'The number is odd!')
        });
      
       
    })

    describe('averageSumArray function tests', () => {

        it('should return correct result', () => {
            assert.equal(testNumbers.averageSumArray([10,20,30]), '20')
        });

    })

})
