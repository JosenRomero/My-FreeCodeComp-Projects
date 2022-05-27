
const fizzbuzz = (num) => {

    const divisible = (num, divisor) => num % divisor === 0

    if(num === 0) return 0
    if(divisible(num, 3) && divisible(num, 5)) return "fizzbuzz"
    if(divisible(num, 3)) return "fizz"
    if(divisible(num, 5)) return "buzz"
    
    return num
}

const printNumbers = (num) => {

    for (let i = 0; i <= num; i++) {
        console.log(`${fizzbuzz(i)}`)
    }
}

printNumbers(16);

module.exports = fizzbuzz