//WPF - Katy Brunette - Expressions Assignment: Personal - 6/13/13

alert("How much milk do you buy in a year? Let's find out.");//alert to engage user
var userInput = prompt("How often do you buy a gallon of milk (in days)?");//asks user to enter in how often they buy milk
console.log(userInput);//prints that number to the console

var yearDays = 365;//variable to be the number of days in a year
prompt("How many days are there in one year?");//question to ask users how many days there are in a year
alert("Correct! There are " + yearDays + " days in a year.");//this alert assures them their answer is correct

var milkResult = yearDays / userInput;//this expression calculates the answer 
alert("That means that you buy " + milkResult + " gallons of milk a year!");//this alert informs the user of how many gallons of milk they buy in a year
console.log(milkResult);//prints the answer to the console 
