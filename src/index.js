module.exports = function toReadable(number) {
    const arrayOfNumbers = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
        "twenty",
        "twenty one",
        "twenty two",
        "twenty three",
        "twenty four",
        "twenty five",
        "twenty six",
        "twenty seven",
        "twenty eight",
        "twenty nine",
        "thirty",
        "thirty one",
        "thirty two",
        "thirty three",
        "thirty four",
        "thirty five",
        "thirty six",
        "thirty seven",
        "thirty eight",
        "thirty nine",
        "forty",
        "forty one",
        "forty two",
        "forty three",
        "forty four",
        "forty five",
        "forty six",
        "forty seven",
        "forty eight",
        "forty nine",
        "fifty",
        "fifty one",
        "fifty two",
        "fifty three",
        "fifty four",
        "fifty five",
        "fifty six",
        "fifty seven",
        "fifty eight",
        "fifty nine",
        "sixty",
        "sixty one",
        "sixty two",
        "sixty three",
        "sixty four",
        "sixty five",
        "sixty six",
        "sixty seven",
        "sixty eight",
        "sixty nine",
        "seventy",
        "seventy one",
        "seventy two",
        "seventy three",
        "seventy four",
        "seventy five",
        "seventy six",
        "seventy seven",
        "seventy eight",
        "seventy nine",
        "eighty",
        "eighty one",
        "eighty two",
        "eighty three",
        "eighty four",
        "eighty five",
        "eighty six",
        "eighty seven",
        "eighty eight",
        "eighty nine",
        "ninety",
        "ninety one",
        "ninety two",
        "ninety three",
        "ninety four",
        "ninety five",
        "ninety six",
        "ninety seven",
        "ninety eight",
        "ninety nine",
    ];

    const arrayOfHundredthNumbers = [
        "",
        "one hundred",
        "two hundred",
        "three hundred",
        "four hundred",
        "five hundred",
        "six hundred",
        "seven hundred",
        "eight hundred",
        "nine hundred",
    ];

    const numberToString = number.toString();

    const firstNumber = numberToString[0];
    const secondNumber = +(numberToString[1] + numberToString[2]);
    if (number <= 99) {
        return arrayOfNumbers[`${number}`];
    } else if (
        number === 100 ||
        number === 200 ||
        number === 300 ||
        number === 400 ||
        number === 500 ||
        number === 600 ||
        number === 700 ||
        number === 800 ||
        number === 900
    ) {
        return arrayOfHundredthNumbers[`${firstNumber}`];
    } else {
        return (
            arrayOfHundredthNumbers[`${firstNumber}`] +
            " " +
            arrayOfNumbers[`${secondNumber}`]
        );
    }
};
