// Arrays for Password Generator
var capital = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var lower = ['a', 'b', 'c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var number = [1,2,3,4,5,6,7,8,9,0]
var special = ['!','"','#','$','%','&',"'",'(',')','*','+',',','-','.',':',';','<','=','>','?','@','[',']','^','_','`','{','}','|','~']

// Need to prompt user with choices of 'Password Length' and the ability to select if Special Characters, Numbers, Lower Case, and Upper case letters are desired. 
// Need to tailor function depending on user input
// Need to choose random item from random array (within chosen selections)
// Need to make sure at least one item from each array is chosen (within chosen selections)
// Need to display password on webpage

var capRand = capital[Math.floor(Math.random()*capital.length)];
var lowRand = lower[Math.floor(Math.random()*lower.length)];
var numRand = number[Math.floor(Math.random()*number.length)];
var specRand = special[Math.floor(Math.random()*special.length)];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passLen = prompt("Please choose the length of your password.\n*must be between 8-128 characters*")
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
