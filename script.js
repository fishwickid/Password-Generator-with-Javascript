
//Create arrays with all the characters in the password


var userChoice = [];
var lowerCase =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
var upperCase =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];
var numbers=[0,1,2,3,4,5,6,7,8,9,]
var specialChar = ['!','#','$','%','&','(',')','*','+','-','.','/',':',';','<','=','>','?','@','^']

// Series of prompt quesstions for User after they click button

function promptMe() {

// Ask the user how many characeters they want in their password

var passwordLength = prompt("How many numbers do you want your password to contain? (8 - 128)");
console.log(passwordLength);

// Turn password into a number from a string value
passwordLength = parseFloat(passwordLength);

// Create alert if the user enters a value less that 8 or more than 128
if (passwordLength < 8  || passwordLength > 128) {
  alert("Your password needs to be at least 8 characters and no more than 128");
  return
} 
else {
  alert ("Your password is going to be " + passwordLength + " characters");
}

// Ask user if they want uppercase in their password

var upperCaseChoice = confirm("Do you wish to use uppercase?");
console.log(upperCaseChoice);
 if (upperCaseChoice) {
//Concatinate the predetermined array to include uppercase letters (this happens for every prompt)
   userChoice = userChoice.concat(upperCase);
   console.log(userChoice);
   //console.log(userChoice.length);
 }

// Ask user if they want lowercase

var lowerCaseChoice = confirm("Do you wish to use lowercase?");
console.log(lowerCaseChoice);
if (lowerCaseChoice) {
  userChoice = userChoice.concat(lowerCase);
   console.log(userChoice);
 
}

//Ask user if they want numbers + concatination

var numbersChoice = confirm("Do you wish to use numbers?")
console.log(numbersChoice);
if (numbersChoice) {
  userChoice = userChoice.concat(numbers);
  console.log(userChoice);
}

// Ask user if they want special characters + concatinate

var specialCharactersChoice = confirm("Do you wish to use special character?")
console.log(specialCharactersChoice);
if (specialCharactersChoice) {
  userChoice = userChoice.concat(specialChar);

}

// create empty array to fill with random outputted numbers
  var charactersArray = [];

// create loop to keep adding random numbers to the array until it reaches the limit of
// how many numbers the user wanted for their password.

  for(var i = 0; i < passwordLength;i++) {
    
    var randomCharacter = Math.floor(Math.random() * userChoice.length);
    charactersArray += userChoice[randomCharacter];
  }
  document.getElementById("password").innerHTML=charactersArray;
  alert("Your new password is: " + charactersArray);
}