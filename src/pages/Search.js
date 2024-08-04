import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import RecipeCard from '../components/RecipeCard';
import { searchRecipes } from '../api/recipes';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const Search = () => {
  const [recipes, setRecipes] = useState([]);
  const query = useQuery().get('query');

  useEffect(() => {
    if (query) {
      searchRecipes(query).then(data => setRecipes(data));
    }
  }, [query]);

  return (
    <div>
      <h1>Search Results</h1>
      <div className="recipe-list">
        {recipes.map(recipe => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Search;
