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
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <motion.header 
        className="bg-white shadow-lg sticky top-0 z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
            >
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-full">
                <PenTool className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {storeInfo.name}
                </h1>
                <p className="text-gray-600 text-sm">{storeInfo.tagline}</p>
              </div>
            </motion.div>
            
            <div className="flex items-center space-x-4">
              <motion.button
                onClick={() => handleWhatsApp()}
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full flex items-center space-x-2 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp</span>
              </motion.button>
              
              <motion.button
                onClick={handleCall}
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full flex items-center space-x-2 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="h-4 w-4" />
                <span>Call Now</span>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              {heroContent.title}
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              {heroContent.subtitle}
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6 mb-12">
              <motion.button
                onClick={() => handleWhatsApp()}
                className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all flex items-center space-x-3"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle className="h-6 w-6" />
                <span>{heroContent.primaryCTA}</span>
              </motion.button>
              
              <motion.button
                onClick={handleCall}
                className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all flex items-center space-x-3"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="h-6 w-6" />
                <span>{heroContent.secondaryCTA}</span>
              </motion.button>
            </div>

            {/* Store Features */}
            <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {storeFeatures.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.8 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <feature.icon className="h-8 w-8 text-blue-500 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2 text-center text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600 text-sm text-center">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Limited Edition Products */}
      <section className="py-20 px-4 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center mb-4">
              <Crown className="h-8 w-8 text-amber-500 mr-3" />
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                Limited Edition Collection
              </h2>
              <Sparkles className="h-8 w-8 text-amber-500 ml-3" />
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Exclusive premium products available for a limited time only. Get yours before they're gone!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {limitedEditionProducts.map((product, index) => (
              <motion.div
                key={product.id}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all cursor-pointer border-2 border-amber-200 relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                onClick={() => setSelectedLimitedProduct(product)}
              >
                {/* Limited Edition Badge */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {product.badge}
                </div>
                
                {/* Product Image Placeholder */}
                <div className="bg-gradient-to-br from-amber-100 to-orange-100 h-48 rounded-lg mb-4 flex items-center justify-center relative">
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
                    className="text-6xl"
                  >
                    ✨
                  </motion.div>
                  <div className="absolute bottom-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
                    {product.stock}
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-2 text-gray-800">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                
                {/* Price */}
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-2xl font-bold text-amber-600">{product.price}</span>
                  <span className="text-lg text-gray-500 line-through">{product.originalPrice}</span>
                  <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-xs font-semibold">
                    SAVE {Math.round(((parseInt(product.originalPrice.replace('₹', '')) - parseInt(product.price.replace('₹', ''))) / parseInt(product.originalPrice.replace('₹', ''))) * 100)}%
                  </span>
                </div>

                <motion.button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleWhatsApp(product.name);
                  }}
                  className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>Order Now</span>
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>      {/* Promotional Offers */}
      <section className="py-20 px-4 bg-white">
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
      </section>

      {/* Early Bird Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-yellow-50 to-amber-50">
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
      </section>      {/* Product Categories */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Our Product Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive range of stationery products, carefully selected for quality and value.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((category, index) => (
              <motion.div
                key={category.id}
                className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all cursor-pointer border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                onClick={() => setSelectedCategory(category)}
              >
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-full w-fit mx-auto mb-4">
                  <category.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-center mb-3 text-gray-800">{category.title}</h3>
                <p className="text-gray-600 text-center mb-6">{category.description}</p>
                <div className="text-center">
                  <span className="text-blue-500 font-semibold">View Products →</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Modal */}
      {selectedCategory && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedCategory(null)}
        >
          <motion.div
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-full">
                    <selectedCategory.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{selectedCategory.title}</h3>
                    <p className="text-gray-600">{selectedCategory.description}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {selectedCategory.products.map((product, index) => (
                  <motion.div
                    key={index}
                    className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl hover:shadow-lg transition-shadow"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 h-40 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                      <motion.div
                        animate={{ 
                          rotate: [0, 10, -10, 0],
                          scale: [1, 1.1, 1]
                        }}
                        transition={{ 
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="text-5xl"
                      >
                        📝
                      </motion.div>
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/5 rounded-lg"></div>
                    </div>
                    <h4 className="font-semibold text-lg mb-2">{product.name}</h4>
                    <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                    <p className="text-blue-600 font-bold text-lg mb-4">{product.price}</p>
                    <div className="flex space-x-2">
                      <motion.button
                        onClick={() => handleWhatsApp(product.name)}
                        className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg flex items-center justify-center space-x-2 transition-colors"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <MessageCircle className="h-4 w-4" />
                        <span>WhatsApp</span>
                      </motion.button>
                      <motion.button
                        onClick={handleCall}
                        className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg flex items-center justify-center space-x-2 transition-colors"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Phone className="h-4 w-4" />
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
      <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">Real experiences from our valued customers</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>      {/* Contact Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Ready to shop? Contact us through your preferred method
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <motion.div
              className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl text-center"
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-green-500 p-4 rounded-full w-fit mx-auto mb-4">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>              <h3 className="font-bold text-lg mb-2 text-gray-800">WhatsApp</h3>
              <p className="text-gray-600 mb-4">Quick and easy ordering</p>
              <motion.button
                onClick={() => handleWhatsApp()}
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Message Us
              </motion.button>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl text-center"
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-blue-500 p-4 rounded-full w-fit mx-auto mb-4">
                <Phone className="h-8 w-8 text-white" />
              </div>              <h3 className="font-bold text-lg mb-2 text-gray-800">Call Us</h3>
              <p className="text-gray-600 mb-4">Speak directly with us</p>
              <motion.button
                onClick={handleCall}
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Call Now
              </motion.button>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl text-center"
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-purple-500 p-4 rounded-full w-fit mx-auto mb-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>              <h3 className="font-bold text-lg mb-2 text-gray-800">Visit Store</h3>
              <p className="text-gray-600 mb-4">See products in person</p>
              <motion.button
                onClick={handleDirections}
                className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-full transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Directions
              </motion.button>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl text-center"
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-orange-500 p-4 rounded-full w-fit mx-auto mb-4">
                <Mail className="h-8 w-8 text-white" />
              </div>              <h3 className="font-bold text-lg mb-2 text-gray-800">Email Us</h3>
              <p className="text-gray-600 mb-4">For detailed inquiries</p>
              <motion.button
                onClick={handleEmail}
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Email
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-full">
                  <PenTool className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">{storeInfo.name}</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Your trusted partner for all stationery needs. Quality products, excellent service, and competitive prices.
              </p>
              <div className="flex space-x-4">
                <motion.button
                  onClick={() => handleWhatsApp()}
                  className="bg-green-500 hover:bg-green-600 p-2 rounded-full"
                  whileHover={{ scale: 1.1 }}
                >
                  <MessageCircle className="h-5 w-5" />
                </motion.button>
                <motion.button
                  onClick={handleCall}
                  className="bg-blue-500 hover:bg-blue-600 p-2 rounded-full"
                  whileHover={{ scale: 1.1 }}
                >
                  <Phone className="h-5 w-5" />
                </motion.button>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Store Information</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>{storeInfo.address.street}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>{storeInfo.phoneNumber}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>{storeInfo.hours.weekdays}</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2 text-gray-400">
                <div>Our Products</div>
                <div>Limited Edition</div>
                <div>Special Offers</div>
                <div>Store Location</div>
                <div>Contact Us</div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 {storeInfo.name}. All rights reserved. | Built with ❤️ for our valued customers</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <motion.button
        onClick={() => handleWhatsApp()}
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-40"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 500 }}
      >
        <MessageCircle className="h-6 w-6" />
      </motion.button>

      {/* Floating animations */}
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
        className="fixed top-20 left-10 w-16 h-16 bg-yellow-200 rounded-full opacity-20 pointer-events-none"
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
        className="fixed top-40 right-20 w-20 h-20 bg-purple-200 rounded-full opacity-20 pointer-events-none"
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
        className="fixed bottom-40 left-20 w-12 h-12 bg-blue-200 rounded-full opacity-20 pointer-events-none"
      />
    </div>
  );
}
