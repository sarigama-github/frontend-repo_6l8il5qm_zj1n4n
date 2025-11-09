import React, { useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategoryGrid from './components/CategoryGrid';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';

function App() {
  const [cart, setCart] = useState([]);
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('');

  const cartCount = useMemo(() => cart.length, [cart]);

  const handleAddToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const handleSelectCategory = (cat) => {
    setCategory(cat === category ? '' : cat);
    window.location.hash = 'featured';
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar cartCount={cartCount} onSearch={setQuery} />
      <Hero />
      <CategoryGrid onSelect={handleSelectCategory} />
      <ProductGrid filter={category} search={query} onAdd={handleAddToCart} />
      <Footer />
    </div>
  );
}

export default App;
