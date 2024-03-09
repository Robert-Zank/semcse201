import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('tab1');
  const [ingredients, setIngredients] = useState(() => {
    const savedIngredients = localStorage.getItem('ingredients');
    return savedIngredients ? JSON.parse(savedIngredients) : [];
  });
  const [ingredientName, setIngredientName] = useState('');

  useEffect(() => {
    localStorage.setItem('ingredients', JSON.stringify(ingredients));
  }, [ingredients]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const addIngredient = () => {
    if (!ingredientName.trim()) return; // Prevent adding empty strings
    setIngredients(prevIngredients => [...prevIngredients, ingredientName]);
    setIngredientName(''); // Reset input field
  };

  const deleteIngredient = (index) => {
    const newIngredients = [...ingredients];
    newIngredients.splice(index, 1);
    setIngredients(newIngredients);
  };

  const searchRecipes = () => {
    const recipes = [
      {
        id: 1,
        name: "Spaghetti Carbonara",
        ingredients: ["pasta", "eggs", "bacon", "Parmesan cheese", "black pepper"],
      },
      // Add more recipes as needed
      {
        id: 2,
        name: "Test Dish",
        ingredients: ["tomato", "potato", "ketchup"],
      },
    ];

    const matchingRecipes = recipes.filter(recipe =>
      recipe.ingredients.every(ingredient => ingredients.includes(ingredient))
    );

    openRecipeModal(matchingRecipes);
  };

  const openRecipeModal = (matchingRecipes) => {
    // Implement logic to display a modal or pop-up with matching recipes
    // You can use a library like React Modal or create your own modal component
    console.log(matchingRecipes);
  };

  return (
    <div className="App">
      <div className="Tabs">
        <button className={activeTab === 'tab1' ? 'active' : ''} onClick={() => handleTabClick('tab1')}>Tab 1</button>
        <button className={activeTab === 'tab2' ? 'active' : ''} onClick={() => handleTabClick('tab2')}>Tab 2</button>
        <button className={activeTab === 'tab3' ? 'active' : ''} onClick={() => handleTabClick('tab3')}>Tab 3</button>
      </div>
      <div className="Tab-content">
        {activeTab === 'tab1' && (
          <div>
            <input
              type="text"
              value={ingredientName}
              onChange={(e) => setIngredientName(e.target.value)}
              placeholder="Enter ingredient name"
            />
            <button onClick={addIngredient}>Add Ingredient</button>
            <div className="ingredient-cards">
              {ingredients.map((ingredient, index) => (
                <div key={index} className="card">
                  <span>{ingredient}</span>
                  <button onClick={() => deleteIngredient(index)} className="delete-button">Delete</button>
                </div>
              ))}
            </div>
            <button onClick={searchRecipes}>Search Recipes</button> {/* Moved the button below the text box */}
          </div>
        )}
        {/* Additional tabs content if needed */}
      </div>
    </div>
  );
}

export default App;
