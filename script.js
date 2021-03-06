// Need to prompt user with choices of 'Password Length' and the ability to select if Special Characters, Numbers, Lower Case, and Upper case letters are desired. 
// Need to tailor function depending on user input
// Need to choose random item from random array (within chosen selections)
// Need to make sure at least one item from each array is chosen (within chosen selections)
// Need to display password on webpage

// Assignment Code
var generateBtn = document.querySelector("#generate");
var lengthBtn = document.querySelector("#lenSelect");
var criteriaBtn = document.querySelector("#charSelect");
var copybtn = document.querySelector("#copyPass");
var shuffleBtn = document.querySelector("#shuffle");

// Add event listener to generate, copy, and shuffle button
generateBtn.addEventListener("click", writePassword);
copybtn.addEventListener("click", copyPass);
shuffleBtn.addEventListener("click", shufflePass);


// Write password to the #password input
function writePassword() {
  // Make first prompt (password length) appear
  document.getElementById("card1").style.visibility = "visible";
  // Add Listeners for prompt buttons
  lengthBtn.addEventListener("click", submitLength);
  criteriaBtn.addEventListener("click", sumbitCriteria);
}

// Functions
// Getting the Password Length
function submitLength() {
  passLength = document.getElementById("passLength").value;
  // Logs password Length (for checking funtionality)
  // console.log(passLength);
  // Checks to make sure length is between 8-128 characters
  if(passLength <= 7 || passLength >= 129) {
    alert("Invalid Entry! Please input a number between 8-128");
    return;
  } 
  // Hides the Password Length Prompt
  document.getElementById("card1").style.visibility = "hidden";
  // Shows Criteria Prompt
  document.getElementById("card2").style.visibility = "visible";
};

function sumbitCriteria () {
  // Checks if each criteria selection is Chosen
  upper = document.getElementById("upperCrit").checked;
  lower = document.getElementById("lowerCrit").checked;
  numVal = document.getElementById("numCrit").checked;
  specVal = document.getElementById("specCrit").checked;
  // Logs password Criteria Selection (for checking funtionality)
  // console.log(upper);
  // console.log(lower)
  // console.log(numVal);
  // console.log(specVal);
  // Hides Criteria Prompt
  document.getElementById("card2").style.visibility = "hidden";
  // Multiple checks to see which criteria is chosen and creates an array accordingly
  if (upper === true && lower === true && numVal === true && specVal === true) {
     passArray = [0,1,2,3]
    // console.log(passArray);
    getBase1();
  } else if (upper === true && lower === true && numVal === true && specVal === false) {
    passArray = [0,1,2]
    // console.log(passArray);
    getBase2();
  } else if (upper === true && lower === true && numVal === false && specVal === false) {
    passArray = [0,1]
    alert ("This password is not Secure!");
    // console.log(passArray);
    getBase3();
  } else if (upper === true && lower === true && numVal === false && specVal === true) {
    passArray = [0,1,3]
    // console.log(passArray);
    getBase4();
  } else {
    alert ("Password must contain at least an Upper and Lower case!")
    document.getElementById("card2").style.visibility = "visible";  
  }
};

// Declare array to put base of password in
var basePass = [];
function getBase1() {
  basePass.push(0);
  basePass.push(1);
  basePass.push(2);
  basePass.push(3);
  for (var i = 4; i < passLength; i++) {
    passLengthArray = passArray[Math.floor(Math.random()*passArray.length)];
    // console.log(passLengthArray);
    basePass.push(passLengthArray);
    }
    // console.log(basePass);
    basePass = basePass.sort(() => Math.random() - 0.5);
    getPass();
}

function getBase2() {
  basePass.push(0);
  basePass.push(1);
  basePass.push(2);
  for (var i = 3; i < passLength; i++) {
    passLengthArray = passArray[Math.floor(Math.random()*passArray.length)];
    // console.log(passLengthArray);
    basePass.push(passLengthArray);
    }
    // console.log(basePass);
    basePass = basePass.sort(() => Math.random() - 0.5);
    getPass();
}

function getBase3() {
  basePass.push(0);
  basePass.push(1);
  for (var i = 2; i < passLength; i++) {
    passLengthArray = passArray[Math.floor(Math.random()*passArray.length)];
    // console.log(passLengthArray);
    basePass.push(passLengthArray);
    }
    // console.log(basePass);
    basePass = basePass.sort(() => Math.random() - 0.5);
    getPass();
}

function getBase4() {
  basePass.push(0);
  basePass.push(1);
  basePass.push(3);
  for (var i = 3; i < passLength; i++) {
    passLengthArray = passArray[Math.floor(Math.random()*passArray.length)];
    // console.log(passLengthArray);
    basePass.push(passLengthArray);
    }
    // console.log(basePass);
    basePass = basePass.sort(() => Math.random() - 0.5);
    getPass();
}




// Arrays for Password Generator
capital = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
lowerCase = ['a', 'b', 'c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
number = ['1','2','3','4','5','6','7','8','9','0']
special = ['!','"','#','$','%','&',"'",'(',')','*','+',',','-','.',':',';','<','=','>','?','@','[',']','^','_','`','{','}','|','~']

// Declare Array to put password in
var newPass = [];
function getPass() {
  for (var i = 0; i < passLength; i++) {
    if (basePass[i] == 0) {
      capRand = capital[Math.floor(Math.random()*capital.length)];
      // console.log(capRand);
      newPass.push(capRand);
    } else if (basePass[i] == 1) {
      lowRand = lowerCase[Math.floor(Math.random()*lowerCase.length)];
      // console.log(lowRand);
      newPass.push(lowRand);
    } else if (basePass[i] == 2) {
      numRand = number[Math.floor(Math.random()*number.length)];
      // console.log(numRand);
      newPass.push(numRand);
    } else if (basePass[i] == 3) {
      specRand = special[Math.floor(Math.random()*special.length)];
      // console.log(specRand);
      newPass.push(specRand);
    }
  }
  // console.log(newPass);
  showPassword();
}

// Function to display text on Screen
function showPassword(){    
  var password = newPass.join('');
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  basePass = [];
  newPass = [];
}

// Function to allow password to be copied to user's clipboard
function copyPass() {
  var copyText = document.getElementById("password");
  copyText.select();
  document.execCommand("copy");
  alert("Your password has been copied")
}

// Function to shuffle password with existing selections
function shufflePass() {
  sumbitCriteria();
}