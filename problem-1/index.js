// grab input from input.txt
// parse into strings
// read first and last digits
    // get all the digits from the string with regex
    // get the first and last digits and combine (a + b = ab)
    // if only one digit 
// combine a & b to become ab
    // coerce to string ("" + a + b = "ab")
// sum all results
    // coerce to integer

const fs = require('fs');
const data = fs.readFileSync('input.txt', 'utf8');
const input = data.split(/\n/);

let calibrationValSum = 0;

const calibrationVal = () => {
    calibrationValSum = 0


    input.map((string) => {
        let firstMatch = string.match(/(\d{1})/);
        let lastMatch = string.match(/(\d{1})(?!.*\d+)/);

        if (!firstMatch || !lastMatch) {
            return
        };

        let first = firstMatch[0];
        let last = lastMatch[0];

        let calVal = first + last;

        calibrationValSum += parseInt(calVal)
    });

    return calibrationValSum
};

console.log(calibrationVal())

// let string = input[0]

// let first = string.match(/(\d{1})/)[0];
// let last = string.match(/(\d{1})(?!.*\d+)/)[0];

// let calVal = first + last;

// calibrationValSum += parseInt(calVal)

// console.log(calibrationValSum)

// input.map((string) => {
//     let firstMatch = string.match(/(\d{1})/);
//     let lastMatch = string.match(/(\d{1})(?!.*\d+)/);

//     if(!firstMatch || !lastMatch ) {
//         return
//     };

//     let first = firstMatch[0];

//     console.log(first)
// });