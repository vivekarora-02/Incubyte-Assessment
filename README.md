# Incubyte-Assessment

TDD - String Calculator Kata

# String Calculator TDD Kata

Create a simple String calculator with a method signature:

1. int Add(string numbers)
   The method can take up to two numbers, separated by commas, and will return their sum.

For example "" or "1" or "1,2" as inputs. (for an empty string it will return 0)

Hints:

Start with the simplest test case of an empty string and move to one and two numbers
Remember to solve things as simply as possible so that you force yourself to write tests you did not think about
Remember to refactor after each passing test 2. Allow the Add method to handle an unknown amount of numbers

3. Allow the Add method to handle new lines between numbers (instead of commas).

The following input is ok: "1\n2,3" (will equal 6)
The following input is NOT ok: "1,\n" (not need to prove it - just clarifying)
Support different delimiters

4. To change a delimiter, the beginning of the string will contain a separate line that looks like this: "//[delimiter]\n[numbers…]" for example "//;\n1;2" should return three where the default delimiter is ";"
   The first line is optional. all existing scenarios should still be supported
5. Calling Add with a negative number will throw an exception "negatives not allowed" - and the negative that was passed.

If there are multiple negatives, show all of them in the exception message.

6. Allow the Add method to support different operands (+, -, \*, /).

   The `Add` method should now be enhanced to handle various arithmetic operands in addition to the default addition operation. This means that the method should be able to perform calculations using different arithmetic operations based on the specified operand.

   **Elaboration:**

   - Update the `calculate` method to accept an additional parameter called `operand`.

   - Depending on the value of the `operand` parameter, adjust the calculation logic inside the `calculate` method to perform the corresponding arithmetic operation (addition, subtraction, multiplication, or division).

   - Ensure that the method handles edge cases such as division by zero and throwing appropriate error messages.

   - Update the tests to cover different operand scenarios. For example, test cases with addition (+), subtraction (-), multiplication (\*), and division (/) operands.

   **Example:**

   - For input string `"2,3,5"` and operand `*`, the method should return the result of multiplying 2, 3, and 5, which is 30.

   - For input string `"8,4,2"` and operand `/`, the method should return the result of dividing 8 by 4 and then dividing the result by 2, which is 1.

   - If the operand is not one of the supported arithmetic operations, an appropriate error message should be thrown.

   **Usage:**

   ```javascript
   const stringCalc = new StringCalculator();
   const result = stringCalc.calculate("2,3,5", ",", "*"); // Returns 30
   ```

## Installation/Usage:

`npm install`

`npx mocha`

## Output Image

![Image](https://github.com/vivekarora-02/Incubyte-Assessment/blob/master/outputImages/22.png)

## Thank You ❤️
