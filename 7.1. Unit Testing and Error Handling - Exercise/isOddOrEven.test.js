const isOddOrEven = require('./02.evenOrOdd');
const { assert } = require('chai');

describe('isOddOrEven function tests', () => {

    // invalid input tests:
    it('should return undefined if the parameter is number', () => {
        assert.equal(isOddOrEven(10), undefined);
    });

    it('should return undefined if the parameter is object', () => {
        assert.equal(isOddOrEven({}), undefined);
    });

    it('should return undefined if the parameter is array', () => {
        assert.equal(isOddOrEven([]), undefined);
    });

    it('should return undefined if the parameter is undefined', () => {
        assert.equal(isOddOrEven(undefined), undefined);
    });

    it('should return undefined if the parameter is null', () => {
        assert.equal(isOddOrEven(null), undefined);
    });

    // valid input tests:
    it('should return even as result', () => {
        assert.equal(isOddOrEven('hi'), 'even');
    });

    it('should return odd as result', () => {
        assert.equal(isOddOrEven('hello'), 'odd');
    });

});
