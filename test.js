function calculateTotal(items) {
    return items.reduce((a, b) => a + b, 0);
}

// Type 2 clone — renamed
function getSum(numbers) {
    return numbers.reduce((x, y) => x + y, 0);
}

// Type 3 clone — near miss
function getTotalPrice(items) {
    console.log("calculating...");
    return items.reduce((a, b) => a + b, 0);
}

// Type 4 clone — semantic
function sumAll(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}