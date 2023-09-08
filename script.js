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
        passwordLength = 0;
        pswSelections.pswLength = 0;
        result = "";
        //adding a while loop for psw length
        while (pswLength <8 || pswLength > 128){
            pswLength = prompt("How Many charactewrs would you like? Between 8-128 characters!!! ");
        }
        //verify password is between 8-128 characters
        if ( pswLength < 8 || pswLength > 128){
            alert("Please pay attention to instructions!!!");
        } else {
        //ask for the confirmations
        uCase = confirm("Will you like Uppers?");
        lCase = confirm("Will you like Lowers?");
        numbers = confirm("Will you like Numerals?");
        sCharacters = confirm("Will you like Specials?");
        };
// if the selections and index is shorter than the selected amount of characters then characters will be added
        while (pswSelections.pswLength < passwordLength ){
            //if no selection is made
            if (!uCase && !lCase && !numbers && !sCharacters){
                alert("One selection must be made!!")
                //will return to make choices again
                uCase = confirm("Will you like Uppers?");
        lCase = confirm("Will you like Lowers?");
        numbers = confirm("Will you like Numerals?");
        sCharacters = confirm("Will you like Specials?");
            }
            //If uCase was selected then as long as pswSelectiona and pswLength are less than passwordLength than a random uCase will be added to result 
            else {
                if (uCase && pswSelections.pswLength < passwordLength){
                    var upCase = pswSelections.pswLength[Math.floor(Math.random() * 26)]
                    result = result + upCase;
                    pswSelections.pswLength++;
                }
                if (lCase && pswSelections.pswLength < passwordLength){
                    var lowCase = pswSelections.pswLength[Math.floor(Math.random() * 26)]
                    result = result +lowCase;
                    pswSelections.pswLength++;
                }
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
   // if (!upperCase && !lowerCase && !numeral && !special){
     //   selections = alert("Sorry, You MUST choose one criteria, Thank You.");
    //}
    //shows 4 positive options
   // else if (upperCase===true && lowerCase===true && numeral===true && special===true){
     //   selections = upperCase.concat(lowerCase, numeral, special);
    //}
    //shows if only 3 options are chosen any 3 options
    //else if (upperCase && lowerCase && numeral){
      //  selections = upperCase.concat(lowerCase, numeral);
    //}
//else if (upperCase && lowerCase && special){
    selections = upperCase.concat(lowerCase, special);
//}
//else if  (upperCase && numeral && special){
  //  selections = upperCase.concat(numeral, special);
//}
//else if ( lowerCase && numeral && special){ 
  //  selections = lowerCase.concat(numeral, special);
//}
//shows if any 2 options are chosen
//else if (upperCase && lowerCase){
  //  selections = upperCase.concat(lowerCase);
//}
//else if ( upperCase && numeral){
  //  selections = upperCase.concat(numeral);
//}
//else if (upperCase && special){
  //  selections = upperCase.concat(special);
//}
//else if (lowerCase && numeral){
  //  selections = lowerCase.concat(numeral);
//}
//else if (lowerCase && special){
  //  selections = lowerCase.concat(special);
//}
//else if (numeral && special){
  //  selections = numeral.concat(special);
//}
//shows for just 1 option, any
//else if (upperCase){
  //  selections = upperCase;
//}
//else if (lowerCase){
  //  selections = lowerCase;
//}
//else if (numeral){
  //  selections = numeral;
//}
//else if (special){
  //  selections = special;
//}


//var pickSelections = ""

//for (var i=0; 1 < click; i++){ 
  //  var pickSelections = selections[Math.floor(Math.random() * 127)];
   // password.push(pickSelections);
//};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
