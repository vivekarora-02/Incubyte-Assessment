module.exports = class StringCalculator {
  constructor() {}

  calculate(numberString = "", delimiter = ",", operand = "+") {
    const supportedOperands = ["+", "-", "*", "/"];
    const negativeNumbers = [];
    let result = 0;

    if (!supportedOperands.includes(operand)) {
      throw new Error(`Error: Unsupported operand: ${operand}`);
    }

    this.convertString(numberString, delimiter).forEach((number, index) => {
      this.validateNumber(number, negativeNumbers);
      if (index === 0) {
        result = +number;
      } else {
        switch (operand) {
          case "+":
            result += +number;
            break;
          case "-":
            result -= +number;
            break;
          case "*":
            result *= +number;
            break;
          case "/":
            if (+number === 0) {
              throw new Error("Error: Division by zero");
            }
            result /= +number;
            break;
        }
      }
    });

    if (negativeNumbers.length > 0) {
      throw new Error(
        `Error: Negative numbers not allowed! ${negativeNumbers.join(", ")}`
      );
    }

    return result;
  }

  convertString(string, delimiter) {
    return string.split(delimiter);
  }

  validateNumber(number, negativeNumbers) {
    if (number < 0) {
      negativeNumbers.push(number);
    }
  }
};
