const lookupChar = require('./03.charLookup');
const { assert } = require('chai');

describe('lookupChar function tests', () => {

    it('Return char at index', () => {
        assert(lookupChar('Love', 1) === 'o');
    });

    it('Return char at index', () => {
        assert(lookupChar('L', 0) === 'L');
    });

    it('Index over the string length', () => { 
        assert(lookupChar('Love', 10) === 'Incorrect index');
    });

    it('Negative string index', () => {
        assert(lookupChar('Love', -10) === 'Incorrect index');
    });

    it('Empty string as input', () => {
        assert(lookupChar('', 0) === 'Incorrect index');
    });

    it('Return undefined if first parameter is not string', () => {
        assert(lookupChar(100, 10) === undefined);
    });

    it('Return undefined with string first parameter and decimal second', () => {
        assert(lookupChar('Love', 10.5) === undefined);
    });

    it('Return undefined with wrong parameters type', () => {
        assert(lookupChar(10, '10.5') === undefined);
    });

});
