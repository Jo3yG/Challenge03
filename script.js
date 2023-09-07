// Assignment Code
var generateBtn = document.querySelector("#generate");

//setting up object with properties and arrays
var pswSelections = {
     upperCase : ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
     lowerCase : ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
     numeral : ["0","1","2","3","4","5","6","7","8","9"],
     special : ["!","@","#","$","%","^","&","*","(",")"],
}
//need to create function to generate password
    function generatePassword(){
        //need to store psw 
        var psw = "";
        //need variables to store inputs
        var pswLength = 0;
        var uCase;
        var lCase;
        var numbers;
        var sCharacters;

        //need psw to start somewhere
        pswLength = 0;
        pswSelections.pswLength = 0;
        result = "";
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
    };
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
    if (!upperCase && !lowerCase && !numeral && !special){
        selections = alert("Sorry, You MUST choose one criteria, Thank You.");
    }
    //shows 4 positive options
    else if (upperCase===true && lowerCase===true && numeral===true && special===true){
        selections = upperCase.concat(lowerCase, numeral, special);
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

var pickSelections = ""

for (var i=0; 1 < click; i++){ 
    var pickSelections = selections[Math.floor(Math.random() * 127)];
    password.push(pickSelections);
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
