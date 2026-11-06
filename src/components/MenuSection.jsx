import React, { useState, useMemo } from 'react';
import { Search, Filter, Sparkles, X, ArrowUpDown, ShieldCheck } from 'lucide-react';
import ProductCard from './ProductCard';
import { MENU_ITEMS, MENU_CATEGORIES } from '../data/restaurantData';

export default function MenuSection({ selectedCategory, onSelectCategory }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('recommended'); // 'recommended', 'low-high', 'high-low'
  const [activeCategory, setActiveCategory] = useState(selectedCategory || 'all');

  // Sync prop changes
  React.useEffect(() => {
    if (selectedCategory) {
      setActiveCategory(selectedCategory);
    }
  }, [selectedCategory]);

  const handleCategoryChange = (catId) => {
    setActiveCategory(catId);
    if (onSelectCategory) {
      onSelectCategory(catId);
    }
  };

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category filter
      const matchesCategory =
        activeCategory === 'all' || item.category === activeCategory;

      // Search filter
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        item.name.toLowerCase().includes(query) ||
        (item.description && item.description.toLowerCase().includes(query)) ||
        (item.subcategory && item.subcategory.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'low-high') return a.price - b.price;
      if (sortBy === 'high-low') return b.price - a.price;
      // Recommended: bestsellers first
      if (a.isBestseller && !b.isBestseller) return -1;
      if (!a.isBestseller && b.isBestseller) return 1;
      return 0;
    });
  }, [activeCategory, searchQuery, sortBy]);

  return (
    <section id="menu" className="py-16 md:py-24 bg-cream-100/70 border-t border-chocolate-800/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-terracotta-600 block mb-2">
            Authentic Flavour Catalogue
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-chocolate-900 tracking-tight">
            Our Complete Menu
          </h2>
          <p className="mt-3 text-sm sm:text-base text-chocolate-700">
            Every dish is made fresh upon ordering. Browse by category, search your favourites, and add directly to your order cart.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-cream-50 rounded-2xl p-4 sm:p-5 border border-chocolate-800/10 shadow-card mb-8">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-5 h-5 text-chocolate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search dishes (e.g. Cheese Grilled, Red Sauce Pasta, Maggi, Chaat)..."
                className="w-full pl-10 pr-9 py-2.5 rounded-xl bg-cream-100/80 border border-chocolate-800/15 text-sm text-chocolate-900 placeholder:text-chocolate-400 focus:outline-none focus:ring-2 focus:ring-terracotta-500/40 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-chocolate-400 hover:text-chocolate-700"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-chocolate-600 flex items-center gap-1 whitespace-nowrap">
                <ArrowUpDown className="w-3.5 h-3.5 text-caramel-600" /> Sort:
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-cream-100/80 border border-chocolate-800/15 text-xs sm:text-sm font-semibold text-chocolate-800 py-2 px-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-terracotta-500/40"
              >
                <option value="recommended">Featured / Popular</option>
                <option value="low-high">Price: Low to High</option>
                <option value="high-low">Price: High to Low</option>
              </select>
            </div>

          </div>

          {/* Category Filter Pills (Horizontal scroll on mobile) */}
          <div className="mt-4 pt-4 border-t border-chocolate-800/10 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            <button
              onClick={() => handleCategoryChange('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all shadow-xs ${
                activeCategory === 'all'
                  ? 'bg-chocolate-900 text-cream-50 shadow-sm'
                  : 'bg-cream-100 hover:bg-cream-200 text-chocolate-700'
              }`}
            >
              All Items ({MENU_ITEMS.length})
            </button>

            {MENU_CATEGORIES.map((cat) => {
              const count = MENU_ITEMS.filter((i) => i.category === cat.id).length;
              const isActive = activeCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all shadow-xs ${
                    isActive
                      ? 'bg-chocolate-900 text-cream-50 shadow-sm'
                      : 'bg-cream-100 hover:bg-cream-200 text-chocolate-700'
                  }`}
                >
                  {cat.name} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* Status Count and Pure Veg Guarantee */}
        <div className="flex items-center justify-between mb-6 px-1">
          <span className="text-xs font-semibold text-chocolate-600">
            Showing <strong className="text-chocolate-900">{filteredItems.length}</strong> delicious items
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-sage-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            <ShieldCheck className="w-3.5 h-3.5" /> 100% Pure Vegetarian Kitchen
          </span>
        </div>

        {/* Product Cards Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7">
            {filteredItems.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          /* Empty Search State */
          <div className="bg-cream-50 rounded-3xl p-12 text-center border border-chocolate-800/10 max-w-md mx-auto my-8 shadow-card">
            <div className="w-16 h-16 rounded-2xl bg-cream-200 flex items-center justify-center mx-auto text-2xl text-chocolate-500 mb-4">
              🔍
            </div>
            <h3 className="font-serif text-xl font-bold text-chocolate-900">
              No matching dishes found
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-chocolate-600">
              We couldn't find any dishes matching "{searchQuery}". Try searching for pasta, sandwich, momos, or chaat.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="mt-5 px-5 py-2.5 rounded-xl bg-chocolate-900 text-cream-50 font-bold text-xs shadow-md hover:bg-terracotta-600 transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
