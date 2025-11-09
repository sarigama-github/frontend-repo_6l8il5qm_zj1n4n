import React from 'react';
import { Star } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Essential Oxford Shirt',
    price: 58,
    rating: 4.7,
    category: 'shirts',
    image:
      'https://images.unsplash.com/photo-1516823541242-d7c97f1f2f03?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Selvedge Denim Jeans',
    price: 96,
    rating: 4.8,
    category: 'denim',
    image:
      'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Wool Blend Overcoat',
    price: 180,
    rating: 4.6,
    category: 'outerwear',
    image:
      'https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=1972&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Minimal Leather Sneakers',
    price: 120,
    rating: 4.5,
    category: 'footwear',
    image:
      'https://images.unsplash.com/photo-1491555103944-7c647fd857e6?q=80&w=1964&auto=format&fit=crop',
  },
  {
    id: 5,
    name: 'Everyday Crew Tee',
    price: 28,
    rating: 4.4,
    category: 'shirts',
    image:
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: 6,
    name: 'Quilted Puffer Jacket',
    price: 160,
    rating: 4.7,
    category: 'outerwear',
    image:
      'https://images.unsplash.com/photo-1519764596270-8ac3454f3e96?q=80&w=2070&auto=format&fit=crop',
  },
];

const ProductCard = ({ product, onAdd }) => {
  return (
    <div className="group rounded-2xl border border-gray-200 overflow-hidden bg-white hover:shadow-lg transition-shadow">
      <div className="aspect-square w-full overflow-hidden">
        <img src={product.image} alt={product.name} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
            <div className="mt-1 flex items-center gap-1 text-amber-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className={`h-4 w-4 ${i < Math.round(product.rating) ? '' : 'text-gray-300'}`} fill="currentColor" />
              ))}
              <span className="ml-1 text-xs text-gray-500">{product.rating}</span>
            </div>
          </div>
          <p className="text-sm font-semibold text-gray-900">${product.price}</p>
        </div>
        <button onClick={() => onAdd?.(product)} className="mt-4 w-full inline-flex items-center justify-center rounded-full bg-gray-900 text-white text-sm py-2 hover:bg-black">
          Add to cart
        </button>
      </div>
    </div>
  );
};

const ProductGrid = ({ filter, search, onAdd }) => {
  const list = filter ? products.filter(p => p.category === filter) : products;
  const normalized = search?.trim().toLowerCase() || '';
  const filtered = normalized ? list.filter(p => p.name.toLowerCase().includes(normalized)) : list;
  return (
    <section id="featured" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-end justify-between">
        <h2 className="text-2xl font-semibold tracking-tight text-gray-900">Featured products</h2>
        <p className="text-sm text-gray-500">Premium picks our community loves</p>
      </div>
      {filtered.length === 0 ? (
        <p className="mt-8 text-sm text-gray-500">No products match your search.</p>
      ) : (
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} onAdd={onAdd} />
          ))}
        </div>
      )}
    </section>
  );
};

export default ProductGrid;
