module.exports = class StringCalculator {
  constructor() {}
  calculate(numberString = "", delimiter = ",", operand = "+") {
    let sum = 0;
    const negativeNumbers = [];

    if (!["+", "-", "*", "/"].includes(operand)) {
      throw new Error(`Error: Unsupported operand: ${operand}`);
    }

    this.convertString(numberString, delimiter).forEach((number, index) => {
      this.validateNumber(number, negativeNumbers);
      if (index === 0) {
        sum = +number;
      } else {
        switch (operand) {
          case "+":
            sum += +number;
            break;
          case "-":
            sum -= +number;
            break;
          case "*":
            sum *= +number;
            break;
          case "/":
            if (+number === 0) {
              throw new Error(`Error: Division by zero`);
            }
            sum /= +number;
            break;
        }
      }
    });

    if (negativeNumbers.length > 0) {
      throw new Error(
        `Error: Negative numbers not allowed! ${negativeNumbers.join(", ")}`
      );
    }
    return sum;
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
