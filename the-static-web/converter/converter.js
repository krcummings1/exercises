// Instructions

// Write a program that will convert a temperature from fahrenheit to celsius, or from celsius to fahrenheit.

// In the HTML, have one input field where someone can enter in a temperature.
// Create a radio button group where Celsius or Fahrenheit can be selected as the scale that the number should be converted to.
// Create a block level element that will hold the text of the converted temperature.
// Create a button that, when clicked, displays the converted temperature.
// Create another button that, when clicked, clears any text in the input field.

// Add an event handler to the input field that checks if the user pressed the enter key, and if that happens, perform the conversion.

// addEventListener("keydown", function(event){
//   // === means absolutely equals
//   //  || means OR
//   if(event.keyCode === 13 && (height === document.activeElement || character === document.activeElement))
//   {
//     // event.preventDefault();
//   // console.log("fired");
//     checkParams();
//   }
//   // else{
//   //  console.log("hey");
//   // }
// });

// If the temperature is greater than 90F/32C the color of the converted temperature should be red.
// If the temperature is less than 32F/0C the color of the converted temperature should be blue.
// For any other temperature, the color should be green.


// Get a reference to the button element in the DOM
var convertButton = document.getElementById("convert-button");
var clearButton = document.getElementById("clear-button");
var fahrenheitRadioButton = document.getElementById("fahrenheit");
var celsiusRadioButton = document.getElementById("celsius");

convertButton.addEventListener("click", determineConverter);


// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent) {
  if(fahrenheitRadioButton.checked){
    toFahrenheit();
  }
  if(celsiusRadioButton.checked){
    toCelsius();
  }
  console.log("event", clickEvent);
}

// To convert temperatures in degrees Celsius to Fahrenheit, multiply by 1.8 (or 9/5) and add 32.
function toFahrenheit () {
  var convertedToFahrenheit;
    convertedToFahrenheit = ((input.value*1.8)+32);
    console.log("convertedToFahrenheit", convertedToFahrenheit);
}

function toCelsius () {
  var convertedToCelsius;
    convertedToCelsius = ((input.value-32)*0.5556);
    console.log("convertedToCelsius", convertedToCelsius);
}


// Assign a function to be executed when the button is clicked

// button.addEventListener("click", determineConverter);











