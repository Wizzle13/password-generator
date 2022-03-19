// Assignment code here
//  sets begining values
var charCount = "";
var upperCase = "";
var lowerCase = "";
var numeric = "";
var special = "";
var newPassWord = "";
var upperCaseUsed = "no";
var lowerCaseUsed = "no";
var numericUsed = "no";
var specialUsed = "no";

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

// randomly selects lowercase letter
function selectLowerCase(){
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var getRandomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
    newPassWord += getRandomLetter;
    return(newPassWord);
}

// randomly selects Uppercase letter
function selectUpperCase(){
  var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var getRandomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
    newPassWord += getRandomLetter;
    return(newPassWord);
}

//  randomly selects number
function selectNumeric(){
  var alphabet = "1234567890";
    var getRandomNumber = alphabet[Math.floor(Math.random() * alphabet.length)];
    newPassWord += getRandomNumber;
    return(newPassWord);
}

// Randomly selects a special character
function selectSpecial(){
  var alphabet = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  var getRandomNumber = alphabet[Math.floor(Math.random() * alphabet.length)];
  newPassWord += getRandomNumber;
  return(newPassWord);
}

// Randomly selects 1 of the 4 options
function selectPassword(){
  //  debugger;
  let i = 0;
  do {
    i += 1;
    // console.log = i;
    var letters = "1234";
    var getRandomLetter = letters[Math.floor(Math.random() * letters.length)];
    getRandomLetter = parseInt(getRandomLetter);
    switch (getRandomLetter) {
      case 1:
        if (upperCase === "yes"){
          selectUpperCase();
          upperCaseUsed = "yes";
        }
        else {
          i-=1;
        }
        break;
      case 2:
        if (lowerCase === "yes"){
          selectLowerCase();
          lowerCaseUsed = "yes";
        }
        else {
          i-=1;
        }
        break;
      case 3:
        if (numeric === "yes"){
          selectNumeric();
          numericUsed = "yes"
        }
        else {
          i-=1;
        }
        break;
      case 4:
        if (special === "yes"){
          selectSpecial();
          specialUsed = "yes";
        }
        else {
          i-=1;
        }
        break;
    }
    console.log(i);
    console.log(newPassWord);
  } 
  while (i < charCount)
  return(newPassWord);
}

// This section will generate the password.
function generatePassword(){
  newPassWord ="";
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
  selectPassword();
  
  // verify all requested options are used.
  if (lowerCase === lowerCaseUsed && upperCase === upperCaseUsed && numeric === numericUsed && special === specialUsed){
    return(newPassWord);
  }
  else{
    upperCaseUsed = "no";
    lowerCaseUsed = "no";
    numericUsed = "no";
    specialUsed = "no";
    newPassWord = "";
    i = 0;
    selectPassword();
  }
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
