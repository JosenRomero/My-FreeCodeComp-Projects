const fizzbuzz = require("./fizzbuzz");

describe("fizzbuzz", () => {

    test("should print 1 if they receive 1", () => {
        const result = fizzbuzz(1);
        expect(result).toBe(1);
    });
    
    test("should print fizz if they receive a multiple of 3", () => {
        const result = fizzbuzz(3);
        expect(result).toBe("fizz");
    });

    test("should print buzz if they receive a multiple of 5", () => {
        const result = fizzbuzz(5);
        expect(result).toBe("buzz");
    });

    test("should print fizzbuzz if they receive a multiple of 3 and 5", () => {
        const result = fizzbuzz(15);
        expect(result).toBe("fizzbuzz");
    });

});