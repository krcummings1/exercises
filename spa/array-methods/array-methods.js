var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

var el = document.getElementById("planets");

/* 
 Use the forEach method to add the name of each planet
 to a div element in your HTML with an id of "planets".
*/

// planets.forEach (function(currentPlanet) {
// 	el.innerHTML += `<div>${currentPlanet}</div>`;
// });

// SAME AS // ^^

var outputToDOM = function (currentPlanet) {
	el.innerHTML += `<div>${currentPlanet}</div>`;
}
planets.forEach(outputToDOM);
	// whatever is between ` ` builds string //
	// {} injects variables right into string //


// Use the map method to create a new array where the first letter of each planet is capitalized
var capitalizedPlanets = planets.map (function (cp) {
	return cp.slice(0,1).toUpperCase() + cp.slice(1);
});

console.log("capitalizedPlanets", capitalizedPlanets);

// capitalizedPlanets.forEach (function(currentPlanet) {
// 	el.innerHTML += `<div>${currentPlanet}</div>`;
// });

capitalizedPlanets.forEach(outputToDOM);

//  *********************************** //
// filter returns an array
// array.filter creates a new array
// filter takes one argument, needs function to execute
// control + command + arrow moves text when highlighted
//  *********************************** //


// // Use the filter method to create a new array that contains planets with the letter 'e'
var planetsWithE = planets.filter(function (currentPlanet) {return currentPlanet.indexOf("e") >= 0;
});
console.log("planetsWithE", planetsWithE);

planetsWithE.forEach(outputToDOM);

// // Use the reduce method to create a sentence from the words in the following array

var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];

var sentence = words.reduce(function (previousWord, currentWord) {
	return `${previousWord} ${currentWord}`;
});
console.log("sentence", sentence);

el.innerHTML += `<div>${sentence}</div>`;
// ABOVE AND BELOW DO THE SAME THING
el.innerHTML  += "<div>" + sentence + "</div>";
// saying go to el (element I created) and insert variable sentence
// el is the element defined above... it is
// var el = document.getElementById("planets");
// you write div because div is what is holding the info in the HTML
// so "holder" + variable that contains the info you want to show up + "closing holder" ;


// SAME AS ^^^ // BELOW IS OLD WAY, ABOVE IS NEW WAY

// var sentence = "";
// for (var i = 0; < words.length; i++) {
// 	sentence += words[i] + " ";
// }
// console.log("sentence", sentence);



















