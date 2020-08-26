// Constants
const generateBtn = document.querySelector("#generate");

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
function generatePassword(){

// Declaring the user inputs

  let passwordLength = prompt("How many characters do you want your password? (8-128 characters)");
  if (passwordLength < 8 || passwordLength > 128) {
alert("Length needs to be 8-128 characters!")
  }
  let passwordUpper = confirm ("Would you like upper case letters? ");
  let passwordLower = confirm ("Would you like lower case letters?");
  let passwordSpecial = confirm ("Would you like special characters?");
  let passwordNumbers = confirm ("Would you like numbers?")
 console.log(passwordLength, passwordLower, passwordNumbers, passwordSpecial, passwordUpper)
  // Password is currently blank! We need to make a better one

// let password = 




  // return password;
}

// Main Process

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);






