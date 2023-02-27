const bookSelection = require('./bookSelection');
const { assert } = require('chai');

describe("Tests bookSelection functiontality", () => {

    describe("isGenreSuitable function tests", () => {

        it("Test with Horror ganre and age less than 12", () => {
            assert.equal(bookSelection.isGenreSuitable("Horror", 10), 'Books with Horror genre are not suitable for kids at 10 age');
        });
        it("Test with Horror ganre and age less than 12", () => {
            assert.equal(bookSelection.isGenreSuitable("Thriller", 10), 'Books with Thriller genre are not suitable for kids at 10 age');
        });
        it("Test with Horror ganre and age less than 12", () => {
            assert.equal(bookSelection.isGenreSuitable("Horror", 12), 'Books with Horror genre are not suitable for kids at 12 age');
        });
        it("Test with Thriller ganre and age equal to 12", () => {
            assert.equal(bookSelection.isGenreSuitable("Thriller", 12), 'Books with Thriller genre are not suitable for kids at 12 age');
        });
        it("Positive test where condintions are met", () => {
            assert.equal(bookSelection.isGenreSuitable("Thriller", 15), 'Those books are suitable');
        });
        it("Positive test where condintions are met", () => {
            assert.equal(bookSelection.isGenreSuitable("Comedy", 8), 'Those books are suitable');
        });
        
    });

    describe("isItAffordable function tests", () => {

        it("When budget is negative has to return string", () => {
            assert.equal(bookSelection.isItAffordable(10, 5), "You don't have enough money");
        });
        it("When budget is zero has to return string", () => {
            assert.equal(bookSelection.isItAffordable(5, 5), "Book bought. You have 0$ left");
        });
        it("When budget is positive has to return string", () => {
            assert.equal(bookSelection.isItAffordable(5, 15), "Book bought. You have 10$ left");
        });
        it("Should throw an error if the price input is not a number", () => {
            assert.throw(() => { bookSelection.isItAffordable("10", 5) }, Error, /Invalid input/);
        });
        it("Should throw an error if the budget input is not a number", () => {
            assert.throw(() => { bookSelection.isItAffordable(10, "5") }, Error, /Invalid input/);
        });
        it("Should throw an error if the price input is an object", () => {
            assert.throw(() => { bookSelection.isItAffordable({}, 10) }, Error, /Invalid input/);
        });
        it("Should throw an error if the budget input is an an array", () => {
            assert.throw(() => { bookSelection.isItAffordable(5, [10]) }, Error, /Invalid input/);
        });
        
    });

    describe("suitableTitles function tests", () => {

        it("Should throw an error if the input is an object", () => {
            assert.throw(() => { bookSelection.suitableTitles({}, "Thriller") }, Error, /Invalid input/);
        });
        it("Should throw an error if the wanted ganre is not a string", () => {
            assert.throw(() => { bookSelection.suitableTitles([], 123) }, Error, /Invalid input/);
        });
        it("Positive test where condintions are met", () => {
            assert(bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }], "Thriller"), '[The Da Vinci Code]');
        });
        it("Negative test where condintions are not met", () => {
            assert(bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }], "Comedy"), '[]');
        });
      
    });

});
