// Constants
const generateBtn = document.querySelector("#generate");

// Declaring the user inputs
let userUpper = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
let userUpperArray = userUpper.split('');
let userLower = ['abcefghijklmnopqrstuvwxyz'];
let userLowerArray = userLower.split('');
let userNumber = ['123456789'];
let userNumberArray = userNumber.split('');
let userSpecial = ['!@#$%^&'];
let userSpecialArray = userSpecial.split('');
let userAll = [];

// Functions

/**
 * writes a generated password to the #password
 */
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
}

/**
 * generate a password based on certain criteria
 */
function generatePassword() {


  // Created a way to make sure the length is acceptable
  let passwordLength = parseInt(prompt("How many characters do you want your password? (8-128 characters)"));
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Must be 8-128 Characters");
    generatePassword();
  };


  let passwordUpper = confirm("Would you like upper case letters?")
  if (passwordUpper) {
    userAll[userUpper];
  };

  let passwordLower = confirm("Would you like lower case letters?")
  if (passwordLower) {
    userAll[userLower];
  };

  let passwordSpecial = confirm("Would you like special characters?")
  if (passwordSpecial) {
    userAll[userSpecial];
  };

  let passwordNumbers = confirm("Would you like numbers?")
  if (passwordNumbers) {
    userAll[userNumber];
  };

  
  // Password is currently blank! We need to make a better one

  let password = Math.floor(Math.random() * userAll.length)



  return password;
}

// Main Process

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);






