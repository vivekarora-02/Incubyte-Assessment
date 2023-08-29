const StringCalculator = require("./src/index.js");
const { expect, assert } = require("chai");

//Tasks
describe("TestTDD", () => {
  describe("Tasks:", () => {
    beforeEach(() => {
      this.stringCalc = new StringCalculator();
    });
    //First Task
    it("Calculate empty string", () => {
      // Test case: Calculate the sum of an empty string
      assert.strictEqual(this.stringCalc.calculate(""), 0);
    });
    //Second Task
    it("Calculate simple string with one element 1", () => {
      // Test case: Calculate the sum of a string with one element
      assert.strictEqual(this.stringCalc.calculate("1"), 1);
    });

    it("Calculate simple string with two elements", () => {
      // Test case: Calculate the sum of a string with two elements
      assert.strictEqual(this.stringCalc.calculate("1,0"), 1);
    });

    it("Calculate simple string with two elements 2", () => {
      // Test case: Calculate the sum of a different string with two elements
      assert.strictEqual(this.stringCalc.calculate("1,133"), 134);
    });

    it("Calculate simple string with one element 2", () => {
      // Test case: Calculate the sum of a different string with one element
      assert.strictEqual(this.stringCalc.calculate("9"), 9);
    });

    it("Calculate simple string with 3 elements", () => {
      // Test case: Calculate the sum of a string with three elements
      assert.strictEqual(this.stringCalc.calculate("5,6,7"), 18);
    });

    it('Calculate simple string with "\\n" delimiter', () => {
      // Test case: Calculate the sum of a string with newline delimiter
      assert.strictEqual(this.stringCalc.calculate("5\n6\n7", "\n"), 18);
    });

    it('Calculate simple string with ";" delimiter', () => {
      // Test case: Calculate the sum of a string with custom delimiter
      assert.strictEqual(this.stringCalc.calculate("5;6;7", ";"), 18);
    });

    it("Calculate string with positive numbers and zero", () => {
      // Test case: Calculate the sum of a string with positive numbers and zero
      assert.strictEqual(this.stringCalc.calculate("1,2,3,0,4,5"), 15);
    });

    it("should throw an exception when negative numbers are present", () => {
      // Test case: Validate that an exception is thrown when negative numbers are present
      expect(() => this.stringCalc.calculate("1,-2,3")).to.throw(
        "Error: Negative numbers not allowed!"
      );
    });

    it("should throw an exception with all negative numbers listed", () => {
      // Test case: Validate that an exception is thrown with all negative numbers listed
      expect(() => this.stringCalc.calculate("-1,-2,3")).to.throw(
        "Error: Negative numbers not allowed! -1, -2"
      );
    });

    it("should not throw an exception when no negative numbers are present", () => {
      // Test case: Validate that no exception is thrown when no negative numbers are present
      expect(() => this.stringCalc.calculate("1,2,3")).to.not.throw();
    });

    it("Calculate difference with subtraction (-) operand", () => {
      // Test case: Calculate the difference using the subtraction operand
      assert.strictEqual(this.stringCalc.calculate("10,5,2", ",", "-"), 3);
    });

    it("Throw error for unsupported operand", () => {
      // Test case: Check if an error is thrown for an unsupported operand
      expect(() => this.stringCalc.calculate("5,3", ",", "^")).to.throw(
        "Error: Unsupported operand: ^"
      );
    });
    it("Calculate sum with addition (+) operand", () => {
      // Test case: Calculate the sum using the addition operand
      assert.strictEqual(this.stringCalc.calculate("1,2,3", ",", "+"), 6);
    });

    it("Calculate product with multiplication (*) operand", () => {
      // Test case: Calculate the product using the multiplication operand
      assert.strictEqual(this.stringCalc.calculate("2,3,4", ",", "*"), 24);
    });

    it("Calculate quotient with division (/) operand", () => {
      // Test case: Calculate the quotient using the division operand
      assert.strictEqual(this.stringCalc.calculate("10,2,2", ",", "/"), 2.5);
    });

    it("should throw an exception for division by zero", () => {
      // Test case: Validate that an exception is thrown for division by zero
      expect(() => this.stringCalc.calculate("10,0", ",", "/")).to.throw(
        "Error: Division by zero"
      );
    });
    it("Calculate with custom delimiter and division", () => {
      // Test case: Calculate with custom delimiter and division operand
      assert.strictEqual(this.stringCalc.calculate("25;5;2", ";", "/"), 2.5);
    });

    it("should throw an exception for negative numbers during division", () => {
      // Test case: Validate that an exception is thrown for negative numbers during division
      expect(() => this.stringCalc.calculate("12,-3,4", ",", "/")).to.throw(
        "Error: Negative numbers not allowed! -3"
      );
    });
    it("Throw error for unsupported operand", () => {
      // Test case: Validate that an exception is thrown for unsupported operand
      expect(() => this.stringCalc.calculate("1,2,3", ",", "^")).to.throw(
        "Error: Unsupported operand: ^"
      );
    });

    it("Calculate with multiplication and division", () => {
      // Test case: Calculate using multiplication and division operands
      assert.strictEqual(this.stringCalc.calculate("6,3,2", ",", "*"), 36); // 6 * 3 * 2 = 36
    });

    it("Calculate with negative numbers and multiplication", () => {
      // Test case: Calculate with negative numbers and multiplication operand
      assert.strictEqual(this.stringCalc.calculate("-2,-3,4", ",", "*"), 24); // -2 * -3 * 4 = 24
    });

    it("Calculate division with result as floating point number", () => {
      // Test case: Calculate division with result as floating point number
      assert.approximately(
        this.stringCalc.calculate("5,2", ",", "/"),
        2.5,
        0.0001
      ); // 5 / 2 = 2.5
    });
  });
});
