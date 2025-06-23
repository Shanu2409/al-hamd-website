// Al-Hamd Stationery Store Data
// This file contains all the store information, products, and content

import { 
  Phone, MapPin, Clock, MessageCircle, Mail, Star, ShoppingBag, 
  Pen, BookOpen, Palette, Calculator, Scissors, PenTool, Package, 
  Users, Award, Truck, Gift, Percent, Crown, Sparkles, Timer, Zap, Heart, 
  School, Facebook, Instagram
} from 'lucide-react';

// Store Contact Information
export const storeInfo = {
  name: "AL-HAMD STATIONERY",
  tagline: "PACKAGING | GIFT ITEMS | TOYS & MORE",
  whatsappNumber: "+91 8657282811",
  phoneNumber: "+91 8657282811", 
  email: "alhamdstationery1990@gmail.com",
  address: {
    street: "Shop no.66, Grace Square C2, opposite Stadium, Mumbra, Thane - 400612",
  },
  hours: {
    weekdays: "Mon-Sun: 6:30 AM - 10:30 PM",
  },
  googleMapsUrl: "https://maps.app.goo.gl/r5iprZheVypSa1d7A",
  socialMedia: {
    facebook: "https://www.facebook.com/share/1Ehe3fT2iF/",
    instagram: "https://www.instagram.com/alhamd_stationery_1990?igsh=OGJqbWxqczllb2l0",
    facebookHandle: "@Al-Hamd-Stationery",
    instagramHandle: "@alhamd_stationery_1990"
  }
};

// Store Features
export const storeFeatures = [
  {
    icon: Package,
    title: "Wide Selection",
    description: "Over 1000+ products from trusted brands"
  },
  {
    icon: Award,
    title: "Quality Assured",
    description: "Only premium quality products"
  },
  {
    icon: Truck,
    title: "Fast Service",
    description: "Quick processing of all orders"
  },
  {
    title: "Reasonable Prices",
    icon: Percent,
    description: "Competitive pricing on all products"
  }
];

// Product Categories
export const productCategories = [
  {
    id: 1,
    title: "Writing Instruments",
    icon: Pen,
    description: "Premium pens, pencils, markers and more",
    products: [
      { 
        name: "Montex Winner Jumbo Gel Pen", 
        price: "₹10/piece", 
        description: "Smooth writing experience with premium ink flow",
        features: ["Premium nibs", "Refillable cartridges", "Gift packaging"],
        image: "/pens/1.png"
      },
      { 
        name: "Hauser XO 0.7mm Gell & Ball Pen", 
        price: "₹10/piece", 
        description: "Vibrant colors, quick-dry ink, comfortable grip",
        features: ["3 vibrant colors", "Quick-dry formula", "Ergonomic grip"],
        image: "/pens/2.png"
      },
      { 
        name: "Glitter Gel Pens", 
        price: "₹20/piece", 
        description: "Add sparkle to your notes with glitter gel pens",
        features: ["Assorted colors", "Glitter finish", "Smooth application"],
        image: "/pens/3.png"
      },
      { 
        name: "Highlighters Pack", 
        price: "₹20/piece",
        image: "/pens/4.png", 
        description: "Fade-resistant, chisel tip, multiple colors",
        features: ["Fluorescent colors", "Chisel tip", "Long-lasting"]
      },
      {
        name: "Permanent, Whiteboard, Acrylic Markers",
        price: "₹20/piece",
        description: "Versatile markers for all surfaces",
        features: ["Permanent ink", "Chisel tip", "Quick-drying"],
        image: "/pens/5.png"
      },
      {
        name: "Erasable Ball Pens",
        price: "₹20/piece",
        description: "Smooth writing with erasable ink",
        features: ["Erasable ink", "Comfort grip", "Vibrant colors"],
        image: "/pens/6.jpg"
      }
    ]
  },
  {
    id: 2,
    title: "School Supplies",
    icon: School,
    description: "Complete range of school essentials for students",
    products: [
      { 
        name: "Pouches & Pencil Cases",
        price: "₹30 - ₹250", 
        description: "Stylish and functional storage for stationery",
        features: ["Multiple compartments", "Durable material", "Variety of designs"],
        image: "/schools/1.jpg"
      },
      { 
        name: "Geometry Boxes",
        price: "₹75 - ₹250", 
        description: "Durable wire binding, quality paper, various sizes",
        features: ["Complete geometry set", "Durable case", "Compact design"],
        image: "/schools/2.png"
      },
      { 
        name: "Tiffin Boxes",
        price: "₹150 - ₹450", 
        description: "Insulated, leak-proof containers for food storage",
        features: ["Genuine leather", "Handmade paper", "Elastic closure"],
        image: "/schools/3.jpg"
      },
      { 
        name: "Water Bottles",
        price: "₹100 - ₹275",
        description: "BPA-free, durable bottles for hydration",
        features: ["BPA-free plastic", "Easy-grip design", "Leak-proof cap"],
        image: "/schools/4.png"
      },
      {
        name: "Book Covers",
        price: "₹70 - ₹100",
        description: "Protective covers for books and notebooks",
        features: ["Water-resistant", "Durable material", "Variety of designs"],
        image: "/schools/5.png"
      }
    ]
  },
  {
    id: 3,
    title: "Art & Craft Supplies",
    icon: Palette,
    description: "Creative supplies for artists and students",
    products: [
      { 
        name: "Watercolor Sets", 
        price: "₹30 - ₹300", 
        description: "Professional grade pigments with brushes included",
        features: ["24-48 colors", "Premium brushes", "Mixing palette"],
        image: "/arts/1.png"
      },
      { 
        name: "Craft Papers", 
        price: "₹5 - ₹100",
        description: "High-quality colored and textured papers for crafts", 
        features: ["Assorted colors", "Textured finishes", "Acid-free"],
        image: "/arts/2.png"
      },
      { 
        name: "Colored Pencils", 
        price: "₹90 - ₹250", 
        description: "Rich pigmentation, smooth application, break-resistant",
        features: ["24-72 colors", "Break-resistant", "Smooth blending"],
        image: "/arts/3.jpg"
      },
      { 
        name: "Craft Materials", 
        price: "₹5 - ₹100", 
        description: "All types of craft materials for DIY projects",
        features: ["Assorted materials", "Eco-friendly options", "Variety of textures"],
        image: "/arts/4.png"
      },
      { 
        name: "Clay & Modeling Tools",
        price: "₹10 - ₹250", 
        description: "All types of clay and modeling tools for creative projects",
        features: ["Assorted tools", "Eco-friendly options", "Variety of textures"],
        image: "/arts/5.png"
      },
      { 
        name: "Different Types of Tapes & Adhesives",
        price: "₹5 - ₹100",
        description: "High-quality tapes and adhesives for all projects",
        features: ["Strong adhesion", "Variety of sizes", "Easy to use"],
        image: "/arts/6.png"
      }

    ]
  },
  {
    id: 4,
    title: "Books & Paper Products",
    icon: BookOpen,
    description: "Notebooks, diaries, and necessary supplies for all needs",
    products: [
      { 
        name: "File Folders", 
        price: "₹30 - ₹350", 
        description: "Organized storage solutions for documents",
        features: ["Multiple sizes", "Tab labels", "Durable material"],
        image: "/books/1.png"
      },
      { 
        name: "Calculators", 
        price: "₹150 - ₹250", 
        description: "Scientific and basic calculators for all needs",
        features: ["Solar powered", "Scientific functions", "Large display"],
        image: "/books/2.png"
      },
      { 
        name: "Staplers & Clips", 
        price: "₹70 - ₹150", 
        description: "Heavy-duty staplers and organizing accessories",
        features: ["Heavy-duty", "Multiple sizes", "Jam-resistant"],
        image: "/books/3.png"
      },
      { 
        name: "Books & diaries",
        price: "₹20 - ₹250", 
        description: "Variety of notebooks, diaries, and planners",
        features: ["Multiple sizes", "Variety of designs", "Quality paper"],
        image: "/books/4.png"
      }
    ]
  },
  {
    id: 5,
    title: "Zerox & Printing Services",
    icon: PenTool,
    description: "Professional printing and copying services for all needs",
    products: [
      { 
        name: "Zerox & Copying", 
        price: "₹2 / page", 
        description: "High-quality copying services for documents",
        features: ["Black & white", "Color copies", "Fast service"],
        image: "/zerox/1.png"
      },
      { 
        name: "B/W Printing Services", 
        price: "₹5 / page", 
        description: "Professional printing for all types of documents",
        features: ["High-quality prints", "Multiple formats", "Fast turnaround"],
        image: "/zerox/2.png"
      },
      { 
        name: "Color Printing Services", 
        price: "₹10 / page", 
        description: "Professional printing for all types of documents",
        features: ["High-quality color prints", "Multiple formats", "Fast turnaround"],
        image: "/zerox/3.png"
      },
      { 
        name: "Lamination Services",
        price: "₹20 - ₹50", 
        description: "Protective lamination for documents and photos",
        features: ["Glossy or matte finish", "Durable protection", "Custom sizes"],
        image: "/zerox/4.png"
      },
      { 
        name: "Government Documents & Certificates",
        price: "₹20 - ₹50", 
        description: "Professional lamination for government documents and certificates",
        features: ["High-quality lamination", "Custom sizes", "Fast service"],
        image: "/zerox/5.png"
      }
    ]
  },
  {
    id: 6,
    title: "Specialty Items",
    icon: Scissors,
    description: "Unique and specialized stationery products",
    products: [
      { 
        name: "Magic Pens", 
        price: "₹30 / piece", 
        description: "Magical pens that change color with heat",
        features: ["Color-changing ink", "Ergonomic design", "Refillable cartridges"],
        image: "/specialty/1.png"
      },
      { 
        name: "Keychains", 
        price: "₹10 - ₹150", 
        description: "Stylish keychains for personal or corporate use",
        features: [ "Durable material", "Variety of styles"],
        image: "/specialty/2.png"
      },
      { 
        name: "Stress & Moon Balls",
        price: "₹20 / piece", 
        description: "Stress relief balls for relaxation and focus",
        features: ["Variety of shapes", "Durable material", "Customizable designs"],
        image: "/specialty/3.png"
      },
      { 
        name: "Fancy Pens", 
        price: "₹20 - ₹50", 
        description: "Stylish pens with unique designs for gifting",
        features: ["Comb & spiral binding", "Heavy-duty punch", "Professional finish"],
        image: "/specialty/4.png"
      },
      { 
        name: "Unbreakable Scale Rulers", 
        price: "₹20 - ₹100", 
        description: "Durable and flexible rulers for precise measurements",
        features: ["Unbreakable material", "Flexible design", "Clear markings"],
        image: "/specialty/5.jpg"
      },
      
    ]
  }
];

// Limited Edition Products
export const limitedEditionProducts = [
  {
    id: 1,
    name: "Golden Anniversary Pen Set",
    price: "₹2500",
    originalPrice: "₹3500",
    description: "Commemorative gold-plated pen set with custom engraving",
    features: ["24k Gold plating", "Custom engraving", "Limited to 100 pieces", "Certificate of authenticity"],
    stock: "Only 25 left",
    badge: "Limited Edition",
    image: "/api/placeholder/300/300",
    category: "Premium Writing"
  },
  {
    id: 2,
    name: "Artist's Master Collection",
    price: "₹1800",
    originalPrice: "₹2800",
    description: "Professional art supply kit curated by master artists",
    features: ["Professional grade materials", "Artist-curated selection", "Exclusive color palette", "Tutorial booklet"],
    stock: "15 pieces remaining",
    badge: "Artist Edition",
    image: "/api/placeholder/300/300",
    category: "Art Supplies"
  },
  {
    id: 3,
    name: "Executive Platinum Diary 2025",
    price: "₹1200",
    originalPrice: "₹1800",
    description: "Luxury leather diary with platinum accents for 2025",
    features: ["Genuine leather", "Platinum corners", "Premium paper", "Magnetic closure"],
    stock: "Only 30 available",
    badge: "Executive Series",
    image: "/api/placeholder/300/300",
    category: "Organizers"
  }
];

// Promotional Offers
export const promotionalOffers = [
  {
    id: 1,
    title: "Bulk Order Discounts",
    icon: Percent,
    badge: "SAVE MORE",
    description: "Save more when you buy more!",
    offers: [
      { quantity: "₹2000 - ₹4999", discount: "5%", description: "Get 5% off on orders above ₹2000" },
      { quantity: "₹5000 - ₹9999", discount: "10%", description: "Get 10% off on orders above ₹5000" },
      { quantity: "₹10000 - ₹19999", discount: "15%", description: "Get 15% off on orders above ₹10000" },
      { quantity: "₹20000+", discount: "20%", description: "Get 20% off on orders above ₹20000" }
    ],
    terms: "Valid on all products. Cannot be combined with other offers.",
    validUntil: "December 31, 2025"
  },
  {
    id: 2,
    title: "Early Bird Special",
    icon: Timer,
    badge: "DAILY GIFTS",
    description: "First 50 customers each day get a surprise gift!",
    benefits: [
      "Free premium pen with any purchase",
      "Complimentary gift wrapping",
      "Priority customer service",
      "Exclusive discount coupons"
    ],
    timeframe: "First 50 customers daily",
    validFrom: "Monday to Saturday"
  },
  {
    id: 3,
    title: "Student Discount Program",
    icon: Award,
    badge: "STUDENTS",
    description: "Special prices for students and educational institutions",
    benefits: [
      "10% discount with valid student ID",
      "Bulk order discounts for schools",
      "Free delivery for educational institutions",
      "Extended payment terms for schools"
    ],
    eligibility: "Valid student ID or institutional letter required",
    validUntil: "Ongoing program"
  }
];

// Customer Testimonials
export const testimonials = [
  {
    name: "Kasiba B4", 
    role: "Teacher",
    content: "Best place for school supplies in the area. Budget friendly and great quality!",
    rating: 5,
    image: "👩‍🏫"
  },
  {
    name: "Shanukumar Singh",
    role: "Working Professional",
    content: "Al-Hamd Stationery has been our go-to supplier for all types of stationery. Quality products and excellent service!",
    rating: 5,
    image: "👨‍💼"
  },
  {
    name: "Mohammad Khan",
    role: "Student", 
    content: "Great variety of products at reasonable prices. My favorite stationery store!",
    rating: 5,
    image: "👨‍🎓"
  },
  {
    name: "Zainab Khan",
    role: "Parent",
    content: "One-stop shop for all school supplies. Kids love their colorful products!",
    rating: 5,
    image: "👩‍👧‍👦"
  }
];

// Hero Section Content
export const heroContent = {
  title: "Your Trusted Stationery Partner",
  subtitle: "Discover our extensive collection of premium stationery products. From office essentials to creative supplies, we have everything you need for work, school, and creativity.",
  primaryCTA: "Order via WhatsApp",
  secondaryCTA: "Call to Inquire",
  highlights: [
    "Over 1000+ Premium Products",
    "Expert Staff Assistance", 
    "Quality Guarantee",
    "Fast Service"
  ]
};

// Early Bird Gifts
export const earlyBirdGifts = [
  {
    name: "Premium Gel Pen",
    description: "High-quality gel pen with smooth ink flow",
    value: "₹150",
    image: "/api/placeholder/100/100"
  },
  {
    name: "Stylish Notepad",
    description: "Compact notepad with designer cover",
    value: "₹100",
    image: "/api/placeholder/100/100"
  },
  {
    name: "Bookmark Set",
    description: "Beautiful bookmark collection",
    value: "₹80",
    image: "/api/placeholder/100/100"
  },
  {
    name: "Discount Coupon",
    description: "5% off on next purchase",
    value: "₹Variable",
    image: "/api/placeholder/100/100"
  }
];

// Footer Links
export const footerLinks = {
  quickLinks: [
    "About Us",
    "Our Products", 
    "Store Location",
    "Contact Us",
    "Privacy Policy"
  ],
  categories: [
    "Writing Instruments",
    "Notebooks & Diaries",
    "Art Supplies", 
    "Office Tools",
    "School Supplies"
  ],
  services: [
    "Bulk Orders",
    "Custom Printing",
    "Gift Wrapping",
    "Home Delivery",
    "Corporate Supply"
  ]
};

// FAQ Data
export const faqData = [
  {
    question: "Do you offer bulk order discounts?",
    answer: "Yes! We offer attractive discounts on bulk orders starting from 10% off on orders above ₹5,000."
  },
  {
    question: "What are your store hours?",
    answer: "We're open Monday to Saturday from 9:00 AM to 8:00 PM, and Sunday from 10:00 AM to 6:00 PM."
  },
  {
    question: "Do you provide home delivery?",
    answer: "Currently, we focus on in-store shopping and pickup. Please contact us via WhatsApp or phone to discuss your needs."
  },
  {
    question: "What brands do you carry?",
    answer: "We stock premium brands and quality products. Visit our store or contact us to learn about specific brands for your needs."
  },
  {
    question: "Do you offer gift wrapping?",
    answer: "Yes, we provide complimentary gift wrapping for purchases above ₹500. Perfect for corporate gifts and special occasions."
  }
];
