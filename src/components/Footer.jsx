import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <p className="text-xl font-semibold">Nordic<span className="text-indigo-600">Mens</span></p>
          <p className="mt-3 text-sm text-gray-500">Thoughtful menswear designed for daily life. Ethically made. Built to last.</p>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-900">Shop</p>
          <ul className="mt-3 space-y-2 text-sm text-gray-500">
            <li><a href="#shop" className="hover:text-gray-900">Outerwear</a></li>
            <li><a href="#shop" className="hover:text-gray-900">Shirts</a></li>
            <li><a href="#shop" className="hover:text-gray-900">Denim</a></li>
            <li><a href="#shop" className="hover:text-gray-900">Footwear</a></li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-900">Company</p>
          <ul className="mt-3 space-y-2 text-sm text-gray-500">
            <li><a href="#" className="hover:text-gray-900">About</a></li>
            <li><a href="#" className="hover:text-gray-900">Sustainability</a></li>
            <li><a href="#" className="hover:text-gray-900">Careers</a></li>
            <li><a href="#" className="hover:text-gray-900">Contact</a></li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-900">Newsletter</p>
          <p className="mt-3 text-sm text-gray-500">Be first to know about new drops and exclusive offers.</p>
          <form className="mt-4 flex gap-2">
            <input type="email" required placeholder="Enter your email" className="flex-1 px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            <button className="px-4 py-2 text-sm rounded-lg bg-gray-900 text-white hover:bg-black">Join</button>
          </form>
        </div>
      </div>
      <div className="border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between text-xs text-gray-500">
          <p>© {new Date().getFullYear()} NordicMens. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gray-900">Privacy</a>
            <a href="#" className="hover:text-gray-900">Terms</a>
            <a href="#" className="hover:text-gray-900">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
