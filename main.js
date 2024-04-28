var ingredients = []; // array for the ingredients entered by the user
var numberOfIngredients = 0; // keeps track of the number of ingredients
class Recipe{ // class for the different recipes
  constructor(name, ingredients, instructions, difficulty) {
    this.name = name; // name of recipe
    this.ingredients = ingredients; // array of ingredients
    this.instructions = instructions; // string of instructions
    this.difficulty = difficulty; // number for difficulty 1-5
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

  getDifficulty(){
    return this.difficulty;
  }
}

// CHAT GPT GENERATED RECIPES
const recipes = [];
recipes.push(new Recipe("Chocolate Chip Cookies 🍪", ["flour", "sugar", "chocolate chips"], "1. Mix ingredients\n2. Bake at 350°F for 10 minutes"));
recipes.push(new Recipe("Pasta Carbonara 🍝", ["spaghetti", "bacon", "eggs"], "1. Cook spaghetti\n2. Fry bacon\n3. Beat eggs\n4. Mix everything together"));
recipes.push(new Recipe("Chicken Stir Fry 🍗", ["chicken breast", "vegetables", "soy sauce"], "1. Cut chicken into small pieces\n2. Stir-fry chicken and vegetables in a pan\n3. Add soy sauce"));
recipes.push(new Recipe("Tomato Soup 🍅", ["tomatoes", "onions", "vegetable broth"], "1. Simmer all ingredients together\n2. Blend until smooth"));
recipes.push(new Recipe("Grilled Cheese Sandwich 🧀", ["bread", "cheese", "butter"], "1. Butter one side of each bread slice\n2. Place cheese between bread slices\n3. Grill until cheese is melted"));
recipes.push(new Recipe("Spaghetti Bolognese 🍝", ["ground beef", "tomato sauce", "spaghetti"], "1. Cook spaghetti\n2. Brown ground beef\n3. Add tomato sauce\n4. Mix everything together"));
recipes.push(new Recipe("Chicken Parmesan 🍗", ["chicken breast", "breadcrumbs", "marinara sauce"], "1. Coat chicken in breadcrumbs\n2. Cook chicken until golden brown\n3. Top with marinara sauce and cheese\n4. Bake until cheese is melted"));
recipes.push(new Recipe("Caesar Salad 🥗", ["romaine lettuce", "croutons", "Caesar dressing"], "1. Toss lettuce with dressing\n2. Sprinkle with croutons\n3. Serve immediately"));
recipes.push(new Recipe("Beef Tacos 🌮", ["ground beef", "taco shells", "salsa", "cheese"], "1. Brown ground beef\n2. Warm taco shells\n3. Fill shells with beef, salsa, and cheese"));
recipes.push(new Recipe("Chicken Noodle Soup 🥣", ["chicken broth", "chicken breast", "noodles", "carrots", "celery"], "1. Boil chicken in broth\n2. Shred chicken\n3. Add noodles, carrots, and celery\n4. Simmer until vegetables and noodles are tender"));
recipes.push(new Recipe("Margarita Pizza 🍕", ["pizza dough", "tomato sauce", "mozzarella cheese", "basil"], "1. Roll out pizza dough\n2. Spread sauce on dough\n3. Top with cheese, basil, and any desired toppings\n4. Bake until crust is golden brown"));
recipes.push(new Recipe("Blueberry Muffins 🫐", ["flour", "sugar", "blueberries", "butter", "milk"], "1. Mix dry ingredients\n2. Add butter and milk\n3. Fold in blueberries\n4. Bake at 375°F for 20 minutes"));
recipes.push(new Recipe("Beef Stroganoff 🥩", ["beef sirloin", "mushrooms", "onions", "sour cream"], "1. Brown beef and mushrooms\n2. Saute onions\n3. Combine meat, mushrooms, onions, and sour cream\n4. Serve over egg noodles"));
recipes.push(new Recipe("Veggie Burger 🍔", ["black beans", "quinoa", "breadcrumbs", "onion", "spices"], "1. Mash black beans\n2. Cook quinoa\n3. Mix beans, quinoa, breadcrumbs, onion, and spices\n4. Form into patties and cook on a grill or stovetop"));
recipes.push(new Recipe("Beef Chili 🥣", ["ground beef", "beans", "tomatoes", "onions", "bell peppers", "chili powder"], "1. Brown ground beef\n2. Saute onions and bell peppers\n3. Add remaining ingredients\n4. Simmer for 30 minutes"));
recipes.push(new Recipe("Lemon Garlic Shrimp 🍤", ["shrimp", "garlic", "lemon", "butter", "parsley"], "1. Cook shrimp in butter and garlic\n2. Squeeze lemon juice over shrimp\n3. Garnish with parsley\n4. Serve with rice or pasta"));
recipes.push(new Recipe("Roast Chicken 🍗", ["whole chicken", "lemon", "garlic", "thyme", "olive oil"], "1. Stuff cavity of chicken with lemon, garlic, and thyme\n2. Rub chicken with olive oil\n3. Roast at 375°F until cooked through"));
recipes.push(new Recipe("Banana Bread 🍌", ["bananas", "flour", "sugar", "butter", "eggs"], "1. Mash bananas\n2. Mix dry ingredients\n3. Cream butter and sugar\n4. Add eggs, bananas, and dry ingredients\n5. Bake at 350°F for 50-60 minutes"));
recipes.push(new Recipe("Caprese Salad 🥗", ["tomatoes", "mozzarella cheese", "basil", "balsamic glaze"], "1. Slice tomatoes and cheese\n2. Arrange on a platter\n3. Sprinkle with basil\n4. Drizzle balsamic glaze over top"));
recipes.push(new Recipe("Spinach and Feta Stuffed Chicken 🍗", ["chicken breast", "spinach", "feta cheese", "garlic"], "1. Butterfly chicken breasts\n2. Stuff with spinach, feta, and garlic\n3. Bake at 400°F until chicken is cooked through"));
recipes.push(new Recipe("Gazpacho 🥣", ["tomatoes", "cucumber", "bell pepper", "onion", "garlic", "olive oil"], "1. Blend all ingredients together\n2. Chill in the refrigerator\n3. Serve cold"));
recipes.push(new Recipe("Beef and Broccoli Stir Fry 🍚", ["beef sirloin", "broccoli", "soy sauce", "ginger", "garlic"], "1. Slice beef thinly\n2. Stir fry beef\n3. Steam broccoli\n4. Combine beef, broccoli, soy sauce, ginger, and garlic"));
recipes.push(new Recipe("Apple Pie 🥧", ["apples", "sugar", "flour", "cinnamon", "butter"], "1. Slice apples\n2. Mix with sugar, flour, and cinnamon\n3. Put filling in pie crust\n4. Dot with butter\n5. Bake at 375°F for 45-50 minutes"));
recipes.push(new Recipe("Cabbage Rolls 🥬", ["cabbage", "ground beef", "rice", "onion", "tomato sauce"], "1. Boil cabbage leaves\n2. Cook ground beef and rice\n3. Roll beef and rice in cabbage leaves\n4. Top with tomato sauce\n5. Bake at 350°F for 30 minutes"));
recipes.push(new Recipe("Omelette 🍳", ["eggs", "cheese", "vegetables", "salt", "pepper"], "1. Beat eggs with salt and pepper\n2. Pour into a heated non-stick pan\n3. Add cheese and vegetables\n4. Fold omelette in half\n5. Cook until eggs are set"));
recipes.push(new Recipe("Pancakes 🥞", ["flour", "milk", "eggs", "sugar", "baking powder"], "1. Mix dry ingredients\n2. Add milk and eggs\n3. Cook batter on griddle or pan\n4. Flip when bubbles form on the surface"));
recipes.push(new Recipe("Guacamole 🥑", ["avocado", "tomato", "onion", "cilantro", "lime", "salt"], "1. Mash avocado\n2. Mix in tomato, onion, and cilantro\n3. Squeeze lime juice over guacamole\n4. Season with salt"));
recipes.push(new Recipe("Beef and Bean Burritos 🌯", ["ground beef", "refried beans", "tortillas", "cheese", "salsa"], "1. Cook ground beef\n2. Warm refried beans and tortillas\n3. Fill tortillas with beef, beans, cheese, and salsa\n4. Fold to create burritos"));
recipes.push(new Recipe("Honey Mustard Chicken 🍗", ["chicken breast", "honey", "Dijon mustard", "garlic", "thyme"], "1. Mix honey, mustard, garlic, and thyme\n2. Coat chicken with mixture\n3. Bake at 375°F until chicken is cooked through"));

// This loads the Ingredients and Recipes when the program is booted up
window.onload = function() { // chat GPT generated
  loadIngredients();
  displayAllRecipes();
};

function displayIngredients() {
  var display = ""; // creates an empty string
  for (var i = 0; i < ingredients.length; i += 1) { // for all of the ingredients in the ingredient array
    display += "- " + ingredients[i] + "<br>"; // add a bullet point, the ingredient, and a newline
  }

  if (display == "") {
    display = "No Ingredients in Pantry";
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

function isIngredient(recipeIngredient){
  for(var i = 0; i < ingredients.length; i++){
    if(ingredients[i] == recipeIngredient){
      return true;
    }
  }
  return false;
}

// function to display a pop-up window with additional information about the selected recipe
function displayRecipePopup(recipe) {
  // create a pop-up window element
  var popup = document.createElement("div");
  popup.style.padding = "10px";
  popup.style.position = "absolute";
  popup.style.top = "20px"; 

  // construct the content with HTML elements for separate lines
  var content = "<strong>Additional information about:</strong><br>";
  content += "<strong>Name:</strong> " + recipe.getName() + "<br>";
  content += "<strong>Ingredients:</strong><br>" + recipe.getIngredients().join("<br>") + "<br>"; // Assuming getIngredients() returns an array
  content += "<strong>Instructions:</strong><br>" + recipe.getInstructions().replace(/\n/g, "<br>") + "<br>"; // Assuming getInstructions() returns a string with newline characters

  // set the HTML content of the pop-up window with the constructed content
  popup.innerHTML = content;

  // add styling to the pop-up window
  popup.classList.add("popup");

  // append the pop-up window to the body element or any other container in your HTML
  document.body.appendChild(popup);
}



// function to create and append recipe elements
function appendRecipeElements(recipes, container) {
  // iterate over each recipe name in the array
  recipes.forEach(function(recipe) {
    // create a new div element
    var div = document.createElement("div");
    // set the text content of the div to the recipe name
    div.textContent = recipe.getName();
    // add the 'recipe-name' class to the div for styling
    div.classList.add("recipe-name");
    // append the div to the specified container
    container.appendChild(div);

    // add an event listener to the div for click events
    div.addEventListener("click", function() {
      // call a function to display a pop-up window with more information about the recipe
      displayRecipePopup(recipe);
  });
  // append the div to the specified container
  container.appendChild(div);
});
}


function displayRecipes() { // when this is called a title and x-button are already integrated in the html
  var matchingIngred = []; // array to hold the matching ingredients
  var container = document.querySelector(".modal .content"); // creates a container to hold everything in it
  
  // remove previous list of matching recipes
  var recipeList = container.querySelector(".recipe-list"); // grabs what is already in the container (if any) and stores it as recipieList
  if (recipeList) {
    container.removeChild(recipeList); // removes it if present
  }

  // create a new list for matching recipes
  recipeList = document.createElement("div"); // creates a new div to hold the matching ingredient divs
  recipeList.classList.add("recipe-list"); // adding a recipie-list

  for(var i = 0; i < recipes.length; i += 1) { // loops thru the recipies
    var validRecipe = true; // a var to tell if it matches the ingredients
    for (var j = 0; j < recipes[i].getIngredients().length; j += 1) { // loops thru the recipie ingredients
      if(!isIngredient(recipes[i].getIngredients()[j])){ // checks to see if the ingredient for the recipie is part of the users pantry
        validRecipe = false; 
        break;
      }
    }
    if(validRecipe) {
      matchingIngred.push(recipes[i]); // if in match, the add to array
    }
  }

  if (matchingIngred.length === 0) {
    recipeList.innerHTML = "<p>No Recipes Match</p>";
  } else {
    // prints the divs for the matching recipies
    appendRecipeElements(matchingIngred, recipeList);
  }

  // append the new list to the container
  container.appendChild(recipeList);
}

function loadIngredients() {
  /* This grabs the string that we converted in the saveIngredients() function
  that is stored with the key "ingredients"*/
  const storedIngredients = localStorage.getItem("ingredients");
  /*Checks if the user has anything stored in their RAM with the key*/
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

// Funtion to toggle the visability of the menu content
function toggleMenu() {
  // get the Nutrition Facts content element
  var nutritionFacts = document.getElementById("nutritionFacts");

  // Open the display property of the menu content element
  if(nutritionFacts.style.display === "none") {
    // Show the menu content if it was hidden
    nutritionFacts.style.display = "block";
  } else {
    // Hide the menu content if it's currently visible
    nutritionFacts.style.display = "none"; 
  }

}

function displayAllRecipes() {
  var container = document.getElementById("recipesContainer");

  // create a new list for all recipes
  var recipeList = document.createElement("div"); // creates a new div to hold the recipe divs
  recipeList.classList.add("recipe-list"); // adding a recipe-list class

  if (recipeList.length === 0) {
    recipeList.innerHTML = "<p>No Recipes Available</p>";
  } else {
    // prints the divs for all the recipes
    appendRecipeElements(recipes, recipeList);
  }

  // append the new list to the container
  container.appendChild(recipeList);
}

function sortRecipesByDifficulty() {
  var container = document.querySelector(".modal .content");
  var recipeList = container.querySelector(".recipe-list"); // Gets the matched recipe list

  if (recipeList) { // Checks if there are any matching recipies
      var recipesArray = Array.from(recipeList.children); // Converts collection to Array
      var matchingRecipes = recipesArray.map(item => {
          var recipeName = item.textContent.split(" - ")[0]; // Gets the recipe name
          return recipes.find(recipe => recipe.name === recipeName); // Locates corrosponding Recipe object from matching recipe
      });

      // Sorts array of matching recipes by difficuly number
      matchingRecipes.sort((a, b) => a.difficulty - b.difficulty);

      // Clears the current list
      recipeList.innerHTML = '';

      // Appends the sorted matching recipes back to the list
      matchingRecipes.forEach(recipe => {
          const listItem = document.createElement("div");
          listItem.textContent = `${recipe.name} - Difficulty: ${recipe.difficulty}`; // Displays text and difficulty number
          recipeList.appendChild(listItem);
      });
  }
}
