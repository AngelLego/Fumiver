import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Award, Shield, Users, TrendingUp, CheckCircle } from 'lucide-react';
import logo from '../img/logo.png';

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-white to-secondary/10 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              src={logo}
              alt="FUMIVER"
              className="h-32 w-auto mx-auto mb-8"
            />
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              FUMIVER
            </motion.h1>
            <motion.p 
              className="text-2xl md:text-3xl text-gray-700 font-semibold mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Manejo Integrado de Plagas
            </motion.p>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Protegiendo tu espacio con profesionalismo y certificación
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card group hover:shadow-2xl"
            >
              <motion.div
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <Target className="h-16 w-16 text-primary mb-6" />
              </motion.div>
              <h2 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">Misión</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                En FUMIVER nos dedicamos a proporcionar servicios profesionales de 
                manejo integrado de plagas, protegiendo la salud y bienestar de 
                nuestros clientes mediante soluciones efectivas, certificadas y 
                amigables con el medio ambiente.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card group hover:shadow-2xl"
            >
              <motion.div
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <Eye className="h-16 w-16 text-primary mb-6" />
              </motion.div>
              <h2 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">Visión</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Ser la empresa líder en control de plagas en Veracruz y región, 
                reconocida por nuestra excelencia en el servicio, certificaciones 
                profesionales y compromiso con la satisfacción total del cliente.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12"
          >
            Nuestros Valores
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ValueCard 
              icon={<Shield />}
              title="Profesionalismo"
              description="Servicios certificados con los más altos estándares de calidad"
              delay={0.1}
            />
            <ValueCard 
              icon={<Users />}
              title="Compromiso"
              description="Dedicados a la satisfacción y seguridad de nuestros clientes"
              delay={0.2}
            />
            <ValueCard 
              icon={<TrendingUp />}
              title="Innovación"
              description="Tecnología de vanguardia en control integrado de plagas"
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Certificaciones */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card"
          >
            <Award className="h-16 w-16 text-primary mb-6 mx-auto" />
            <h2 className="text-3xl font-bold mb-8 text-center">Certificaciones y Alianzas</h2>
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <CertificationItem name="COFEPRIS" description="Certificación sanitaria vigente" />
              <CertificationItem name="NOM-256-SSA1" description="Cumplimiento normativo" />
              <CertificationItem name="AIB International" description="Estándares internacionales" />
              <CertificationItem name="ANPCUAC" description="Asociación profesional" />
            </div>
            <p className="text-center text-gray-600 mt-6">
              Respaldados por las principales organizaciones del sector
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cobertura */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card"
          >
            <h2 className="text-3xl font-bold mb-6 text-center">Área de Cobertura</h2>
            <p className="text-gray-700 mb-8 text-center text-lg">
              Brindamos servicio profesional en Veracruz y zonas aledañas
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <CoverageItem city="Veracruz" />
              <CoverageItem city="Boca del Río" />
              <CoverageItem city="Xalapa" />
              <CoverageItem city="Córdoba" />
              <CoverageItem city="Orizaba" />
              <CoverageItem city="Zona Conurbada" />
            </div>
            <div className="text-center bg-primary/10 rounded-xl p-6">
              <p className="text-gray-700 font-semibold mb-2">
                📞 ¿Tu zona no aparece en la lista?
              </p>
              <p className="text-gray-600">
                Contáctanos al <a href="tel:2721037226" className="text-primary font-bold hover:underline">272 103 72 26</a> para consultar disponibilidad
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="card bg-gradient-to-br from-primary to-secondary text-white"
          >
            <h2 className="text-3xl font-bold mb-6">¿Listo para proteger tu espacio?</h2>
            <p className="text-xl mb-8 text-white/90">
              Contáctanos hoy y obtén una cotización personalizada
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:2721037226"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary font-bold px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105"
              >
                📞 272 103 72 26
              </a>
              <a
                href="mailto:fumiver@hotmail.com"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white font-bold px-8 py-4 rounded-xl border-2 border-white/30 hover:bg-white hover:text-primary transition-all duration-300 hover:scale-105"
              >
                ✉️ fumiver@hotmail.com
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function ValueCard({ icon, title, description, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -10 }}
      className="card text-center group"
    >
      <motion.div
        whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
        transition={{ duration: 0.5 }}
        className="inline-block p-6 bg-gradient-to-br from-primary to-secondary text-white rounded-2xl mb-4"
      >
        {React.cloneElement(icon, { className: 'h-10 w-10' })}
      </motion.div>
      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}

function CertificationItem({ name, description }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="text-center"
    >
      <div className="bg-primary/10 rounded-xl p-4 mb-3">
        <CheckCircle className="h-8 w-8 text-primary mx-auto" />
      </div>
      <h3 className="font-bold text-gray-900 mb-1">{name}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </motion.div>
  );
}

function CoverageItem({ city }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-3"
    >
      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
      <span className="font-semibold text-gray-800">{city}</span>
    </motion.div>
  );
}
