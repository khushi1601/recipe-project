import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Categories from './pages/Categories';
import CategoryRecipes from './pages/CategoryRecipes';
import Search from './pages/Search';
import RecipePage from './pages/RecipePage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:category" element={<CategoryRecipes />} />
        <Route path="/search" element={<Search />} />
        <Route path="/recipe/:id" element={<RecipePage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
