var veggieChoice = function () {
  var veggiePrice = {
    "lettuce": 0.25,
    "spinach": 0.50,
    "green-peppers": 0.25,
    "tomatoes": 0.25,
  }
  return {
    addVeggie: function (veggiesChosen) {
      return veggiePrice[veggiesChosen]
    }
  }
}();

document.getElementById("veggies").addEventListener("click", function (whateverClicked) {
  var veggiePrice = veggieChoice.addVeggie(whateverClicked.target.id);
  console.log(whateverClicked.target.id, veggiePrice);
})