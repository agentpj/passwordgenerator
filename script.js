// Assignment Code for password generator Challenge 3

var generateBtn = document.querySelector("#generate");

var desiredpwlength = 0;
var passwordarray = "";
var wantLowerCase = true;
var wantUpperCase = true;
var wantNumeric = true;
var wantSpecialChars =true;

var minLength = 8;
var maxLength = 128;
var inputLength;

//is the length within the range for password?
desiredpwlength=20;

//if (inputlength >= minlength) && (inputlength <= maxLength) {
 //continue
 //else ask again


 tempCharSelection="";

 // Do we want lowercase letters?
 // Then add the lowercase letters to our array of choice of characters for our password
 if (wantLowerCase) {
  charSelection = "abcdefghijklmnopqrstuvwxyz";
  tempCharSelection = tempCharSelection.concat(charSelection);
 }

console.log("after wantLower " + tempCharSelection);

// Do we want uppercase letters?  
// Then add the uppercase letters to our array of choice of characters for our password
if (wantUpperCase) {
  charSelection = charSelection.toUpperCase();
  tempCharSelection = tempCharSelection.concat(charSelection);
}
console.log("after WantUpper " + tempCharSelection);

// Do we want numeric integers in our password?
// Then add the numeric to our array of choice of characters for our password
if (wantNumeric) {
  charSelection = "0123456789"
  tempCharSelection = tempCharSelection.concat(charSelection);
}
console.log("after WantNumeric " + tempCharSelection);

// Do we want special Characters in our password? 
//Then add the special characters to our array of choice of characters for our password
if (wantSpecialChars) {
  charSelection = "@#$_&-+()/*"
  tempCharSelection = tempCharSelection.concat(charSelection);
}
console.log("after Special Chars  " + tempCharSelection);
var arraylength = tempCharSelection.length;
console.log("charselection length " + arraylength);

var tempInteger = 0;
var temppassword = "";
function getRandomInt () {
  var min = 0;
  var max = arraylength;
  tempInteger = 0;
  tempInteger = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(tempInteger);
  return;
}
var passwordText = "";

// this loop creates a Random Integer, then searches the CharacterArray for the cell that equals 
// to the Random Integer, the found character equivalend to the cell is our character password concatenated
// to the string of our new password

for (var i=0; i<desiredpwlength; i++) {
  getRandomInt();
  temppassword = tempCharSelection[tempInteger];
  console.log("current pw " + temppassword);
  passwordText = passwordText.concat(temppassword);
  console.log("current password " + passwordText);
}

 // do you want upper case?
 // if yes set wantUppercase to true
 // else set wantLowercase to false

 // do you want Numeric?
 // if yes set wantNumeric to true
 // else set wantLowercase to false

 // do you want Special characters?
 // if yes set wantSpecialchars to true
 // else set wantSpecialchars to false
 
// Write password to the #password input

console.log(passwordText);
var password=passwordText;

function writePassword() {

//var password = generatePassword();
passwordText = document.querySelector("#password");
passwordText.value = password;
return;
}

writePassword();
console.log("The new password is " + password);
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
