import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Award, Clock, CheckCircle, Bug, Sparkles, Phone, Star, Users, TrendingUp, Zap, Heart } from 'lucide-react';
import HeroCarousel from '../components/HeroCarousel';
import ServicesCarousel from '../components/ServicesCarousel';
import CertificationsSlider from '../components/CertificationsSlider';
import CTAButton from '../components/CTAButton';

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section with Carousel */}
      <HeroCarousel />

      {/* Trust Bar */}
      <section className="py-6 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <TrustItem icon={<Users />} number="500+" text="Clientes Satisfechos" />
            <TrustItem icon={<Award />} number="10+" text="Años de Experiencia" />
            <TrustItem icon={<Star />} number="4.9/5" text="Calificación" />
            <TrustItem icon={<CheckCircle />} number="100%" text="Garantía" />
          </div>
        </div>
      </section>

      {/* Urgency Banner */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="py-4 bg-accent-500 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-lg font-bold flex items-center justify-center gap-2"
          >
            <Zap className="h-5 w-5" />
            ¡OFERTA ESPECIAL! 20% de descuento en tu primera fumigación
            <Zap className="h-5 w-5" />
          </motion.p>
        </div>
      </motion.section>

      {/* Services Carousel */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-4"
            >
              SERVICIOS PROFESIONALES
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Soluciones Integrales de Fumigación
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Protección certificada para tu hogar, negocio o industria con tecnología de vanguardia
            </p>
          </motion.div>
          <ServicesCarousel />
          
          {/* CTA Button */}
          <div className="text-center mt-12">
            <CTAButton text="¡Cotiza Ahora y Ahorra 20%!" />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50 opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              ¿Por Qué Elegir FUMIVER?
            </h2>
            <p className="text-xl text-gray-600">
              Somos tu mejor opción en control de plagas
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <BenefitCard 
              icon={<Shield />} 
              title="100% Certificados" 
              text="Cumplimos con todas las normas sanitarias nacionales e internacionales"
              color="from-blue-500 to-blue-600"
              delay={0.1}
            />
            <BenefitCard 
              icon={<Award />} 
              title="Experiencia Comprobada" 
              text="Más de 10 años protegiendo hogares y negocios en Veracruz"
              color="from-purple-500 to-purple-600"
              delay={0.2}
            />
            <BenefitCard 
              icon={<Clock />} 
              title="Servicio Rápido" 
              text="Atención inmediata en 24-48 horas. ¡Tu tranquilidad no puede esperar!"
              color="from-orange-500 to-orange-600"
              delay={0.3}
            />
            <BenefitCard 
              icon={<Heart />} 
              title="Garantía Total" 
              text="100% de satisfacción garantizada o te devolvemos tu dinero"
              color="from-red-500 to-red-600"
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* Social Proof - Testimonials */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Lo Que Dicen Nuestros Clientes</h2>
            <p className="text-xl text-gray-600">Miles de clientes satisfechos nos respaldan</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard
              name="María González"
              role="Propietaria de Restaurante"
              text="Excelente servicio! Eliminaron completamente el problema de cucarachas en mi restaurante. Muy profesionales y discretos."
              rating={5}
              delay={0.1}
            />
            <TestimonialCard
              name="Carlos Ramírez"
              role="Gerente de Almacén"
              text="Llevamos 3 años trabajando con FUMIVER. Su servicio industrial es impecable y siempre cumplen con las certificaciones."
              rating={5}
              delay={0.2}
            />
            <TestimonialCard
              name="Ana Martínez"
              role="Ama de Casa"
              text="Muy contentos con el resultado. Productos seguros para mis hijos y mascotas. ¡100% recomendados!"
              rating={5}
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Certifications Slider */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-2">Certificaciones y Alianzas</h2>
            <p className="text-gray-600">Respaldados por las principales organizaciones del sector</p>
          </motion.div>
          <CertificationsSlider />
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Bug className="absolute top-10 left-10 h-32 w-32 animate-float" />
          <Bug className="absolute bottom-10 right-10 h-24 w-24 animate-float-delayed" />
          <Bug className="absolute top-1/2 left-1/4 h-20 w-20 animate-bounce-slow" />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block mb-6"
            >
              <span className="text-6xl">🐛</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              ¿Tienes un Problema de Plagas?
            </h2>
            <p className="text-xl md:text-2xl mb-4 text-white/90">
              ¡No esperes más! Cada día cuenta cuando se trata de tu salud y seguridad
            </p>
            <p className="text-lg mb-8 text-white/80">
              Obtén una cotización personalizada en menos de 2 minutos con nuestro asistente IA
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <CTAButton 
                text="Cotización Gratis con IA" 
                className="bg-white text-primary-600 hover:bg-gray-100"
              />
              <Link 
                to="/contacto"
                className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white font-bold px-8 py-4 rounded-2xl hover:bg-white hover:text-primary-600 transition-all duration-300 hover:scale-105"
              >
                <Phone className="h-5 w-5" />
                Llamar Ahora: 272 103 72 26
              </Link>
            </div>

            <motion.p
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mt-8 text-sm text-white/70"
            >
              ⚡ Respuesta inmediata • 🎯 Sin compromiso • 💯 Garantía total
            </motion.p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function TrustItem({ icon, number, text }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center"
    >
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="mb-2"
      >
        {React.cloneElement(icon, { className: 'h-8 w-8' })}
      </motion.div>
      <p className="text-2xl md:text-3xl font-bold mb-1">{number}</p>
      <p className="text-sm md:text-base text-white/90">{text}</p>
    </motion.div>
  );
}

function BenefitCard({ icon, title, text, color, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -10, transition: { duration: 0.2 } }}
      className="text-center group"
    >
      <motion.div 
        className={`inline-block p-6 bg-gradient-to-br ${color} text-white rounded-2xl mb-4 shadow-lg group-hover:shadow-2xl transition-shadow duration-300`}
        whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1, transition: { duration: 0.5 } }}
      >
        {React.cloneElement(icon, { className: 'h-10 w-10' })}
      </motion.div>
      <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors">{title}</h3>
      <p className="text-gray-600">{text}</p>
    </motion.div>
  );
}

function TestimonialCard({ name, role, text, rating, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      <div className="flex gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="h-5 w-5 fill-accent-500 text-accent-500" />
        ))}
      </div>
      <p className="text-gray-700 mb-4 italic">"{text}"</p>
      <div className="border-t pt-4">
        <p className="font-bold text-gray-900">{name}</p>
        <p className="text-sm text-gray-600">{role}</p>
      </div>
    </motion.div>
  );
}
