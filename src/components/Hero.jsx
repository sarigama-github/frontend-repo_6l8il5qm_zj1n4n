import React from 'react';
import { ArrowRight } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative isolate">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 via-white to-white" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 lg:pt-16 lg:pb-24 relative">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-200 bg-white text-indigo-700 text-xs font-medium">
              Introducing
              <span className="inline-flex items-center gap-1 text-indigo-600">Luxevoh</span>
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900">
              Elevated essentials for the modern man
            </h1>
            <p className="mt-5 text-gray-600 max-w-xl">
              Discover premium staples crafted with sustainable materials and timeless design. From tailored outerwear to everyday tees — built to last.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#shop" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gray-900 text-white hover:bg-black">
                Shop collection
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#featured" className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-gray-300 text-gray-900 hover:bg-gray-50">
                Best sellers
              </a>
            </div>
            <dl className="mt-10 grid grid-cols-3 gap-6 max-w-lg">
              <div>
                <dt className="text-2xl font-semibold text-gray-900">5000+</dt>
                <dd className="text-sm text-gray-500">Happy customers</dd>
              </div>
              <div>
                <dt className="text-2xl font-semibold text-gray-900">Eco</dt>
                <dd className="text-sm text-gray-500">Sustainable fabrics</dd>
              </div>
              <div>
                <dt className="text-2xl font-semibold text-gray-900">48h</dt>
                <dd className="text-sm text-gray-500">Fast shipping</dd>
              </div>
            </dl>
          </div>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <div className="aspect-[4/5] w-full">
              <Spline 
                scene="https://prod.spline.design/myxXfbNiwnbTpGFp/scene.splinecode"
                style={{ width: '100%', height: '100%' }}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white shadow-xl rounded-2xl p-4 hidden md:block">
              <p className="text-sm font-medium text-gray-900">The fragrance of creativity</p>
              <p className="text-xs text-gray-500">A Luxevoh presentation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
