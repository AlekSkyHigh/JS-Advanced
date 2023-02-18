const companyAdministration = require('./companyAdministration');
const { assert } = require('chai');

describe('companyAdministration`s functions tests', () => {

    describe('hiringEmployee function tests', () => {

        it('should throw an error if the string position is not - programmer', () => {
            assert.throw(() => companyAdministration.hiringEmployee('Alex', 'Manager', 5), Error, /We are not looking for workers for this position./)
        });
        it('should return string hired with 3 years of exp', () => {
            assert.equal(companyAdministration.hiringEmployee('Alex', 'Programmer', 3), 'Alex was successfully hired for the position Programmer.')
        })
        it('should return string hired with exp greater than 3 years', () => {
            assert.equal(companyAdministration.hiringEmployee('Alex', 'Programmer', 5), 'Alex was successfully hired for the position Programmer.')
        });
        it('should return string if not hired', () => {
            assert.equal(companyAdministration.hiringEmployee('Alex', 'Programmer', 2), 'Alex is not approved for this position.')
        });

    })

    describe('calculateSalary function tests', () => {

        it('should throw an error if the parameter is not a number', () => {
            assert.throw(() => companyAdministration.calculateSalary('8'), Error, /Invalid hours/)
        });
        it('should throw an error if the parameter is a negative number', () => {
            assert.throw(() => companyAdministration.calculateSalary(-1), Error, /Invalid hours/)
        });
        it('should return string with the salary amount', () => {
            assert.equal(companyAdministration.calculateSalary(8), '120')
        });
        it('should return string with the salary amount', () => {
            assert.equal(companyAdministration.calculateSalary(165), '3475')
        });
    })

    describe('firedEmployee function tests', () => {

        it('should throw an error if the employee parameter is not an array', () => {
            assert.throw(() => companyAdministration.firedEmployee({}, 1), Error, /Invalid input/)
        });
        it('should throw an error if the employee parameter is not an array', () => {
            assert.throw(() => companyAdministration.firedEmployee('employees', 1), Error, /Invalid input/)
        });
        it('should throw an error if the employee parameter is not an array', () => {
            assert.throw(() => companyAdministration.firedEmployee(10, 1), Error, /Invalid input/)
        });
        it('should throw an error with inccorect index parameter', () => {
            assert.throw(() => companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 2.5), Error, /Invalid input/)
        });
        it('should throw an error with inccorect index parameter', () => {
            assert.throw(() => companyAdministration.firedEmployee(["Petar", "Ivan", "George"], -1), Error, /Invalid input/)
        });
        it('should throw an error with inccorect index parameter', () => {
            assert.throw(() => companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 3), Error, /Invalid input/)
        });
        it('should return string with the result', () => {
            assert.equal(companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 1), 'Petar, George')
        });

    })

})
