import React from 'react';
import { Utensils, Phone, MessageSquare, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { BUSINESS_CONFIG } from '../data/restaurantData';

export default function MobileBottomBar() {
  const { cartCount, cartTotal, setIsCartOpen } = useCart();
  const { contact } = BUSINESS_CONFIG;

  const scrollToMenu = () => {
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  const whatsappDirectUrl = contact.whatsappNumber
    ? `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
        'Hello Bakes N Bytes! I would like to place an order.'
      )}`
    : `https://api.whatsapp.com/send?text=${encodeURIComponent(
        'Hello Bakes N Bytes! I would like to place an order.'
      )}`;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-cream-50/95 backdrop-blur-lg border-t border-chocolate-800/15 px-3 py-2.5 shadow-elevated">
      <div className="flex items-center justify-between gap-2 max-w-md mx-auto">
        
        {/* Quick Menu Button */}
        <button
          onClick={scrollToMenu}
          className="flex-1 flex flex-col items-center justify-center py-1 text-chocolate-800 hover:text-terracotta-600 transition-colors"
        >
          <Utensils className="w-5 h-5" />
          <span className="text-[10px] font-bold mt-0.5">Menu</span>
        </button>

        {/* Quick Call / Online Button */}
        <a
          href={contact.phoneTel ? `tel:${contact.phoneTel}` : BUSINESS_CONFIG.links.zomato}
          target={contact.phoneTel ? "_self" : "_blank"}
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center py-1 text-chocolate-800 hover:text-terracotta-600 transition-colors"
        >
          <Phone className="w-5 h-5" />
          <span className="text-[10px] font-bold mt-0.5">{contact.phoneTel ? 'Call' : 'Order'}</span>
        </a>

        {/* Quick WhatsApp Inquiry */}
        <a
          href={whatsappDirectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center py-1 text-emerald-600 hover:text-emerald-700 transition-colors"
        >
          <MessageSquare className="w-5 h-5 fill-emerald-600" />
          <span className="text-[10px] font-bold mt-0.5">WhatsApp</span>
        </a>

        {/* Floating Cart CTA Pill */}
        <button
          onClick={() => setIsCartOpen(true)}
          className={`flex-[2] py-2 px-3 rounded-xl flex items-center justify-between gap-2 shadow-md transition-all active:scale-95 ${
            cartCount > 0
              ? 'bg-[#25D366] text-white animate-pulse'
              : 'bg-chocolate-900 text-cream-50'
          }`}
        >
          <div className="flex items-center gap-1.5 min-w-0">
            <ShoppingBag className="w-4 h-4 flex-shrink-0" />
            <span className="text-xs font-bold truncate">
              {cartCount > 0 ? `${cartCount} items` : 'View Cart'}
            </span>
          </div>
          {cartCount > 0 && (
            <span className="text-xs font-extrabold bg-white/20 px-2 py-0.5 rounded-md">
              ₹{cartTotal}
            </span>
          )}
        </button>

      </div>
    </div>
  );
}
