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
   });
});
