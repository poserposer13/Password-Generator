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
let passwordCharacters = {
  // userLength: ,
  userUpper: ['A', 'B', 'C', 'D', 'E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
  userLower: ['a','b','c','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
  userNumber: ['1','2','3','4','5','6','7','8','9'],
  userSpecial: ['!','@','#','$','%','^','&']
}
  let passwordLength = prompt("How many characters do you want your password? (8-128 characters)");
  if (passwordLength < 8 || passwordLength > 128) {
alert("Must be 8-128 Characters")
  };

  let passwordUpper = confirm ("Would you like upper case letters? ");
  if (passwordUpper) {

  }
  let passwordLower = confirm ("Would you like lower case letters?");
  if (passwordLower) {

  }
  let passwordSpecial = confirm ("Would you like special characters?");
  if (passwordSpecial) {

  }
  let passwordNumbers = confirm ("Would you like numbers?")
 console.log(passwordLength, passwordLower, passwordNumbers, passwordSpecial, passwordUpper)
  // Password is currently blank! We need to make a better one

// let password = 




  return password;
}

// Main Process

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);






