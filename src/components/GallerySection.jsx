import React, { useState } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { MENU_ITEMS, BUSINESS_CONFIG } from '../data/restaurantData';

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Gallery items curated strictly from verified Bakes N Bytes items and storefront photo
  const galleryPhotos = [
    {
      id: 'g-store',
      src: BUSINESS_CONFIG.images.storefront,
      title: 'Bakes N Bytes Kitchen & Counter',
      category: 'ambiance',
      desc: 'Our Shankarpuram storefront near Shankar Mutt Road, Basavanagudi',
    },
    {
      id: 'g-sand-1',
      src: 'https://b.zmtcdn.com/data/dish_photos/008/3f6bb5026cbb78b3e5175e0faa470008.jpeg',
      title: 'Vegetable Cheese Grilled Sandwich',
      category: 'sandwiches',
      desc: 'Golden toasted bread loaded with cucumber, tomato, cheese and spicy green chutney',
    },
    {
      id: 'g-pasta',
      src: 'https://b.zmtcdn.com/data/dish_photos/571/1c4ca46a4474549777f4c1e26b5f2571.jpeg',
      title: 'Red Sauce Pasta',
      category: 'momo-pasta',
      desc: 'Tangy and herb-infused Italian style red sauce pasta served piping hot',
    },
    {
      id: 'g-momos',
      src: 'https://b.zmtcdn.com/data/dish_photos/ec3/d42466938519d9024e55eb6da2e2dec3.jpeg',
      title: 'Vegetable Steamed Momos',
      category: 'momo-pasta',
      desc: 'Handcrafted momos filled with finely spiced vegetables, served with red chilli dip',
    },
    {
      id: 'g-chaat-1',
      src: 'https://b.zmtcdn.com/data/dish_photos/fda/95ea179eb346e02a76ce204b1acb3fda.jpg',
      title: 'Crispy Cutlet Chaat',
      category: 'chaat',
      desc: 'Golden vegetable cutlet topped with sweet yogurt, tangy tamarind, and sev',
    },
    {
      id: 'g-maggi',
      src: 'https://b.zmtcdn.com/data/dish_photos/ecb/dff2c4111ed055bf2d34f5f8a3a09ecb.jpeg',
      title: 'Cheese Maggi Mania',
      category: 'maggi',
      desc: 'Classic masala Maggi upgraded with melted cheese slices and butter',
    },
    {
      id: 'g-panipuri',
      src: 'https://b.zmtcdn.com/data/dish_photos/91d/ab0a1cb8a315aa251854b9abbbd7b91d.jpeg',
      title: 'Pani Puri / Golgappe Platter',
      category: 'chaat',
      desc: 'Crisp puris stuffed with spiced potato masala and refreshing mint-imli pani',
    },
    {
      id: 'g-fries',
      src: 'https://b.zmtcdn.com/data/dish_photos/ec9/d872085dbe76110e535843c00ade3ec9.jpeg',
      title: 'Cheesy Golden French Fries',
      category: 'snacks',
      desc: 'Crisp salted fries smothered in rich cheese sauce and herbs',
    },
    {
      id: 'g-choco',
      src: 'https://b.zmtcdn.com/data/dish_photos/eb8/35ae652c6c58f28488b6b7da72c16eb8.jpeg',
      title: 'Sweet Chocolate Sandwich',
      category: 'sandwiches',
      desc: 'Decadent chocolate sandwich with toasted crust, loved by kids and adults alike',
    },
  ];

  const filteredPhotos = galleryPhotos.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.category === activeFilter;
  });

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const prevLightbox = () => {
    setLightboxIndex((prev) => (prev > 0 ? prev - 1 : filteredPhotos.length - 1));
  };

  const nextLightbox = () => {
    setLightboxIndex((prev) => (prev < filteredPhotos.length - 1 ? prev + 1 : 0));
  };

  return (
    <section id="gallery" className="py-16 md:py-24 bg-cream-50 border-t border-chocolate-800/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-terracotta-600 block mb-2">
              Visual Feasts
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-chocolate-900 tracking-tight">
              Food & Kitchen Gallery
            </h2>
            <p className="mt-2 text-sm sm:text-base text-chocolate-600 max-w-xl">
              Authentic photographs of our handcrafted sandwiches, sizzling Maggis, chaats and kitchen straight from our verified listing.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="mt-6 md:mt-0 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {[
              { id: 'all', label: 'All Photos' },
              { id: 'sandwiches', label: 'Sandwiches' },
              { id: 'chaat', label: 'Chaat' },
              { id: 'momo-pasta', label: 'Momos & Pasta' },
              { id: 'maggi', label: 'Maggi' },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  activeFilter === f.id
                    ? 'bg-chocolate-900 text-cream-50 shadow-sm'
                    : 'bg-cream-100 text-chocolate-700 hover:bg-cream-200'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredPhotos.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => openLightbox(index)}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-cream-200 cursor-pointer shadow-card hover:shadow-elevated transition-all duration-300 border border-chocolate-800/10 food-card-hover"
            >
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />

              {/* Hover overlay with title & icon */}
              <div className="absolute inset-0 bg-gradient-to-t from-chocolate-900/80 via-chocolate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-5 text-cream-50">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-serif font-bold text-base text-cream-50">
                      {photo.title}
                    </h4>
                    <p className="text-xs text-cream-200 line-clamp-1 mt-0.5">
                      {photo.desc}
                    </p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-cream-50/20 backdrop-blur-md flex items-center justify-center text-cream-50">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-chocolate-900/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-cream-50/20 text-cream-50 hover:bg-cream-50/40 flex items-center justify-center transition-colors z-50"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Arrows */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevLightbox();
            }}
            className="absolute left-4 sm:left-8 w-11 h-11 rounded-full bg-cream-50/20 text-cream-50 hover:bg-cream-50/40 flex items-center justify-center transition-colors z-50"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextLightbox();
            }}
            className="absolute right-4 sm:right-8 w-11 h-11 rounded-full bg-cream-50/20 text-cream-50 hover:bg-cream-50/40 flex items-center justify-center transition-colors z-50"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Image Content */}
          <div
            className="max-w-4xl max-h-[85vh] w-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredPhotos[lightboxIndex].src}
              alt={filteredPhotos[lightboxIndex].title}
              className="max-h-[70vh] max-w-full rounded-2xl object-contain shadow-2xl border border-white/20"
            />
            <div className="mt-4 text-center text-cream-50">
              <h3 className="font-serif font-bold text-xl">
                {filteredPhotos[lightboxIndex].title}
              </h3>
              <p className="text-xs sm:text-sm text-cream-200 max-w-md mx-auto mt-1">
                {filteredPhotos[lightboxIndex].desc}
              </p>
              <span className="inline-block mt-2 text-[11px] font-semibold text-caramel-500 uppercase tracking-widest">
                Photo {lightboxIndex + 1} of {filteredPhotos.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
