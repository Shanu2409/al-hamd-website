'use client';

import { motion } from 'framer-motion';
import { Phone, MapPin, Clock, MessageCircle, Mail, Star, ShoppingBag, Pen, BookOpen, Palette, Calculator, Scissors, PenTool, Package, Users, Award, Truck, Gift, Percent, Crown, Sparkles, Timer, Zap, Heart } from 'lucide-react';
import { useState, useEffect } from 'react';
import { 
  storeInfo, 
  storeFeatures, 
  productCategories, 
  limitedEditionProducts,
  promotionalOffers,
  earlyBirdGifts,
  testimonials, 
  heroContent 
} from '../data/storeData.js';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedLimitedProduct, setSelectedLimitedProduct] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleWhatsApp = (productName = '') => {
    const message = productName 
      ? `Hello! I'm interested in ${productName} from Al-Hamd Stationery.`
      : "Hello! I'm interested in your stationery products.";
    window.open(`https://wa.me/${storeInfo.whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleCall = () => {
    window.open(`tel:${storeInfo.phoneNumber}`, '_blank');
  };

  const handleEmail = () => {
    window.open(`mailto:${storeInfo.email}?subject=Inquiry about Stationery Products`, '_blank');
  };

  const handleDirections = () => {
    window.open(storeInfo.googleMapsUrl, '_blank');
  };  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">      {/* Header */}      <motion.header 
        className="bg-gradient-to-r from-amber-900 via-amber-800 to-orange-900 shadow-lg sticky top-0 z-50 border-b-2 border-amber-300"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-2 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 min-w-0 flex-1"
              whileHover={{ scale: 1.02 }}
            >              <div className="relative flex-shrink-0">
                <img 
                  src="/logo.jpg" 
                  alt="Al-Hamd Stationery Logo"
                  className="h-10 w-10 xs:h-12 xs:w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 object-contain rounded-lg shadow-md border-2 border-amber-200"
                />
              </div>
              <div className="min-w-0 flex-1">
                <h1 className="text-base xs:text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-amber-200 to-orange-200 bg-clip-text text-transparent truncate">
                  {storeInfo.name}
                </h1>
                <p className="text-amber-100 text-xs sm:text-sm hidden xs:block">{storeInfo.tagline}</p>
              </div>
            </motion.div>
              <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-4 flex-shrink-0">
              <motion.button
                onClick={() => handleWhatsApp()}
                className="bg-green-500 hover:bg-green-600 active:bg-green-700 text-white px-2 py-2 xs:px-3 xs:py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 rounded-full flex items-center space-x-1 sm:space-x-2 transition-all shadow-lg hover:shadow-xl text-xs xs:text-sm sm:text-base min-h-[40px] touch-manipulation"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle className="h-3 w-3 xs:h-4 xs:w-4 sm:h-4 sm:w-4 flex-shrink-0" />
                <span className="hidden xs:inline sm:hidden">Chat</span>
                <span className="hidden sm:inline">WhatsApp</span>
              </motion.button>
                <motion.button
                onClick={handleCall}
                className="bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-white px-2 py-2 xs:px-3 xs:py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 rounded-full flex items-center space-x-1 sm:space-x-2 transition-all shadow-lg hover:shadow-xl text-xs xs:text-sm sm:text-base min-h-[40px] touch-manipulation"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="h-3 w-3 xs:h-4 xs:w-4 sm:h-4 sm:w-4 flex-shrink-0" />
                <span className="hidden xs:inline sm:hidden">Call</span>
                <span className="hidden sm:inline">Call Now</span>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>      {/* Hero Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 px-3 sm:px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 1 }}
          >            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-amber-700 via-orange-600 to-amber-600 bg-clip-text text-transparent leading-tight px-2">
              {heroContent.title}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-8 max-w-3xl mx-auto px-2">
              {heroContent.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4 lg:space-x-6 mb-8 sm:mb-12 px-4">
              <motion.button
                onClick={() => handleWhatsApp()}
                className="w-full max-w-xs sm:w-auto bg-gradient-to-r from-green-500 to-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2 sm:space-x-3 min-h-[48px] touch-manipulation"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
                <span>{heroContent.primaryCTA}</span>
              </motion.button>
                <motion.button
                onClick={handleCall}
                className="w-full max-w-xs sm:w-auto bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2 sm:space-x-3 min-h-[48px] touch-manipulation"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
                <span>{heroContent.secondaryCTA}</span>
              </motion.button>
            </div>

            {/* Store Features */}
            <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-6xl mx-auto px-2">
              {storeFeatures.map((feature, index) => (                <motion.div 
                  key={index}
                  className="bg-white p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-amber-100"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.8 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <feature.icon className="h-6 w-6 sm:h-8 sm:w-8 text-amber-600 mx-auto mb-2 sm:mb-3" />
                  <h3 className="font-semibold mb-1 sm:mb-2 text-center text-gray-800 text-sm sm:text-base leading-tight">{feature.title}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm text-center leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>{/* Limited Edition Products */}
      <section className="py-12 sm:py-16 lg:py-20 px-3 sm:px-4 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center mb-3 sm:mb-4">
              <Crown className="h-6 w-6 sm:h-8 sm:w-8 text-amber-500 mr-2 sm:mr-3" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent text-center">
                Limited Edition Collection
              </h2>
              <Sparkles className="h-6 w-6 sm:h-8 sm:w-8 text-amber-500 ml-2 sm:ml-3" />
            </div>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-2">
              Exclusive premium products available for a limited time only. Get yours before they're gone!
            </p>
          </motion.div>          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {limitedEditionProducts.map((product, index) => (
              <motion.div
                key={product.id}
                className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all cursor-pointer border-2 border-amber-200 relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                onClick={() => setSelectedLimitedProduct(product)}
              >
                {/* Limited Edition Badge */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-semibold z-10">
                  {product.badge}
                </div>
                
                {/* Product Image Placeholder */}
                <div className="bg-gradient-to-br from-amber-100 to-orange-100 h-36 sm:h-48 rounded-lg mb-3 sm:mb-4 flex items-center justify-center relative">
                  <motion.div
                    animate={{ 
                      rotate: [0, 5, -5, 0],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="text-4xl sm:text-6xl"
                  >
                    ✨                </motion.div>
                  <div className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 bg-red-500 text-white px-1 py-0.5 sm:px-2 sm:py-1 rounded text-xs font-bold">
                    {product.stock}
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-800 leading-tight">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-3 sm:mb-4 leading-relaxed">{product.description}</p>
                
                {/* Price */}
                <div className="flex flex-wrap items-center gap-1 sm:gap-2 mb-3 sm:mb-4">
                  <span className="text-xl sm:text-2xl font-bold text-amber-600">{product.price}</span>
                  <span className="text-base sm:text-lg text-gray-500 line-through">{product.originalPrice}</span>
                  <span className="bg-red-100 text-red-600 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded text-xs font-semibold">
                    SAVE {Math.round(((parseInt(product.originalPrice.replace('₹', '')) - parseInt(product.price.replace('₹', ''))) / parseInt(product.originalPrice.replace('₹', ''))) * 100)}%
                  </span>
                </div>

                <motion.button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleWhatsApp(product.name);
                  }}
                  className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white py-3 sm:py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all text-sm sm:text-base min-h-[44px] touch-manipulation"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span>Order Now</span>
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
        {/* Promotional Offers */}
      {/* <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >            <div className="flex items-center justify-center mb-4">
              <Gift className="h-8 w-8 text-green-500 mr-3" />
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Special Offers & Benefits
              </h2>
              <Percent className="h-8 w-8 text-green-500 ml-3" />
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take advantage of our amazing discounts and special programs designed just for you!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {promotionalOffers.map((offer, index) => (
              <motion.div
                key={offer.id}
                className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="text-center mb-6">
                  <div className="bg-gradient-to-r from-green-500 to-blue-500 p-4 rounded-full w-fit mx-auto mb-4">
                    <offer.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{offer.title}</h3>
                  <p className="text-gray-600">{offer.description}</p>
                </div>

                {offer.offers && (
                  <div className="space-y-3 mb-6">
                    {offer.offers.map((deal, idx) => (
                      <div key={idx} className="bg-white p-3 rounded-lg border-l-4 border-green-500">
                        <div className="flex justify-between items-center">
                          <span className="font-semibold text-gray-600">{deal.quantity}</span>
                          <span className="bg-green-100 text-green-700 px-2 py-1 rounded font-bold">{deal.discount} OFF</span>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{deal.description}</p>
                      </div>
                    ))}
                  </div>
                )}

                {offer.benefits && (
                  <div className="space-y-2 mb-6">
                    {offer.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-gray-600 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                )}

                <motion.button
                  onClick={() => handleWhatsApp(`${offer.title} inquiry`)}
                  className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>Learn More</span>
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Early Bird Section */}
      {/* <section className="py-20 px-4 bg-gradient-to-r from-yellow-50 to-amber-50">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center mb-4">
              <Timer className="h-8 w-8 text-yellow-500 mr-3" />
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent">
                Early Bird Special
              </h2>
              <Zap className="h-8 w-8 text-yellow-500 ml-3" />
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Be among the first 50 customers each day and receive a surprise gift absolutely FREE!
            </p>              <div className="bg-white p-6 rounded-2xl shadow-lg max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-yellow-600">Today's Free Gifts Include:</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {earlyBirdGifts.map((gift, index) => (
                  <motion.div
                    key={index}
                    className="text-center p-4 bg-yellow-50 rounded-lg"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-200 to-amber-200 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-2xl">🎁</span>
                    </div>
                    <h4 className="font-semibold text-sm mb-1 text-gray-800">{gift.name}</h4>
                    <p className="text-xs text-gray-600 mb-1">{gift.description}</p>
                    <span className="text-xs font-bold text-yellow-600">Worth {gift.value}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>   */}          {/* Product Categories */}
      <section className="py-12 sm:py-16 lg:py-20 px-3 sm:px-4 bg-gradient-to-br from-white to-amber-50">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              Our Product Categories
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto px-2">
              Explore our comprehensive range of stationery products, carefully selected for quality and value.
            </p>
          </motion.div>          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {productCategories.map((category, index) => (<motion.div
                key={category.id}
                className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all cursor-pointer border border-amber-100 hover:border-amber-200"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                onClick={() => setSelectedCategory(category)}
              >
                <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-3 sm:p-4 rounded-full w-fit mx-auto mb-3 sm:mb-4">
                  <category.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-center mb-2 sm:mb-3 text-gray-800">{category.title}</h3>
                <p className="text-gray-600 text-center mb-4 sm:mb-6 text-sm sm:text-base">{category.description}</p>
                <div className="text-center">
                  <span className="text-amber-600 font-semibold text-sm sm:text-base">View Products →</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>      {/* Product Modal */}
      {selectedCategory && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-3 sm:p-4 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedCategory(null)}
        >
          <motion.div
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] sm:max-h-[85vh] overflow-y-auto"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 sm:p-6 lg:p-8">
              <div className="flex items-center justify-between mb-4 sm:mb-6">                <div className="flex items-center space-x-3 sm:space-x-4 min-w-0 flex-1">
                  <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-2 sm:p-3 rounded-full flex-shrink-0">
                    <selectedCategory.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800 truncate">{selectedCategory.title}</h3>
                    <p className="text-gray-600 text-sm sm:text-base">{selectedCategory.description}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="text-gray-400 hover:text-gray-600 text-xl sm:text-2xl flex-shrink-0 ml-2"
                >
                  ×
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6">
                {selectedCategory.products.map((product, index) => (
                  <motion.div
                    key={index}
                    className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 sm:p-6 rounded-xl hover:shadow-lg transition-shadow"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="bg-gradient-to-br from-amber-100 via-orange-100 to-amber-100 h-32 sm:h-40 rounded-lg mb-3 sm:mb-4 flex items-center justify-center relative overflow-hidden">
                      {product.image ? (
                                  <img
                                    src={product.image}
                                    alt={product.name}
                                    className="object-contain w-full h-full"
                                  />
                                  ) : (
                                  <div className="text-gray-400 text-xs sm:text-sm italic">No Image Available</div>
                                  )}
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/5 rounded-lg"></div>
                    </div>
                    <h4 className="font-semibold text-base sm:text-lg mb-2 text-gray-800">{product.name}</h4>
                    <p className="text-gray-600 text-xs sm:text-sm mb-2 sm:mb-3">{product.description}</p>
                    <p className="text-amber-600 font-bold text-base sm:text-lg mb-3 sm:mb-4">{product.price}</p>                    <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                      <motion.button
                        onClick={() => handleWhatsApp(product.name)}
                        className="flex-1 bg-green-500 hover:bg-green-600 text-white py-3 px-3 sm:px-4 rounded-lg flex items-center justify-center space-x-2 transition-colors text-sm sm:text-base min-h-[44px] touch-manipulation"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <MessageCircle className="h-3 w-3 sm:h-4 sm:w-4" />
                        <span>WhatsApp</span>
                      </motion.button>

                      <motion.button
                        onClick={handleCall}
                        className="flex-1 bg-amber-500 hover:bg-amber-600 text-white py-3 px-3 sm:px-4 rounded-lg flex items-center justify-center space-x-2 transition-colors text-sm sm:text-base min-h-[44px] touch-manipulation"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Phone className="h-3 w-3 sm:h-4 sm:w-4" />
                        <span>Call</span>
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}      {/* Testimonials */}
      <section className="py-12 sm:py-16 lg:py-20 px-3 sm:px-4 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              What Our Customers Say
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">Real experiences from our valued customers</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex mb-3 sm:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 sm:mb-6 italic text-sm sm:text-base">"{testimonial.content}"</p>
                <div>
                  <h4 className="font-semibold text-gray-800 text-sm sm:text-base">{testimonial.name}</h4>
                  <p className="text-gray-500 text-xs sm:text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>      {/* Contact Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-3 sm:px-4 bg-white">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              Get in Touch
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8">
              Ready to shop? Contact us through your preferred method
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
            <motion.div
              className="bg-gradient-to-br from-green-50 to-green-100 p-6 sm:p-8 rounded-2xl text-center"
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-green-500 p-3 sm:p-4 rounded-full w-fit mx-auto mb-3 sm:mb-4">
                <MessageCircle className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>              <h3 className="font-bold text-base sm:text-lg mb-2 text-gray-800">WhatsApp</h3>
              <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">Quick and easy ordering</p>              <motion.button
                onClick={() => handleWhatsApp()}
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-3 sm:px-6 sm:py-3 rounded-full transition-all text-sm sm:text-base min-h-[44px] touch-manipulation"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Message Us
              </motion.button>
            </motion.div>            <motion.div
              className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 sm:p-8 rounded-2xl text-center"
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-amber-500 p-3 sm:p-4 rounded-full w-fit mx-auto mb-3 sm:mb-4">
                <Phone className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>              <h3 className="font-bold text-base sm:text-lg mb-2 text-gray-800">Call Us</h3>
              <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">Speak directly with us</p>              <motion.button
                onClick={handleCall}
                className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-3 sm:px-6 sm:py-3 rounded-full transition-all text-sm sm:text-base min-h-[44px] touch-manipulation"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Call Now
              </motion.button>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 sm:p-8 rounded-2xl text-center"
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-purple-500 p-3 sm:p-4 rounded-full w-fit mx-auto mb-3 sm:mb-4">
                <MapPin className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>              <h3 className="font-bold text-base sm:text-lg mb-2 text-gray-800">Visit Store</h3>
              <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">See products in person</p>              <motion.button
                onClick={handleDirections}
                className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-3 sm:px-6 sm:py-3 rounded-full transition-all text-sm sm:text-base min-h-[44px] touch-manipulation"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Directions
              </motion.button>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 sm:p-8 rounded-2xl text-center"
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-orange-500 p-3 sm:p-4 rounded-full w-fit mx-auto mb-3 sm:mb-4">
                <Mail className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>              <h3 className="font-bold text-base sm:text-lg mb-2 text-gray-800">Email Us</h3>
              <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">For detailed inquiries</p>              <motion.button
                onClick={handleEmail}
                className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-3 sm:px-6 sm:py-3 rounded-full transition-all text-sm sm:text-base min-h-[44px] touch-manipulation"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Email
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>      {/* Footer */}      <footer className="bg-gray-900 text-white py-8 sm:py-12 px-3 sm:px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8"><div>
              <div className="flex items-center space-x-3 mb-3 sm:mb-4">
                <div className="bg-gradient-to-r from-amber-600 to-orange-600 p-2 rounded-full">
                  <PenTool className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold">{storeInfo.name}</h3>
              </div>
              <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">
                Your trusted partner for all stationery needs. Quality products, excellent service, and competitive prices.
              </p>
              <div className="flex space-x-3 sm:space-x-4">                <motion.button
                  onClick={() => handleWhatsApp()}
                  className="bg-green-500 hover:bg-green-600 p-2 rounded-full"
                  whileHover={{ scale: 1.1 }}
                >
                  <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
                </motion.button>
                <motion.button
                  onClick={handleCall}
                  className="bg-amber-500 hover:bg-amber-600 p-2 rounded-full"
                  whileHover={{ scale: 1.1 }}
                >
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                </motion.button>
              </div>
            </div>

            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Store Information</h4>
              <div className="space-y-2 text-gray-400 text-sm sm:text-base">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                  <span className="break-words">{storeInfo.address.street}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                  <span>{storeInfo.phoneNumber}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                  <span>{storeInfo.hours.weekdays}</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h4>
              <div className="space-y-2 text-gray-400 text-sm sm:text-base">
                <div>Our Products</div>
                <div>Limited Edition</div>
                <div>Special Offers</div>
                <div>Store Location</div>
                <div>Contact Us</div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-400 text-xs sm:text-sm">
            <p>&copy; 2025 {storeInfo.name}. All rights reserved. | Built with ❤️ for our valued customers</p>
          </div>
        </div>
      </footer>      {/* Floating WhatsApp Button */}      <motion.button
        onClick={() => handleWhatsApp()}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-green-500 hover:bg-green-600 text-white p-3 sm:p-4 rounded-full shadow-lg z-40 min-h-[56px] min-w-[56px] touch-manipulation"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 500 }}
      >
        <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
      </motion.button>      {/* Floating animations - Hide on mobile for better performance */}
      <motion.div
        animate={{ 
          y: [0, -10, 0],
          rotate: [0, 5, 0],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="fixed top-20 left-10 w-12 h-12 sm:w-16 sm:h-16 bg-amber-200 rounded-full opacity-20 pointer-events-none hidden sm:block"
      />
      <motion.div
        animate={{ 
          y: [0, 15, 0],
          rotate: [0, -8, 0],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="fixed top-40 right-20 w-16 h-16 sm:w-20 sm:h-20 bg-orange-200 rounded-full opacity-20 pointer-events-none hidden sm:block"
      />
      <motion.div
        animate={{ 
          y: [0, -12, 0],
          rotate: [0, 10, 0],
          opacity: [0.25, 0.4, 0.25]
        }}
        transition={{ 
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
        className="fixed bottom-40 left-20 w-10 h-10 sm:w-12 sm:h-12 bg-amber-300 rounded-full opacity-20 pointer-events-none hidden sm:block"
      />
    </div>
  );
}
