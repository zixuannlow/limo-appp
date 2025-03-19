"use client"

import { useState, useEffect } from "react"   

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false) 
  
  // Track scroll position for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  
  // Smooth scroll function
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0"> 
          </div>
          
          {/* Navigation */}
          <nav className="flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection("fleet")}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Our Fleet
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Contact Us
            </button> 
          </nav>
        </div>
      </div>
    </header>
  )
}