//arrow function
//1.print odd numbers in an array
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let oddNumbers = numbers.filter(num => num % 2 !== 0);

console.log("Odd numbers:", oddNumbers);
//2.convert all the string to title caps in a string array
let strings = ["hello", "world", "javascript", "example"];

let titleCaseStrings = strings.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());

console.log("Title case strings:", titleCaseStrings);
//3.sum of all numbers in an array
let numbers = [1, 2, 3, 4, 5];

let sum = numbers.reduce((total, current) => total + current, 0);

console.log("Sum of numbers:", sum);
//4.return all prime numbers in an array
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let isPrime = num => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

let primeNumbers = numbers.filter(isPrime);

console.log("Prime numbers:", primeNumbers);
//5.return all the palindromes in an array
let words = ["radar", "level", "hello", "noon", "world", "civic"];

let isPalindrome = word => {
    let lowercaseWord = word.toLowerCase();
    return lowercaseWord === lowercaseWord.split('').reverse().join('');
};

let palindromes = words.filter(isPalindrome);

console.log("Palindromes:", palindromes);
