import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import ProductCard from './ProductCard';
import { MENU_ITEMS } from '../data/restaurantData';

export default function Bestsellers() {
  const bestsellers = MENU_ITEMS.filter((item) => item.isBestseller);

  return (
    <section id="bestsellers" className="py-16 md:py-24 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-caramel-100 text-caramel-600 text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              Signature Delights
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-chocolate-900 tracking-tight">
              Customer Favourites
            </h2>
            <p className="mt-2 text-sm sm:text-base text-chocolate-600 max-w-xl">
              The most loved bites ordered daily by our patrons in Basavanagudi. Made fresh with pure butter, rich cheese, and authentic spice blends.
            </p>
          </div>

          <div className="mt-4 md:mt-0">
            <a
              href="#menu"
              className="inline-flex items-center gap-2 text-sm font-bold text-chocolate-900 hover:text-terracotta-600 transition-colors"
            >
              <span>Explore All 34 Menu Items</span>
              <ArrowRight className="w-4 h-4 text-caramel-500" />
            </a>
          </div>
        </div>

        {/* Bestseller Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {bestsellers.slice(0, 8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </section>
  );
}
