// Assignment code here

function generatePassword() {
//prompt user for pw length and character types 
//validate selections 
//generate password 
//display password 
  

}


var randomNumber = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var randomSymbol = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]
var randomLetter = ["a", "b", "c", "d", "e", "f", "g", "h", 
"i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", 
"u", "v", "w", "x", "y", "z"]

var minCharacterLength = 8;
var maxCharacterLength = 128;



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
