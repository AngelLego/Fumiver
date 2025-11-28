import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import favicon from '../img/favicon.png';

export default function FumIA() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  // Ocultar tooltip después de 5 segundos
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* FumIA Button */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ 
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 2.5 
        }}
        className="fixed bottom-32 right-6 z-50"
      >
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          className="relative bg-gradient-to-br from-primary-400 via-primary-500 to-primary-600 text-white p-5 rounded-full shadow-2xl hover:shadow-primary-500/50 transition-all duration-300 group"
        >
          {/* Catarina animada */}
          <motion.div
            animate={{
              rotate: [0, -10, 10, 0],
              y: [0, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <img
              src={favicon}
              alt="FumIA"
              className="w-10 h-10 drop-shadow-lg"
            />
          </motion.div>

          {/* Glow effect */}
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="absolute inset-0 bg-primary-400 rounded-full blur-xl opacity-50"
          />

          {/* Sparkles */}
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="absolute -top-1 -right-1 text-accent-400"
          >
            <Sparkles className="h-5 w-5" />
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
            className="absolute inset-0 rounded-full bg-primary-400"
          />
        </motion.button>

        {/* Tooltip inicial */}
        <AnimatePresence>
          {showTooltip && !isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 10, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 10, scale: 0.8 }}
              className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-2xl p-4 w-64 border-2 border-primary-200"
            >
              <button
                onClick={() => setShowTooltip(false)}
                className="absolute -top-2 -right-2 bg-gray-200 hover:bg-gray-300 rounded-full p-1 transition-colors"
              >
                <X className="h-4 w-4 text-gray-600" />
              </button>
              <div className="flex items-start gap-3">
                <img src={favicon} alt="FumIA" className="w-12 h-12 flex-shrink-0" />
                <div>
                  <p className="font-bold text-primary-700 mb-1">¡Hola! Soy FumIA 🐞</p>
                  <p className="text-sm text-gray-600">
                    Tu asistente inteligente. ¿Necesitas una cotización?
                  </p>
                </div>
              </div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full border-8 border-transparent border-l-white"></div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* FumIA Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-32 right-6 z-50 w-96 max-w-[calc(100vw-3rem)]"
          >
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-primary-200">
              {/* Header */}
              <div className="bg-gradient-to-r from-primary-500 to-primary-600 p-6 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <motion.div
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="h-full w-full bg-gradient-to-r from-transparent via-white to-transparent"
                  />
                </div>
                <div className="relative flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <img src={favicon} alt="FumIA" className="w-12 h-12" />
                    </motion.div>
                    <div>
                      <h3 className="font-bold text-xl">FumIA</h3>
                      <p className="text-sm text-white/80 flex items-center gap-1">
                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                        Asistente IA en línea
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 bg-gradient-to-br from-gray-50 to-white">
                <div className="space-y-4">
                  {/* FumIA Message */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex gap-3"
                  >
                    <img src={favicon} alt="FumIA" className="w-8 h-8 flex-shrink-0" />
                    <div className="bg-white rounded-2xl rounded-tl-sm p-4 shadow-md flex-1">
                      <p className="text-gray-800 mb-3">
                        ¡Hola! Soy <strong className="text-primary-600">FumIA</strong>, tu asistente inteligente de FUMIVER 🐞
                      </p>
                      <p className="text-gray-700 text-sm mb-4">
                        Puedo ayudarte a obtener una cotización personalizada en minutos. ¿Qué necesitas?
                      </p>
                      <div className="space-y-2">
                        <Link
                          to="/cotizacion-ia"
                          onClick={() => setIsOpen(false)}
                          className="block w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white text-center py-3 px-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                        >
                          💬 Iniciar Cotización con IA
                        </Link>
                        <Link
                          to="/servicios"
                          onClick={() => setIsOpen(false)}
                          className="block w-full bg-gray-100 text-gray-700 text-center py-3 px-4 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
                        >
                          📋 Ver Servicios
                        </Link>
                        <a
                          href="tel:2721037226"
                          className="block w-full bg-gray-100 text-gray-700 text-center py-3 px-4 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
                        >
                          📞 Llamar: 272 103 72 26
                        </a>
                      </div>
                    </div>
                  </motion.div>

                  {/* Features */}
                  <div className="grid grid-cols-3 gap-2 pt-4 border-t">
                    <FeatureItem icon="⚡" text="Rápido" />
                    <FeatureItem icon="🎯" text="Preciso" />
                    <FeatureItem icon="💯" text="Gratis" />
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="bg-gray-50 px-6 py-3 text-center border-t">
                <p className="text-xs text-gray-500">
                  Powered by Legosoft • Disponible 24/7
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function FeatureItem({ icon, text }) {
  return (
    <div className="text-center">
      <div className="text-2xl mb-1">{icon}</div>
      <p className="text-xs text-gray-600 font-medium">{text}</p>
    </div>
  );
}
