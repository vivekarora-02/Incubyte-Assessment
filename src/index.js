module.exports = class StringCalculator {
    constructor() {}

    calculate(numberString = '', delimiter = ',') {
        let sum = 0;
        this.convertString(numberString, delimiter).forEach((number) => {
            sum += +number;
        });

        
        return sum;
    }

    convertString(string, delimiter) {
        return string.split(delimiter); // Split the string by the specified delimiter
    }

};
