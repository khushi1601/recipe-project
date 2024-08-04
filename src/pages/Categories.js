import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../api/recipes';

// Import images directly from the assets folder
import image1 from '../assets/breakfast.jpg'; // Adjust the path according to your project structure
import image2 from '../assets/lunch.jpg';
import image3 from '../assets/dinner.jpg';

const backgroundImages = [
  image1,
  image2,
  image3
];

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then(data => setCategories(data));
  }, []);

  // Define inline styles for category sections with background images
  const sectionStyles = categories.map((_, index) => ({
    backgroundImage: `url(${backgroundImages[index % backgroundImages.length]})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'black',
    height: '33.33vh', // Adjust as needed for the number of categories
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '2em',
    fontWeight: 'bold',
    textAlign: 'center',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' // Optional: add a shadow to improve text readability
  }));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', margin: 0, padding: 0 }}>
      <h1 style={{ textAlign: 'center', margin: '20px 0' }}>Categories</h1>
      {categories.map((category, index) => (
        <div
          key={category}
          style={sectionStyles[index % sectionStyles.length]}
        >
          <Link
            to={`/categories/${category}`}
            style={{ color: 'black', textDecoration: 'none' }}
          >
            {category}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Categories;
