var condimentsChoice = function () {
  var condimentsPrice = {
    "ranch": 0.25,
    "ketchup": 0.25,
    "mustard": 0.25,
    "mayo": 0.25,
  }
  return {
    addCondiments: function (condimentsChosen) {
      return condimentsPrice[condimentsChosen]
    }
  };
}();

document.getElementById("condiments").addEventListener("click", function (whateverClicked) {
  var condimentsPrice = condimentsChoice.addCondiments(whateverClicked.target.id);

  console.log(whateverClicked.target.id, condimentsPrice);
})






