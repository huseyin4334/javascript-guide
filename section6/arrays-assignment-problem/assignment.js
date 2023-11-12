// 1. Assignment

const arr = [5, 6, 7, 8, 9];

const greaterThan5 = arr.filter((value) => value > 5);

console.log(greaterThan5);

console.log(arr.map((value) => ({ num: value })));

console.log(
    arr.reduce(
        (prev, curr, index, all) => {
            return prev += curr;
        }, 0
    )
);

function findMax() {
    const arr = arguments[0];
    return arr.reduce(
        (prev, curr) => {
            return prev > curr ? prev : curr;
        }, arr[0]
    )
}

const maxInArr = findMax(greaterThan5);

console.log(maxInArr);

function findMaxSecondEdition() {
    const arr = arguments[0];
    const maxVal = arr.reduce(
        (prev, curr) => {
            return prev > curr ? prev : curr;
        }, arr[0]
    );

    const minVal = arr.reduce(
        (prev, curr) => {
            return prev < curr ? prev : curr;
        }, arr[0]
    );

    return [maxVal, minVal];
}

const [maxVal, minVal] = findMaxSecondEdition(greaterThan5);

console.log(maxVal, minVal);

function createUniqueList() {
    return Array.from(
        new Set(arguments[0]).keys()
    );
}

console.log(
    createUniqueList([4,5,6,7,8,7,8,5,4,3,1,4])
);