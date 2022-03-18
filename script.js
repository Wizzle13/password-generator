// Assignment code here

function generatePassword(){
  charCount = prompt("How many characters would you like your password? (8-128");
  console.log(charCount);
  upperCase = prompt("Would you like UPPER case letters? (yes or no)");
  console.log(upperCase);
  lowerCase = prompt("Would you like lower case letters? (yes or no)");
  console.log(lowerCase);
  numeric = prompt("Would you like to use numerics? (yes or no)");
  console.log(numeric);
  special = prompt("Would you like to use Special Characters? (yes or no)");
  console.log(special);
} 

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
   
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
