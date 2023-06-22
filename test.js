const assert = require('chai').assert;
const StringCalculator = require ('./src/index.js');
const { expect } = require('chai');

//Tasks
describe('TestTDD', () => {
    describe('Tasks:', () => {
        beforeEach(() => {
            this.stringCalc = new StringCalculator();
        });
        //First Task 
        it('Calculate empty string', () => {
            // Test case: Calculate the sum of an empty string
            assert.strictEqual(this.stringCalc.calculate(''), 0);
        });
        //Second Task
        it('Calculate simple string with one element 1', () => {
            // Test case: Calculate the sum of a string with one element
            assert.strictEqual(this.stringCalc.calculate('1'), 1);
        });

        it('Calculate simple string with two elements', () => {
            // Test case: Calculate the sum of a string with two elements
            assert.strictEqual(this.stringCalc.calculate('1,0'), 1);
        });

        it('Calculate simple string with two elements 2', () => {
            // Test case: Calculate the sum of a different string with two elements
            assert.strictEqual(this.stringCalc.calculate('1,133'), 134);
        });

        it('Calculate simple string with one element 2', () => {
            // Test case: Calculate the sum of a different string with one element
            assert.strictEqual(this.stringCalc.calculate('9'), 9);
        });

        it('Calculate simple string with 3 elements', () => {
            // Test case: Calculate the sum of a string with three elements
            assert.strictEqual(this.stringCalc.calculate('5,6,7'), 18);
        });

        it('Calculate simple string with "\\n" delimiter', () => {
            // Test case: Calculate the sum of a string with newline delimiter
            assert.strictEqual(this.stringCalc.calculate('5\n6\n7', '\n'), 18);
        });

        it('Calculate simple string with ";" delimiter', () => {
            // Test case: Calculate the sum of a string with custom delimiter
            assert.strictEqual(this.stringCalc.calculate('5;6;7', ';'), 18);
        });

        it('Calculate string with positive numbers and zero', () => {
            // Test case: Calculate the sum of a string with positive numbers and zero
            assert.strictEqual(this.stringCalc.calculate('1,2,3,0,4,5'), 15);
        });

        it('should throw an exception when negative numbers are present', () => {
            // Test case: Validate that an exception is thrown when negative numbers are present
            expect(() => this.stringCalc.calculate('1,-2,3')).to.throw('Error: Negative numbers not allowed!');
        });

        it('should throw an exception with all negative numbers listed', () => {
            // Test case: Validate that an exception is thrown with all negative numbers listed
            expect(() => this.stringCalc.calculate('-1,-2,3')).to.throw('Error: Negative numbers not allowed! -1, -2');
        });

        it('should not throw an exception when no negative numbers are present', () => {
            // Test case: Validate that no exception is thrown when no negative numbers are present
            expect(() => this.stringCalc.calculate('1,2,3')).to.not.throw();
        });

   });
});
