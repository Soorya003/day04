//anonymous function
//1. print odd numbers in an array
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let oddNumbers = numbers.filter(function(num) {
    return num % 2 !== 0;
});

console.log("Odd numbers:", oddNumbers);
//2.convert all the string to title caps in a string array
let strings = ["hello", "world", "javascript", "example"];

let titleCaseStrings = strings.map(function(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
});

console.log("Title case strings:", titleCaseStrings);
//3.sum of all numbers in an array
let numbers = [1, 2, 3, 4, 5];

let sum = numbers.reduce(function(total, current) {
    return total + current;
}, 0);

console.log("Sum of numbers:", sum);
//4.return all prime numbers in an array
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let primeNumbers = numbers.filter(function(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
});

console.log("Prime numbers:", primeNumbers);
//5.return all the palindromes in an array
let words = ["radar", "level", "hello", "noon", "world", "civic"];

let palindromes = words.filter(function(word) {
    // Convert the word to lowercase for case-insensitive comparison
    let lowercaseWord = word.toLowerCase();
    
    // Check if the word is equal to its reverse
    return lowercaseWord === lowercaseWord.split('').reverse().join('');
});

console.log("Palindromes:", palindromes);
//6.return median of two sorted arrays of the same size
let arr1 = [1, 3, 5];
let arr2 = [2, 4, 6];

let median = (function() {
    let mergeArrays = arr1.concat(arr2).sort((a, b) => a - b);
    let medianIndex = Math.floor(mergeArrays.length / 2);

    return mergeArrays.length % 2 === 0 ? 
        (mergeArrays[medianIndex - 1] + mergeArrays[medianIndex]) / 2 : 
        mergeArrays[medianIndex];
})();

console.log("Median:", median);
//7.remove duplicates from an array
let array = [1, 2, 3, 4, 2, 3, 5, 6, 1];

let uniqueArray = array.filter(function(item, index) {
    // Return true only if the current index is the first occurrence of the item
    return array.indexOf(item) === index;
});

console.log("Array with duplicates removed:", uniqueArray);
//8.rotate an array by k times
let array = [1, 2, 3, 4, 5];
let k = 3; // Number of times to rotate

let rotatedArray = (function(arr, rotations) {
    let rotated = arr.slice(rotations).concat(arr.slice(0, rotations));
    return rotated;
})(array, k);

console.log("Rotated array:", rotatedArray);


