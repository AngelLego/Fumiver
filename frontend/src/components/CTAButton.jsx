import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';
import favicon from '../img/favicon.png';

export default function CTAButton({ to = "/cotizacion-ia", text = "Cotización Gratis", className = "" }) {
  return (
    <Link to={to}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`relative inline-flex items-center gap-3 bg-gradient-to-r from-primary-500 via-primary-600 to-secondary-500 text-white font-bold px-8 py-4 rounded-2xl shadow-2xl overflow-hidden group cursor-pointer ${className}`}
      >
        {/* Animated background */}
        <motion.div
          animate={{
            x: ['-100%', '100%'],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        />

        {/* Catarina animada */}
        <motion.div
          animate={{
            rotate: [0, 10, -10, 0],
            y: [0, -5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="relative z-10"
        >
          <img
            src={favicon}
            alt="FUMIVER"
            className="w-8 h-8 drop-shadow-lg"
          />
          
          {/* Glow effect */}
          <motion.div
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="absolute inset-0 bg-white/30 rounded-full blur-md"
          />
        </motion.div>

        {/* Text */}
        <span className="relative z-10 text-lg">{text}</span>

        {/* Sparkle icon */}
        <motion.div
          animate={{
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="relative z-10"
        >
          <Sparkles className="h-5 w-5" />
        </motion.div>

        {/* Pulse effect */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="absolute inset-0 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-2xl blur-xl opacity-50"
        />

        {/* Shine effect on hover */}
        <motion.div
          initial={{ x: '-100%', opacity: 0 }}
          whileHover={{ x: '100%', opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
        />
      </motion.div>
    </Link>
  );
}
