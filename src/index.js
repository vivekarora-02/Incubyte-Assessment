module.exports = class StringCalculator {
  constructor() {}
  calculate(numberString = "", delimiter = ",") {
    let sum = 0;
    const negativeNumbers = [];
    this.convertString(numberString, delimiter).forEach((number) => {
      this.validateNumber(number, negativeNumbers);
      sum += +number;
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
