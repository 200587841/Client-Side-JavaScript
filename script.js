//Student: Natalia Selestrini Dias - ID 200587841
//Client-Side-JavaScript

//------ 01
const arrStudentsGrades = [85, 97, 44, 37, 76, 60];

let totalMarks = 0;

for (let i = 0; i < arrStudentsGrades.length; i++) {
    totalMarks += arrStudentsGrades[i];
}

const averageMarks = totalMarks / arrStudentsGrades.length;

console.log("Average marks =", averageMarks);


//------ 02
const arr = [250, 645, 300, 900, 50];
console.log(arr);

for (let i = 0; i < arr.length; i++) {
    let discount = arr[i] * 0.10;
    arr[i] = arr[i] - discount;
}

console.log(arr);


//------ 03
const arrCompanies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
console.log(arrCompanies);

//a. Remove the first company from the array
arrCompanies.shift();
console.log(arrCompanies);
//b. Remove Uber & Add Ola in its place
arrCompanies[2] = "Ola";
console.log(arrCompanies);
//c. Add Amazon at the end
arrCompanies.push("Amazon");
console.log(arrCompanies);