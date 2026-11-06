# Bakes N Bytes — Premium Artisan Food Website

> **Good Food. Great Bites. Every Craving.**  
> Official website for **Bakes N Bytes**, Basavanagudi, Bengaluru, Karnataka, India.

---

## 🌟 Highlights & Brand Experience

- **Brand Aesthetic:** Luxurious warm cream backgrounds (`#FDFBF7`, `#FAF6EE`), rich chocolate brown typography (`#231713`), and warm caramel/terracotta accents inspired by artisanal bakeries and gourmet cafes.
- **Data Integrity & Verification:** Primary data extracted directly from the verified live [Zomato Listing](https://www.zomato.com/bangalore/bakes-n-bytes-basavanagudi-bangalore):
  - **Location:** Basavanagudi, Bengaluru, Karnataka 560004
  - **Operating Hours:** 7:45 AM – 11:30 PM (Open 7 Days a week)
  - **Zomato Rating:** 4.2 / 5.0 (118+ verified ratings)
  - **FSSAI License:** Lic. No. `21225195000815`
  - **100% Pure Vegetarian Kitchen**
  - **All 34 Menu Items & Prices Verified:** Real photos, exact pricing, ingredient descriptions, and dietary classifications.

---

## 🚀 Key Features

1. **Promotional Announcement Bar:** Top slim bar with configurable badge and direct action links.
2. **Sticky Navigation & Active Scroll Tracking:** Seamless desktop navigation with live cart count and smooth mobile drawer menu.
3. **Appetizing Hero Section:** Editorial layout showcasing signature items, trust pills, opening hours, and direct CTAs.
4. **Category Showcase Tiles:** Photo-based interactive category cards that directly filter the menu.
5. **Customer Favourites (Bestsellers):** Highlighting signature dishes (Vegetable Cheese Grilled Sandwich, Red Sauce Pasta, Vegetable Momos, Cheese Maggi, Pani Puri, etc.).
6. **Complete Food Catalogue (Menu Page):**
   - Instant search across dish names and descriptions.
   - Category filtering pills with item counts.
   - Price sorting (Recommended, Low to High, High to Low).
   - Detailed product view modal with full photos, descriptions, and portion notes.
   - Add to Order with instant visual feedback and quantity toggles.
7. **Interactive WhatsApp Ordering System:**
   - Slide-over Cart Drawer with persistent local storage.
   - Order type selection (Takeaway Pickup / Local Delivery).
   - Custom notes & preferences (e.g., extra crispy, less spicy).
   - One-click **"Order on WhatsApp"** button generating a clean, structured WhatsApp message.
   - Secondary direct link to order on Zomato.
8. **About Us Section:** Warm, honest narrative detailing the Basavanagudi kitchen.
9. **Customer Feedback:** Authentic Zomato rating highlight (4.2★) and customer review cards.
10. **Food & Kitchen Gallery:** High-resolution responsive photo grid with filter tabs and full-screen image lightbox.
11. **Contact & Location:** Location details, timings, quick action buttons (Call via Zomato, WhatsApp, Get Directions, Zomato Menu), and embedded interactive Google Maps.
12. **Mobile Experience:** Sticky mobile bottom bar with quick Menu, Call, WhatsApp, and Floating Cart counter for an app-like feel.

---

## 🛠️ Central Configuration File

All business information, promotional announcements, contact options, categories, and menu items can be edited in a single file:

📁 **`src/data/restaurantData.js`**

To customize your private WhatsApp number securely without committing it to git, create a `.env` file:
```env
VITE_WHATSAPP_NUMBER=91XXXXXXXXXX
```

---

## 💻 Tech Stack

- **Framework:** React 19 + Vite 6
- **Styling:** Tailwind CSS + Custom Typography & Shadows
- **Icons:** Lucide React
- **Celebration Effects:** Canvas Confetti
- **SEO & Structured Data:** Schema.org `Restaurant` JSON-LD + Open Graph metadata

---

## 📦 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Start the development server
```bash
npm run dev
```

### 3. Build for production
```bash
npm run build
```
