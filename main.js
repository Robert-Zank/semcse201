var ingredients = []; // array for the ingredients entered by the user
var numberOfIngredients = 0; // keeps track of the number of ingredients
let lastClickedRecipe = null;
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
recipes.push(new Recipe("Chocolate Chip Cookies 🍪", ["flour", "baking soda", "cornstarch", "salt", "butter", "brown sugar", ], "1. Mix ingredients\n2. Bake at 350°F for 10 minutes", 1));
recipes.push(new Recipe("Pasta Carbonara 🍝", ["spaghetti", "bacon", "eggs"], "1. Cook spaghetti\n2. Fry bacon\n3. Beat eggs\n4. Mix everything together", 2));
recipes.push(new Recipe("Chicken Stir Fry 🍗", ["chicken breast", "vegetables", "soy sauce"], "1. Cut chicken into small pieces\n2. Stir-fry chicken and vegetables in a pan\n3. Add soy sauce", 3));
recipes.push(new Recipe("Tomato Soup 🍅", ["tomatoes", "onions", "vegetable broth"], "1. Simmer all ingredients together\n2. Blend until smooth", 2));
recipes.push(new Recipe("Grilled Cheese Sandwich 🧀", ["bread", "cheese", "butter"], "1. Butter one side of each bread slice\n2. Place cheese between bread slices\n3. Grill until cheese is melted", 1));
recipes.push(new Recipe("Spaghetti Bolognese 🍝", ["ground beef", "tomato sauce", "spaghetti"], "1. Cook spaghetti\n2. Brown ground beef\n3. Add tomato sauce\n4. Mix everything together", 2));
recipes.push(new Recipe("Chicken Parmesan 🍗", ["chicken breast", "breadcrumbs", "marinara sauce"], "1. Coat chicken in breadcrumbs\n2. Cook chicken until golden brown\n3. Top with marinara sauce and cheese\n4. Bake until cheese is melted", 3));
recipes.push(new Recipe("Caesar Salad 🥗", ["romaine lettuce", "croutons", "Caesar dressing"], "1. Toss lettuce with dressing\n2. Sprinkle with croutons\n3. Serve immediately", 1));
recipes.push(new Recipe("Beef Tacos 🌮", ["ground beef", "taco shells", "salsa", "cheese"], "1. Brown ground beef\n2. Warm taco shells\n3. Fill shells with beef, salsa, and cheese", 2));
recipes.push(new Recipe("Chicken Noodle Soup 🥣", ["chicken broth", "chicken breast", "noodles", "carrots", "celery"], "1. Boil chicken in broth\n2. Shred chicken\n3. Add noodles, carrots, and celery\n4. Simmer until vegetables and noodles are tender", 2));
recipes.push(new Recipe("Margarita Pizza 🍕", ["pizza dough", "tomato sauce", "mozzarella cheese", "basil"], "1. Roll out pizza dough\n2. Spread sauce on dough\n3. Top with cheese, basil, and any desired toppings\n4. Bake until crust is golden brown", 2));
recipes.push(new Recipe("Blueberry Muffins 🫐", ["flour", "sugar", "blueberries", "butter", "milk"], "1. Mix dry ingredients\n2. Add butter and milk\n3. Fold in blueberries\n4. Bake at 375°F for 20 minutes", 2));
recipes.push(new Recipe("Beef Stroganoff 🥩", ["beef sirloin", "mushrooms", "onions", "sour cream"], "1. Brown beef and mushrooms\n2. Saute onions\n3. Combine meat, mushrooms, onions, and sour cream\n4. Serve over egg noodles", 4));
recipes.push(new Recipe("Veggie Burger 🍔", ["black beans", "quinoa", "breadcrumbs", "onion", "spices"], "1. Mash black beans\n2. Cook quinoa\n3. Mix beans, quinoa, breadcrumbs, onion, and spices\n4. Form into patties and cook on a grill or stovetop", 2));
recipes.push(new Recipe("Beef Chili 🥣", ["ground beef", "beans", "tomatoes", "onions", "bell peppers", "chili powder"], "1. Brown ground beef\n2. Saute onions and bell peppers\n3. Add remaining ingredients\n4. Simmer for 30 minutes", 3));
recipes.push(new Recipe("Lemon Garlic Shrimp 🍤", ["shrimp", "garlic", "lemon", "butter", "parsley"], "1. Cook shrimp in butter and garlic\n2. Squeeze lemon juice over shrimp\n3. Garnish with parsley\n4. Serve with rice or pasta", 2));
recipes.push(new Recipe("Roast Chicken 🍗", ["whole chicken", "lemon", "garlic", "thyme", "olive oil"], "1. Stuff cavity of chicken with lemon, garlic, and thyme\n2. Rub chicken with olive oil\n3. Roast at 375°F until cooked through", 3));
recipes.push(new Recipe("Banana Bread 🍌", ["bananas", "flour", "sugar", "butter", "eggs"], "1. Mash bananas\n2. Mix dry ingredients\n3. Cream butter and sugar\n4. Add eggs, bananas, and dry ingredients\n5. Bake at 350°F for 50-60 minutes", 2));
recipes.push(new Recipe("Caprese Salad 🥗", ["tomatoes", "mozzarella cheese", "basil", "balsamic glaze"], "1. Slice tomatoes and cheese\n2. Arrange on a platter\n3. Sprinkle with basil\n4. Drizzle balsamic glaze over top", 1));
recipes.push(new Recipe("Spinach and Feta Stuffed Chicken 🍗", ["chicken breast", "spinach", "feta cheese", "garlic"], "1. Butterfly chicken breasts\n2. Stuff with spinach, feta, and garlic\n3. Bake at 400°F until chicken is cooked through", 4));
recipes.push(new Recipe("Gazpacho 🥣", ["tomatoes", "cucumber", "bell pepper", "onion", "garlic", "olive oil"], "1. Blend all ingredients together\n2. Chill in the refrigerator\n3. Serve cold", 2));
recipes.push(new Recipe("Beef and Broccoli Stir Fry 🍚", ["beef sirloin", "broccoli", "soy sauce", "ginger", "garlic"], "1. Slice beef thinly\n2. Stir fry beef\n3. Steam broccoli\n4. Combine beef, broccoli, soy sauce, ginger, and garlic", 3));
recipes.push(new Recipe("Apple Pie 🥧", ["apples", "sugar", "flour", "cinnamon", "butter"], "1. Slice apples\n2. Mix with sugar, flour, and cinnamon\n3. Put filling in pie crust\n4. Dot with butter\n5. Bake at 375°F for 45-50 minutes", 3));
recipes.push(new Recipe("Cabbage Rolls 🥬", ["cabbage", "ground beef", "rice", "onion", "tomato sauce"], "1. Boil cabbage leaves\n2. Cook ground beef and rice\n3. Roll beef and rice in cabbage leaves\n4. Top with tomato sauce\n5. Bake at 350°F for 30 minutes", 2));
recipes.push(new Recipe("Omelette 🍳", ["eggs", "cheese", "vegetables", "salt", "pepper"], "1. Beat eggs with salt and pepper\n2. Pour into a heated non-stick pan\n3. Add cheese and vegetables\n4. Fold omelette in half\n5. Cook until eggs are set", 1));
recipes.push(new Recipe("Pancakes 🥞", ["flour", "milk", "eggs", "sugar", "baking powder"], "1. Mix dry ingredients\n2. Add milk and eggs\n3. Cook batter on griddle or pan\n4. Flip when bubbles form on the surface", 2));
recipes.push(new Recipe("Guacamole 🥑", ["avocado", "tomato", "onion", "cilantro", "lime", "salt"], "1. Mash avocado\n2. Mix in tomato, onion, and cilantro\n3. Squeeze lime juice over guacamole\n4. Season with salt", 1));
recipes.push(new Recipe("Beef and Bean Burritos 🌯", ["ground beef", "refried beans", "tortillas", "cheese", "salsa"], "1. Cook ground beef\n2. Warm refried beans and tortillas\n3. Fill tortillas with beef, beans, cheese, and salsa\n4. Fold to create burritos", 3));
recipes.push(new Recipe("Honey Mustard Chicken 🍗", ["chicken breast", "honey", "dijon mustard", "garlic", "thyme"], "1. Mix honey, mustard, garlic, and thyme\n2. Coat chicken with mixture\n3. Bake at 375°F until chicken is cooked through", 3));
recipes.push(new Recipe("Tiramisu 🍰", ["ladyfingers", "espresso", "mascarpone cheese", "eggs", "cocoa powder"], "1. Brew a strong cup of espresso and let it cool.\n2. In a mixing bowl, beat egg yolks and sugar until creamy.\n3. Add mascarpone cheese to the egg mixture and beat until smooth.\n4. In a separate bowl, beat egg whites until stiff peaks form.\n5. Gently fold the beaten egg whites into the mascarpone mixture.\n6. Dip ladyfingers into the cooled espresso and layer them in a serving dish.\n7. Spread a layer of the mascarpone mixture over the ladyfingers.\n8. Repeat the layers until all the ingredients are used, ending with a layer of mascarpone.\n9. Dust the top with cocoa powder.\n10. Refrigerate for at least 4 hours or overnight before serving.", 3));
recipes.push(new Recipe("Fish Tacos 🌮", ["white fish fillets", "taco shells", "cabbage", "lime", "cilantro"], "1. Season white fish fillets with salt and pepper.\n2. Grill or pan-fry the fish until cooked through.\n3. Warm the taco shells in the oven or on a stovetop.\n4. Slice cabbage into thin strips.\n5. Squeeze fresh lime juice over the sliced cabbage.\n6. Flake the cooked fish into smaller pieces.\n7. Fill the taco shells with the flaked fish and top with the sliced cabbage.\n8. Garnish with fresh cilantro. Serve hot.", 2));
recipes.push(new Recipe("Spinach and Feta Stuffed Chicken 🍗", ["chicken breasts", "spinach", "feta cheese", "garlic", "olive oil"], "1. Preheat the oven to 400°F (200°C).\n2. Butterfly the chicken breasts by cutting a pocket in the side of each.\n3. In a skillet, heat olive oil and sauté garlic until fragrant.\n4. Add spinach to the skillet and cook until wilted.\n5. Stir in crumbled feta cheese.\n6. Stuff the spinach and feta mixture into the chicken pockets.\n7. Secure the pockets with toothpicks.\n8. Place the stuffed chicken breasts on a baking sheet and bake in the preheated oven for about 25-30 minutes or until the chicken is cooked through.\n9. Remove toothpicks before serving. Serve hot.", 3));
recipes.push(new Recipe("Beef Burritos 🌯", ["ground beef", "tortillas", "rice", "black beans", "salsa", "cheese"], "1. Brown ground beef in a skillet.\n2. Cook rice according to package instructions.\n3. Warm tortillas in the oven or on a stovetop.\n4. Drain and rinse black beans.\n5. Fill each tortilla with cooked ground beef, rice, black beans, salsa, and cheese.\n6. Roll up the tortillas, tucking in the sides as you go.\n7. Serve the beef burritos hot with extra salsa and sour cream.", 2));
recipes.push(new Recipe("Homemade Pizza 🍕", ["pizza dough", "tomato sauce", "mozzarella cheese", "toppings"], "1. Roll out pizza dough into desired thickness.\n2. Spread tomato sauce evenly over the dough, leaving a small border.\n3. Sprinkle shredded mozzarella cheese over the sauce.\n4. Add your favorite toppings such as pepperoni, bell peppers, and onions.\n5. Bake in a preheated oven at 450°F (230°C) until the crust is golden and the cheese is bubbly and slightly browned. Serve hot.", 2));
recipes.push(new Recipe("Stuffed Bell Peppers 🌶️", ["bell peppers", "ground beef", "rice", "onion", "tomato sauce", "cheese"], "1. Preheat the oven to 350°F (175°C).\n2. Cut the tops off bell peppers and remove the seeds and membranes.\n3. In a skillet, cook ground beef and diced onions until browned.\n4. Cook rice according to package instructions.\n5. Drain excess fat from the ground beef mixture and add cooked rice and tomato sauce.\n6. Fill each bell pepper with the ground beef and rice mixture.\n7. Top with shredded cheese.\n8. Place the stuffed bell peppers in a baking dish and bake in the preheated oven for about 30-40 minutes or until the peppers are tender and the cheese is melted and bubbly. Serve hot.", 3));
recipes.push(new Recipe("Beef and Broccoli Stir Fry 🥦", ["beef sirloin", "broccoli", "soy sauce", "garlic", "ginger"], "1. Cut beef sirloin into thin strips.\n2. Cut broccoli into small florets.\n3. In a skillet or wok, heat oil and stir-fry beef until browned.\n4. Remove beef from the skillet and set aside.\n5. In the same skillet, stir-fry broccoli until tender.\n6. Return the beef to the skillet.\n7. In a small bowl, whisk together soy sauce, minced garlic, and grated ginger.\n8. Pour the sauce over the beef and broccoli and stir well.\n9. Cook for a few more minutes until everything is heated through. Serve hot with rice.", 3));
recipes.push(new Recipe("Shrimp Scampi 🍤", ["shrimp", "linguine", "butter", "garlic", "lemon juice", "parsley"], "1. Cook linguine according to package instructions.\n2. In a skillet, melt butter and sauté minced garlic until fragrant.\n3. Add shrimp to the skillet and cook until pink and cooked through.\n4. Remove the cooked shrimp from the skillet and set aside.\n5. Into the skillet, add lemon juice and scrape up any browned bits.\n6. Drain the cooked linguine and add it to the skillet, tossing to coat.\n7. Add the cooked shrimp back to the skillet.\n8. Garnish with chopped parsley. Serve hot.", 2));
recipes.push(new Recipe("Chicken Fajitas 🌮", ["chicken breasts", "bell peppers", "onions", "fajita seasoning", "tortillas"], "1. Slice chicken breasts into thin strips.\n2. Cut bell peppers and onions into thin strips.\n3. In a skillet, heat oil and cook chicken until no longer pink.\n4. Remove chicken from the skillet and set aside.\n5. In the same skillet, cook bell peppers and onions until tender.\n6. Return the cooked chicken to the skillet.\n7. Sprinkle fajita seasoning over the chicken and vegetables, stirring well.\n8. Warm tortillas in the oven or on a stovetop.\n9. Fill each tortilla with the chicken and vegetable mixture.\n10. Serve the chicken fajitas hot with salsa and sour cream.", 2));
recipes.push(new Recipe("Pancakes 🥞", ["flour", "sugar", "eggs", "milk", "baking powder", "butter"], "1. In a mixing bowl, combine flour, sugar, and baking powder.\n2. In a separate bowl, whisk together eggs and milk.\n3. Gradually pour the egg mixture into the flour mixture, stirring until just combined.\n4. Melt butter in a skillet or griddle over medium heat.\n5. Pour batter onto the hot skillet, using about 1/4 cup for each pancake.\n6. Cook until bubbles form on the surface of the pancakes, then flip and cook until golden brown.\n7. Serve the pancakes hot with syrup, fresh fruit, or whipped cream.", 2));
recipes.push(new Recipe("Chicken Enchiladas 🌯", ["chicken breasts", "tortillas", "enchilada sauce", "cheese", "sour cream"], "1. Preheat the oven to 350°F (175°C).\n2. Cook chicken breasts until no longer pink. Shred the cooked chicken.\n3. Warm tortillas in the oven or on a stovetop.\n4. Pour a small amount of enchilada sauce into a greased baking dish.\n5. Fill each tortilla with shredded chicken, a spoonful of enchilada sauce, and shredded cheese.\n6. Roll up the tortillas and place them seam side down in the baking dish.\n7. Pour the remaining enchilada sauce over the rolled tortillas.\n8. Top with more shredded cheese.\n9. Bake in the preheated oven for about 20-25 minutes or until the cheese is melted and bubbly.\n10. Serve the chicken enchiladas hot with a dollop of sour cream.", 3));

// This loads the Ingredients and Recipes when the program is booted up
window.onload = function() {
  loadIngredients();
  displayAllRecipes();
};

function displayHistory() {
  var container = document.getElementById("historyContainer");
  container.textContent = ""; // clear previous content
  if (lastClickedRecipe) {
    var content = document.createElement("div");
    content.textContent = "Last Recipe: " + lastClickedRecipe.getName();
    container.appendChild(content);
  }
}

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
  // content += funtion to make and recipe.get ingreditent to an array with the ingreditans to list
  content += "<button class='close-button' onclick='closeRecipePopup()'>X</button>"; // Add the close button

  // set the HTML content of the pop-up window with the constructed content
  popup.innerHTML = content;

  // add styling to the pop-up window
  popup.classList.add("popup");

  // append the pop-up window to the body element
  document.body.appendChild(popup);
}

function closeRecipePopup() {
  var popup = document.querySelector(".popup");
  if (popup) {
      popup.parentNode.removeChild(popup);
  }
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
      lastClickedRecipe = recipe; // update the last clicked recipe
      displayHistory();
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

function loadShopList() {
  /* This grabs the string that we converted in the saveIngredients() function
  that is stored with the key "ingredients"*/
  const storedShopList = localStorage.getItem("shopList");
  /*Checks if the user has anything stored in their RAM with the key*/
  if (storedShopList) {
    /*Converts the string back into an array that we can use*/
    ingredients = JSON.parse(storedShopList);
  }

  displayShopList();
}

function displayShopList() {
  var display = ""; // creates an empty string
  for (var i = 0; i < ingredients.length; i += 1) { // for all of the ingredients in the ingredient array
    display += "- " + ingredients[i] + "<br>"; // add a bullet point, the ingredient, and a newline
  }

  if (display == "") {
    display = "No Ingredients in Shopping List";
  }
  document.getElementById("shopListDisplay").innerHTML = display; // display the string on the webpage
}

/*Called when a new ingredient is added. Each time it is called, the memory location is overwritten.*/
function saveShopList() {
  /* This stores the item in the users RAM. It takes two string values. 
  The first one is the key and the second is the value. JSON.stringify converts
  the array into a string so it can be stored.*/
  localStorage.setItem("shopList", JSON.stringify(ingredients));
  loadShopList();
}

// This function clears the ram from the ingredients 
function clearShopList() {
  localStorage.removeItem("shopList");
  window.location.reload();
}

// Funtion to toggle the visability of the menu content. 0 is nutrition facts menu, 1 is shopping list menu
function toggleMenu(menuID) {
  // get the Nutrition Facts content element
  var nutritionFacts = document.getElementById("nutritionFacts");

  if(menuID == 0) {
    // Open the display property of the menu content element
    if(nutritionFacts.style.display === "none") {
      // Show the menu content if it was hidden
      nutritionFacts.style.display = "block";
    } else {
      // Hide the menu content if it's currently visible
      nutritionFacts.style.display = "none"; 
    }
  } 
  if(menuID == 1) {
    // Open the display property of the menu content element
    if(shopListBox.style.display === "none") {
      // Show the menu content if it was hidden
      shopListBox.style.display = "block";
    } else {
      // Hide the menu content if it's currently visible
      shopListBox.style.display = "none"; 
    }
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

// Tiemr variables
let myCounter;
let seconds = 60;

// Button event listener
document.getElementById('btn').addEventListener('click', startTimer);

// Timer function
function startTimer() {
  // Get input value for minutes
  let mins = parseInt(document.getElementById('min').value);
  
  // Convert minutes to seconds
  let totalTime = mins * seconds;

  // Create a new timer display element
  let timerDisplay = document.createElement('div');
  timerDisplay.classList.add('timer-display'); // Add a class for styling purposes
  document.getElementById('timers').appendChild(timerDisplay);

  // Update timer display every second
  // Lines 365-373 are from chatGPT
  let timerInterval = setInterval(function() {
    if (totalTime < 0) {
      console.log('Timer completed');
      clearInterval(timerInterval);
    } else {
      updateTime(timerDisplay, totalTime); // Pass the timer display element along with totalTime
      totalTime--;
    }
  }, 1000);
}

// Updates the timers display
function updateTime(timerDisplay, time) {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;
  timerDisplay.innerHTML = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

