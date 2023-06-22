module.exports = class StringCalculator {
    constructor() {}
    calculate(numberString = '', delimiter = ',') {
        let sum = 0;
        //this will make sure that any numbers of elements (positive) is accepted and summed!
        //Calculate the sum of a string with positive numbers and zero
        this.convertString(numberString, delimiter).forEach((number) => {
            sum += +number;
        });
        return sum;
    }
    //updated so as two pass one element as well
    //this will make sure that, Calculate the sum of a string with custom delimiter!
    convertString(string, delimiter) {
        return string.split(delimiter); // Split the string by the specified delimiter
    }
};
