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
var lengthBtn = document.querySelector("#lenSelect");
var criteriaBtn = document.querySelector("#charSelect");

// Setting Password Length as equal to User Input


// Functions
function submitLength() {
  passLength = document.getElementById("passLength").value;
  console.log(passLength);
  if(passLength <= 7 || passLength >= 129) {
    alert("Invalid Entry! Please input a number between 8-128");
    return;
  } 
  document.getElementById("card1").style.visibility = "hidden";
  document.getElementById("card2").style.visibility = "visible";
};

function sumbitCriteria () {
  upper = document.getElementById("upperCrit").checked;
  lower = document.getElementById("lowerCrit").checked;
  numVal = document.getElementById("numCrit").checked;
  specVal = document.getElementById("specCrit").checked;
  console.log(upper);
  console.log(lower)
  console.log(numVal);
  console.log(specVal);
  document.getElementById("card2").style.visibility = "hidden";
  if (upper === true && lower === true && numVal === true && specVal === true) {
     passArray = ['0','1','2','3']
    console.log(passArray);
  } else if (upper === true && lower === true && numVal === true && specVal === false) {
    passArray = ['0','1','2']
    console.log(passArray);
  } else if (upper === true && lower === true && numVal === false && specVal === false) {
    passArray = ['0','1']
    alert ("This password is not Secure!");
    console.log(passArray);
  } else if (upper === true && lower === true && numVal === false && specVal === true) {
    passArray = ['0','1','3']
    console.log(passArray);
  } else {
    alert ("Password must contain at least an Upper and Lower case!")
    document.getElementById("card2").style.visibility = "visible";  
  }
};

<<<<<<< HEAD
function getBase() {
  var basePass = [];
  for (var i = 0; i < passLength; i++) {
    passLengthArray = passArray[Math.floor(Math.random()*passArray)];
    basePass.push(passLengthArray);
    }
    console.log(basePass);
=======
function generatePassword() {

  for (var i = 0; i < passLength.length; i++) {
    var capRand = capital[Math.floor(Math.random()*capital.length)];
    var lowRand = lower[Math.floor(Math.random()*lower.length)];
    var numRand = number[Math.floor(Math.random()*number.length)];
    var specRand = special[Math.floor(Math.random()*special.length)];
    if (upper === true || lower === true || numVal === true || specVal === true) {
      
    }
  }
>>>>>>> 8739903b13d219d8a8e032fb7a7ef187315bb969
}

// Write password to the #password input
function writePassword() {
// Make first prompt (password length) appear
document.getElementById("card1").style.visibility = "visible";
// Add Listeners for prompt buttons
lengthBtn.addEventListener("click", submitLength);
criteriaBtn.addEventListener("click", sumbitCriteria);

  var password = generatePassword(); {
    for (var i = 0; i < passLength; i++) {
      
    }
    if (upper == true) {
      var capRand = capital[Math.floor(Math.random()*capital.length)];
    }
  }
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

