// 1) 
function checkDivisibleBy3And7(n) {
    if (n % 3 === 0 && n % 7 === 0) {
        return true;
    } else {
        return false;
    }
}

// 2) 
function factorial(n) {
    if (n < 0) return undefined; 
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

// 3)
function sumOfSquaresOfEvenNumbers(arr) {
    let sum = 0;
    for (let num of arr) {
        if (num % 2 === 0) {
            sum += num * num;
        }
    }
    return sum;
}

// 4)
function login(mail, password) {
    if (mail === "emil@code.edu.az" && password === "12345") {
        console.log("Girish olundu");
    } else {
        console.log("Mail ve yaxud password sehvdir");
    }
}

// 5)
function sumOfOddNumbers(arr) {
    let sum = 0;
    for (let num of arr) {
        if (num % 2 !== 0) {
            sum += num;
        }
    }
    return sum;
}

// 6) 
function countEvenNumbers(arr) {
    let count = 0;
    for (let num of arr) {
        if (num % 2 === 0) {
            count++;
        }
    }
    return count;
}


console.log(checkDivisibleBy3And7(21)); 
console.log(factorial(5)); 
console.log(sumOfSquaresOfEvenNumbers([1,2,3,4])); 
login("emil@code.edu.az", "12345"); 
console.log(sumOfOddNumbers([1,2,3,4,5])); 
console.log(countEvenNumbers([1,2,3,4,5])); 
