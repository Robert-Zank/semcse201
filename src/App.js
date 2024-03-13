import React, { useState, useEffect } from 'react';
import './App.css';

// Ingredient Component
const Ingredient = ({ ingredient, onDelete }) => (
  <div className="card">
    <span>{ingredient}</span>
    <button onClick={onDelete} className="delete-button">Delete</button>
  </div>
);

// RecipeModal Component
const RecipeModal = ({ recipes, closeModal }) => (
  <div className="modal">
    <div className="modal-content">
      <span className="close" onClick={closeModal}>×</span>
      <h2>Matching Recipes</h2>
      <ul>
        {recipes.map(recipe => (
          <li key={recipe.id}>{recipe.name}</li>
        ))}
      </ul>
    </div>
  </div>
);

// Timer Component
const Timer = ({ index, name, duration, onDelete }) => {
  const [timeLeft, setTimeLeft] = useState(duration * 60); // Convert minutes to seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTimeLeft => {
        if (prevTimeLeft === 1) {
          clearInterval(timer);
          onDelete(index);
        }
        return prevTimeLeft - 1;
      });
    }, 1000); // Update time left every second

    return () => clearInterval(timer); // Clean up timer on component unmount
  }, [index, onDelete]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="timer">
      <span>{name}</span>
      <span>{`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}</span>
      <button className="delete-button" onClick={() => onDelete(index)}>Delete</button>
    </div>
  );
};


const App = () => {
  // State Hooks
  const [activeTab, setActiveTab] = useState('tab1');
  const [ingredients, setIngredients] = useState(() => {
    const savedIngredients = localStorage.getItem('ingredients');
    return savedIngredients ? JSON.parse(savedIngredients) : [];
  });
  const [ingredientName, setIngredientName] = useState('');
  const [matchingRecipes, setMatchingRecipes] = useState([]);
  const [timers, setTimers] = useState([]);
  const [timerName, setTimerName] = useState('');
  const [timerDuration, setTimerDuration] = useState(5); // Default duration is 5 minutes

  // Effect Hook
  useEffect(() => {
    localStorage.setItem('ingredients', JSON.stringify(ingredients));
  }, [ingredients]);

  // Event Handlers
  const handleTabClick = tab => setActiveTab(tab);

  const addIngredient = () => {
    if (!ingredientName.trim()) return;
    setIngredients(prevIngredients => [...prevIngredients, ingredientName]);
    setIngredientName('');
  };

  const deleteIngredient = index => {
    const newIngredients = [...ingredients];
    newIngredients.splice(index, 1);
    setIngredients(newIngredients);
  };

  const searchRecipes = () => {
    const recipes = [
      { id: 1, name: "Spaghetti Carbonara", ingredients: ["pasta", "eggs", "bacon", "Parmesan cheese", "black pepper"] },
      { id: 2, name: "Test Dish", ingredients: ["tomato", "potato", "ketchup"] },
    ];
    const matchedRecipes = recipes.filter(recipe =>
      recipe.ingredients.every(ingredient => ingredients.includes(ingredient))
    );
    setMatchingRecipes(matchedRecipes);
  };

  const addTimer = () => {
    const newTimer = {
      name: timerName,
      duration: timerDuration
    };
    setTimers(prevTimers => [...prevTimers, newTimer]);
    setTimerName('');
    setTimerDuration(5); // Reset duration to default
  };

  const deleteTimer = index => {
    const filteredTimers = timers.filter((_, i) => i !== index);
    setTimers(filteredTimers);
  };

  return (
    <div className="App">
      <div className="Tabs">
        <button className={activeTab === 'tab1' ? 'active' : ''} onClick={() => handleTabClick('tab1')}>Pantry</button>
        <button className={activeTab === 'tab2' ? 'active' : ''} onClick={() => handleTabClick('tab2')}>Recipes</button>
        <button className={activeTab === 'tab3' ? 'active' : ''} onClick={() => handleTabClick('tab3')}>Timers</button>
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
                <Ingredient key={index} ingredient={ingredient} onDelete={() => deleteIngredient(index)} />
              ))}
            </div>
            <button onClick={searchRecipes}>Search Recipes</button>
            {matchingRecipes.length > 0 && <RecipeModal recipes={matchingRecipes} closeModal={() => setMatchingRecipes([])} />}
          </div>
        )}
        {activeTab === 'tab3' && (
          <div>
            <input type="text" value={timerName} onChange={(e) => setTimerName(e.target.value)} placeholder="Timer Name" />
            <input type="number" value={timerDuration} onChange={(e) => setTimerDuration(e.target.value)} placeholder="Duration (minutes)" />
            <button onClick={addTimer}>Add Timer</button>
            <div className="timer-list">
              {timers.map((timer, index) => (
                <Timer
                  key={index}
                  index={index}
                  name={timer.name}
                  duration={timer.duration}
                  onDelete={deleteTimer}
                />
              ))}
            </div>
          </div>
        )}
        {/* Additional tabs content if needed */}
      </div>
    </div>
  );
};

export default App;
