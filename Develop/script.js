// Assignment code here

  // Main function for generating password 
var generatePassword = function() {

  
  // function for choosing password length 
var getPasswordLength = function() {
  var length = Number(window.prompt("how long do you want your password? 8 - 128"));

    if (length > 128 || length < 8 ) {
      alert("Must include between 8 and 128 characters! try again.");
      getPasswordLength()
    } else if (length <= 128 || length >= 8) {
      alert(`you chose ${length} characters`);
      // this is the length of the password 
      // var Passwordlength = length;
      console.log(length);
      return length;
    } else {
      alert('Please type a valid number between 8 and 128!');
      getPasswordLength();
    }
    return length;
};
  // STORING PASSWORD LENGTH IN THIS VARIABLE
  var length = getPasswordLength();




  // function for choosing uppercase criteria  
  var isUpperCase =  function() {
    var confirmUpperCase = window.confirm("Do you want to include uppercase letters (OK: yes Cancel: No)");

    if (confirmUpperCase) {
      alert("Password will include uppercase letters.");
      console.log("Include uppercase");
      return true;
    } if (!confirmUpperCase) {
      alert("Password WILL NOT include uppercase letters!");
      console.log("Don't include uppercase");
      return false;
    }
  };
  // STORING PASSWORD UPPERCASE CRITERIA HERE (TRUE OR FALSE) 
  var upperCase = isUpperCase();




    // function for choosing lowercase criteria 
  var isLowerCase = function() {
    var confirmLowerCase = window.confirm("Do you want to include lowercase letters (OK: yes Cancel: No)");

    if (confirmLowerCase) {
      alert("Password will include lowercase letters.");
      console.log("Include lowercase");
      return true;
    } if (!confirmLowerCase) {
      alert("Password WILL NOT include lowercase letters!");
      console.log("Don't include lowercase");
      return false;
    }
  };
    // STORING PASSWORD LOWERCASE CRITERIA HERE (TRUE OR FALSE) 
    var lowerCase = isLowerCase();


  // function for choosing special characters criteria  
  var isSpecialCharacters =  function() {
    var confirmSpecialCharacters = window.confirm("Do you want to include special characters (OK: yes Cancel: No)");

    if (confirmSpecialCharacters) {
      alert("Password will include special characters.");
      console.log("Include special characters");
      return true;
    } else if (!confirmSpecialCharacters) {
      alert("Password WILL NOT include special characters!");
      console.log("Don't include special characters");
      return false;
    }
  };
    // STORING PASSWORD SPECIAL CHARACTER HERE (TRUE OR FALSE) 
    var specialCharacter = isSpecialCharacters();

    // function for validation of chosen criteria 
  var validateCriteria = function() {
    if (isUpperCase() === true ||
        isLowerCase() === true ||
         isSpecialCharacters() === true) {
          window.alert(`a password with the accepted criteria will be generated!`)
    } else {
      window.alert("You need to include at least on of the followwing 1) uppercase letters 2) lowercase letters 3) special characters");

      var again = window.confirm("do you want to try again or cancel?");
      if (again) {
        generatePassword()
      } else {
        window.alert("Press Generate to begin!")
      };
    }
  };
  // STORING ACCEPTABLE CRITERIA (TRUE OR FALSE) 
  var validCriteria = validateCriteria()



    // TESTING LENGTH VALUE HERE
    // console.log(length)
    for (var i = 0; i <= length; i++) {
      console.log(i);
    }


}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
