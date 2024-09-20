//Student: Natalia Selestrini Dias - ID 200587841
//Client-Side-JavaScript

//------ Challenge 1
// [6, 5, 4, 3, 2, 1, 0];
const arr = [1, 2, 3, 4, 5];
//Add 6 to the end
arr.push(6);
//Add 0 at the beginning
arr.unshift(0);
//Reverse the order
arr.reverse();
console.log(arr);

//------ Challenge 2
// [1,2,3,4,5,6,7,8,9,10]
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

//removes the 5 to not appear twice
arr1.pop();
//join the arrays
const arr3 = [...arr1, ...arr2];
console.log(arr3);