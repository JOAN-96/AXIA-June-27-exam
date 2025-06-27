// QUESTION 1 ANSWER
function checkGrade(score) {
    if (score >= 70) {
        return 'A';
    } else if (score >=60 && score <= 69) {
        return 'B';
    } else if (score >= 50 && score <= 59) {
        return 'C';
    } else if (score <= 50) {
        return 'F';
    } else {
        console.log('Result not found');
    }
}

checkGrade(80); // Calling the function with a score of 80
console.log('Your grade is ' + checkGrade(80));


console.log('=================================');


// QUESTION 2 ANSWER
const login = (username, password) => {
    if (username === 'admin' && password === '1234') {
        return 'Login successful';
    } else {
        return 'Wrong username or password';
    }
}

console.log (login('admin', '234')); 


console.log('=================================');


// QUESTION 3 ANSWER
let convertToFahrenheit = (celsius) => {
    return F = (celsius * 9/5) + 32;
}

convertToFahrenheit(60); // Calling the function with the celsius of 60
console.log('The weather is ' + convertToFahrenheit(60));


console.log('=================================');


// QUESTION 4 ANSWER
function canVote(age) {
    if (age >= 18) {
        return 'You can vote';
    } else {
        console.log('You are not up to age to vote');
    }
}

canVote(17); // Calling the function with the age 17



console.log('=================================');


// QUESTION 5 ANSWER
let temperatureStatus = (temp) => {
    if (temp < 0) {
        return 'Freezing';
    } else if (temp >= 0 && temp <= 15) {
        return 'Cold';
    } else if (temp >= 16 && temp <= 25) {
        return 'Cool';
    } else if (temp > 25) {
        return 'Warm';
    }
}

temperatureStatus(30); // Calling the function with temp 30
console.log('The temperature is ' + temperatureStatus(30));