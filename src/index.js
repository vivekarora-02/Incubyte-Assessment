module.exports = class StringCalculator {
    constructor() {}
    calculate(numberString = '', delimiter = ',') {
        let sum = 0;
        //this will make sure that any numbers of elements (positive) is accepted and summed!
        this.convertString(numberString, delimiter).forEach((number) => {
            sum += +number;
        });
        return sum;
    }
    //updated so as two pass one element as well

    convertString(string, delimiter) {
        return string.split(delimiter); // Split the string by the specified delimiter
    }
};
