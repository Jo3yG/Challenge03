
//GIVEN I need a new, secure password
//WHEN I click the button to generate a password
//THEN I am presented with a series of prompts for password criteria
//WHEN prompted for password criteria
//THEN I select which criteria to include in the password
//WHEN prompted for the length of the password
//THEN I choose a length of at least 8 characters and no more than 128 characters
//WHEN asked for character types to include in the password
//THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
//WHEN I answer each prompt
//THEN my input should be validated and at least one character type should be selected
//WHEN all prompts are answered
//THEN a password is generated that matches the selected criteria
//WHEN the password is generated
//THEN the password is either displayed in an alert or written to the page

// Assignment Code
var generateBtn = document.querySelector("#generate");


// setting up variables
    var upperCase = ["A""B""C""D""E""F""G""H""I""J""K""L""M""N""O""P""Q""R""S""T""U""V""W""X""Y""Z"];
    var lowerCase = ["a""b""c""d""e""f""g""h""i""j""k""l""m""n""o""p""q""r""s""t""u""v""w""x""y""z"];
    var numeral = ["0""1""2""3""4""5""6""7""8""9"];
    var special = ["!""@""#""$""%""^""&""*""("")"];
    var selections
//need to create function to generate password
    function generatePassword(){
        //length above 8 but lower than 128
        var pswLength = prompt("Password must be between 8-128 characters!!! ");
        //verify password is between 8-128 characters
        if ( pswLength < 8 || pswLength > 128){
            alert("Please pay attention to instructions!!!");
        } else {
            //ask for the confirmations
        upperCase = confirm("Will you like Uppers?");
        lowerCase = confirm("Will you like Lowers?");
        numeral = confirm("Will you like Numerals?");
        special = confirm("Will you like Specials?");
        };
    }
    //creating if statements for options of either choosoing 1 criteria through all 4
    //shows if all 4 are negative, now need option for all
    // 4 = upperCase && lowercase && numeric && special
    //3 = upperCase && lowercase && numeric
    //    upperCase && lowerCase && special
    //    upperCase && numeric && special
    //    lowerCase && numeric && special
    //2 = upperCase && lowerCase
    //    upperCase && numeric
    //    upperCase && special
    //    lowerCase && numeric
    //    lowerCase && special
    //    numeric && special
    //1
    // shows the 4 options if not chosen 
    if (!upperCase && !lowerCase && !numeral && ! special){
        selections = alert("Sorry, You MUST choose one criteria, Thank You.");
    }
    //shows if only 3 options are chosen any 3 options
    else if (upperCase && lowerCase && numeral){
        selections = upperCase.concat(lowerCase, numeral);
    }
else if (upperCase && lowerCase && special){
    selections = upperCase.concat(lowerCase, special);
}
else if  (upperCase && numeral && special){
    selections = upperCase.concat(numeral, special);
}
else if ( lowerCase && numeral && special){ 
    selections = lowerCase.concat(numeral, special);
}
//shows if any 2 options are chosen
else if (upperCase && lowerCase){
    selections = upperCase.concat(lowerCase);
}
else if ( upperCase && numeral){
    selections = upperCase.concat(numeral);
}
else if (upperCase && special){
    selections = upperCase.concat(special);
}
else if (lowerCase && numeral){
    selections = lowerCase.concat(numeral);
}
else if (lowerCase && special){
    selections = lowerCase.concat(special);
}
else if (numeral && special){
    selections = numeral.concat(special);
}
//shows for just 1 option, any
else if (upperCase){
    selections = upperCase;
}
else if (lowerCase){
    selections = lowerCase;
}
else if (numeral){
    selections = numeral;
}
else if (special){
    selections = special;
};

for (var i=0; 1 < click; i++){ 
    var pickSelections = selections[Math.floor(Math.random() * selections.length)];
    password.push(pickSelections);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
