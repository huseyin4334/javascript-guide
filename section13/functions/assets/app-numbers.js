/*
    Numbers:
    - 64-bit floating point numbers
    - Number.MAX_SAFE_INTEGER
        - 2^53 - 1 -> 9007199254740991
    - Number.MIN_SAFE_INTEGER
        - -2^53 + 1 -> -9007199254740991
    - Number.MAX_VALUE
        - 1.7976931348623157e+308

    0.2 + 0.4 = 0.6000000000000001
    0.2 + 0.4 === 0.6 -> false

    (5).toString() -> "5"
    (5).toString(2) -> "101" (binary)
    (5).toString(8) -> "5" (octal)
    (5).toString(16) -> "5" (hexadecimal)

    5..toFixed(2) -> "5.00"

    // That's important
    20.2.toFixed(20) -> "20.20000000000000284217"
    20.2.toFixed(2) -> "20.20"
*/


/*
    BigInt:
    - 64-bit
    - I can use if I need to use numbers bigger than 2^53 - 1
    - 9007199254740991n
    - 9007199254740991n + 100000n -> 9007199254741091n
    - 9007199254740991n + 100000 -> Error
    - You can't mix BigInt and Number


    Infinity:
    - 1 / 0 -> Infinity
    - -1 / 0 -> -Infinity
    - Number.NEGATIVE_INFINITY -> -Infinity
    - Number.POSITIVE_INFINITY -> Infinity
    - I can call Infinity as a global object
    - Number.isFinite
        - We can use this method to check if a number is finite or not
        - Number.isFinite(1 / 0) -> false
        - Number.isFinite(10) -> true
*/

// Tagged Templates
// we can use tagged templates to parse template literals with a function
// In the below example, we used productDescription function as a tagged template
// Template literals will be parsed like, first string parsed strings array, second and third strings parsed as productName and productPrice

function productDescription(strings, productName, productPrice) {
    console.log(strings);
    console.log(productName);
    console.log(productPrice);
    
    let priceCategory = "cheap";
    
    if (productPrice > 20) {
        priceCategory = "fair";
    }
    
    // return `${strings[0]}${productName}${strings[1]}${priceCategory}${strings[2]}`;
    return { name: productName, price: productPrice };
}

const prodName = "JavaScript Course";
const prodPrice = 29.99;
const ou = "test";

const productOutput = productDescription`This product (${prodName}) is ${prodPrice}. ${ou}`;
console.log(productOutput);


/*
    Regex:
    - Regular Expression
    - new RegExp("pattern", "flags")
    - const regex = /^hello$/i
    - regex.test("hello") -> true
*/