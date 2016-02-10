var meatChoice = function () {
  // building object below with the meats as the keys and prices as the values
  // syntax for objects {
  //   "key": value,
  // }
  var meatPrice = {
    "turkey": 0.90, 
    "chicken": 0.85, 
    "bacon": 1.50,
    "no-meat": 0.00
  }
  // returning addMeat which is the GETTER
  // function is saying, I need you to do something... what do I need you to do?
  // get the meat that was chosen...
  // argument is meatChosen because we have to tell it what we're getting, which we do on the next line
  return {
    // addMeat is the key
    // the function gives us a way to produce the value
    // we get the value by RETURN
    //if there is no return to a function, it will come back as undefined
    addMeat: function (meatChosen) {
      // meatPrice to look at the object
      // [meatChosen] because the value of meatPrice can change.. it will not always be turkey.. if it was, we would put meatPrice.turkey
      return meatPrice[meatChosen]
    }
  };
}();

console.log("meat choice", meatChoice);

// now is when we connect the two: the price output vs. which meat was chosen based on the click event

document.getElementById("meat").addEventListener("click", function (whateverClicked) {
    // console.log(whateverClicked.target.id);
  var meatPrice = meatChoice.addMeat(whateverClicked.target.id);
  
    console.log(whateverClicked.target.id, meatPrice);
})


// Create a sandwich order form that allows the user to select all the ingredients for a custom deli sandwich. Create a Sandwich module, then create the following as individual modules, using IIFE syntax, to augment Sandwich:

// bread
// meat
// cheese
// condiments
// veggies

// The ingredient choices should be stored as JS objects that contain the ingredients as keys and their cost as the value. {"turkey": 0.90, "bacon": 1.50}

// Make sure the ingredient objects cannot be accessed by the other modules except through an accessor (getter) method.

// Each IIFE should expose, in its public interface, a method named add{ingredient} (e.g. addMeat or addVeggies) that accepts a single argument. That argument's value should be the ingredient selected by the user.

// You should also create an additional JavaScript file that handles interacting with the form elements and determining which method should be called.

// Don't worry about exposing the prices to the user until you display the final cost. This is just an exercise, not a business model.





















