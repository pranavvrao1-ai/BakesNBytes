import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedCategories from './components/FeaturedCategories';
import Bestsellers from './components/Bestsellers';
import MenuSection from './components/MenuSection';
import AboutSection from './components/AboutSection';
import CustomerFeedback from './components/CustomerFeedback';
import GallerySection from './components/GallerySection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import ProductModal from './components/ProductModal';
import MobileBottomBar from './components/MobileBottomBar';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-cream-50 text-chocolate-900 selection:bg-terracotta-100 selection:text-terracotta-700">
        {/* Promotional announcement bar */}
        <AnnouncementBar />

        {/* Sticky Header Navigation */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="flex-1">
          {/* Hero Section */}
          <Hero />

          {/* Featured Categories Tiles */}
          <FeaturedCategories onSelectCategory={setSelectedCategory} />

          {/* Customer Favourites / Bestsellers */}
          <Bestsellers />

          {/* Full Interactive Menu Catalogue */}
          <MenuSection
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />

          {/* Brand Story & Philosophy */}
          <AboutSection />

          {/* Verified Customer Feedback */}
          <CustomerFeedback />

          {/* Food & Ambiance Gallery */}
          <GallerySection />

          {/* Contact, Timings & Embedded Map */}
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer onSelectCategory={setSelectedCategory} />

        {/* Slide-over Cart Drawer */}
        <CartDrawer />

        {/* Detailed Product View Modal */}
        <ProductModal />

        {/* Mobile Sticky Bottom Ordering Bar */}
        <MobileBottomBar />
      </div>
    </CartProvider>
  );
}
