import React, { useState } from 'react';
import { Plus, Minus, Check, Eye } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }) {
  const { cart, addToCart, updateQuantity, setSelectedProduct } = useCart();
  const [imgError, setImgError] = useState(false);
  const [justAdded, setJustAdded] = useState(false);

  // Check if item is already in cart
  const cartItem = cart.find((item) => item.id === product.id);
  const inCartQty = cartItem ? cartItem.quantity : 0;

  const handleAdd = (e) => {
    e.stopPropagation();
    addToCart(product, 1);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 900);
  };

  const handleIncrement = (e) => {
    e.stopPropagation();
    updateQuantity(product.id, 1);
  };

  const handleDecrement = (e) => {
    e.stopPropagation();
    updateQuantity(product.id, -1);
  };

  // Fallback food placeholder image if CDN image has any issue
  const displayImage = imgError || !product.image
    ? "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=600&auto=format&fit=crop"
    : product.image;

  return (
    <div
      onClick={() => setSelectedProduct(product)}
      className="group relative bg-cream-50 rounded-2xl overflow-hidden border border-chocolate-800/10 shadow-card hover:shadow-elevated transition-all duration-300 flex flex-col cursor-pointer food-card-hover select-none"
    >
      {/* Top Image Frame */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-cream-200">
        <img
          src={displayImage}
          alt={product.name}
          onError={() => setImgError(true)}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-chocolate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cream-50/90 text-chocolate-900 text-xs font-bold shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform">
            <Eye className="w-3.5 h-3.5" /> Quick View
          </span>
        </div>

        {/* Veg Marker */}
        {product.isVeg && (
          <div
            className="absolute top-3 left-3 bg-cream-50/95 backdrop-blur-sm p-1 rounded-md shadow-sm border border-chocolate-800/10 flex items-center justify-center"
            title="Pure Vegetarian"
          >
            <div className="w-3.5 h-3.5 border-2 border-emerald-600 rounded-sm flex items-center justify-center p-0.5">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
            </div>
          </div>
        )}

        {/* Bestseller Badge */}
        {product.isBestseller && (
          <div className="absolute top-3 right-3 bg-gradient-to-r from-terracotta-600 to-caramel-600 text-cream-50 text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full shadow-md tracking-wider">
            Popular
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-serif font-bold text-base sm:text-lg text-chocolate-900 group-hover:text-terracotta-600 transition-colors line-clamp-1">
              {product.name}
            </h3>
          </div>

          <p className="mt-1.5 text-xs text-chocolate-600 line-clamp-2 leading-relaxed">
            {product.description || "Freshly made to order at Bakes N Bytes with high quality ingredients."}
          </p>
        </div>

        {/* Price & Action Button */}
        <div className="mt-4 pt-3 border-t border-chocolate-800/10 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-chocolate-500">
              Verified Price
            </span>
            <span className="text-lg font-extrabold text-chocolate-900">
              ₹{product.price}
            </span>
          </div>

          {/* Add to Cart / Quantity Controller */}
          {inCartQty === 0 ? (
            <button
              onClick={handleAdd}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all shadow-sm active:scale-95 flex items-center gap-1.5 ${
                justAdded
                  ? 'bg-emerald-600 text-white'
                  : 'bg-chocolate-900 hover:bg-terracotta-600 text-cream-50'
              }`}
              aria-label={`Add ${product.name} to order`}
            >
              {justAdded ? (
                <>
                  <Check className="w-3.5 h-3.5" /> Added
                </>
              ) : (
                <>
                  <Plus className="w-3.5 h-3.5" /> Add to Order
                </>
              )}
            </button>
          ) : (
            <div
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-2 bg-cream-200/90 rounded-xl px-2 py-1 border border-chocolate-800/10 shadow-sm"
            >
              <button
                onClick={handleDecrement}
                className="w-6 h-6 rounded-lg bg-cream-50 text-chocolate-800 hover:bg-terracotta-100 flex items-center justify-center font-bold text-xs shadow-xs"
                aria-label="Decrease quantity"
              >
                <Minus className="w-3 h-3" />
              </button>
              <span className="text-xs font-bold text-chocolate-900 min-w-[1.2rem] text-center">
                {inCartQty}
              </span>
              <button
                onClick={handleIncrement}
                className="w-6 h-6 rounded-lg bg-chocolate-900 text-cream-50 hover:bg-terracotta-600 flex items-center justify-center font-bold text-xs shadow-xs"
                aria-label="Increase quantity"
              >
                <Plus className="w-3 h-3" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
