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
function generatePassword() {

  // Declaring the user inputs
  let userUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let userUpperArray = userUpper.split("");
  let userLower = 'abcefghijklmnopqrstuvwxyz';
  let userLowerArray = userLower.split("");
  let userNumber = '123456789';
  let userNumberArray = userNumber.split("");
  let userSpecial = '!@#$%^&';
  let userSpecialArray = userSpecial.split("");
  let userAll = [];

  // Created a way to make sure the length is acceptable
  

  let passwordLength = parseInt(prompt("How many characters do you want your password? (8-128 characters)"));
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Must be 8-128 Characters");
    generatePassword();
  };

// Asks if they want uppercase letters
  let passwordUpper = confirm("Would you like upper case letters?")
  if (passwordUpper) {
    userAll = userAll.concat(userUpperArray);
  };

// Asks if they want lowercase letters
  let passwordLower = confirm("Would you like lower case letters?")
  if (passwordLower) {
    userAll = userAll.concat(userLowerArray);
  };

  // Asks if they want special characters
  let passwordSpecial = confirm("Would you like special characters?")
  if (passwordSpecial) {
    userAll = userAll.concat(userSpecialArray);
  };

  // Asks if they want numbers
  let passwordNumbers = confirm("Would you like numbers?")
  if (passwordNumbers) {
    userAll = userAll.concat(userNumberArray);
  };

  console.log(passwordLength, passwordLower, passwordNumbers, passwordUpper, passwordSpecial)
  console.log(userAll)
  // Password is currently blank! We need to make a better one

  let password = "";

  for (let i = 0; i < passwordLength; i++) {
    let random = (Math.floor(Math.random() * userAll.length));
    password = password + userAll[random];
  }
console.log(password)
  return password;
}

// Main Process

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);






