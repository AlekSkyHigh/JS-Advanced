const mathEnforcer = require('./04.mathEnforcer');
const { assert } = require('chai');

describe('mathEnforcer function tests', () => {

    describe('add five function test', () => {
        // tests with incorrect input:
        it('Should return unefined with string', () => {
            assert(mathEnforcer.addFive('TEST') === undefined);
        });
        it('Should return unefined with an array', () => {
            assert(mathEnforcer.addFive([]) === undefined);
        });
        it('Should return unefined with an object', () => {
            assert(mathEnforcer.addFive({}) === undefined);
        });
        it('Should return unefined with undefined', () => {
            assert(mathEnforcer.addFive(undefined) === undefined);
        });
        it('Should return unefined with null', () => {
            assert(mathEnforcer.addFive(null) === undefined);
        });

        //tests with correct input:
        it('Positive integer +5', () => {
            assert(mathEnforcer.addFive(5) === 10);
        });
        it('Negative integer +5', () => {
            assert(mathEnforcer.addFive(-4) === 1);
        });
        it('Positive decimal +5', () => {
            assert(mathEnforcer.addFive(5.5) === 10.5);
        });

    });

    describe('subtract ten function test', () => {

        // tests with incorrect input:
        it('Should return unefined with string', () => {
            assert(mathEnforcer.subtractTen('TEST') === undefined);
        });
        it('Should return unefined with an array', () => {
            assert(mathEnforcer.subtractTen([]) === undefined);
        });
        it('Should return unefined with an object', () => {
            assert(mathEnforcer.subtractTen({}) === undefined);
        });
        it('Should return unefined with undefined', () => {
            assert(mathEnforcer.subtractTen(undefined) === undefined);
        });
        it('Should return unefined with null', () => {
            assert(mathEnforcer.subtractTen(null) === undefined);
        });

        //tests with correct input:
        it('Positive integer -10', () => {
            assert(mathEnforcer.subtractTen(5) === -5);
        });
        it('Negative integer -10', () => {
            assert(mathEnforcer.subtractTen(-5) === -15);
        });
        it('Positive decimal -10', () => {
            assert(mathEnforcer.subtractTen(15.5) === 5.5);
        });

    });

    describe('sum of two nubmers function test', () => {
        // Tests with correct inputs:
        it('Two positive integer numbers', () => {
            assert(mathEnforcer.sum(10, 20) === 30)
        });
        it('Two negative numbers', () => {
            assert(mathEnforcer.sum(-10, -2.5) === -12.5)
        });
        it('Two decimal numbers', () => {
            assert(mathEnforcer.sum(10.5, 2.1) === 12.6)
        });

        // Tests with incorrect inputs:
        it('First parameter string, second number', () => {
            assert(mathEnforcer.sum('', 20) === undefined);
        })
        it('First parameter number, second string', () => {
            assert(mathEnforcer.sum(20, '') === undefined);
        })
    
    });

});
