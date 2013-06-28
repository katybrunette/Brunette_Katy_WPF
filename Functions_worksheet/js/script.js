//WPF - Functions Worksheet - Katy Brunette - 6/27/2013

//Problem One

function circ(){ //defined function
	var radius = 12; //first variable is radius
	var pi = 3.14;  //second is pi (3.14)
	var circ = pi * radius * 2; //third is calculation for value
	console.log("The circumference of the circle is " + circ); //printed to console
}
circ(); //called the function


//Problem Two

function beeStings(){ //defined function
	var pounds = 150; //animal's weight
	var stings = 8.666666667; //bee stings it takes to kill a 1lb animal
	var total = pounds / stings; //calculation to get value for a 150lb animal
	console.log("It takes " + total + " bee stings to kill a " + pounds + " pound animal!"); //prints to console
}
beeStings(); //called function to complete code