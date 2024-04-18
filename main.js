var ingredients = []; // array for the ingredients entered by the user
var numberOfIngredients = 0; // keeps track of the number of ingredients

class Recipe{ // class for the different recipes
  constructor(name, ingredients, instructions) {
    this.name = name; // name of recipe
    this.ingredients = ingredients; // array of ingredients
    this.instructions = instructions; // string of instructions
  }

  getName(){
    return this.name;
  }

  getIngredients(){
    return this.ingredients;
  }

  getInstructions(){
    return this.instructions;
  }
}

// handles the input of the ingredients
function input(){
  var str = document.getElementById("tempString").value; // grabs the value entered by the user
  ingredients.push(str); // puts the input in the ingredients array
  numberOfIngredients += 1; // increases ingredients count
  
  var display = ""; // creates an empty string
  for (var i = 0; i < ingredients.length; i += 1) { // for all of the ingredients in the ingredient array
    display += "- " + ingredients[i] + "<br>"; // add a bullet point, the ingredient, and a newline
  }

  document.getElementById("display").innerHTML = display; // display the string on the webpage
}

function displayRecipes(){
  document.getElementById("display").innerHTML = "";
}