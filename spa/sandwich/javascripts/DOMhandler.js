// get rid of duplicate code by building function to output total price to DOM and update it when toppings are selected
  // Step #1: update the price each time an event happens/topping is added, that pretty much names your function right there
  // Step #2: Decide what information your function will need in order to fulfill its purpose.  That’s your argument(s)
  // Step #3: Remove all the duplicate code, put it in your function, 
  // Step #4: then call that function in all the corresponding places
  
// figure out how to get rid of click event on topping names and make the event just on the checkbox
    // topping is registering as undefined because the click event is bubbling up because my click event is targeting the entire "meat" div for example, not just the checkbox
// figure out how to make price subtract when I uncheck something
//make total price: show 

var outputSandwichToDOM = document.getElementById("total-sandwich-price");

function updateDOM(priceUpdate) {
  totalSandwichPrice += priceUpdate;
  outputSandwichToDOM.innerHTML = `$${totalSandwichPrice}`;
};

var totalSandwichPrice = 0;

document.getElementById("bread-options").addEventListener("change", function (whateverClicked) {
  updateDOM(breadChoice.addBread(whateverClicked.target.value));
})
document.getElementById("meat").addEventListener("click", function (whateverClicked) {
  updateDOM(meatChoice.addMeat(whateverClicked.target.id));
})
document.getElementById("cheese").addEventListener("click", function (whateverClicked) {
  updateDOM(cheeseChoice.addCheese(whateverClicked.target.id));
})
document.getElementById("condiments").addEventListener("click", function (whateverClicked) {
  updateDOM(condimentsChoice.addCondiments(whateverClicked.target.id));
})
document.getElementById("veggies").addEventListener("click", function (whateverClicked) {
  updateDOM(veggieChoice.addVeggie(whateverClicked.target.id));
})

//outputSandwichToDOM.innerHTML = totalSandwichPrice;
// ^ this was making 0 show up at initial page load


console.log("total sandwich price", totalSandwichPrice);









//*****************
// gather prices for each topping
// then add all prices together for a total price
//then output the total price to the DOM
//I also want to list all toppings selected in the DOM
//******************

// Variable to hold the final price. Default to 0.
// var finalSandwichPrice = 0;

// // Variable to hold topping that the user selects
// var selectedTopping;

// // Get a reference to the <select> element that has all the meat options
// var meatChooser = document.getElementById("meat-chooser");

 
//   A <select> element broadcasts a change event, so you listen for it
//   and get the value of the topping from your augmented IIFE

// meatChooser.addEventListener("change", function(event) {
//   // Get the value chosen from the DOM
//   selectedTopping = event.target.value;

//   // Determine the price of the topping chosen

//   // Add the topping to the SandwichMaker to increase the total price
// });









