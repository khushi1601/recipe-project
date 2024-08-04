import pancakeImage from '../assets/pancake.jpg';
import spaghettiImage from '../assets/spaghetti.jpg';
import frenchToastImage from '../assets/french-toast.jpg';
import wafflesImage from '../assets/waffles.jpg';
import bagelImage from '../assets/bagel.jpg';
import butterChickenCurryImage from '../assets/butter-chicken-curry.jpg';
import biryaniImage from '../assets/biryani.jpg';
import pizzaImage from '../assets/pizza.jpg';
import sandwichImage from '../assets/sandwich.jpg';
import saladImage from '../assets/salad.jpg';
import burgerImage from '../assets/burger.jpg';

const recipes = [
  // Existing recipes
  {
    id: 1,
    name: 'Pancakes',
    description: 'Fluffy pancakes',
    ingredients: ['Flour', 'Milk', 'Eggs'],
    steps: ['Mix ingredients', 'Cook on skillet'],
    cookingTime: '15 minutes',
    servingSize: '2 servings',
    nutrition: '200 calories',
    category: 'Breakfast',
    image: pancakeImage
  },
  {
    id: 2,
    name: 'Spaghetti',
    description: 'Delicious spaghetti',
    ingredients: ['Pasta', 'Tomato sauce'],
    steps: ['Cook pasta', 'Add sauce'],
    cookingTime: '20 minutes',
    servingSize: '4 servings',
    nutrition: '300 calories',
    category: 'Dinner',
    image: spaghettiImage
  },
  {
    id: 3,
    name: 'French Toast',
    description: 'Classic French Toast',
    ingredients: ['Bread', 'Eggs', 'Milk', 'Cinnamon'],
    steps: ['Mix ingredients', 'Dip bread', 'Cook on skillet'],
    cookingTime: '10 minutes',
    servingSize: '2 servings',
    nutrition: '250 calories',
    category: 'Breakfast',
    image: frenchToastImage
  },
  {
    id: 4,
    name: 'Waffles',
    description: 'Crispy Waffles',
    ingredients: ['Flour', 'Milk', 'Eggs', 'Baking powder'],
    steps: ['Mix ingredients', 'Pour batter in waffle iron', 'Cook'],
    cookingTime: '15 minutes',
    servingSize: '2 servings',
    nutrition: '300 calories',
    category: 'Breakfast',
    image: wafflesImage
  },
  {
    id: 5,
    name: 'Bagel',
    description: 'Fresh Bagel',
    ingredients: ['Flour', 'Yeast', 'Water'],
    steps: ['Mix ingredients', 'Shape dough', 'Bake'],
    cookingTime: '30 minutes',
    servingSize: '4 servings',
    nutrition: '200 calories',
    category: 'Breakfast',
    image: bagelImage
  },
  {
    id: 6,
    name: 'Butter Chicken Curry',
    description: 'Rich Butter Chicken Curry',
    ingredients: ['Chicken', 'Butter', 'Tomato sauce', 'Spices'],
    steps: ['Cook chicken', 'Prepare sauce', 'Combine and simmer'],
    cookingTime: '40 minutes',
    servingSize: '4 servings',
    nutrition: '400 calories',
    category: 'Dinner',
    image: butterChickenCurryImage
  },
  {
    id: 7,
    name: 'Biryani',
    description: 'Flavorful Biryani',
    ingredients: ['Rice', 'Chicken', 'Spices', 'Yogurt'],
    steps: ['Marinate chicken', 'Cook rice', 'Layer and cook'],
    cookingTime: '60 minutes',
    servingSize: '4 servings',
    nutrition: '500 calories',
    category: 'Dinner',
    image: biryaniImage
  },
  {
    id: 8,
    name: 'Pizza',
    description: 'Homemade Pizza',
    ingredients: ['Flour', 'Yeast', 'Water', 'Tomato sauce', 'Cheese'],
    steps: ['Prepare dough', 'Add toppings', 'Bake'],
    cookingTime: '30 minutes',
    servingSize: '4 servings',
    nutrition: '350 calories',
    category: 'Dinner',
    image: pizzaImage
  },
  // New lunch recipes
  {
    id: 9,
    name: 'Sandwich',
    description: 'Simple Sandwich',
    ingredients: ['Bread', 'Ham', 'Cheese', 'Lettuce', 'Tomato'],
    steps: ['Assemble ingredients', 'Serve'],
    cookingTime: '5 minutes',
    servingSize: '1 serving',
    nutrition: '250 calories',
    category: 'Lunch',
    image: sandwichImage
  },
  {
    id: 10,
    name: 'Salad',
    description: 'Healthy Salad',
    ingredients: ['Lettuce', 'Tomato', 'Cucumber', 'Olive oil', 'Feta cheese'],
    steps: ['Chop ingredients', 'Mix together', 'Serve'],
    cookingTime: '10 minutes',
    servingSize: '2 servings',
    nutrition: '150 calories',
    category: 'Lunch',
    image: saladImage
  },
  {
    id: 11,
    name: 'Burger',
    description: 'Juicy Burger',
    ingredients: ['Beef patty', 'Bun', 'Lettuce', 'Tomato', 'Cheese'],
    steps: ['Cook patty', 'Assemble ingredients', 'Serve'],
    cookingTime: '15 minutes',
    servingSize: '1 serving',
    nutrition: '400 calories',
    category: 'Lunch',
    image: burgerImage
  }
];

export const getCategories = async () => {
  return [...new Set(recipes.map(recipe => recipe.category))];
};

export const searchRecipes = async (query) => {
  return recipes.filter(recipe =>
    recipe.name.toLowerCase().includes(query.toLowerCase()) ||
    recipe.ingredients.some(ingredient =>
      ingredient.toLowerCase().includes(query.toLowerCase())
    )
  );
};

export const getRecipeById = async (id) => {
  return recipes.find(recipe => recipe.id === parseInt(id));
};

export const getFeaturedRecipes = async () => {
  return recipes;
};

export const getRecipesByCategory = async (category) => {
  return recipes.filter(recipe => recipe.category.toLowerCase() === category.toLowerCase());
};
