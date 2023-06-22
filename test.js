const assert = require('chai').assert;
const StringCalculator = require ('./src/index.js');
const { expect } = require('chai');

//Tasks
describe('TestTDD', () => {
    describe('Tasks:', () => {
        beforeEach(() => {
            this.stringCalc = new StringCalculator();
        });
        //First Test Case
        it('Calculate empty string', () => {
            // Test case: Calculate the sum of an empty string
            assert.strictEqual(this.stringCalc.calculate(''), 0);
        });
   });
});
