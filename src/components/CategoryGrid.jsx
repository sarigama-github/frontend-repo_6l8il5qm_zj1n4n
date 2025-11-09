import React from 'react';

const categories = [
  {
    key: 'outerwear',
    title: 'Outerwear',
    image:
      'https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=1974&auto=format&fit=crop',
  },
  {
    key: 'shirts',
    title: 'Shirts',
    image:
      'https://images.unsplash.com/photo-1517166789511-46b7b18c5c6b?q=80&w=1974&auto=format&fit=crop',
  },
  {
    key: 'denim',
    title: 'Denim',
    image:
      'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=1974&auto=format&fit=crop',
  },
  {
    key: 'footwear',
    title: 'Footwear',
    image:
      'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1974&auto=format&fit=crop',
  },
];

const CategoryGrid = ({ onSelect }) => {
  return (
    <section id="shop" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-end justify-between">
        <h2 className="text-2xl font-semibold tracking-tight text-gray-900">Shop by category</h2>
        <a href="#featured" className="text-sm text-indigo-600 hover:text-indigo-700">See best sellers</a>
      </div>
      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => onSelect?.(cat.key)}
            className="group relative rounded-2xl overflow-hidden focus:outline-none"
          >
            <img src={cat.image} alt={cat.title} className="h-44 w-full object-cover transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-3 left-3">
              <p className="text-white font-medium">{cat.title}</p>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;
