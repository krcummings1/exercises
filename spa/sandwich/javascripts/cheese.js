var cheeseChoice = function () {
  var cheesePrice = {
    "american": 0.50,
    "swiss": 0.75,
    "colby-jack": 0.50,
    "no-cheese": 0.00,
  }
  return {
    addCheese: function (cheeseChosen) {
      return cheesePrice[cheeseChosen]
    }
  };
}();

//console.log("cheese choice", cheeseChoice);

document.getElementById("cheese").addEventListener("click", function (whateverClicked) {
  var cheesePrice = cheeseChoice.addCheese(whateverClicked.target.id);
  console.log(whateverClicked.target.id, cheesePrice);
})


