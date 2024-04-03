

// Numbers to be entered into the array
let start = parseInt(prompt("Enter the first number"));
let end = parseInt(prompt("Enter the second number"));
//function to determine if a number is a prime number
function Prime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
// function to determine prime numbers between two sets of numbers
function primeNumbers(start, end) {
    let array = [];

    for (let i = start; i <= end; i++) {
        if (Prime(i)) {
            array.push(i);
        }
    }

    return array;
}
// returns an alert showing the prime numbers
let primes = primeNumbers(start, end);
if (primes.length > 0) {
    alert("Prime numbers between " + start + " and " + end + ": " + primes.join(", "));
} else {
    alert("No prime numbers found between " + start + " and " + end);
}
