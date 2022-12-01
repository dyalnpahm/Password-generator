// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var length = 8;
  var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
  var passkey = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
      passkey += charset.charAt(Math.floor(Math.random() * n));
  }
  return passkey;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


c