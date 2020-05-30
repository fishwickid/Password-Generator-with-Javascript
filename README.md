This code is a password generator that once initiated will create a password based on the 
users desired input.

See generator: https://fishwickid.github.io/Password-Generator-with-Javascript/

First you will see all the variables with array values

assets/Variables.png

On button click the primary function will begin. This function will initiate a series of 
prompts asking the user for a number input, then confirm alerts asking them what type of 
characters they want in their password. 

As it moves down the if/else statemente their input is concatinated into the userChoice variable. 

https://fishwickid.github.com.io/fishwickid/assets/IfElse_Statements.png

Once going through all this process the end result is then pushed through a loop which contains a 'Math.random' function to produce random numbers from the 'userChoice' concatinated array and pushes them randomly into a new array called 'charactersArray'.

https://fishwickid.github.com.io/fishwickid/assets/For_Loop_with_Random.png

The end result is then added to the HTML by using the 'document.getElementById' function and pusing the 'charactersArray' to display in the box. 
