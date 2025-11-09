import React from 'react';
import { ShoppingCart, User, Search, Menu } from 'lucide-react';

const Navbar = ({ cartCount, onSearch }) => {
  return (
    <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <button className="inline-flex md:hidden items-center justify-center p-2 rounded-md hover:bg-gray-100">
              <Menu className="h-5 w-5" />
            </button>
            <a href="#" className="text-2xl font-semibold tracking-tight">
              <span className="text-gray-900">Luxe</span>
              <span className="text-indigo-600">voh</span>
            </a>
          </div>

          <div className="hidden md:flex items-center flex-1 max-w-xl mx-6">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                onChange={(e) => onSearch?.(e.target.value)}
                placeholder="Search jackets, shirts, jeans..."
                className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="hidden md:inline-flex items-center gap-2 px-3 py-2 text-sm rounded-full hover:bg-gray-100">
              <User className="h-4 w-4" />
              <span className="hidden lg:inline">Account</span>
            </button>
            <button className="relative inline-flex items-center justify-center p-2 rounded-full hover:bg-gray-100">
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 h-5 min-w-[20px] px-1 rounded-full bg-indigo-600 text-white text-xs flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
