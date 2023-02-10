const { expect } = require("chai");                             
const { isSymmetric } = require("./05. Check for Symmetry");    

describe("Symmetry Checker", () => {                            
    
    it("Test 1: works with symmetric numeric array", () => {            
        expect(isSymmetric([1, 2, 2, 1])).to.be.true;           
    });

    it("Test 2: return false for non-symmetric array", () => {
        expect(isSymmetric([1, 2, 3])).to.be.false;
    });

    it("Test 3: return false for non array", () => {
        expect(isSymmetric(5)).to.be.false;
    });

    it("Test 4: works with symmetric odd-length array", () => {
        expect(isSymmetric([1, 2, 1])).to.be.true;
    });

    it("Test 5: works with symmetric string array", () => {
        expect(isSymmetric(["a", "b", "b", "a"])).to.be.true;
    });

    it("Test 6: return false for string param", () => {
        expect(isSymmetric("abba")).to.be.false;
    });

    it("Test 7: return false for type mismatched elements", () => {
        expect(isSymmetric([1, 2, "1"])).to.be.false;
    });
});
