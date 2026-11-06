import React from 'react';
import { Utensils, Star, MapPin, Clock, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/restaurantData';

export default function Hero() {
  const scrollToMenu = (e) => {
    e.preventDefault();
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative pt-6 pb-16 md:pt-12 md:pb-24 overflow-hidden">
      {/* Subtle organic decorative background gradients */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-caramel-100/50 via-cream-200/30 to-transparent blur-3xl -z-10 pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
            
            {/* Location & Rating pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-cream-200/80 border border-chocolate-800/10 text-chocolate-800 text-xs sm:text-sm font-semibold shadow-sm">
              <span className="flex items-center gap-1 text-caramel-600">
                <Star className="w-4 h-4 fill-caramel-500 text-caramel-500" />
                <span className="font-bold text-chocolate-900">{BUSINESS_CONFIG.rating.score}</span>
              </span>
              <span className="text-chocolate-400">•</span>
              <span className="text-chocolate-700">{BUSINESS_CONFIG.rating.totalReviews}</span>
              <span className="text-chocolate-400">•</span>
              <span className="flex items-center gap-1 text-terracotta-600 font-medium">
                <MapPin className="w-3.5 h-3.5" />
                Basavanagudi
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-chocolate-900 leading-[1.12] tracking-tight">
              Good Food. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-terracotta-600 via-caramel-600 to-terracotta-700">
                Great Bites.
              </span>{' '}
              <br />
              Every Craving.
            </h1>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-chocolate-700 max-w-xl font-normal leading-relaxed">
              From delicious bites to refreshing beverages, discover something special at{' '}
              <span className="font-semibold text-chocolate-900">Bakes N Bytes</span>. 
              Savor freshly toasted artisan sandwiches, hot and crunchy street chaats, sizzling Maggi, and savoury snacks prepared fresh daily in Shankarapuram.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2 w-full sm:w-auto">
              <a
                href="#menu"
                onClick={scrollToMenu}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-gradient-to-r from-chocolate-900 via-chocolate-800 to-chocolate-900 text-cream-50 font-bold text-base shadow-elevated hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Explore Our Menu</span>
                <ArrowRight className="w-5 h-5 text-caramel-500" />
              </a>

              <a
                href="#bestsellers"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-cream-100 hover:bg-cream-200 text-chocolate-900 font-bold text-base border border-chocolate-800/15 shadow-card hover:border-chocolate-800/30 transition-all active:scale-[0.98]"
              >
                <Sparkles className="w-5 h-5 text-caramel-600" />
                <span>Customer Favourites</span>
              </a>
            </div>

            {/* Trust Highlights Strip */}
            <div className="pt-6 border-t border-chocolate-800/10 grid grid-cols-3 gap-4 w-full text-chocolate-700">
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-wider text-chocolate-500 font-semibold">Kitchen</span>
                <span className="text-sm font-bold text-sage-600 flex items-center gap-1 mt-0.5">
                  <ShieldCheck className="w-4 h-4 text-sage-600" />
                  100% Pure Veg
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-wider text-chocolate-500 font-semibold">Daily Hours</span>
                <span className="text-sm font-bold text-chocolate-900 flex items-center gap-1 mt-0.5">
                  <Clock className="w-4 h-4 text-terracotta-600" />
                  7:45 AM – 11:30 PM
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-wider text-chocolate-500 font-semibold">Order Mode</span>
                <span className="text-sm font-bold text-chocolate-900 mt-0.5">
                  WhatsApp & Zomato
                </span>
              </div>
            </div>

          </div>

          {/* Right Hero Food Imagery Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Back card glow */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-caramel-500/20 to-terracotta-600/20 rounded-3xl blur-2xl -z-10" />

              {/* Main Editorial Image Frame */}
              <div className="relative overflow-hidden rounded-3xl shadow-elevated border-4 border-cream-50 bg-cream-100 aspect-[4/5] group">
                <img
                  src={BUSINESS_CONFIG.images.sandwichHero}
                  alt="Vegetable Cheese Grilled Sandwich at Bakes N Bytes"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />

                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-chocolate-900/80 via-transparent to-transparent" />

                {/* Bottom caption badge */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-cream-50/95 backdrop-blur-md border border-white/50 shadow-lg text-chocolate-900">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="inline-block text-[11px] font-bold text-terracotta-600 uppercase tracking-widest">
                        Signature Dish
                      </span>
                      <h3 className="font-serif font-bold text-base text-chocolate-900">
                        Vegetable Cheese Grilled
                      </h3>
                      <p className="text-xs text-chocolate-600">Fresh toasted with spicy mint chutney & double cheese</p>
                    </div>
                    <div className="text-right pl-3">
                      <span className="text-lg font-extrabold text-chocolate-900">₹160</span>
                      <span className="block text-[10px] text-sage-600 font-bold">● Pure Veg</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating secondary badge */}
              <div className="absolute -top-4 -left-4 bg-cream-50 rounded-2xl p-3 shadow-soft border border-chocolate-800/10 flex items-center gap-3 animate-bounce [animation-duration:3s]">
                <div className="w-10 h-10 rounded-xl bg-terracotta-50 flex items-center justify-center text-terracotta-600 font-bold">
                  🍝
                </div>
                <div>
                  <span className="block text-xs font-bold text-chocolate-900">Red Sauce Pasta</span>
                  <span className="text-[11px] font-semibold text-terracotta-600">₹195 • Customer Fav</span>
                </div>
              </div>

              {/* Floating review card */}
              <div className="absolute -bottom-4 -right-4 bg-cream-50 rounded-2xl p-3 shadow-soft border border-chocolate-800/10 hidden sm:flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-caramel-100 flex items-center justify-center text-caramel-600 font-bold text-sm">
                  ★
                </div>
                <div>
                  <div className="text-xs font-bold text-chocolate-900">4.2 / 5.0 Rating</div>
                  <div className="text-[10px] text-chocolate-500">Zomato Verified Basavanagudi</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
