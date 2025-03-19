"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Check } from 'lucide-react'
import Image from "next/image" 

// Sample limousine data
const limos = [
  {
    id: 1,
    name: "Toyota Alphard/Vellfire",
    description: "Popular for executive transport, family outings, and special events",
    image: "/images/limo2.jpg", 
    price: "$70/hour",
    capacity: "6 passengers with 2 luggage"
  },
  {
    id: 2,
    name: "Toyota Alphard/Vellfire",
    description: "Equipped with advanced features and a powerful engine for smooth ride",
    image: "/images/limo1.jpg", 
    price: "$70/hour",
    capacity: "6 passengers with 2 luggage"
  },
  {
    id: 3,
    name: "Toyota Alphard/Vellfire",
    description: "Spacious and luxurious transportation for larger groups",
    image: "/images/limo3.jpg", 
    price: "$70/hour",
    capacity: "6 passengers with 2 luggage"
  }
]

const services = ["Hotel Transfer", "Singapore Land Tour", "Airport Transfer", "Malaysia Tour/Transfer",
                  "Hourly Bookings", "Meet and Greet at Airport", "Wedding Events", "Places of Interest"]

export default function LimoCarousel() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  
  // Autoplay functionality
  useEffect(() => {
    if (!autoplay) return
    
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === limos.length - 1 ? 0 : prev + 1))
    }, 5000)
    
    return () => clearInterval(interval)
  }, [autoplay])
  
  // Navigation functions
  const next = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev === limos.length - 1 ? 0 : prev + 1))
  }
  
  const prev = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev === 0 ? limos.length - 1 : prev - 1))
  }

  return (
    <div className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Our Premium Fleet
        </motion.h2>
        
        <div className="relative">
          {/* Carousel container */}
          <div className="overflow-hidden relative rounded-lg shadow-xl">
            <div className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                 
                  <Image 
                    src={limos[current].image || "/placeholder.svg"} 
                    alt={limos[current].name}
                    fill
                    className="object-cover"
                  />
                  
                  {/* Overlay with info */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 md:p-8">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{limos[current].name}</h3>
                    <p className="text-white/80 mb-4 max-w-2xl">{limos[current].description}</p>
                    
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <div className="text-sm text-white/70 mb-1">Capacity</div>
                        <div className="text-white font-semibold">{limos[current].capacity}</div>
                      </div>
                      <div>
                        <div className="text-sm text-white/70 mb-1">Starting at</div>
                        <div className="text-white text-xl font-bold">{limos[current].price}</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Features list below image */}
            <div className="bg-white dark:bg-gray-900 p-6">
              <h4 className="font-medium text-gray-900 dark:text-white mb-4">Key Services</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center">
                    <Check className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
                    <span className="text-gray-700 dark:text-gray-300 text-sm">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Navigation buttons */}
          <button 
            onClick={prev}
            className="absolute top-1/3 left-4 z-10 bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm p-2 rounded-full hover:bg-white/50 dark:hover:bg-gray-800/50 transition-colors duration-300"
            aria-label="Previous limousine"
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </button>
          <button 
            onClick={next}
            className="absolute top-1/3 right-4 z-10 bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm p-2 rounded-full hover:bg-white/50 dark:hover:bg-gray-800/50 transition-colors duration-300"
            aria-label="Next limousine"
          >
            <ChevronRight className="h-6 w-6 text-white" />
          </button>
          
          {/* Indicators */}
          <div className="flex justify-center mt-4">
            {limos.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setAutoplay(false)
                  setCurrent(index)
                }}
                className={`h-2 w-2 mx-1 rounded-full transition-all duration-300 ${
                  current === index 
                    ? "bg-blue-600 w-8" 
                    : "bg-gray-300 dark:bg-gray-600"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}