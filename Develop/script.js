// Assignment code here

var randomNumber = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var randomSymbol = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", 
"i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", 
"u", "v", "w", "x", "y", "z"]
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", 
"I", "J", "K","L", "M", "N", "O", "P", "Q", "R", "S", "T", 
"U", "V", "W", "X", "Y", "Z"]

var characterLength = 8;
var selectedChoices = [];


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var correctPrompts = getPrompts();

if(correctPrompts) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

}

function generatePassword() {
  var password = "";
  for(var i=0; i < characterLength; i++) {
    var randomLetter = Math.floor(Math.random() * selectedChoices.length)
    password = password + selectedChoices[randomLetter];
  }
  return password;
}

function getPrompts() {
  characterLength = prompt("How many characters do you want your password to be? (8 - 128 characters")
  if(characterLength < 8 || characterLength > 128){
    alert("Character length should be between 8 and 128");
    return false;
  }
  if(confirm("Would you like upper case letters in your password?")) {
  selectedChoices = selectedChoices.concat(upperCase); 
  }
  if(confirm("Would you like lower case letters in your password?")) {
  selectedChoices = selectedChoices.concat(lowerCase); 
  }
  if(confirm("Would you like numbers in your password?")) {
  selectedChoices = selectedChoices.concat(randomNumber); 
  }
  if(confirm("Would you like special characters in your password?")) {
  selectedChoices = selectedChoices.concat(randomSymbol); 
  }
  return true;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
