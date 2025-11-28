import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import { Home, Building2, Briefcase, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function ServicesCarousel() {
  const services = [
    {
      icon: <Home className="h-12 w-12" />,
      title: 'Fumigación Residencial',
      description: 'Protección completa para tu hogar y familia',
      features: ['Casas', 'Departamentos', 'Condominios'],
      price: 'Desde $800 MXN',
      color: 'from-blue-500 to-blue-600',
      bgPattern: 'bg-blue-50'
    },
    {
      icon: <Building2 className="h-12 w-12" />,
      title: 'Fumigación Industrial',
      description: 'Soluciones para grandes espacios',
      features: ['Almacenes', 'Plantas', 'Bodegas'],
      price: 'Desde $1,500 MXN',
      color: 'from-purple-500 to-purple-600',
      bgPattern: 'bg-purple-50'
    },
    {
      icon: <Briefcase className="h-12 w-12" />,
      title: 'Fumigación Empresarial',
      description: 'Mantén tu negocio libre de plagas',
      features: ['Oficinas', 'Restaurantes', 'Comercios'],
      price: 'Desde $1,200 MXN',
      color: 'from-green-500 to-green-600',
      bgPattern: 'bg-green-50'
    }
  ];

  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      className="pb-12"
    >
      {services.map((service, index) => (
        <SwiperSlide key={index}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="h-full"
          >
            <div className={`${service.bgPattern} rounded-2xl p-8 h-full flex flex-col shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group`}>
              {/* Icon */}
              <motion.div
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className={`inline-flex p-4 bg-gradient-to-br ${service.color} text-white rounded-xl mb-6 self-start shadow-lg group-hover:shadow-xl`}
              >
                {service.icon}
              </motion.div>

              {/* Content */}
              <h3 className="text-2xl font-bold mb-3 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * i }}
                    className="flex items-center text-gray-700"
                  >
                    <span className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full mr-3"></span>
                    {feature}
                  </motion.li>
                ))}
              </ul>

              {/* Price */}
              <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {service.price}
                </span>
                <Link
                  to="/cotizacion-ia"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300"
                >
                  Cotizar
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </motion.div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
