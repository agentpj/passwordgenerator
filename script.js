// Assignment Code
var generateBtn = document.querySelector("#generate");

var charsLowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var charsUpperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
// 12 characters
var charSpecial = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")" , "_" , "+" ];
// 10 characters
var charsNumeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9" ];

function generatePassword() {
  var pwLength = prompt("Please enter your desired password length, minimum of 8, max of 128");
    if (pwLength < 8 || pwLength > 128) {
      generatePassword;
    }

    var userChoice = prompt ("Do you want Lower case in your password? Y or N");
    console.log(userChoice); 
    userChoice = userChoice.toUpperCase();
 
    if (userChoice == "Y") {
      var tempCharSelection = charsLowerCase;}
    else
      tempCharSelection = [];

  var userChoice = prompt ("Do you want Upper case in your password? Y or N");
  console.log(userChoice);
  userChoice = userChoice.toUpperCase();
    if (userChoice == "Y") {
      tempCharSelection = tempCharSelection.concat(charsUpperCase);
    }

  var userChoice = prompt ("Do you want Special Characters in your password? Y or N");
  console.log(userChoice);
    userChoice = userChoice.toUpperCase();
      if (userChoice == "Y") {
        tempCharSelection = tempCharSelection.concat(charSpecial);
       }

  var userChoice = prompt ("Do you want numbers in your password? Y or N");
  console.log(userChoice);
  userChoice = userChoice.toUpperCase();
    if (userChoice == "Y") {
      tempCharSelection = tempCharSelection.concat(charsNumeric);
     }

   var password = "";

console.log(tempCharSelection.length);

   if (tempCharSelection.length < 1) {
    alert("You need to make at least one selection");
    return;
  }
    
  for (var i=0; i < pwLength; i++) {
      var firstLetter = tempCharSelection[(Math.floor(Math.random()*tempCharSelection.length))];
      password=password.concat(firstLetter);
  }

return password; 
}
    

// Write password to the #password input
 function writePassword() {
   var password = generatePassword();
   var passwordText = document.querySelector("#password");

   passwordText.value = password;

 }

writePassword();
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
