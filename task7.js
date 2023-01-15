let inputArray = [1, 1, 1, 0, 1.0000001, 2, 123, null, undefined, NaN, Infinity, -Infinity, [1, 2], {}, BigInt(1)];

let oddCount = 0;
let evenCount = 0;
let zeroCount = 0;
let precission = 0.000000001;

inputArray.forEach(item => {
    if (typeof item !== "number" 
            || Math.abs(Math.round(item) - item) > precission
            || Number.isNaN(item)
            || !Number.isFinite(item))
        return;
    if (item === 0)
        zeroCount++;
    else 
        item % 2 == 0 ? evenCount++ : oddCount++;
});

console.log(`Array has: \n zeros: ${zeroCount} 
                        \n odds: ${oddCount} 
                        \n evens: ${evenCount}`);