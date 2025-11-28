import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, Shield, Award } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import img1 from '../img/116288599_166196378433506_3354145513607651861_n.jpg';
import img2 from '../img/116530637_166196278433516_2773272538651377273_n.jpg';
import img3 from '../img/IMG_1650.PNG';

export default function HeroCarousel() {
  const slides = [
    {
      image: img1,
      title: 'Manejo Integrado de Plagas',
      subtitle: '¡Protege lo que más amas! Soluciones certificadas para tu hogar, negocio o industria',
      badge: '20% OFF Primera Fumigación',
      cta: 'Cotización Gratis',
      icon: <Sparkles className="h-6 w-6" />
    },
    {
      image: img2,
      title: 'Certificados y Confiables',
      subtitle: '+10 años de experiencia • +500 clientes satisfechos • Certificaciones internacionales',
      badge: '100% Garantizado',
      cta: 'Conocer Más',
      icon: <Shield className="h-6 w-6" />
    },
    {
      image: img3,
      title: 'Resultados en 24-48 Horas',
      subtitle: 'Servicio rápido, efectivo y con seguimiento personalizado. ¡Tu tranquilidad es nuestra prioridad!',
      badge: 'Atención Inmediata',
      cta: 'Ver Servicios',
      icon: <Award className="h-6 w-6" />
    }
  ];

  return (
    <div className="relative h-[600px] md:h-[700px]">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletActiveClass: 'swiper-pagination-bullet-active bg-primary',
        }}
        loop={true}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full">
              {/* Background Image with Overlay */}
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="relative h-full flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-2xl"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="inline-flex items-center gap-2 bg-accent-500 backdrop-blur-sm text-white px-6 py-3 rounded-full mb-6 border-2 border-white/30 shadow-xl"
                    >
                      {slide.icon}
                      <span className="text-sm font-bold">{slide.badge}</span>
                    </motion.div>

                    <motion.h1
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                      className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
                    >
                      FUMIVER
                    </motion.h1>

                    <motion.h2
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                      className="text-3xl md:text-4xl font-semibold text-white mb-4"
                    >
                      {slide.title}
                    </motion.h2>

                    <motion.p
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.7 }}
                      className="text-xl md:text-2xl text-gray-200 mb-8"
                    >
                      {slide.subtitle}
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.9 }}
                      className="flex flex-col sm:flex-row gap-4"
                    >
                      <Link
                        to="/cotizacion-ia"
                        className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-secondary text-white font-bold py-4 px-8 rounded-lg hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
                      >
                        <Sparkles className="h-5 w-5" />
                        {slide.cta}
                      </Link>
                      <Link
                        to="/servicios"
                        className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white font-bold py-4 px-8 rounded-lg border-2 border-white/30 hover:bg-white hover:text-primary transition-all duration-300 hover:scale-105"
                      >
                        Ver Servicios
                      </Link>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Animated Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-white rounded-full"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
