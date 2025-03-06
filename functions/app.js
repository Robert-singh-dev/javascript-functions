// functions 1
function sum(num1, num2) {
  return num1 + num2;
}
console.log(sum(20, 2));
console.log(sum(10, 2));
console.log(sum(0, 2));
console.log(sum(222, 2));

// functions 2
function sum(num1, num2) {
  console.log(num1);
  console.log(num2);
  if (num2 == undefined) {
    return num1;
  }
  return num1 + num2;
}
console.log(sum(20));

// // "get name from email before @" function
function getUserNameFromEmail(email) {
  return email.slice(0, email.indexOf("@"));
}
console.log(getUserNameFromEmail("robertsingh0601@gmail.com"));
console.log(getUserNameFromEmail("robinsingh0601@gmail.com"));

// propercase functioin

// function toProperCase(name) {
//   return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
// }
// console.log(toProperCase("RobERT"));

// same function with arrow function
const toProperCase = (name) => {
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};
console.log(toProperCase("RobERT"));
