let inputArray = [1, 1, 1];

if (inputArray.length > 0) {
    let refElem = inputArray[0];
    let result = inputArray.every(item => item === refElem);

    console.log(result ? "All elements are the same"
                    : "Array elements are not the same");
} else {
    console.log("Array is empty");
}

