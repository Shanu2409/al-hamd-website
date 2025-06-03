// Al-Hamd Stationery Store Data
// This file contains all the store information, products, and content

import { 
  Phone, MapPin, Clock, MessageCircle, Mail, Star, ShoppingBag, 
  Pen, BookOpen, Palette, Calculator, Scissors, PenTool, Package, 
  Users, Award, Truck, Gift, Percent, Crown, Sparkles, Timer, Zap, Heart 
} from 'lucide-react';

// Store Contact Information
export const storeInfo = {
  name: "Al-Hamd Stationery",
  tagline: "Premium Office & School Supplies",
  whatsappNumber: "+923001234567",
  phoneNumber: "+923001234567", 
  email: "info@alhamdstationery.com",
  address: {
    street: "123 Main Street, City Center",
    landmark: "Near Central Mall",
    city: "Karachi",
    country: "Pakistan"
  },
  hours: {
    weekdays: "Mon-Sat: 9:00 AM - 8:00 PM",
    weekend: "Sunday: 10:00 AM - 6:00 PM"
  },
  googleMapsUrl: "https://maps.google.com/?q=123+Main+Street+City+Center"
};

// Store Features
export const storeFeatures = [
  {
    icon: Package,
    title: "Wide Selection",
    description: "Over 1000+ products from trusted brands"
  },
  {
    icon: Users,
    title: "Expert Staff", 
    description: "Knowledgeable team to help you choose"
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
        name: "Luxury Fountain Pens", 
        price: "₹500 - ₹2000", 
        description: "Smooth writing experience with premium ink flow",
        features: ["Premium nibs", "Refillable cartridges", "Gift packaging"]
      },
      { 
        name: "Gel Pens Set", 
        price: "₹150 - ₹400", 
        description: "Vibrant colors, quick-dry ink, comfortable grip",
        features: ["12 vibrant colors", "Quick-dry formula", "Ergonomic grip"]
      },
      { 
        name: "Mechanical Pencils", 
        price: "₹100 - ₹300", 
        description: "Precision writing with lead advance mechanism",
        features: ["0.5mm & 0.7mm", "Lead indicator", "Non-slip grip"]
      },
      { 
        name: "Highlighters Pack", 
        price: "₹200 - ₹500", 
        description: "Fade-resistant, chisel tip, multiple colors",
        features: ["Fluorescent colors", "Chisel tip", "Long-lasting"]
      }
    ]
  },
  {
    id: 2,
    title: "Notebooks & Diaries",
    icon: BookOpen,
    description: "Quality notebooks, diaries and journals",
    products: [
      { 
        name: "Executive Diaries", 
        price: "₹300 - ₹800", 
        description: "Professional planners with calendar and organizer sections",
        features: ["Monthly planner", "Address book", "Premium binding"]
      },
      { 
        name: "Spiral Notebooks", 
        price: "₹50 - ₹200", 
        description: "Durable wire binding, quality paper, various sizes",
        features: ["80-200 pages", "Ruled/unruled", "Perforated sheets"]
      },
      { 
        name: "Leather Journals", 
        price: "₹600 - ₹1500", 
        description: "Handcrafted leather cover with premium paper",
        features: ["Genuine leather", "Handmade paper", "Elastic closure"]
      },
      { 
        name: "Student Notebooks", 
        price: "₹30 - ₹100", 
        description: "Subject-wise ruled notebooks for school use",
        features: ["Subject labels", "Quality paper", "Durable covers"]
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
        price: "₹400 - ₹1200", 
        description: "Professional grade pigments with brushes included",
        features: ["24-48 colors", "Premium brushes", "Mixing palette"]
      },
      { 
        name: "Sketch Pads", 
        price: "₹150 - ₹500", 
        description: "High-quality drawing paper for all mediums",
        features: ["Acid-free paper", "Various textures", "Spiral bound"]
      },
      { 
        name: "Colored Pencils", 
        price: "₹200 - ₹800", 
        description: "Rich pigmentation, smooth application, break-resistant",
        features: ["24-72 colors", "Break-resistant", "Smooth blending"]
      },
      { 
        name: "Craft Materials", 
        price: "₹100 - ₹600", 
        description: "Complete craft kits for creative projects",
        features: ["All-in-one kits", "Instructions included", "Safe materials"]
      }
    ]
  },
  {
    id: 4,
    title: "Office Essentials",
    icon: Calculator,
    description: "Professional office and business supplies",
    products: [
      { 
        name: "File Folders", 
        price: "₹50 - ₹200", 
        description: "Organized storage solutions for documents",
        features: ["Multiple sizes", "Tab labels", "Durable material"]
      },
      { 
        name: "Calculators", 
        price: "₹300 - ₹1500", 
        description: "Scientific and basic calculators for all needs",
        features: ["Solar powered", "Scientific functions", "Large display"]
      },
      { 
        name: "Staplers & Clips", 
        price: "₹100 - ₹400", 
        description: "Heavy-duty staplers and organizing accessories",
        features: ["Heavy-duty", "Multiple sizes", "Jam-resistant"]
      },
      { 
        name: "Office Organizers", 
        price: "₹200 - ₹800", 
        description: "Desktop organizers for efficient workspace",
        features: ["Multiple compartments", "Durable plastic", "Stackable design"]
      }
    ]
  },
  {
    id: 5,
    title: "School Supplies",
    icon: ShoppingBag,
    description: "Complete range for students of all ages",
    products: [
      { 
        name: "School Bags", 
        price: "₹800 - ₹2500", 
        description: "Ergonomic designs with multiple compartments",
        features: ["Ergonomic design", "Water-resistant", "Multiple pockets"]
      },
      { 
        name: "Geometry Sets", 
        price: "₹150 - ₹400", 
        description: "Complete mathematical instruments for students",
        features: ["Compass & protractor", "Quality instruments", "Storage box"]
      },
      { 
        name: "Lunch Boxes", 
        price: "₹200 - ₹600", 
        description: "Insulated, leak-proof containers for food storage",
        features: ["Leak-proof seal", "Insulated design", "BPA-free"]
      },
      { 
        name: "Water Bottles", 
        price: "₹150 - ₹500", 
        description: "BPA-free, durable bottles for hydration",
        features: ["BPA-free plastic", "Easy-grip design", "Leak-proof cap"]
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
        name: "Paper Shredders", 
        price: "₹1500 - ₹5000", 
        description: "Cross-cut shredding for document security",
        features: ["Cross-cut shredding", "Auto-start/stop", "Overload protection"]
      },
      { 
        name: "Laminating Machines", 
        price: "₹2000 - ₹8000", 
        description: "Professional lamination for document protection",
        features: ["Hot & cold lamination", "Multiple sizes", "Temperature control"]
      },
      { 
        name: "Label Makers", 
        price: "₹1000 - ₹3000", 
        description: "Create custom labels for organization",
        features: ["Multiple fonts", "Various tape widths", "Easy printing"]
      },
      { 
        name: "Binding Machines", 
        price: "₹3000 - ₹10000", 
        description: "Professional document binding solutions",
        features: ["Comb & spiral binding", "Heavy-duty punch", "Professional finish"]
      }
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
    name: "Ahmed Hassan",
    role: "Business Owner",
    content: "Al-Hamd Stationery has been our go-to supplier for years. Quality products and excellent service!",
    rating: 5,
    image: "👨‍💼"
  },
  {
    name: "Fatima Ali", 
    role: "Teacher",
    content: "Best place for school supplies in the area. The staff is knowledgeable and helpful.",
    rating: 5,
    image: "👩‍🏫"
  },
  {
    name: "Mohammad Khan",
    role: "Student", 
    content: "Great variety of products at reasonable prices. My favorite stationery store!",
    rating: 5,
    image: "👨‍🎓"
  },
  {
    name: "Sarah Ahmed",
    role: "Artist",
    content: "Their art supplies are top-notch! Perfect for my professional artwork.",
    rating: 5,
    image: "👩‍🎨"
  },
  {
    name: "Ali Raza",
    role: "Office Manager",
    content: "Bulk orders are handled professionally with great discounts. Highly recommended!",
    rating: 5,
    image: "👨‍💻"
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
