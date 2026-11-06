import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu as MenuIcon, X, Phone, ExternalLink } from 'lucide-react';
import Logo from './Logo';
import { useCart } from '../context/CartContext';
import { BUSINESS_CONFIG } from '../data/restaurantData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { cartCount, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'menu', 'bestsellers', 'about', 'gallery', 'contact'];
      const scrollPosition = window.scrollY + 140;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Our Menu', href: '#menu', id: 'menu' },
    { name: 'Bestsellers', href: '#bestsellers', id: 'bestsellers' },
    { name: 'About Us', href: '#about', id: 'about' },
    { name: 'Gallery', href: '#gallery', id: 'gallery' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'glass-nav shadow-soft border-b border-chocolate-800/10 py-3'
          : 'bg-cream-50/90 backdrop-blur-md py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" onClick={() => handleNavClick('#home')} className="focus:outline-none">
            <Logo />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? 'text-terracotta-600 bg-cream-200/70 font-bold'
                      : 'text-chocolate-700 hover:text-chocolate-900 hover:bg-cream-100'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center space-x-3">
            {/* Cart Trigger */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 rounded-xl bg-cream-100 hover:bg-cream-200 border border-chocolate-800/10 text-chocolate-800 transition-all shadow-sm active:scale-95 flex items-center gap-2"
              aria-label="View Order Cart"
            >
              <ShoppingBag className="w-5 h-5 text-chocolate-800" />
              <span className="hidden sm:inline text-xs font-bold text-chocolate-800">
                Cart
              </span>
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-terracotta-500 text-white font-bold text-xs w-5 h-5 rounded-full flex items-center justify-center shadow-md animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Desktop Order Now Button */}
            <a
              href="#menu"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#menu');
              }}
              className="hidden sm:inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-gradient-to-r from-chocolate-800 to-chocolate-900 hover:from-chocolate-700 hover:to-chocolate-800 text-cream-50 font-bold text-sm shadow-md hover:shadow-lg transition-all active:scale-95"
            >
              Order Now
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-chocolate-800 hover:bg-cream-100 border border-chocolate-800/10 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-cream-50 border-b border-chocolate-800/10 shadow-elevated px-4 pt-3 pb-6 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col space-y-1.5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`px-4 py-3 rounded-xl text-base font-semibold transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-terracotta-50 text-terracotta-600 font-bold'
                      : 'text-chocolate-800 hover:bg-cream-100'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-terracotta-500" />}
                </a>
              );
            })}

            <div className="pt-4 border-t border-chocolate-800/10 flex flex-col gap-2.5">
              <a
                href="#menu"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#menu');
                }}
                className="w-full py-3 text-center rounded-xl bg-chocolate-900 text-cream-50 font-bold text-sm shadow-md"
              >
                Browse & Order Menu
              </a>

              <div className="flex items-center justify-between text-xs text-chocolate-600 px-2 pt-1">
                <span className="flex items-center gap-1 font-medium">
                  <Phone className="w-3.5 h-3.5 text-caramel-600" />
                  {BUSINESS_CONFIG.contact.phoneDisplay}
                </span>
                <a
                  href={BUSINESS_CONFIG.links.zomato}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-terracotta-600 font-semibold flex items-center gap-1 hover:underline"
                >
                  Zomato Listing <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
