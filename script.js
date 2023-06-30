// Assignment Code for Random Password generator Challenge 2 for UT Coding Bootcamp

var generateBtn = document.querySelector("#generate");

// the array to store characters for the possible password combination
var charsLowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var charsUpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// 12 Special characters
var charSpecial = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+"];
// 10 Numeric or Integers
var charsNumeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// This is the function that asks the user several prompts to use to generate the password
// depending on password length, and type of characters
function generatePassword() {
  //var passwordText = document.querySelector("#password");
  //passwordText.value = "";
  var pwLength = prompt("Please enter your desired password length, minimum of 8, max of 128");
  if (pwLength < 8 || pwLength > 128) {
    alert("Please re-enter the password length");
    generatePassword();
  }
  else {
    var userlowerChoice = prompt("Do you want Lower case in your password? Y or N");
    userlowerChoice = userlowerChoice.toUpperCase();
    var tempCharSelection = [];

    if (userlowerChoice == "Y") {
      tempCharSelection = tempCharSelection.concat(charsLowerCase);
      console.log(tempCharSelection);
    }

    var userUpperChoice = prompt("Do you want Upper case in your password? Y or N");
    userUpperChoice = userUpperChoice.toUpperCase();
    if (userUpperChoice == "Y") {
      tempCharSelection = tempCharSelection.concat(charsUpperCase);
      console.log(tempCharSelection);
    }

    var userSpecialChoice = prompt("Do you want Special Characters in your password? Y or N");
    userSpecialChoice = userSpecialChoice.toUpperCase();
    if (userSpecialChoice == "Y") {
      tempCharSelection = tempCharSelection.concat(charSpecial);
      console.log(tempCharSelection);
    }

    var userNumbersChoice = prompt("Do you want numbers in your password? Y or N");
    userNumbersChoice = userNumbersChoice.toUpperCase();
    if (userNumbersChoice == "Y") {
      tempCharSelection = tempCharSelection.concat(charsNumeric);
      console.log(tempCharSelection);
    }

    var password = "";

    if (tempCharSelection.length < 1) {
      alert("You need to make at least one selection");
      return;
    }

    for (var i = 0; i < pwLength; i++) {
      var firstLetter = tempCharSelection[(Math.floor(Math.random() * tempCharSelection.length))];
      password = password.concat(firstLetter);
    }

    return password;
  }
}


// Write password to the #password input

function writePassword() {

  var passwordText = document.querySelector("#password");
  passwordText.value = "";
  setTimeout(() => {
    var password = generatePassword();
    passwordText.value = password;
  }, 1000);

}
// call the function that generates the password and returns it so we can display
//writePassword();


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
