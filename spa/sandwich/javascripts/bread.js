var breadChoice = function () {
  var breadPrice = {
    "White": 1.00,
    "Wheat": 1.25
  } 
  return {
    addBread: function (breadChosen) {
      return breadPrice[breadChosen]
    }
  };
}();

//console.log("bread choice", breadChoice);

//"change" because it's a drop down option
document.getElementById("bread-options").addEventListener("change", function (whateverClicked) {
  var breadPrice = breadChoice.addBread(whateverClicked.target.value);
  // .value instead of id because the drop down is id, value is the option selected
    console.log(whateverClicked.target.value, breadPrice);
})