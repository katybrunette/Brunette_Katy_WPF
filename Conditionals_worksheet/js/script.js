//WPF - Conditionals Worksheet - Katy Brunette - 6/15/13

//Celsius to Fahrenheit Converter 

var degrees = 32; //I have no idea how to do this one, please help!
var unit; 

if(degrees === 32){
	console.log("The temperature is " + degrees + " degrees Fahrenheit.");
}


//Grade Letter Calculator

var grade = 83;//end grade is 83% for the class

if(grade <= 80 || 84){
	console.log("You have an " + grade + "% which means you have earned a B in the class!");
} 


//Movie Ticket Price

var movieTime = 2; //movie showing is at 2:00pm, so no discount
var custAge = 45;  //the customer age is 45, so no senior discount

if(custAge >= 55 || movieTime === 3){
	console.log("The ticket price is $7.00.");

}else{
	console.log("The ticket price is $12.00.");
}