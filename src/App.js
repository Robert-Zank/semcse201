import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  // Initialize the ingredients state with data from local storage if available
  const [ingredients, setIngredients] = useState(() => {
    const savedIngredients = localStorage.getItem('ingredients');
    return savedIngredients ? JSON.parse(savedIngredients) : [];
  });
  const [ingredientName, setIngredientName] = useState('');
  const [activeTab, setActiveTab] = useState('tab1');

  // Save ingredients to local storage whenever the ingredients state changes
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
                <div key={index} className="card">{ingredient}</div>
              ))}
            </div>
          </div>
        )}
        {/* Additional tabs content if needed */}
      </div>
    </div>
  );
}

export default App;
