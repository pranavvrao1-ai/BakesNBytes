# Bakes N Bytes — Premium Artisan Food Website

> **Good Food. Great Bites. Every Craving.**  
> Official website for **Bakes N Bytes**, located in Shankarapuram / Basavanagudi, Bengaluru, Karnataka, India.

---

## 🌟 Highlights & Brand Experience

- **Brand Aesthetic:** Luxurious warm cream backgrounds (`#FDFBF7`, `#FAF6EE`), rich chocolate brown typography (`#231713`), and warm caramel/terracotta accents inspired by artisanal bakeries and gourmet cafes.
- **Data Integrity & Verification:** Primary data extracted directly from the verified live [Zomato Listing](https://www.zomato.com/bangalore/bakes-n-bytes-basavanagudi-bangalore):
  - **Verified Address:** 1/1, Chikkanna Gardens, 3rd Cross, Gurukrupa, Shankarpuram, Near Shankar Mutt Road, Basavanagudi, Bengaluru, Karnataka 560004
  - **Verified Phone & WhatsApp:** `+91 86189 01148`
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
   - One-click **"Order on WhatsApp"** button generating a clean, structured WhatsApp message to `+91 86189 01148`.
   - Secondary direct link to order on Zomato.
8. **About Us Section:** Warm, honest narrative detailing the Basavanagudi kitchen without fabricated stories.
9. **Customer Feedback:** Authentic Zomato rating highlight (4.2★) and customer review cards.
10. **Food & Kitchen Gallery:** High-resolution responsive photo grid with filter tabs and full-screen image lightbox.
11. **Contact & Location:** Verified address, phone, timings, 4 quick action buttons (Call Now, WhatsApp, Get Directions, Zomato Menu), and embedded interactive Google Maps.
12. **Mobile Experience:** Sticky mobile bottom bar with quick Menu, Call, WhatsApp, and Floating Cart counter for an app-like feel.

---

## 🛠️ Central Configuration File

All business information, promotional announcements, contact numbers, categories, and menu items can be edited in a single file:

📁 **`src/data/restaurantData.js`**

```javascript
export const BUSINESS_CONFIG = {
  name: "Bakes N Bytes",
  tagline: "Good Food. Great Bites. Every Craving.",
  announcement: {
    enabled: true,
    badge: "Basavanagudi Special",
    text: "Order directly on WhatsApp for prompt service • Also delivering on Zomato & Swiggy",
    actionText: "Order Now",
    actionLink: "#menu"
  },
  contact: {
    phone: "+91 86189 01148",
    whatsappNumber: "918618901148",
    timings: { hours: "7:45 AM – 11:30 PM", days: "Monday – Sunday" },
    ...
  }
};
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

---

## 🌐 Deploy to Vercel, Netlify, or GitHub Pages

This project builds to standard static files in the `dist` folder:
- **Vercel:** Connect the repository and deploy with standard Vite settings.
- **Netlify:** Set build command `npm run build` and publish directory `dist`.
- **GitHub Pages:** Deploy the `dist` folder directly using GitHub Actions.
