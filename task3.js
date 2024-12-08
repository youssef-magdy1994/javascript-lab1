// task 3
let enteredUserName;
let enteredBirthYear;
let age;
let validFlag = false;
do {
  enteredUserName = prompt("Enter your name.");
  if (enteredUserName) {
    validFlag = true;
  }
} while (!validFlag);
validFlag = false;
do {
  enteredBirthYear = Number(prompt("Enter your year of birth."));
  if (!isNaN(enteredBirthYear) && enteredBirthYear < 2010) {
    validFlag = true;
  }
} while (!validFlag);

age = 2024 - enteredBirthYear;

document.write("Name: " + enteredUserName);
document.write("<br>");
document.write("BirthYear: " + enteredBirthYear);
document.write("<br>");
document.write("Age: " + age);
