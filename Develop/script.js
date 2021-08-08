// Assignment code here:
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
    var confirmUpperCase = window.confirm("Do you want to include uppercase letters? (OK: yes Cancel: No)");

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
    var confirmLowerCase = window.confirm("Do you want to include lowercase letters? (OK: yes Cancel: No)");

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
    var confirmSpecialCharacters = window.confirm("Do you want to include special characters? (OK: yes Cancel: No)");

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

      // function for choosing Numbers criteria  
  var isNumbers =  function() {
    var confirmNumbers = window.confirm("Do you want to include Numbers? (OK: yes Cancel: No)");

    if (confirmNumbers) {
      alert("Password will include numbers.");
      console.log("Include numbers");
      return true;
    } else if (!confirmNumbers) {
      alert("Password WILL NOT include numbers!");
      console.log("Don't include numbers");
      return false;
    }
  };
    // STORING PASSWORD NUMBERS HERE (TRUE OR FALSE) 
    var numbers = isNumbers();

    // function for validation of chosen criteria 
  var validateCriteria = function() {
    if (upperCase === true ||
        lowerCase === true ||
         specialCharacter === true ||
         numbers === true) {
          window.alert(`a password with the accepted criteria will be generated!`)
    } else {
      window.alert("You need to include at least on of the followwing 1) uppercase letters 2) lowercase letters 3) special characters");

      let again = window.confirm("do you want to try again or cancel?");
      if (again) {
        generatePassword()
      } else {
        window.alert("OK! Feel free to Press Generate to begin!")
      };
    }
  };
  // STORING ACCEPTABLE CRITERIA (TRUE OR FALSE) 
  var validCriteria = validateCriteria()





    // CODE FOR CREATING PASSWORD WITH ABOVE CRITERIA 
    var generator = function() {

  // POSSIBLE GENERATED CHARACTERS (CharCodes values) -----------------------------------
        const upperCaseCharCodes = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const lowerCaseCharCodes = "abcdefghijklmnopqrstuvwxyz";
        const numberCharCodes = "0123456789";
        const specialCharacterCharCodes = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

  // --------------------------------------------------

      let potentialCharacters = "";
      if (lowerCase) potentialCharacters = potentialCharacters.concat(lowerCaseCharCodes)
      if (upperCase) potentialCharacters = potentialCharacters.concat(upperCaseCharCodes)
      if (numbers) potentialCharacters = potentialCharacters.concat(numberCharCodes)
      if (specialCharacter) potentialCharacters = potentialCharacters.concat(specialCharacterCharCodes);

      console.log(`Potential characters: ${potentialCharacters}`);
      
      var password = []
      for (let i = 0; i < length; i++) {
        var positionGenerator = potentialCharacters[Math.floor(Math.random() * potentialCharacters.length)];
        password.push(positionGenerator)
      }
      return password.join("")
    }


    return generator();
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
