import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getFeaturedRecipes } from '../api/recipes';
import './CategoryRecipes.css'; // Reuse the same CSS file

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRecipes = async () => {
      const result = await getFeaturedRecipes();
      setRecipes(result);
    };
    fetchRecipes();
  }, []);

  const handleViewRecipe = (id) => {
    navigate(`/recipe/${id}`);
  };

  return (
    <div className="category-recipes">
      <h2>Featured Recipes</h2>
      <div className="recipes-grid">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <div className="image-container">
              <img src={recipe.image} alt={recipe.name} className="recipe-image" />
            </div>
            <h3>{recipe.name}</h3>
            <button onClick={() => handleViewRecipe(recipe.id)}>View Recipe</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
