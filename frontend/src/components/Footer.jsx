import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Phone, Mail, MapPin, Clock, Code } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';
import legosoftLogo from '../img/LogoLegosoft.png';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <motion.img
              whileHover={{ scale: 1.05 }}
              src={logo}
              alt="FUMIVER"
              className="h-16 w-auto mb-4"
            />
            
            <p className="text-gray-400 text-sm">
              Manejo Integrado de Plagas. Servicios profesionales certificados para proteger tu espacio.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="hover:text-primary transition-colors cursor-pointer">
                <Link to="/servicios">Fumigación Residencial</Link>
              </li>
              <li className="hover:text-primary transition-colors cursor-pointer">
                <Link to="/servicios">Fumigación Industrial</Link>
              </li>
              <li className="hover:text-primary transition-colors cursor-pointer">
                <Link to="/servicios">Fumigación Empresarial</Link>
              </li>
              <li className="hover:text-primary transition-colors cursor-pointer">
                <Link to="/servicios">Control de Plagas</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="tel:2721037226">272 103 72 26</a>
              </li>
              <li className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:fumiver@hotmail.com">fumiver@hotmail.com</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-1" />
                <span>Ixtaczoquitlan, Veracruz, México</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="h-4 w-4 flex-shrink-0 mt-1" />
                <span>Lun - Sáb: 8:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Social & Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
            <div className="flex space-x-4 mb-6">
              <motion.a
                whileHover={{ scale: 1.2, rotate: 5 }}
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, rotate: -5 }}
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </motion.a>
            </div>
            <div className="space-y-2 text-sm">
              <Link to="/nosotros" className="block text-gray-400 hover:text-primary transition-colors">
                Sobre Nosotros
              </Link>
              <Link to="/galeria" className="block text-gray-400 hover:text-primary transition-colors">
                Galería
              </Link>
              <Link to="/contacto" className="block text-gray-400 hover:text-primary transition-colors">
                Contacto
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
            <p className="text-gray-400 text-sm text-center md:text-left">
              &copy; 2025 FUMIVER - Manejo Integrado de Plagas. Todos los derechos reservados.
            </p>
            <div className="flex gap-4 text-xs text-gray-500">
              <a href="#" className="hover:text-primary transition-colors">Política de Privacidad</a>
              <span>|</span>
              <a href="#" className="hover:text-primary transition-colors">Términos y Condiciones</a>
            </div>
          </div>

          {/* Developer Credit */}
          <div className="border-t border-gray-800 pt-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 text-gray-500 text-sm"
            >
              <div className="flex items-center gap-2">
                <Code className="h-4 w-4 text-primary" />
                <span>Desarrollado por</span>
              </div>
              <motion.a
                href="https://legosoft.com.mx"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 bg-white/5 hover:bg-white/10 px-4 py-2 rounded-lg transition-all duration-300 group"
              >
                <img
                  src={legosoftLogo}
                  alt="Legosoft"
                  className="h-6 w-auto filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity"
                />
                <span className="text-gray-400 group-hover:text-white transition-colors font-semibold">
                  Legosoft
                </span>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}
