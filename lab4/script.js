//Lab 4 - Natalia S Dias

/*
Qs1. Get user to input a number using prompt(“Enter a number:”).
Check if the number is a multiple of 5 or not.
*/
const userNumber = prompt("Enter a number:");
const number = Number(userNumber);

if (userNumber % 5 === 0) {
  console.log(`${number} -> Your number is a multiple of 5`);
  //Using Template Literals as explained in last class
} else {
  console.log(`${number} -> Your number is NOT a multiple of 5`);
}


/*
Qs2. Write a code which can give grades to students according to their scores:
80-100, A
70-89, B
60-69, C
50-59, D
0-49, F
*/
const studentGrade = prompt("Enter your score:");
const grade = Number(studentGrade);

if (grade >= 80 && grade <= 100) {
  console.log("Based in your score, your grade is A");
} else if (grade >= 70 && grade < 80) {
  console.log("Based in your score, your grade is B");
} else if (grade >= 60 && grade < 70) {
  console.log("Based in your score, your grade is C");
} else if (grade >= 50 && grade < 60) {
  console.log("Based in your score, your grade is D");
} else if (grade < 50) {
  console.log("Based in your score, your grade is F");
} else {
  console.log("Invalid score. Please enter a number between 0 and 100.");
}


/*
Calculator Challenge
Create a function called `calculator` that takes three parameters: `num1`, `num2` and `operator`.
The operator can be `+`, `-`, `*` or `/`.
The function should return the result of the calculation.
If anything other than the four operators is passed in, the function should return an error message.

calculator(5, 2, '+') // returns 7
calculator(5, 2, '-') // returns 3
calculator(5, 2, '*') // returns 10
calculator(5, 2, '/') // returns 2.5
calculator(5, 2, '&') // returns an error message

Hint:You can use an if statement for the operator, but this is also a good example for using a switch statement.
*/
function calculator(num1, num2, operator) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      if (num2 === 0) {
        return "Error: Division by zero is not allowed!";
      }
      return num1 / num2;
    default:
      return "Please insert a valid operator! (+, -, * or /)";
  }
}

const userNum1 = prompt("Enter the first number:");
const num1 = Number(userNum1);

const userNum2 = prompt("Enter the second number:");
const num2 = Number(userNum2);

const operator = prompt("Enter the operation symbol (+, -, * or /):");

const result = calculator(num1, num2, operator);
console.log(result);


/*
FizzBuzz Challenge
Print/log the numbers from 1 to 100
- For **multiples of three** print "Fizz" instead of the number
- For **multiples of five** print "Buzz"
- For numbers which are **multiples of both three and five** print "FizzBuzz"

Hint:
If you have taken the course up to this point, then you know how to write a loop and output/log something for each iteration.
You also know how to check for a condition with "if/else/else if".
You also know how to get a remainder of a number using the modulus operator (%).
This is all you need to know to complete this challenge. Good luck!
*/
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
  console.log(i);
}
}