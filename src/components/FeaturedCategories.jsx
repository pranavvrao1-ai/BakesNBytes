import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { MENU_CATEGORIES } from '../data/restaurantData';

export default function FeaturedCategories({ onSelectCategory }) {
  const handleCategoryClick = (categoryId) => {
    if (onSelectCategory) {
      onSelectCategory(categoryId);
    }
    const menuEl = document.getElementById('menu');
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 md:py-20 bg-cream-100/60 border-y border-chocolate-800/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-terracotta-600 block mb-2">
              Explore Our Creations
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-chocolate-900 tracking-tight">
              Crafted For Every Craving
            </h2>
            <p className="mt-3 text-sm sm:text-base text-chocolate-700">
              Browse through our authentic quick bite sections. Every recipe is prepared fresh to order with pure vegetarian ingredients.
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <a
              href="#menu"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-chocolate-900 hover:text-terracotta-600 transition-colors group"
            >
              <span>View Full Menu Catalogue</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {MENU_CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              onClick={() => handleCategoryClick(cat.id)}
              className="group relative bg-cream-50 rounded-3xl overflow-hidden border border-chocolate-800/10 shadow-card hover:shadow-elevated transition-all duration-300 cursor-pointer flex flex-col food-card-hover"
            >
              {/* Category Image Cover */}
              <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-cream-200">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-chocolate-900/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* Badge for item count */}
                <div className="absolute top-4 left-4 bg-cream-50/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-chocolate-800 border border-white/40 shadow-sm">
                  {cat.itemCount} Items
                </div>

                {/* Explore Icon Pill */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-cream-50/90 backdrop-blur-md flex items-center justify-center text-chocolate-900 group-hover:bg-terracotta-500 group-hover:text-cream-50 transition-colors shadow-sm">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Text Information */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl font-bold text-chocolate-900 group-hover:text-terracotta-600 transition-colors">
                    {cat.name}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-chocolate-600 line-clamp-2 leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-chocolate-800/10 flex items-center justify-between">
                  <span className="text-xs font-bold text-terracotta-600 group-hover:text-terracotta-700 flex items-center gap-1">
                    Explore Category &rarr;
                  </span>
                  <span className="text-[11px] font-semibold text-chocolate-500 uppercase tracking-wider">
                    Pure Veg
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
