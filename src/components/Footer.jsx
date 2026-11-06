import React from 'react';
import { ArrowUp, Phone, MapPin, Clock, ExternalLink, Heart } from 'lucide-react';
import Logo from './Logo';
import { BUSINESS_CONFIG, MENU_CATEGORIES } from '../data/restaurantData';

export default function Footer({ onSelectCategory }) {
  const { contact, links, name } = BUSINESS_CONFIG;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategoryClick = (e, catId) => {
    e.preventDefault();
    if (onSelectCategory) {
      onSelectCategory(catId);
    }
    const menuEl = document.getElementById('menu');
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-chocolate-900 text-cream-100 pt-16 pb-24 md:pb-12 border-t border-chocolate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-chocolate-700/60">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <Logo size="lg" light={true} />
            <p className="text-sm text-cream-300 leading-relaxed max-w-sm mt-3">
              Basavanagudi's destination for freshly toasted artisan sandwiches, hot street chaats, sizzling Maggi, and savoury snacks. Prepared fresh daily with genuine ingredients.
            </p>
            <div className="pt-2 text-xs text-cream-300 space-y-1">
              <div>FSSAI Registered: <span className="font-semibold text-cream-100">{contact.fssaiLicense}</span></div>
              <div>Pure Vegetarian Kitchen • Basavanagudi, Bengaluru</div>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif font-bold text-base text-cream-50 tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-cream-300">
              <li>
                <a href="#home" className="hover:text-caramel-500 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-caramel-500 transition-colors">
                  Our Menu (34 Items)
                </a>
              </li>
              <li>
                <a href="#bestsellers" className="hover:text-caramel-500 transition-colors">
                  Customer Favourites
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-caramel-500 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-caramel-500 transition-colors">
                  Food Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-caramel-500 transition-colors">
                  Contact & Map
                </a>
              </li>
            </ul>
          </div>

          {/* Menu Categories Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif font-bold text-base text-cream-50 tracking-wide">
              Menu Specialties
            </h4>
            <ul className="space-y-2 text-sm text-cream-300">
              {MENU_CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <a
                    href="#menu"
                    onClick={(e) => handleCategoryClick(e, cat.id)}
                    className="hover:text-caramel-500 transition-colors flex items-center justify-between"
                  >
                    <span>{cat.name}</span>
                    <span className="text-xs text-chocolate-400">({cat.itemCount})</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif font-bold text-base text-cream-50 tracking-wide">
              Store & Orders
            </h4>
            <div className="space-y-2.5 text-xs text-cream-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-caramel-500 flex-shrink-0 mt-0.5" />
                <span>
                  1/1, Chikkanna Gardens, Near Shankar Mutt, Shankarpuram, Basavanagudi, Bengaluru 560004
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-caramel-500 flex-shrink-0" />
                <span>Open Daily: 7:45 AM – 11:30 PM</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-caramel-500 flex-shrink-0" />
                <span>{contact.phoneDisplay}</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={links.zomato}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-caramel-500 hover:text-cream-50 transition-colors"
              >
                <span>View Verified Zomato Page</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream-300">
          <div className="flex items-center gap-1 text-center sm:text-left">
            <span>© {new Date().getFullYear()} {name}. All rights reserved. Crafted with care in Bengaluru.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-chocolate-800 hover:bg-chocolate-700 text-cream-200 transition-colors"
            aria-label="Scroll to top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
