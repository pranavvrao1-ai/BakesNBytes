import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, Send, ShoppingBag, ExternalLink, ArrowRight, ShieldCheck, MapPin } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useCart } from '../context/CartContext';
import { BUSINESS_CONFIG } from '../data/restaurantData';

export default function CartDrawer() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    clearCart,
    cartTotal,
    cartCount,
  } = useCart();

  const [customerName, setCustomerName] = useState('');
  const [orderType, setOrderType] = useState('Takeaway Pickup'); // 'Takeaway Pickup', 'Dine-in', 'Home Delivery'
  const [orderNotes, setOrderNotes] = useState('');

  if (!isCartOpen) return null;

  const handleWhatsAppOrder = () => {
    if (cart.length === 0) return;

    // Trigger celebratory confetti
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
      });
    } catch {
      // ignore if canvas-confetti is not loaded
    }

    // Build the formatted order text exactly as requested:
    // Hello Bakes N Bytes!
    // I would like to place an order:
    // 1. Product name – Quantity (₹Price)
    // Total: ₹XXX
    // Order Type: ...
    // Name: ...
    // Notes: ...
    // Please confirm my order.

    let message = `Hello Bakes N Bytes!\n\nI would like to place an order:\n\n`;

    cart.forEach((item, idx) => {
      const linePrice = (item.price || 0) * item.quantity;
      message += `${idx + 1}. ${item.name} – ${item.quantity} qty (₹${linePrice})\n`;
    });

    message += `\nTotal: ₹${cartTotal}\n`;
    message += `Order Type: ${orderType}\n`;

    if (customerName.trim()) {
      message += `Customer Name: ${customerName.trim()}\n`;
    }

    if (orderNotes.trim()) {
      message += `Special Request / Notes: ${orderNotes.trim()}\n`;
    }

    message += `\nPlease confirm my order. Thank you!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${BUSINESS_CONFIG.contact.whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-hidden bg-chocolate-900/60 backdrop-blur-sm flex justify-end animate-in fade-in duration-200"
      onClick={() => setIsCartOpen(false)}
    >
      <div
        className="w-full max-w-md bg-cream-50 h-full flex flex-col shadow-2xl border-l border-chocolate-800/10 animate-in slide-in-from-right duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cart Header */}
        <div className="p-5 border-b border-chocolate-800/10 bg-cream-100 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-chocolate-900 text-cream-50 flex items-center justify-center">
              <ShoppingBag className="w-5 h-5 text-caramel-500" />
            </div>
            <div>
              <h2 className="font-serif font-bold text-lg text-chocolate-900">
                Your Order Cart
              </h2>
              <span className="text-xs text-chocolate-600 font-medium">
                {cartCount} {cartCount === 1 ? 'item' : 'items'} selected
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {cart.length > 0 && (
              <button
                onClick={clearCart}
                className="text-xs font-semibold text-chocolate-500 hover:text-terracotta-600 px-2 py-1 transition-colors"
                title="Clear all items"
              >
                Clear
              </button>
            )}
            <button
              onClick={() => setIsCartOpen(false)}
              className="w-8 h-8 rounded-full bg-cream-50 text-chocolate-800 hover:bg-terracotta-100 flex items-center justify-center transition-colors shadow-xs"
              aria-label="Close cart"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Cart Body */}
        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
            <div className="w-20 h-20 rounded-full bg-cream-200 flex items-center justify-center text-3xl mb-4 text-chocolate-400">
              🥪
            </div>
            <h3 className="font-serif text-xl font-bold text-chocolate-900">
              Your cart is empty
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-chocolate-600 max-w-xs">
              Explore our artisan grilled sandwiches, fresh chaats, momos and snacks to begin your order!
            </p>
            <button
              onClick={() => {
                setIsCartOpen(false);
                document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="mt-6 px-6 py-3 rounded-xl bg-chocolate-900 hover:bg-terracotta-600 text-cream-50 font-bold text-xs shadow-md transition-colors"
            >
              Browse Our Menu
            </button>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {/* List of Cart Items */}
            <div className="space-y-3">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="bg-cream-100/90 rounded-2xl p-3.5 border border-chocolate-800/10 flex items-center gap-3 shadow-xs"
                >
                  <img
                    src={item.image || "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=200&auto=format&fit=crop"}
                    alt={item.name}
                    className="w-14 h-14 rounded-xl object-cover bg-cream-200 flex-shrink-0"
                  />

                  <div className="flex-1 min-w-0">
                    <h4 className="font-serif font-bold text-sm text-chocolate-900 truncate">
                      {item.name}
                    </h4>
                    <span className="text-xs font-extrabold text-chocolate-800 block mt-0.5">
                      ₹{item.price * item.quantity}{' '}
                      <span className="text-[10px] text-chocolate-500 font-normal">
                        (₹{item.price} each)
                      </span>
                    </span>
                  </div>

                  {/* Quantity adjustment buttons */}
                  <div className="flex items-center gap-1.5 bg-cream-50 rounded-xl px-1.5 py-1 border border-chocolate-800/10 shadow-2xs">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="w-6 h-6 rounded-lg text-chocolate-800 hover:bg-cream-200 flex items-center justify-center font-bold text-xs"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="text-xs font-bold text-chocolate-900 min-w-[1rem] text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="w-6 h-6 rounded-lg bg-chocolate-900 text-cream-50 hover:bg-terracotta-600 flex items-center justify-center font-bold text-xs"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="p-1.5 text-chocolate-400 hover:text-terracotta-600 transition-colors"
                    aria-label="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            {/* Order Details Form */}
            <div className="pt-4 border-t border-chocolate-800/10 space-y-3.5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-chocolate-600">
                Order Preferences
              </h4>

              {/* Order Type Toggle */}
              <div className="grid grid-cols-2 gap-2">
                {['Takeaway Pickup', 'Local Delivery'].map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setOrderType(type)}
                    className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all ${
                      orderType === type
                        ? 'bg-chocolate-900 text-cream-50 border-chocolate-900 shadow-sm'
                        : 'bg-cream-100 text-chocolate-700 border-chocolate-800/10 hover:bg-cream-200'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>

              {/* Customer Name */}
              <div>
                <label className="block text-xs font-semibold text-chocolate-700 mb-1">
                  Your Name (Optional)
                </label>
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="e.g. Rahul / Priya"
                  className="w-full px-3.5 py-2 rounded-xl bg-cream-100 border border-chocolate-800/15 text-xs text-chocolate-900 focus:outline-none focus:ring-2 focus:ring-terracotta-500/40"
                />
              </div>

              {/* Order Notes */}
              <div>
                <label className="block text-xs font-semibold text-chocolate-700 mb-1">
                  Special Notes / Customisation
                </label>
                <textarea
                  value={orderNotes}
                  onChange={(e) => setOrderNotes(e.target.value)}
                  placeholder="e.g. Extra crispy, less spicy, no onions..."
                  rows={2}
                  className="w-full px-3.5 py-2 rounded-xl bg-cream-100 border border-chocolate-800/15 text-xs text-chocolate-900 focus:outline-none focus:ring-2 focus:ring-terracotta-500/40 resize-none"
                />
              </div>

              {/* Address note */}
              <div className="flex items-start gap-2 p-2.5 rounded-xl bg-cream-200/70 border border-chocolate-800/10 text-chocolate-700 text-[11px]">
                <MapPin className="w-3.5 h-3.5 text-terracotta-600 flex-shrink-0 mt-0.5" />
                <span>
                  Pickup at Shankarpuram, Basavanagudi (Near Shankar Mutt). Verified direct WhatsApp order.
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Cart Footer & Ordering CTAs */}
        {cart.length > 0 && (
          <div className="p-5 border-t border-chocolate-800/10 bg-cream-100/90 space-y-3">
            {/* Price Breakdown */}
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-chocolate-600 uppercase tracking-wider">
                Total Order Amount
              </span>
              <span className="text-2xl font-extrabold text-chocolate-900 font-serif">
                ₹{cartTotal}
              </span>
            </div>

            <div className="text-[11px] text-chocolate-500 flex items-center justify-between">
              <span>Prices verified against Zomato menu</span>
              <span className="font-semibold text-sage-600">No hidden fees</span>
            </div>

            {/* Primary Action: Order on WhatsApp */}
            <button
              onClick={handleWhatsAppOrder}
              className="w-full py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all active:scale-[0.98] flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4 fill-white" />
              <span>Order on WhatsApp (₹{cartTotal})</span>
            </button>

            {/* Secondary Option: Order on Zomato */}
            <a
              href={BUSINESS_CONFIG.links.zomatoOrder}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-xl bg-cream-50 hover:bg-cream-200 border border-chocolate-800/15 text-chocolate-800 font-semibold text-xs transition-colors flex items-center justify-center gap-2 text-center"
            >
              <span>Or Order for Delivery on Zomato</span>
              <ExternalLink className="w-3.5 h-3.5 text-terracotta-600" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
