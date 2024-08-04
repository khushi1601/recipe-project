 
// src/pages/RecipePage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getRecipeById } from '../api/recipes';

const RecipePage = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    getRecipeById(id).then(data => setRecipe(data));
  }, [id]);

  if (!recipe) return <div>Loading...</div>;

  return (
    <div>
      <h1>{recipe.name}</h1>
      <p>{recipe.description}</p>
      <h2>Ingredients</h2>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h2>Preparation Steps</h2>
      <ol>
        {recipe.steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
      <p>Cooking Time: {recipe.cookingTime}</p>
      <p>Serving Size: {recipe.servingSize}</p>
      <p>Nutrition Information: {recipe.nutrition}</p>
    </div>
  );
}

export default RecipePage;
