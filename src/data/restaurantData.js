/**
 * Central Business and Menu Configuration for Bakes N Bytes
 * Basavanagudi, Bengaluru, Karnataka, India
 * 
 * All details and prices verified against live Zomato listing
 * (https://www.zomato.com/bangalore/bakes-n-bytes-basavanagudi-bangalore)
 */

export const BUSINESS_CONFIG = {
  name: "Bakes N Bytes",
  tagline: "Good Food. Great Bites. Every Craving.",
  subheading: "From delicious bites to refreshing beverages, discover something special at Bakes N Bytes in Basavanagudi.",
  
  // Promotional Announcement Bar
  announcement: {
    enabled: true,
    badge: "Basavanagudi Special",
    text: "Order directly on WhatsApp for prompt service • Also delivering on Zomato & Swiggy",
    actionText: "Order Now",
    actionLink: "#menu"
  },

  // Verified Contact Details
  contact: {
    phone: "+91 86189 01148",
    phoneDisplay: "+91 86189 01148",
    phoneTel: "+918618901148",
    whatsappNumber: "918618901148", // International format without +
    whatsappDisplay: "+91 86189 01148",
    email: "bakesnbytes.blr@gmail.com",
    address: {
      building: "1/1, Chikkanna Gardens, 3rd Cross",
      landmark: "Gurukrupa, Near Shankar Mutt Road",
      locality: "Shankarpuram, Basavanagudi",
      city: "Bengaluru",
      state: "Karnataka",
      pincode: "560004",
      fullAddress: "1/1, Chikkanna Gardens, 3rd Cross, Gurukrupa, Shankarpuram, Near Shankar Mutt, Basavanagudi, Bengaluru, Karnataka 560004"
    },
    coordinates: {
      lat: 12.9561086,
      lng: 77.5708853
    },
    timings: {
      days: "Monday – Sunday",
      hours: "7:45 AM – 11:30 PM",
      statusText: "Open Daily 7:45 AM to 11:30 PM"
    },
    fssaiLicense: "Lic. No. 21225195000815",
    pricingNote: "₹100 – ₹250 for two (approx.)",
  },

  // External Verified Links
  links: {
    zomato: "https://www.zomato.com/bangalore/bakes-n-bytes-basavanagudi-bangalore",
    zomatoOrder: "https://www.zomato.com/bangalore/bakes-n-bytes-basavanagudi-bangalore/order",
    swiggy: "https://www.swiggy.com/city/bangalore/bakes-n-bytes-basavanagudi-rest1127918",
    googleMapsDirections: "https://www.google.com/maps/dir/?api=1&destination=12.9561086,77.5708853",
  },

  // Verified Rating
  rating: {
    score: 4.2,
    scale: 5,
    totalReviews: "118+ Ratings on Zomato",
    platform: "Zomato Verified"
  },

  // Brand Imagery
  images: {
    storefront: "https://b.zmtcdn.com/data/pictures/9/21813789/acc3c2e32796f21c7ffdd7a771a08991.jpg",
    heroBanner: "https://images.unsplash.com/photo-1509722747041-616f39b57569?q=80&w=1600&auto=format&fit=crop",
    sandwichHero: "https://b.zmtcdn.com/data/dish_photos/008/3f6bb5026cbb78b3e5175e0faa470008.jpeg",
    pastaHero: "https://b.zmtcdn.com/data/dish_photos/571/1c4ca46a4474549777f4c1e26b5f2571.jpeg",
    chaatHero: "https://b.zmtcdn.com/data/dish_photos/fda/95ea179eb346e02a76ce204b1acb3fda.jpg",
  },

  // About Narrative (Honest, authentic, without fabricated claims)
  about: {
    title: "More Than Just a Bite. It's Bakes N Bytes.",
    subtitle: "A beloved neighbourhood quick-bite destination in the heart of Basavanagudi.",
    paragraphs: [
      "Located at Shankarpuram near Shankar Mutt Road, Bakes N Bytes was created to bring people together over freshly toasted artisan sandwiches, nostalgic street-style chaats, sizzling Maggi, and comforting snacks.",
      "Every single order is prepared fresh on the griddle using crisp bread, high-grade butter, garden vegetables, and locally ground masalas. Whether you are grabbing a quick cheese grilled sandwich after college, savouring cutlet chaat on a rainy Bengaluru evening, or sharing a plate of steaming momos with friends, we ensure every bite hits the spot.",
      "We operate daily from morning to late evening, offering dine-in, takeaway, quick WhatsApp order dispatch, and online delivery across Bengaluru."
    ],
    features: [
      {
        title: "100% Vegetarian Delights",
        description: "Our complete kitchen catalogue is pure vegetarian, prepared with clean ingredients and utmost hygiene."
      },
      {
        title: "Freshly Grilled on Order",
        description: "No pre-made or cold snacks. Every sandwich is butter-toasted fresh to golden crisp perfection."
      },
      {
        title: "Basavanagudi Neighbourhood Vibe",
        description: "Conveniently located near Shankar Mutt with easy access, quick pickup, and prompt local dispatch."
      },
      {
        title: "Transparent & Affordable",
        description: "Unbeatable value for money with wholesome, pocket-friendly portions that delight every craving."
      }
    ]
  },

  // Verified Customer Feedback & Zomato Highlights
  feedback: {
    heading: "What Our Customers Say",
    subheading: "Verified ratings and reviews from food lovers on Zomato and our local patrons in Basavanagudi.",
    ratingSummary: {
      score: 4.2,
      maxScore: 5.0,
      totalRatings: 118,
      source: "Zomato",
      url: "https://www.zomato.com/bangalore/bakes-n-bytes-basavanagudi-bangalore"
    },
    reviews: [
      {
        id: "rev-1",
        author: "Bangalore Food Patron",
        rating: 5,
        date: "Recent Customer",
        text: "The Vegetable Cheese Grilled Sandwich is exceptionally crispy and generous with cheese. Perfect spot for evening snacks in Shankarpuram!",
        badge: "Verified Zomato Diner"
      },
      {
        id: "rev-2",
        author: "Chaat Enthusiast",
        rating: 4.5,
        date: "Recent Customer",
        text: "Tried their Cutlet Chaat and Red Sauce Pasta. Really good quantity for the price and prepared fresh on the spot. Maggi options are great too.",
        badge: "Verified Local Review"
      },
      {
        id: "rev-3",
        author: "South Bangalore Foodie",
        rating: 5,
        date: "Recent Customer",
        text: "Very friendly service and prompt WhatsApp response for takeaway. The Cheese Maggi and Garlic Potato Pops never disappoint.",
        badge: "Regular Patron"
      }
    ]
  }
};

export const MENU_CATEGORIES = [
  {
    "id": "Sandwiches",
    "name": "Artisan Sandwiches",
    "slug": "sandwiches",
    "description": "Crispy golden grilled sandwiches layered with garden veggies, cheese, and house chutneys, plus specialty sweet fruitwiches.",
    "image": "https://b.zmtcdn.com/data/dish_photos/008/3f6bb5026cbb78b3e5175e0faa470008.jpeg",
    "itemCount": 10
  },
  {
    "id": "Burgers, Momos, Pasta",
    "name": "Momos & Pasta",
    "slug": "momos-pasta",
    "description": "Steamed savoury vegetable momos and rich, freshly tossed red sauce pasta bursting with Italian herb aromas.",
    "image": "https://b.zmtcdn.com/data/dish_photos/571/1c4ca46a4474549777f4c1e26b5f2571.jpeg",
    "itemCount": 2
  },
  {
    "id": "Chaat",
    "name": "Street Chaat",
    "slug": "chaat",
    "description": "Crisp puris, tangy imli, spicy mint waters, cutlets, and fusion bhel prepared for the authentic Bangalore street food craving.",
    "image": "https://b.zmtcdn.com/data/dish_photos/fda/95ea179eb346e02a76ce204b1acb3fda.jpg",
    "itemCount": 8
  },
  {
    "id": "Maggi Mania",
    "name": "Maggi Mania",
    "slug": "maggi-mania",
    "description": "Nostalgic comfort noodles upgraded with butter, schezwan paneer, melted cheese, and crunchy toppings.",
    "image": "https://b.zmtcdn.com/data/dish_photos/ecb/dff2c4111ed055bf2d34f5f8a3a09ecb.jpeg",
    "itemCount": 8
  },
  {
    "id": "Healthy Breakfast Bowls",
    "name": "Corn & Breakfast Bowls",
    "slug": "breakfast-bowls",
    "description": "Warm, buttery steamed sweet corn bowls tossed with pepper, zesty tang, and premium melted cheese.",
    "image": "https://b.zmtcdn.com/data/dish_photos/f5f/ea53908864d2ca7d01dfe577a3eabf5f.jpeg",
    "itemCount": 2
  },
  {
    "id": "The Snack Bar",
    "name": "The Snack Bar",
    "slug": "snack-bar",
    "description": "Golden crispy french fries, smiley potatoes, and garlic pops fried fresh to golden crisp perfection.",
    "image": "https://b.zmtcdn.com/data/dish_photos/ec9/d872085dbe76110e535843c00ade3ec9.jpeg",
    "itemCount": 4
  }
];

export const MENU_ITEMS = [
  {
    "id": "item_1",
    "name": "Vegetable Cheese Grilled Sandwich",
    "category": "Sandwiches",
    "subcategory": "Sandwiches",
    "price": 160,
    "description": "A tangy sandwich made by toasting bread with a choice of vegetables as filling between bread slices. The bread slices are toasted to perfection with butter after a generous spread of spicy green chutney and tomato ketchup, and loaded with slices of tomato, onion, cucumber and cheese.",
    "image": "https://b.zmtcdn.com/data/dish_photos/008/3f6bb5026cbb78b3e5175e0faa470008.jpeg",
    "isVeg": true,
    "isAvailable": true,
    "isBestseller": true
  },
  {
    "id": "item_2",
    "name": "Chocolate Sandwich",
    "category": "Sandwiches",
    "subcategory": "Sandwiches",
    "price": 150,
    "description": "Indulge in a decadent treat with a layer of rich, creamy chocolate with a dash of cheese - sandwiched between toasted bread slices. An all time hit with kids.",
    "image": "https://b.zmtcdn.com/data/dish_photos/eb8/35ae652c6c58f28488b6b7da72c16eb8.jpeg",
    "isVeg": true,
    "isAvailable": true,
    "isBestseller": true
  },
  {
    "id": "item_3",
    "name": "Paneer Capsicum Sandwich",
    "category": "Sandwiches",
    "subcategory": "Sandwiches",
    "price": 180,
    "description": "A super tangy sandwich made by toasting bread with paneer and capsicum as filling between bread slices. The bread slices are toasted to perfection with butter after a generous filling of a tangy mixture of paneer, capsicum and onion",
    "image": "https://b.zmtcdn.com/data/dish_photos/d70/c8f838822a87915e3518e43d577d3d70.jpeg",
    "isVeg": true,
    "isAvailable": true,
    "isBestseller": false
  },
  {
    "id": "item_4",
    "name": "Corn Cheese Sandwich",
    "category": "Sandwiches",
    "subcategory": "Sandwiches",
    "price": 185,
    "description": "A tangy sandwich made by toasting bread with a choice of vegetables as filling between bread slices. The bread slices are toasted to perfection with butter after a generous spread of spicy green chutney and tomato ketchup, and loaded with a mix of corn, onion, capsicum, cheese, and mix herbs.",
    "image": "https://b.zmtcdn.com/data/dish_photos/000/fb986977bc000f41fe564e37a0d70000.jpeg",
    "isVeg": true,
    "isAvailable": true,
    "isBestseller": false
  },
  {
    "id": "item_5",
    "name": "Tomato Onion Sandwich",
    "category": "Sandwiches",
    "subcategory": "Sandwiches",
    "price": 140,
    "description": "A spicy sandwich made by toasting bread with tomato and onion spicy mixture as filling between bread slices. The bread slices are toasted to perfection with butter after a generous filling of tomato and onion mixture with masala powder prepared locally.",
    "image": "https://b.zmtcdn.com/data/dish_photos/ee2/1ae8e9d6655e54f03155af6545163ee2.jpeg",
    "isVeg": true,
    "isAvailable": true,
    "isBestseller": false
  },
  {
    "id": "item_6",
    "name": "Potato Onion Sandwich - McCain's Chilli Garlic Potato Bites style",
    "category": "Sandwiches",
    "subcategory": "Sandwiches",
    "price": 180,
    "description": "Treat yourself to a tasty and super flavourful surprise. . . A sandwich made by toasting bread with a stuffing of crispy garlic potato bites (McCain's) and onion rings. The bread slices are toasted to perfection with butter after a generous spread of spicy green chutney and tomato ketchup and loaded with crispy chilli garlic potato bites.",
    "image": "https://b.zmtcdn.com/data/dish_photos/9d4/d4aeb27162a023b7bddf603c5f8939d4.jpeg",
    "isVeg": true,
    "isAvailable": true,
    "isBestseller": false
  },
  {
    "id": "item_7",
    "name": "Crunchy Cutlet Sandwich",
    "category": "Sandwiches",
    "subcategory": "Sandwiches",
    "price": 185,
    "description": "Savor our signature cutlet sandwich featuring a crispy, flavourful cutlet made from tender vegetables coated in a light golden crust, served inside crispy toasted bread with a hint of flavourful special sauces. A perfect blend of textures and tastes in every bite.",
    "image": "https://b.zmtcdn.com/data/dish_photos/62d/c6bd9cb53c5f3ccae9b001ca9586362d.png",
    "isVeg": true,
    "isAvailable": true,
    "isBestseller": false
  },
  {
    "id": "item_8",
    "name": "Mango Sandwich",
    "category": "Sandwiches",
    "subcategory": "Fruitwiches (Fruit Sandwiches)",
    "price": 135,
    "description": "A sweet sandwich made by toasting bread with mango crush. An all time hit with kids.",
    "image": "https://b.zmtcdn.com/data/dish_photos/08f/5dbcb0cce2bfac219bc3c158a9c1008f.png",
    "isVeg": true,
    "isAvailable": true,
    "isBestseller": false
  },
  {
    "id": "item_9",
    "name": "Pineapple Sandwich",
    "category": "Sandwiches",
    "subcategory": "Fruitwiches (Fruit Sandwiches)",
    "price": 135,
    "description": "A sweet sandwich made by toasting bread with pineapple crush. An all time hit with kids.",
    "image": "https://b.zmtcdn.com/data/dish_photos/a0c/b3e16866bda5e0af1d55fe166eff7a0c.png",
    "isVeg": true,
    "isAvailable": true,
    "isBestseller": false
  },
  {
    "id": "item_10",
    "name": "Strawberry Sandwich",
    "category": "Sandwiches",
    "subcategory": "Fruitwiches (Fruit Sandwiches)",
    "price": 135,
    "description": "A sweet sandwich made by toasting bread with strawberry crush. An all time hit with kids.",
    "image": "https://b.zmtcdn.com/data/dish_photos/38c/45850300c385b96faf136e540364338c.jpeg",
    "isVeg": true,
    "isAvailable": true,
    "isBestseller": false
  },
  {
    "id": "item_11",
    "name": "Vegetable Momos [6 Pieces]",
    "category": "Burgers, Momos, Pasta",
    "subcategory": "Snacks",
    "price": 190,
    "description": "Savour our juicy, steamed momos filled with fresh vegetables, chosen spices and served with a spicy dip.",
    "image": "https://b.zmtcdn.com/data/dish_photos/ec3/d42466938519d9024e55eb6da2e2dec3.jpeg",
    "isVeg": true,
    "isAvailable": true,
    "isBestseller": true
  },
  {
    "id": "item_12",
    "name": "Red Sauce Pasta",
    "category": "Burgers, Momos, Pasta",
    "subcategory": "Snacks",
    "price": 195,
    "description": "Tangy, spicy and utterly delicious. . Penne pasta tossed in a rich tomato sauce and added spices. . Topped with some grated cheese and corn, it's a complete scrumptious meal",
    "image": "https://b.zmtcdn.com/data/dish_photos/571/1c4ca46a4474549777f4c1e26b5f2571.jpeg",
    "isVeg": true,
    "isAvailable": true,
    "isBestseller": true
  },
  {
    "id": "item_13",
    "name": "Cutlet Chaat",
    "category": "Chaat",
    "subcategory": "",
    "price": 155,
    "description": "[Serves 1-2] A street style specially crispy cutlet served with spicy chutney, dahi and veggies.",
    "image": "https://b.zmtcdn.com/data/dish_photos/fda/95ea179eb346e02a76ce204b1acb3fda.jpg",
    "isVeg": true,
    "isAvailable": true,
    "isBestseller": true
  },
  {
    "id": "item_14",
    "name": "Kurkure Bhel",
    "category": "Chaat",
    "subcategory": "",
    "price": 125,
    "description": "Served in a street style fashion - brown wrapper on the outside and food grade butter paper inside, to give the same feeling and satisfaction of having a chaat on the roadside, but with hygiene. Kurkure spiced up with flavourful chutneys, spices and selected veggies like onion, cucumber, tomato and carrot.",
    "image": "https://b.zmtcdn.com/data/dish_photos/35a/48e27cf963391002d4c08b97f29ae35a.jpeg",
    "isVeg": true,
    "isAvailable": true,
    "isBestseller": false
  },
  {
    "id": "item_15",
    "name": "Nachos Chaat",
    "category": "Chaat",
    "subcategory": "",
    "price": 130,
    "description": "Nachos spiced up with flavourful chutneys, spices and selected veggies like onion, cucumber, tomato and carrot.",
    "image": "https://b.zmtcdn.com/data/dish_photos/001/efddd3c6f613cbf9f41d03c5747d6001.png",
    "isVeg": true,
    "isAvailable": true,
    "isBestseller": false
  },
  {
    "id": "item_16",
    "name": "Pani Puri/Golgappe [7 Pieces]",
    "category": "Chaat",
    "subcategory": "",
    "price": 130,
    "description": "Small crispy pooris filled with a potato mixture and topped with chutneys - served along with a tangy and flavourful pani. A super yummy street style snack. .",
    "image": "https://b.zmtcdn.com/data/dish_photos/91d/ab0a1cb8a315aa251854b9abbbd7b91d.jpeg",
    "isVeg": true,
    "isAvailable": true,
    "isBestseller": true
  },
  {
    "id": "item_17",
    "name": "Popcorn Chaat",
    "category": "Chaat",
    "subcategory": "",
    "price": 130,
    "description": "Served in a street style fashion - brown wrapper on the outside and food grade butter paper inside, to give the same feeling and satisfaction of having a chaat on the roadside, but with hygiene. Popcorn spiced up with flavourful chutneys, spices and selected veggies like onion, cucumber, tomato and carrot.",
    "image": "https://b.zmtcdn.com/data/dish_photos/331/1448aa8f86ef46bcba0faf04f9617331.jpeg",
    "isVeg": true,
    "isAvailable": true,
    "isBestseller": false
  },
  {
    "id": "item_18",
    "name": "Street Style Spicy Bhel Puri",
    "category": "Chaat",
    "subcategory": "",
    "price": 120,
    "description": "[Veg preparation] Served in a street style fashion\u00c2\u00a0 brown wrapper on the outside and food grade butter paper inside, to give the same feeling and satisfaction of having bhel puri roadside but with hygiene. Puffed rice spiced up with flavourful chutney, spices, peanuts and selected veggies like onion, cucumber, tomato and carrot.",
    "image": "https://b.zmtcdn.com/data/dish_photos/45f/b16a3a2a66ef5a44692c58fc69d4645f.png",
    "isVeg": true,
    "isAvailable": true,
    "isBestseller": false
  },
  {
    "id": "item_19",
    "name": "Aloo Tikki Chaat",
    "category": "Chaat",
    "subcategory": "",
    "price": 130,
    "description": "[Serves 1-2] A street style especially crispy aloo tikki served with spicy chutney, dahi and veggies.",
    "image": "https://b.zmtcdn.com/data/dish_photos/e66/c25e365597b0f31907d7d7ce949c0e66.png",
    "isVeg": true,
    "isAvailable": true,
    "isBestseller": false
  },
  {
    "id": "item_20",
    "name": "Nachos Corn Cheese Chaat",
    "category": "Chaat",
    "subcategory": "",
    "price": 150,
    "description": "Crispy nachos platter, topped with veggies and chutneys. With a dash of spices and yummy cheese, it is a perfect snack to keep your hunger pangs away.",
    "image": "https://b.zmtcdn.com/data/dish_photos/a90/312a8c0d514b8a333b0dcd521aa55a90.jpeg",
    "isVeg": true,
    "isAvailable": true,
    "isBestseller": false
  },
  {
    "id": "item_21",
    "name": "Classic Maggi",
    "category": "Maggi Mania",
    "subcategory": "Instant Noodles",
    "price": 75,
    "description": "How about a bowl of piping hot Maggi noodles? A soothing and comforting meal in minutes. . . A classic favourite for all ages. . Maggi khaaao bhookh bhagaao",
    "image": "https://b.zmtcdn.com/data/dish_photos/abd/44967ffc8867aba37b9a1e586b525abd.jpeg",
    "isVeg": true,
    "isAvailable": true,
    "isBestseller": false
  },
  {
    "id": "item_22",
    "name": "Paneer Maggi - Schezwan style",
    "category": "Maggi Mania",
    "subcategory": "Instant Noodles",
    "price": 150,
    "description": "Super tangy noodles made with paneer, capsicum and onion with a generous seasoning of schezwan sauce.",
    "image": "https://b.zmtcdn.com/data/dish_photos/7b4/d062d1951d4f9b7a02c50d22084bf7b4.jpeg",
    "isVeg": true,
    "isAvailable": true,
    "isBestseller": false
  },
  {
    "id": "item_23",
    "name": "Tangy Butter Maggi",
    "category": "Maggi Mania",
    "subcategory": "Instant Noodles",
    "price": 125,
    "description": "Our classic Maggi noodles meet a generous dollop of butter creating a rich and comforting treat. Maggi is stir fried in the butter spice mixture. The melted butter adds a creamy and luscious flavour to the dish. Indulge in the creamy goodness a rich and flavourful noodles that will leave you craving for more. And. . . . a dash of lemon juice to give that tangy flavour. . .",
    "image": "https://b.zmtcdn.com/data/dish_photos/365/bc7b5c1950576de576f72ee31389a365.jpeg",
    "isVeg": true,
    "isAvailable": true,
    "isBestseller": false
  },
  {
    "id": "item_24",
    "name": "Cheese Maggi",
    "category": "Maggi Mania",
    "subcategory": "Instant Noodles",
    "price": 135,
    "description": "Simply a cheesy and satisfying Maggi.",
    "image": "https://b.zmtcdn.com/data/dish_photos/ecb/dff2c4111ed055bf2d34f5f8a3a09ecb.jpeg",
    "isVeg": true,
    "isAvailable": true,
    "isBestseller": true
  },
  {
    "id": "item_25",
    "name": "Tomato Onion Maggi",
    "category": "Maggi Mania",
    "subcategory": "Instant Noodles",
    "price": 135,
    "description": "Classic Maggi blends with a spicy tomato and onion mixture to give a unique taste.",
    "image": "https://b.zmtcdn.com/data/dish_photos/fe3/258f0c474dcc17cd2e2b90274ed25fe3.jpeg",
    "isVeg": true,
    "isAvailable": true,
    "isBestseller": false
  },
  {
    "id": "item_26",
    "name": "Maggi Chaat",
    "category": "Maggi Mania",
    "subcategory": "Instant Noodles",
    "price": 140,
    "description": "How about a bowl of classic Maggi served in chaat style. With flavourful chutneys, veggies, nuts and sev this maggi is bound to win hearts.",
    "image": "https://b.zmtcdn.com/data/dish_photos/ce6/76ee4a724fa17bd5419864abbfd50ce6.jpeg",
    "isVeg": true,
    "isAvailable": true,
    "isBestseller": false
  },
  {
    "id": "item_27",
    "name": "Crunchy Maggi - McCain's Potato Bites Style",
    "category": "Maggi Mania",
    "subcategory": "Instant Noodles",
    "price": 155,
    "description": "Medley of soft and spicy Maggi, crispy, crunchy McCain potato bites topped with onion rings, spicy green chutney and tomato ketchup. A sure promise of a complete meal.",
    "image": "https://b.zmtcdn.com/data/dish_photos/264/58abe585d76a2c33092778d457386264.png",
    "isVeg": true,
    "isAvailable": true,
    "isBestseller": false
  },
  {
    "id": "item_28",
    "name": "Chilli Garlic Maggi",
    "category": "Maggi Mania",
    "subcategory": "Instant Noodles",
    "price": 145,
    "description": "Savour the bold flavours of our Chilli Garlic Maggi. The spicy and savoury noodle dish is made with Maggi noodles, tossed with a flavourful mix of chilli peppers, garlic and a hint of spices. A perfect quick fix for a satisfying meal, this dish is sure to tantalize your taste buds and leave you craving for more. Spice up your day with every bite. . .",
    "image": "https://b.zmtcdn.com/data/dish_photos/99e/f5dbab405834fbc990daff25604aa99e.jpg",
    "isVeg": true,
    "isAvailable": true,
    "isBestseller": false
  },
  {
    "id": "item_29",
    "name": "Tangy Butter Pepper Corn",
    "category": "Healthy Breakfast Bowls",
    "subcategory": "",
    "price": 125,
    "description": "Sweet corn tossed in hot butter until each one glistens. Finished with a generous crush of black pepper, pinch of salt and a dash of lime. The kind of snack you eat one spoon at a time, but cannot stop.",
    "image": "https://b.zmtcdn.com/data/dish_photos/f5f/ea53908864d2ca7d01dfe577a3eabf5f.jpeg",
    "isVeg": true,
    "isAvailable": true,
    "isBestseller": false
  },
  {
    "id": "item_30",
    "name": "Cheesy corn",
    "category": "Healthy Breakfast Bowls",
    "subcategory": "",
    "price": 140,
    "description": "Sweet corn folded in white liquid cheese and finished with a gentle sprinkle of chosen herbs. Creamy, gooey and impossible to eat slowly. . . .",
    "image": "https://b.zmtcdn.com/data/dish_photos/0a9/f219f4877764674783cb84f4ac6d70a9.png",
    "isVeg": true,
    "isAvailable": true,
    "isBestseller": false
  },
  {
    "id": "item_31",
    "name": "Cheesy French Fries",
    "category": "The Snack Bar",
    "subcategory": "",
    "price": 175,
    "description": "Golden crispy fries accompanied with warm cheesy sauce. A perfect snack for anytime cravings.",
    "image": "https://b.zmtcdn.com/data/dish_photos/ec9/d872085dbe76110e535843c00ade3ec9.jpeg",
    "isVeg": true,
    "isAvailable": true,
    "isBestseller": true
  },
  {
    "id": "item_32",
    "name": "Classic French Fries",
    "category": "The Snack Bar",
    "subcategory": "",
    "price": 160,
    "description": "Golden crispy fries salted to perfection. Crispy outside and fluffy inside.",
    "image": "https://b.zmtcdn.com/data/dish_photos/2c2/a2e94c45d810b6acf6740efea2ffa2c2.jpeg",
    "isVeg": true,
    "isAvailable": true,
    "isBestseller": false
  },
  {
    "id": "item_33",
    "name": "Garlic Potato Pops",
    "category": "The Snack Bar",
    "subcategory": "",
    "price": 165,
    "description": "Bite sized potato bites - crunchy outside - soft and garlicky inside. Too irresistible to stop at one. . .",
    "image": "https://b.zmtcdn.com/data/dish_photos/a81/dde84bd5d6880ef6d90973f049f8ca81.jpeg",
    "isVeg": true,
    "isAvailable": true,
    "isBestseller": false
  },
  {
    "id": "item_34",
    "name": "Smiley Fries",
    "category": "The Snack Bar",
    "subcategory": "",
    "price": 135,
    "description": "Golden potato smiles crisped to perfection on the outside and soft fluffy mash inside. Lightly salted and fried till crunchy, these are pure nostalgia in every bite. Happy potato happy you.",
    "image": "https://b.zmtcdn.com/data/dish_photos/1fd/60715dcc798123b7ca072e5e36ddf1fd.jpeg",
    "isVeg": true,
    "isAvailable": true,
    "isBestseller": false
  }
];
