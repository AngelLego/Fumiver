import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const phoneNumber = '2721037226'; // Número de FUMIVER
  const message = encodeURIComponent('¡Hola! Me gustaría obtener más información sobre sus servicios de fumigación.');
  const whatsappUrl = `https://wa.me/52${phoneNumber}?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-gradient-to-br from-green-400 to-green-600 text-white p-5 rounded-full shadow-2xl hover:shadow-green-500/50 transition-all duration-300 group"
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ 
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 2 
      }}
      whileHover={{ scale: 1.15, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
    >
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 10, -10, 0]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse" 
        }}
      >
        <MessageCircle className="h-8 w-8" />
      </motion.div>
      
      {/* Tooltip */}
      <motion.div
        initial={{ opacity: 0, x: 10 }}
        whileHover={{ opacity: 1, x: 0 }}
        className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-5 py-3 rounded-xl whitespace-nowrap shadow-xl"
      >
        <span className="text-sm font-bold">💬 ¡Chatea con nosotros!</span>
        <p className="text-xs text-gray-300 mt-1">Respuesta inmediata</p>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full border-8 border-transparent border-l-gray-900"></div>
      </motion.div>

      {/* Pulse effect */}
      <motion.span
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.7, 0, 0.7]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute inset-0 rounded-full bg-green-400"
      />
      
      {/* Notification badge */}
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
        className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center border-2 border-white"
      >
        1
      </motion.div>
    </motion.a>
  );
}
