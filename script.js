// Setup arrays for each character type
var specialChars = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_'];
var numeralChars = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var alphaUpChars = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];
var alphaLowChars = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Setup vars to call for random characters in my arrays

// Ask user if they want char type Special
var confirmSpecial = confirm('Do you want special characters?');

// Ask user if they want char type Numeric
var confirmNumerical = confirm('Do you want numbers?');

// Ask user if they want char type Lowercase
var confirmLower = confirm('Do you want lowercase characters?');

// Ask user if they want char type Uppercase
var confirmUpper = confirm('Do you want UPPERCASE characters?');

// var password;
var passLength = 0;
var passAssemble = [];
genButton = document.getElementById('genPass');
copyButton = document.getElementById('copyPass');

// set action for Generate Password button
genButton.addEventListener('click', function() {
  genPassowrd();
});

// set action for Copy to Clipboard button
copyButton.addEventListener('click', function() {
  copy();
});

// set function for Copy to Clipboard button
// I was unable to get this to work before submission
// I kept receiving the Uncaught TypeError: copyPass.select is not a function
function copy() {
  var copyPass = document.getElementById('Password');
  copyPass.select();
  document.execCommand('copy');
}

// Confirm the length of the password is within 8-128 chars
window.onload = function askPassLength() {
  passLength = prompt('Select a password length between 8 and 128 characters');
  // If less than 8 chars, return an error message and ask for PW length again
  if (passLength < 8) {
    alert('Password less than 8 chars, try again...');
    askPassLength();
  }
  // If greater than 128 chars, return an error message and ask for PW length again
  else if (passLength > 128) {
    alert('Password greater than 128 chars, try again...');
    askPassLength();
  }
};

// Generate the password
function genPassowrd() {
  let i = 0;
  while (i < passLength) {
    if (i < passLength && confirmSpecial === true) {
      var randSpec =
        specialChars[Math.floor(Math.random() * specialChars.length)];
      passAssemble.push(randSpec);
      i++;
    }
    if (i < passLength && confirmNumerical === true) {
      var randNum =
        numeralChars[Math.floor(Math.random() * numeralChars.length)];
      passAssemble.push(randNum);
      i++;
    }
    if (i < passLength && confirmLower === true) {
      var randLow =
        alphaLowChars[Math.floor(Math.random() * alphaLowChars.length)];
      passAssemble.push(randLow);
      i++;
    }
    if (i < passLength && confirmUpper === true) {
      var randUp =
        alphaUpChars[Math.floor(Math.random() * alphaUpChars.length)];
      passAssemble.push(randUp);
      i++;
    }
  }
  password = passAssemble.join('');
  document.getElementById('Password').innerHTML = password;
}

// I tried to add the shuffle() at the end to mix up the final order, but was unable to get this to work before submission.
