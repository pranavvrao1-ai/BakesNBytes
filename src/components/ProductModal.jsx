import React, { useState } from 'react';
import { X, Plus, Minus, ShoppingBag, Check, ShieldCheck, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function ProductModal() {
  const { selectedProduct, setSelectedProduct, addToCart } = useCart();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const [imgError, setImgError] = useState(false);

  if (!selectedProduct) return null;

  const handleClose = () => {
    setSelectedProduct(null);
    setQty(1);
    setAdded(false);
  };

  const handleAddToCart = () => {
    addToCart(selectedProduct, qty);
    setAdded(true);
    setTimeout(() => {
      handleClose();
    }, 700);
  };

  const displayImage = imgError || !selectedProduct.image
    ? "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=600&auto=format&fit=crop"
    : selectedProduct.image;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-chocolate-900/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={handleClose}
    >
      <div
        className="relative bg-cream-50 rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-chocolate-800/10 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-cream-50/90 text-chocolate-900 hover:bg-terracotta-100 flex items-center justify-center shadow-md transition-colors"
          aria-label="Close product view"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Product Image Frame */}
        <div className="relative h-64 sm:h-72 w-full bg-cream-200 overflow-hidden">
          <img
            src={displayImage}
            alt={selectedProduct.name}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-chocolate-900/40 via-transparent to-transparent" />

          {/* Veg Marker */}
          {selectedProduct.isVeg && (
            <div className="absolute bottom-4 left-4 bg-cream-50/95 backdrop-blur-sm px-2.5 py-1 rounded-md shadow-sm border border-chocolate-800/10 flex items-center gap-1.5">
              <div className="w-3.5 h-3.5 border-2 border-emerald-600 rounded-sm flex items-center justify-center p-0.5">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
              </div>
              <span className="text-[11px] font-bold text-emerald-800">100% Pure Veg</span>
            </div>
          )}

          {/* Category Pill */}
          <div className="absolute top-4 left-4 bg-chocolate-900/80 backdrop-blur-md text-cream-100 text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
            {selectedProduct.category}
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-7">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="font-serif text-2xl font-bold text-chocolate-900">
                {selectedProduct.name}
              </h2>
              {selectedProduct.subcategory && (
                <span className="text-xs text-caramel-600 font-semibold uppercase tracking-wider block mt-0.5">
                  {selectedProduct.subcategory}
                </span>
              )}
            </div>
            <div className="text-right flex-shrink-0">
              <span className="text-2xl font-extrabold text-chocolate-900">
                ₹{selectedProduct.price}
              </span>
              <span className="block text-[10px] text-chocolate-500 font-medium">Verified Price</span>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-chocolate-800/10">
            <h4 className="text-xs font-bold text-chocolate-500 uppercase tracking-wider mb-1">
              Description & Ingredients
            </h4>
            <p className="text-sm text-chocolate-700 leading-relaxed">
              {selectedProduct.description || "Crafted fresh upon receiving your order using high-grade ingredients and traditional griddle toasting techniques."}
            </p>
          </div>

          {/* Freshness Note */}
          <div className="mt-4 p-3 bg-cream-100 rounded-2xl flex items-center gap-2.5 border border-chocolate-800/5">
            <ShieldCheck className="w-4 h-4 text-sage-600 flex-shrink-0" />
            <span className="text-xs text-chocolate-600 font-medium">
              Made fresh to order at our Basavanagudi kitchen. Customisable on WhatsApp.
            </span>
          </div>

          {/* Action Row */}
          <div className="mt-6 pt-5 border-t border-chocolate-800/10 flex items-center gap-4">
            {/* Quantity Selector */}
            <div className="flex items-center gap-2.5 bg-cream-200/80 rounded-xl p-1.5 border border-chocolate-800/10">
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="w-8 h-8 rounded-lg bg-cream-50 text-chocolate-900 hover:bg-cream-100 flex items-center justify-center font-bold text-sm shadow-xs"
                aria-label="Decrease quantity"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="text-sm font-bold text-chocolate-900 min-w-[1.5rem] text-center">
                {qty}
              </span>
              <button
                onClick={() => setQty((q) => q + 1)}
                className="w-8 h-8 rounded-lg bg-chocolate-900 text-cream-50 hover:bg-terracotta-600 flex items-center justify-center font-bold text-sm shadow-xs"
                aria-label="Increase quantity"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className={`flex-1 py-3.5 px-5 rounded-xl font-bold text-sm shadow-md transition-all active:scale-[0.98] flex items-center justify-center gap-2 ${
                added
                  ? 'bg-emerald-600 text-white'
                  : 'bg-gradient-to-r from-chocolate-900 to-chocolate-800 hover:from-chocolate-800 hover:to-terracotta-600 text-cream-50'
              }`}
            >
              {added ? (
                <>
                  <Check className="w-4 h-4" /> Added to Order!
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4 text-caramel-500" />
                  Add to Order • ₹{selectedProduct.price * qty}
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
