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
  var pwLength = prompt("Please enter your desired password length, minimum of 8, max of 128");
  // did user specify outside the required password length?  If not, try again
  if (pwLength < 8 || pwLength > 128) {
    alert("Please re-enter the password length");
  }
  else {
    var userlowerChoice = prompt("Do you want Lower case in your password? Y or N");
    userlowerChoice = userlowerChoice.toUpperCase();
    var tempCharSelection = [];
    // if user wants lower case letters, let's add it to tempCharSelection array
    if (userlowerChoice == "Y") {
      tempCharSelection = tempCharSelection.concat(charsLowerCase);
    }

    var userUpperChoice = prompt("Do you want Upper case in your password? Y or N");
    userUpperChoice = userUpperChoice.toUpperCase();
    // if user wants upper case letters, let's add it to the tempCharSelection array
    if (userUpperChoice == "Y") {
      tempCharSelection = tempCharSelection.concat(charsUpperCase);
    }

    var userSpecialChoice = prompt("Do you want Special Characters in your password? Y or N");
    userSpecialChoice = userSpecialChoice.toUpperCase();
    // if user wants special characters, let's add it to the tempCharSelection array
    if (userSpecialChoice == "Y") {
      tempCharSelection = tempCharSelection.concat(charSpecial);
    }

    var userNumbersChoice = prompt("Do you want numbers in your password? Y or N");
    userNumbersChoice = userNumbersChoice.toUpperCase();
    // if user wants integers or numbers, let's add it to the tempCharSelection array
    if (userNumbersChoice == "Y") {
      tempCharSelection = tempCharSelection.concat(charsNumeric);
    }

    var password = "";
    // let's find out if user selected any character choices for the password by length of the array
    if (tempCharSelection.length < 1) {
      alert("You need to make at least one selection");
      return;
    }

    // this for loop creates a random integer and we will find the equivalent to a cell # in the tempCharSelection array and the
    // equivalent character of the cell # will be the character in the user password.  The equivalent character gets put into the password
    // variable until the desired password length is reached
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
  // need to clear out the screen before regenerating a new password
  setTimeout(() => {
    var password = generatePassword();
    passwordText.value = password;
  }, 500);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
