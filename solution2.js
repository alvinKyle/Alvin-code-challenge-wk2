let start = parseInt(prompt("Enter the first number"));
let end = parseInt(prompt("Enter the second number"));

//Create a function with parameters to pass in the numbers in the function arguments.
function arrayBetween(num1, num2) {

    //The function  determines the smallest and biggest numbers between the two inputs using Math.min and Math.max functions.   
    let smallest = Math.min(num1, num2);
    let biggest = Math.max(num1, num2);

    //An empty array is created to loop through the numbers using th for loop iteration to move between the numbers while pushing each it the array.    
    let array = [];

    for (let i = smallest; i <= biggest; i++) {
        array.push(i)
    }

    //The function returns the array of numbers.
    return array
}

alert(arrayBetween(start, end))
