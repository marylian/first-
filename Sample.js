// Author: Marylia Nieves
// Assignment : Deliverable 1 
// Created for: SDI Online
// Term: 1205
//Date: 5-03-12

alert("JavaScript works!");
var vehicleMake="Hyundai"; //Declaration of string variable
var gasMileage="40"; //Declaration of numeric variable
var txtEscape="similar to John Smith\'s car."; //Declaration of string escape
var vehiclePrice="25000."; //Another declaration of string variable
var reliabilityQue="Yes"; //Declaration of boolean variable
var elantraAvail="Yes";
var elantraPrice="23000";
var priceDiff;
console.log("I would like to buy a "+vehicleMake); //Output string variable
console.log("It should give me atleast "+gasMileage+" MPG."); //Output numeric variable
console.log("Something "+txtEscape); //Output string escape
console.log("The price of the car should not be more than "+vehiclePrice); //Output numeric variable
console.log("Now these cars are reliable? "+reliabilityQue); //Output boolean variable
console.log("Is this green car available?"); 
if(elantraAvail=="Yes" && vehicleMake=="Hyundai"){ //First boolean condition
	if(elantraPrice<=vehiclePrice){ //Number condition
		console.log("Yes, it is available and amazingly, it is in your budget too");
	}
	else{
		priceDiff=(elantraPrice-vehiclePrice); // Math
		console.log("It is beyond your budget by "+priceDiff); 
	}
}
else{
		if(vehicleMake=="Honda"){ //String comparison
			console.log("That is not a Honda");
		}
		else{
			console.log(vehicleMake+ " is " +txtEscape); //String concoction
		}
}