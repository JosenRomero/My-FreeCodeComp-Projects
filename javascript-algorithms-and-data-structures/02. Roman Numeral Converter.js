// Javascript Algorithms and Data Structures - projects - Roman Numeral Converter

/*
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.
*/

function convertToRoman(num) {

    let decimalSystem = [1, 10, 100, 1000]; // 1 ones, 10 tens, 100 hundreds, 1000 thousands

    const arrNumbers = [
        {},
        { 1: "I", 2: "II", 3: "III", 4: "IV", 5: "V", 6: "VI", 7: "VII", 8: "VIII", 9: "IX" }, // ones
        { 10: "X", 20: "XX", 30: "XXX", 40: "XL", 50: "L", 60: "LX", 70: "LXX", 80: "LXXX", 90: "XC" }, // tens
        { 100: "C", 200: "CC", 300: "CCC", 400: "CD", 500: "D", 600: "DC", 700: "DCC", 800: "DCCC", 900: "CM" }, // hundreds
        { 1000: "M", 2000: "MM", 3000: "MMM" } // thousands
    ]

    // for example num = 368 runArr([8, 6, 3]) return 'CCCLXVIII'    
    const runArr = (arr) => arr.reduce((t, v, i) => t += `${getPlaceValueOfTheDigit(v, i)} `, "").split(" ").reverse().join("")

    // get place value of the digits in a number, for example, 3 hundreds  getPlaceValueOfTheDigit(3, 2) return 300
    const getPlaceValueOfTheDigit = (digit, index) => convertNumberToRoman(digit * decimalSystem[index])

    // for example convertNumberToRoman(300) return "CCC"
    const convertNumberToRoman = (number) => (arrNumbers[number.toString().length][number]) ? arrNumbers[number.toString().length][number] : ""

    return runArr(num.toString().split("").reverse())

}


console.log(convertToRoman(36)); // XXXVI