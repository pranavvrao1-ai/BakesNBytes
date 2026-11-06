import React from 'react';
import { ShieldCheck, HeartHandshake, Flame, Sparkles, MapPin } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/restaurantData';

export default function AboutSection() {
  const { about, images, contact } = BUSINESS_CONFIG;

  const icons = [ShieldCheck, Flame, MapPin, HeartHandshake];

  return (
    <section id="about" className="py-16 md:py-24 bg-cream-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Storytelling Collage */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Back card subtle decorative rotation */}
              <div className="absolute inset-0 bg-caramel-200/50 rounded-3xl transform -rotate-3 scale-102 -z-10" />

              {/* Main Storefront / Food Image */}
              <div className="rounded-3xl overflow-hidden shadow-elevated border-4 border-cream-50 bg-cream-200 aspect-[4/5] relative">
                <img
                  src={images.storefront || images.sandwichHero}
                  alt="Bakes N Bytes Basavanagudi Storefront"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-chocolate-900/70 via-transparent to-transparent" />
                
                {/* Overlay Badge */}
                <div className="absolute bottom-6 left-6 right-6 text-cream-50">
                  <span className="text-xs uppercase tracking-widest text-caramel-500 font-bold block mb-1">
                    Neighbourhood Kitchen
                  </span>
                  <h4 className="font-serif font-bold text-lg text-cream-50">
                    Bakes N Bytes • Shankarapuram
                  </h4>
                  <p className="text-xs text-cream-300 mt-0.5">
                    1/1, Chikkanna Gardens, Near Shankar Mutt, Basavanagudi
                  </p>
                </div>
              </div>

              {/* Floating Stat Card */}
              <div className="absolute -bottom-6 -right-4 bg-cream-50 rounded-2xl p-4 shadow-elevated border border-chocolate-800/10 max-w-[200px]">
                <div className="flex items-center gap-1.5 text-caramel-600 mb-1">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">Quality First</span>
                </div>
                <p className="text-xs font-semibold text-chocolate-800 leading-snug">
                  Freshly toasted & prepared on the griddle upon order.
                </p>
              </div>

            </div>
          </div>

          {/* Right Column: Narrative & Values */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-terracotta-600 block mb-2">
                Our Story & Philosophy
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-chocolate-900 leading-tight">
                {about.title}
              </h2>
              <p className="mt-3 text-base sm:text-lg font-medium text-chocolate-600">
                {about.subtitle}
              </p>
            </div>

            {/* Paragraphs */}
            <div className="space-y-4 text-chocolate-700 text-sm sm:text-base leading-relaxed">
              {about.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* 4 Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {about.features.map((feat, idx) => {
                const IconComponent = icons[idx % icons.length];
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-cream-100/80 border border-chocolate-800/10 hover:border-chocolate-800/20 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-xl bg-terracotta-50 text-terracotta-600 flex items-center justify-center mb-2.5">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <h3 className="font-serif font-bold text-sm text-chocolate-900">
                      {feat.title}
                    </h3>
                    <p className="text-xs text-chocolate-600 mt-1 leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Callout */}
            <div className="pt-2 flex items-center gap-4 text-xs font-semibold text-chocolate-600">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-600" />
                Pure Veg Facility
              </span>
              <span>•</span>
              <span>Daily {contact.timings.hours}</span>
              <span>•</span>
              <a
                href={contact.fssaiLicense ? "#contact" : "#"}
                className="text-chocolate-500 hover:text-chocolate-800"
              >
                {contact.fssaiLicense}
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
