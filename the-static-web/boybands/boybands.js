
// Loop through the two arrays provided (bands and vegetables) and output each element in the arrays into their corresponding HTML <div> element. Ensure that each item is in a block element (e.g. li, div, p. etc...)

var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var veggies = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

// ******* BANDS
var dudesElement = document.getElementById("boybands");

// Puts dudesElement in log
console.log(dudesElement)

// Makes dudesElement show up in DOM (webpage, visible to viewer)
for (var i = 0; i < bands.length; i++) {
	dudesElement.innerHTML += "<p>" + bands[i] + "</p>"
};


// ******** VEGGIES
var foods = document.getElementById("vegetables");

console.log(foods)

for (var i = 0; i < veggies.length; i++) {
	foods.innerHTML += "<p>" + veggies[i] + "</p>"
};


// *********** EVERYTHING BELOW, I ALREADY DID ABOVE

// // The number of loops to perform (what if the array changes?)
// var loopCount = 5;

// // Keep track of which band we're on in the loop
// var currentBand = "";

// // Keep track of which veggie we're on in the loop
// var currentVeggie = "";

// // Get a reference to the appropriate DOM element for bands
// var bandElement = document.getElementById(???);

// // Get a reference to the appropriate DOM element for vegetables
// var veggieElement = ???;

// // Start looping
// for (var loopTracker = 0; loopTracker < loopCount; loopTracker += 1) {

//   // Add the band names into the correct <div>
//   currentBand = ???;


//   // Add the veggie names into the correct <div>
//   currentVeggie = ???;

// }