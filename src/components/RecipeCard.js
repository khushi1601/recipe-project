import React from 'react';
import { Link } from 'react-router-dom';
import './RecipeCard.css';

const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <Link to={`/recipe/${recipe.id}`}>
        <img src={recipe.image} alt={recipe.name} />
        <h2>{recipe.name}</h2>
        <p>{recipe.description}</p>
      </Link>
    </div>
  );
};

export default RecipeCard;
