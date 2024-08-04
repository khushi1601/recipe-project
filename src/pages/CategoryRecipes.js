import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getRecipesByCategory } from '../api/recipes';
import './CategoryRecipes.css';

const CategoryRecipes = () => {
  const { category } = useParams();
  const [recipes, setRecipes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRecipes = async () => {
      const result = await getRecipesByCategory(category);
      setRecipes(result);
    };
    fetchRecipes();
  }, [category]);

  const handleViewRecipe = (id) => {
    navigate(`/recipe/${id}`);
  };

  return (
    <div className="category-recipes">
      <h2>{category} Recipes</h2>
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

export default CategoryRecipes;
