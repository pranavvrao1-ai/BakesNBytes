import React from 'react';
import { UtensilsCrossed, Sparkles } from 'lucide-react';

export default function Logo({ size = 'md', light = false }) {
  const isLarge = size === 'lg';
  const isSmall = size === 'sm';

  return (
    <div className="flex items-center gap-3 group cursor-pointer select-none">
      <div
        className={`relative flex items-center justify-center rounded-xl transition-all duration-300 ${
          isLarge
            ? 'w-12 h-12 bg-gradient-to-br from-caramel-500 to-terracotta-600 shadow-md'
            : isSmall
            ? 'w-8 h-8 bg-chocolate-800'
            : 'w-10 h-10 bg-gradient-to-br from-chocolate-800 to-chocolate-900 group-hover:from-caramel-600 group-hover:to-terracotta-600 shadow-sm'
        }`}
      >
        <span className="font-serif font-bold text-cream-50 text-base tracking-tighter">
          B<span className="text-caramel-500 group-hover:text-cream-50 transition-colors">&</span>B
        </span>
        <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-caramel-500 rounded-full border-2 border-cream-50" />
      </div>

      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span
            className={`font-serif tracking-tight font-bold transition-colors ${
              light
                ? 'text-cream-50'
                : 'text-chocolate-900 group-hover:text-terracotta-600'
            } ${isLarge ? 'text-2xl' : isSmall ? 'text-lg' : 'text-xl'}`}
          >
            Bakes <span className="font-sans font-light text-caramel-600">N</span> Bytes
          </span>
        </div>
        <span
          className={`text-[10px] tracking-widest uppercase font-semibold transition-colors ${
            light ? 'text-cream-300' : 'text-chocolate-500'
          }`}
        >
          Basavanagudi • Bengaluru
        </span>
      </div>
    </div>
  );
}
