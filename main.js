var ingredients = []; // array for the ingredients entered by the user
var numberOfIngredients = 0; // keeps track of the number of ingredients

// This loads the Ingredients when the program is booted up
window.onload = loadIngredients;

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

function displayIngredients() {
  var display = ""; // creates an empty string
  for (var i = 0; i < ingredients.length; i += 1) { // for all of the ingredients in the ingredient array
    display += "- " + ingredients[i] + "<br>"; // add a bullet point, the ingredient, and a newline
  }

  document.getElementById("display").innerHTML = display; // display the string on the webpage
}

// handles the input of the ingredients
function input(){
  var str = document.getElementById("tempString").value; // grabs the value entered by the user
  ingredients.push(str); // puts the input in the ingredients array
  numberOfIngredients += 1; // increases ingredients count
  
  displayIngredients();
}

function displayRecipes(){
  // more code...
  document.getElementById("display").innerHTML = "";
}

function loadIngredients() {
  /* This grabs the string that we converted in the saveIngredients() function
  that is stored with the key "ingredients"*/
  const storedIngredients = localStorage.getItem("ingredients");
  /*Chcecks if the user has anything stored in their RAM with the key*/
  if (storedIngredients) {
    /*Converts the string back into an array that we can use*/
    ingredients = JSON.parse(storedIngredients);
  }

  displayIngredients();
}

/*Called when a new ingredient is added. Each time it is called, the memory location is overwritten.*/
function saveIngredients() {
  /* This stores the item in the users RAM. It takes two string values. 
  The first one is the key and the second is the value. JSON.stringify converts
  the array into a string so it can be stored.*/
  localStorage.setItem("ingredients", JSON.stringify(ingredients));
}

// This function clears the ram from the ingredients 
function clearIngredients() {
  localStorage.removeItem("ingredients");
  window.location.reload();
}
