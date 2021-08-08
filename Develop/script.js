// Assignment code here

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

  // function for choosing special characters criteria  
  var isSpecialCharacters =  function() {
    var confirmSpecialCharacters = window.confirm("Do you want to include special characters (OK: yes Cancel: No)");

    if (confirmSpecialCharacters) {
      alert("Password will include special characters.");
      console.log("Include special characters");
      return true;
    } if (!confirmSpecialCharacters) {
      alert("Password WILL NOT include special characters!");
      console.log("Don't include special characters");
      return false;
    }
  };

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


  // Main function for generating password 
var generatePassword = function() {
    // gets length of password
    getPasswordLength()

      // gets uppercase criteria 
    isUpperCase()

    // gets lowercase criteria 
    isLowerCase()

    // gets special characters criteria
    isSpecialCharacters()

    // checks to see if minimum requirements are met to generate password 
    validateCriteria()

    console.log(length)
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
