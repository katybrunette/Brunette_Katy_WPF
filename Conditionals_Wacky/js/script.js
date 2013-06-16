//WPF - Conditionals Assignment - Wacky - Katy Brunette - 6/15/13

var poleDance; //my wacky "Not Operator" variable
var stripping; //my wacky "Not Operator" second variable

poleDance != stripping; //these are NOT the same
stripping != poleDance; //these are NOT the same

//adding "else if" to this part of the assignment. 

var age = 17; //age to get a tattoo - needs to be 18 to get without parental consent.
var ageWithConsent = 16; //can get tattoo with parental consent at this age.

if(age >= 18){ //if the age of the person is greater than or equal to 18, they don't need consent. 
	console.log("You are old enough to get a tattoo!"); //console prints out this statement if the above is true.
} else if(ageWithConsent < age){ //else if part means if you are younger than 18, you need consent. 
	console.log("Sorry, you can only get a tattoo if your parent/guardian consents."); //this prints out final result. 
}

