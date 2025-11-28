import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';

import 'swiper/css';

import cert1 from '../img/Certificaciones/AIB_International_Logo.jpg';
import cert2 from '../img/Certificaciones/logo_ancpuac.png';
import cert3 from '../img/Certificaciones/2.jpeg';
import cert4 from '../img/Certificaciones/aHR0cHM6Ly9naWVjZG4uYmxvYi5jb3JlLndpbmRvd3MubmV0L2ZpbGV1cGxvYWRzL2ltYWdlLzIwMjUvMDMvMTkvcHBtYS5wbmc.qKQhk8D2sYc.webp';

export default function CertificationsSlider() {
  const certifications = [
    { image: cert1, name: 'AIB International' },
    { image: cert2, name: 'ANPCUAC' },
    { image: cert3, name: 'Certificación 2' },
    { image: cert4, name: 'PPMA' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <Swiper
        modules={[Autoplay]}
        spaceBetween={40}
        slidesPerView={2}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        className="certifications-slider"
      >
        {certifications.map((cert, index) => (
          <SwiperSlide key={index}>
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 flex items-center justify-center h-32"
            >
              <img
                src={cert.image}
                alt={cert.name}
                className="max-h-20 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
}
