// Assignment code here
var charCount = "";
var upperCase = "";
var lowerCase = "";
var numeric = "";
var special = "";

// This section will get the lenght of the password and make sure it is between 8-128.
function getCharCount(){
  charCount = prompt("How many characters would you like your password? (8-128)");
  charCount = charCount.toLowerCase();
  if (charCount >= 8 && charCount <= 128){
    return charCount;
  } 
  else {
    window.alert("Youn number need to be bettween 8 - 128!");
    getCharCount();
  } 
  
}

//This section will determan it you want Uppercase
function getUpperCase(){
  upperCase = prompt("Would you like UPPER case letters? (yes or no)");
  upperCase = upperCase.toLocaleLowerCase();
  if (upperCase === "" || upperCase === null){
    window.alert("You need to anwser Yes of No");
    getUpperCase();
  }
  if (upperCase === "yes" || upperCase === "no"){
    return upperCase;
  }
  else {
    window.alert("You need to anwser Yes of No");
    getUpperCase();
  }
  
}

//This section will determan it you want lowercase
function getLowerCase(){
  lowerCase = prompt("Would you like lower case letters? (yes or no)");
  lowerCase = lowerCase.toLocaleLowerCase();
  if (lowerCase === "" || lowerCase === null){
    window.alert("You need to anwser Yes of No");
    getlowerCase();
  }
  if (lowerCase === "yes" || lowerCase === "no"){
    return lowerCase;
  }
  else {
    window.alert("You need to anwser Yes of No");
    getLowerCase();
  }
  
}

//This section will determian it you want numerics
function getNumeric(){
  numeric = prompt("Would you like numerics? (yes or no)");
  numeric = numeric.toLocaleLowerCase();
  if (numeric === "" || numeric === null){
    window.alert("You need to anwser Yes of No");
    getNumeric();
  }
  if (numeric === "yes" || numeric === "no"){
    return numeric;
  }
  else {
    window.alert("You need to anwser Yes of No");
    getNumeric();
  }
  
}

//This section will determian it you want Special Characters
function getSpecial(){
  special = prompt("Would you like to use Special Characters? (yes or no)");
  special = special.toLocaleLowerCase();
  if (special === "" || special === null){
    window.alert("You need to anwser Yes of No");
    getSpecial();
  }
  if (special === "yes" || special === "no"){
    return special;
  }
  else {
    window.alert("You need to anwser Yes of No");
    getSpecial();
  }
  
}
// This section will generate the password.
function generatePassword(){
  getCharCount();
  console.log(charCount);
  getUpperCase();
  console.log(upperCase);
  getLowerCase();
  console.log(lowerCase);
  getNumeric();
  console.log(numeric);
  getSpecial();
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
