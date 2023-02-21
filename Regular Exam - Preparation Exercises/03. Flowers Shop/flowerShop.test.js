const flowerShop = require('./flowerShop');
const { assert } = require('chai');

describe('flowerShop functions tests', () => {

    describe("calcPriceOfFlowers function tests", () => {

        it("should return correct result with correct inputs", () => {
            assert.equal(flowerShop.calcPriceOfFlowers('rose', 2, 5), "You need $10.00 to buy rose!")
        })
        it("should return correct result with correct inputs", () => {
            assert.equal(flowerShop.calcPriceOfFlowers('rose', -2, 5), "You need $-10.00 to buy rose!")
        })
        it("should return correct result with correct inputs", () => {
            assert.equal(flowerShop.calcPriceOfFlowers('rose', 2, -5), "You need $-10.00 to buy rose!")
        })
        it("should trown an error with decimal number for price", () => {
            assert.throw(() => { flowerShop.calcPriceOfFlowers(10, 2.50, 5) }, Error, /Invalid input!/)
        })
        it("should trown an error with decimal number for quantity", () => {
            assert.throw(() => { flowerShop.calcPriceOfFlowers(10, 2, 5.50) }, Error, /Invalid input!/)
        })
        it("should trown an error with wrong input", () => {
            assert.throw(() => { flowerShop.calcPriceOfFlowers(10, 2, 5) }, Error, /Invalid input!/)
        })
        it("should trown an error with wrong input", () => {
            assert.throw(() => { flowerShop.calcPriceOfFlowers([], 2, 5) }, Error, /Invalid input!/)
        })
        it("should trown an error with wrong input", () => {
            assert.throw(() => { flowerShop.calcPriceOfFlowers({}, 2, 5) }, Error, /Invalid input!/)
        })
        it("should trown an error with wrong input", () => {
            assert.throw(() => { flowerShop.calcPriceOfFlowers('rose', '2', 5) }, Error, /Invalid input!/)
        })
        it("should trown an error with wrong input", () => {
            assert.throw(() => { flowerShop.calcPriceOfFlowers('rose', 2, '5') }, Error, /Invalid input!/)
        })
        it("should trown an error with wrong input", () => {
            assert.throw(() => { flowerShop.calcPriceOfFlowers('rose', [], 5) }, Error, /Invalid input!/)
        })
        it("should trown an error with wrong input", () => {
            assert.throw(() => { flowerShop.calcPriceOfFlowers('rose', 2, []) }, Error, /Invalid input!/)
        })
        it("should trown an error with wrong input", () => {
            assert.throw(() => { flowerShop.calcPriceOfFlowers('rose', {}, 5) }, Error, /Invalid input!/)
        })
        it("should trown an error with wrong input", () => {
            assert.throw(() => { flowerShop.calcPriceOfFlowers('rose', 2, {}) }, Error, /Invalid input!/)
        })

    })

    describe("checkFlowersAvailable function tests", () => {

        it("should return string when flower is present in the array", () => {
            assert.equal(flowerShop.checkFlowersAvailable('rose', ['rose', 'lily', 'orchid']), 'The rose are available!')
        });
        it("should return string when flower is not present in the array", () => {
            assert.equal(flowerShop.checkFlowersAvailable('rose', ['lily', 'orchid']), 'The rose are sold! You need to purchase more!')
        });

    })

    describe("sellFlowers function tests", () => {

        it("should trow an error if the first parameter is not an array", () => {
            assert.throw(() => { flowerShop.sellFlowers({}, 2) }, Error, /Invalid input!/)
        });
        it("should trow an error if the first parameter is not an array", () => {
            assert.throw(() => { flowerShop.sellFlowers('string', 2) }, Error, /Invalid input!/)
        });
        it("should trow an error if the first parameter is not an array", () => {
            assert.throw(() => { flowerShop.sellFlowers(10, 2) }, Error, /Invalid input!/)
        });
        it("should trow an error if the second parameter is not a number", () => {
            assert.throw(() => { flowerShop.sellFlowers(['rose', 'lily', 'orchid'], {}) }, Error, /Invalid input!/)
        });
        it("should trow an error if the second parameter is not a number", () => {
            assert.throw(() => { flowerShop.sellFlowers(['rose', 'lily', 'orchid'], []) }, Error, /Invalid input!/)
        });
        it("should trow an error if the second parameter is not a number", () => {
            assert.throw(() => { flowerShop.sellFlowers(['rose', 'lily', 'orchid'], 'string') }, Error, /Invalid input!/)
        });
        it("should trow an error if the second parameter is negative", () => {
            assert.throw(() => { flowerShop.sellFlowers(['rose', 'lily', 'orchid'], -1) }, Error, /Invalid input!/)
        });
        it("should trow an error if the second parameter is greater than array`s length", () => {
            assert.throw(() => { flowerShop.sellFlowers(['rose', 'lily', 'orchid'], 4) }, Error, /Invalid input!/)
        });
        it("should return result string with the removed flower from the array", () => {
            assert.equal(flowerShop.sellFlowers(['rose', 'lily', 'orchid'], 1 ), 'rose / orchid')
        });

    })

})
