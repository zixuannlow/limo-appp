"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MapPin } from 'lucide-react'

export default function ContactSection() {
  return (
    <div id="contact" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">Contact Us</h2>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="p-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Phone</h3>
                    <p className="text-lg font-medium text-gray-900 dark:text-white">+65 83829120</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Email</h3>
                    <p className="text-lg font-medium text-gray-900 dark:text-white">tssglobalsingapore@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Address</h3>
                    <p className="text-lg font-medium text-gray-900 dark:text-white">2 Kallang Ave 07-31, CT HUB</p>
                    <p className="text-gray-600 dark:text-gray-300">S339407</p>
                  </div>
                </div>
              </div> 
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}