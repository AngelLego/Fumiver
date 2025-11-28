import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Building2, Briefcase, CheckCircle, Shield, Clock, ChevronDown, Bug, Droplets, Wind, Zap, AlertTriangle, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTAButton from '../components/CTAButton';

export default function Services() {
  const services = [
    {
      icon: <Home className="h-12 w-12" />,
      type: 'Fumigación Residencial',
      tagline: 'Protege tu hogar y a tu familia',
      description: 'Servicio especializado para casas, departamentos y condominios. Eliminamos todo tipo de plagas con productos seguros para tu familia y mascotas.',
      
      detailedInfo: {
        intro: 'Nuestro servicio residencial está diseñado específicamente para proteger tu hogar sin comprometer la seguridad de tu familia. Utilizamos productos de última generación, certificados y de baja toxicidad.',
        
        pests: [
          { name: 'Cucarachas', severity: 'Alta', description: 'Eliminación completa con gel y nebulización' },
          { name: 'Hormigas', severity: 'Media', description: 'Control de colonias y prevención' },
          { name: 'Arañas', severity: 'Media', description: 'Tratamiento perimetral y rincones' },
          { name: 'Mosquitos', severity: 'Alta', description: 'Fumigación y eliminación de criaderos' },
          { name: 'Pulgas', severity: 'Media', description: 'Tratamiento especial para mascotas' },
          { name: 'Chinches', severity: 'Alta', description: 'Tratamiento térmico y químico' },
        ],
        
        methods: [
          {
            name: 'Gel Profesional',
            icon: <Droplets className="h-5 w-5" />,
            description: 'Aplicación de gel de larga duración en puntos estratégicos'
          },
          {
            name: 'Nebulización',
            icon: <Wind className="h-5 w-5" />,
            description: 'Dispersión de producto en forma de niebla para cobertura total'
          },
          {
            name: 'Trampas Ecológicas',
            icon: <Bug className="h-5 w-5" />,
            description: 'Dispositivos de captura sin químicos para monitoreo'
          },
        ],
        
        process: [
          'Inspección inicial gratuita del inmueble',
          'Identificación de puntos críticos y tipo de plaga',
          'Aplicación de tratamiento personalizado',
          'Recomendaciones de prevención',
          'Seguimiento a los 15 días',
          'Garantía de 3 meses'
        ],
        
        benefits: [
          'Productos certificados y seguros',
          'Sin olor desagradable',
          'Seguro para niños y mascotas',
          'Técnicos uniformados y capacitados',
          'Horarios flexibles (incluye fines de semana)',
          'Discreción total'
        ],
        
        pricing: {
          base: 800,
          perM2: 15,
          includes: ['Inspección', 'Tratamiento', 'Garantía 3 meses', 'Seguimiento'],
          extras: [
            { name: 'Tratamiento express (24h)', price: 200 },
            { name: 'Desinfección adicional', price: 300 },
            { name: 'Tratamiento de jardín', price: 400 },
          ]
        }
      },
      
      color: 'from-blue-500 to-blue-600',
      bgGradient: 'from-blue-50 to-blue-100',
      accentColor: 'blue'
    },
    {
      icon: <Building2 className="h-12 w-12" />,
      type: 'Fumigación Industrial',
      tagline: 'Soluciones para grandes espacios',
      description: 'Servicio especializado para almacenes, plantas industriales y bodegas. Cumplimos con todas las normativas sanitarias y certificaciones requeridas.',
      
      detailedInfo: {
        intro: 'Nuestro servicio industrial está certificado para cumplir con las más estrictas normas sanitarias. Ideal para empresas que requieren documentación oficial y seguimiento continuo.',
        
        pests: [
          { name: 'Ratas y Ratones', severity: 'Crítica', description: 'Control integral con cebos y trampas' },
          { name: 'Termitas', severity: 'Crítica', description: 'Tratamiento de suelo y estructuras' },
          { name: 'Cucarachas', severity: 'Alta', description: 'Programa de control continuo' },
          { name: 'Moscas', severity: 'Alta', description: 'Trampas UV y control químico' },
          { name: 'Palomas', severity: 'Media', description: 'Sistemas de exclusión' },
          { name: 'Gorgojos', severity: 'Alta', description: 'Fumigación de productos almacenados' },
        ],
        
        methods: [
          {
            name: 'Fumigación Térmica',
            icon: <Zap className="h-5 w-5" />,
            description: 'Tratamiento con calor para eliminar plagas en productos'
          },
          {
            name: 'Cebos Profesionales',
            icon: <AlertTriangle className="h-5 w-5" />,
            description: 'Estaciones de cebo monitoreadas constantemente'
          },
          {
            name: 'Barreras Químicas',
            icon: <Shield className="h-5 w-5" />,
            description: 'Protección perimetral de larga duración'
          },
        ],
        
        process: [
          'Auditoría inicial y mapeo de instalaciones',
          'Diseño de programa de control integrado',
          'Implementación de estaciones de monitoreo',
          'Aplicación de tratamientos programados',
          'Reportes mensuales detallados',
          'Certificación sanitaria vigente',
          'Capacitación al personal'
        ],
        
        benefits: [
          'Certificación COFEPRIS',
          'Reportes técnicos detallados',
          'Cumplimiento normativo garantizado',
          'Atención 24/7 para emergencias',
          'Programa de visitas programadas',
          'Documentación para auditorías',
          'Personal especializado certificado'
        ],
        
        pricing: {
          base: 1500,
          perM2: 12,
          includes: ['Auditoría', 'Programa anual', 'Certificación', 'Reportes mensuales'],
          extras: [
            { name: 'Servicio de emergencia 24h', price: 500 },
            { name: 'Certificación express', price: 800 },
            { name: 'Capacitación al personal', price: 1000 },
          ]
        }
      },
      
      color: 'from-purple-500 to-purple-600',
      bgGradient: 'from-purple-50 to-purple-100',
      accentColor: 'purple'
    },
    {
      icon: <Briefcase className="h-12 w-12" />,
      type: 'Fumigación Empresarial',
      tagline: 'Mantén tu negocio impecable',
      description: 'Servicio diseñado para oficinas, restaurantes, hoteles y comercios. Trabajamos en horarios que no interrumpan tu operación.',
      
      detailedInfo: {
        intro: 'Entendemos que tu negocio no puede detenerse. Por eso ofrecemos servicios discretos, rápidos y efectivos que se adaptan a tus horarios operativos.',
        
        pests: [
          { name: 'Moscas', severity: 'Alta', description: 'Control con trampas UV y químicos' },
          { name: 'Cucarachas', severity: 'Crítica', description: 'Eliminación total en áreas de alimentos' },
          { name: 'Roedores', severity: 'Crítica', description: 'Programa de control y prevención' },
          { name: 'Chinches', severity: 'Alta', description: 'Especial para hoteles y hospedajes' },
          { name: 'Hormigas', severity: 'Media', description: 'Control de colonias en áreas comunes' },
          { name: 'Ácaros', severity: 'Media', description: 'Tratamiento de alfombras y tapicería' },
        ],
        
        methods: [
          {
            name: 'Tratamiento Sectorial',
            icon: <Building2 className="h-5 w-5" />,
            description: 'Aplicación por áreas sin interrumpir operaciones'
          },
          {
            name: 'Productos Inodoros',
            icon: <Wind className="h-5 w-5" />,
            description: 'Especiales para áreas con público'
          },
          {
            name: 'Monitoreo Digital',
            icon: <Zap className="h-5 w-5" />,
            description: 'Sistema de alertas y reportes en tiempo real'
          },
        ],
        
        process: [
          'Evaluación de necesidades del negocio',
          'Diseño de programa personalizado',
          'Coordinación de horarios de servicio',
          'Aplicación discreta y profesional',
          'Verificación de resultados',
          'Reportes ejecutivos mensuales',
          'Ajustes según necesidad'
        ],
        
        benefits: [
          'Horarios flexibles (nocturnos disponibles)',
          'Discreción total con clientes',
          'Personal uniformado sin logos',
          'Productos sin olor',
          'Certificados para inspecciones',
          'Respuesta rápida (24-48h)',
          'Planes mensuales con descuento'
        ],
        
        pricing: {
          base: 1200,
          perM2: 13,
          includes: ['Evaluación', 'Tratamiento', 'Certificado', 'Garantía 4 meses'],
          extras: [
            { name: 'Servicio nocturno', price: 300 },
            { name: 'Tratamiento de urgencia', price: 400 },
            { name: 'Plan mensual (3 servicios)', price: 2800 },
          ]
        }
      },
      
      color: 'from-green-500 to-green-600',
      bgGradient: 'from-green-50 to-green-100',
      accentColor: 'green'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-block bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-4"
            >
              SERVICIOS PROFESIONALES CERTIFICADOS
            </motion.span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Nuestros Servicios
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
              Soluciones integrales de fumigación adaptadas a cada necesidad
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
                <Award className="h-5 w-5 text-primary-600" />
                <span className="text-sm font-semibold">Certificados</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
                <Shield className="h-5 w-5 text-primary-600" />
                <span className="text-sm font-semibold">100% Garantía</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
                <Clock className="h-5 w-5 text-primary-600" />
                <span className="text-sm font-semibold">Servicio Rápido</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Detailed Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <ServiceDetailedCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">¿Listo para Proteger tu Espacio?</h2>
          <p className="text-xl mb-8 text-white/90">
            Obtén una cotización personalizada con FumIA, nuestro asistente inteligente
          </p>
          <CTAButton text="Cotizar con FumIA Ahora" className="mx-auto" />
        </div>
      </section>
    </div>
  );
}

function ServiceDetailedCard({ service, index }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br ${service.bgGradient}`}
    >
      {/* Header */}
      <div className={`flex flex-col lg:flex-row`}>
        {/* Icon Section */}
        <div className={`lg:w-1/3 p-12 bg-gradient-to-br ${service.color} text-white flex flex-col items-center justify-center relative overflow-hidden`}>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full translate-y-1/2 -translate-x-1/2"></div>
          </div>
          <motion.div
            whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 bg-white/20 backdrop-blur-sm p-8 rounded-2xl mb-6"
          >
            {service.icon}
          </motion.div>
          <h2 className="text-3xl font-bold text-center relative z-10 mb-2">{service.type}</h2>
          <p className="text-white/90 text-center relative z-10 text-lg">{service.tagline}</p>
          <div className="mt-6 relative z-10">
            <div className="text-4xl font-bold mb-1">Desde ${service.detailedInfo.pricing.base}</div>
            <div className="text-sm text-white/80">+ ${service.detailedInfo.pricing.perM2}/m²</div>
          </div>
        </div>

        {/* Summary Section */}
        <div className="lg:w-2/3 p-8 lg:p-12">
          <p className="text-gray-700 text-lg mb-6">{service.description}</p>
          <p className="text-gray-600 mb-6">{service.detailedInfo.intro}</p>
          
          {/* Quick Benefits */}
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {service.detailedInfo.benefits.slice(0, 4).map((benefit, i) => (
              <div key={i} className="flex items-start gap-2">
                <CheckCircle className={`h-5 w-5 text-${service.accentColor}-600 flex-shrink-0 mt-0.5`} />
                <span className="text-gray-700 text-sm">{benefit}</span>
              </div>
            ))}
          </div>

          {/* Expand Button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={`w-full flex items-center justify-center gap-2 bg-gradient-to-r ${service.color} text-white font-bold py-4 px-6 rounded-xl hover:shadow-xl transition-all duration-300`}
          >
            <span>{isExpanded ? 'Ver Menos Información' : 'Ver Información Completa'}</span>
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="h-5 w-5" />
            </motion.div>
          </button>
        </div>
      </div>

      {/* Expanded Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden"
          >
            <div className="p-8 lg:p-12 bg-white border-t-4 border-gray-200">
              {/* Plagas que Controlamos */}
              <Section title="Plagas que Controlamos" icon={<Bug />}>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {service.detailedInfo.pests.map((pest, i) => (
                    <PestCard key={i} pest={pest} accentColor={service.accentColor} />
                  ))}
                </div>
              </Section>

              {/* Métodos Aplicados */}
              <Section title="Métodos y Técnicas" icon={<Zap />}>
                <div className="grid md:grid-cols-3 gap-6">
                  {service.detailedInfo.methods.map((method, i) => (
                    <MethodCard key={i} method={method} accentColor={service.accentColor} />
                  ))}
                </div>
              </Section>

              {/* Proceso */}
              <Section title="Nuestro Proceso" icon={<Clock />}>
                <div className="space-y-3">
                  {service.detailedInfo.process.map((step, i) => (
                    <ProcessStep key={i} step={step} number={i + 1} accentColor={service.accentColor} />
                  ))}
                </div>
              </Section>

              {/* Pricing Details */}
              <Section title="Detalles de Precio" icon={<Award />}>
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="mb-6">
                    <h4 className="font-bold text-lg mb-3">Incluye:</h4>
                    <div className="grid md:grid-cols-2 gap-2">
                      {service.detailedInfo.pricing.includes.map((item, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle className={`h-4 w-4 text-${service.accentColor}-600`} />
                          <span className="text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-3">Servicios Adicionales:</h4>
                    <div className="space-y-2">
                      {service.detailedInfo.pricing.extras.map((extra, i) => (
                        <div key={i} className="flex justify-between items-center bg-white p-3 rounded-lg">
                          <span className="text-sm">{extra.name}</span>
                          <span className="font-bold text-primary-600">+${extra.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Section>

              {/* CTA */}
              <div className="mt-8 text-center">
                <CTAButton text={`Cotizar ${service.type}`} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function Section({ title, icon, children }) {
  return (
    <div className="mb-10">
      <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
        <span className="text-primary-600">{icon}</span>
        {title}
      </h3>
      {children}
    </div>
  );
}

function PestCard({ pest, accentColor }) {
  const severityColors = {
    'Crítica': 'bg-red-100 text-red-700 border-red-300',
    'Alta': 'bg-orange-100 text-orange-700 border-orange-300',
    'Media': 'bg-yellow-100 text-yellow-700 border-yellow-300',
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      className="bg-white rounded-xl p-4 shadow-md border-2 border-gray-100 hover:border-primary-300 transition-all"
    >
      <div className="flex items-start justify-between mb-2">
        <h4 className="font-bold text-gray-900">{pest.name}</h4>
        <span className={`text-xs px-2 py-1 rounded-full border ${severityColors[pest.severity]}`}>
          {pest.severity}
        </span>
      </div>
      <p className="text-sm text-gray-600">{pest.description}</p>
    </motion.div>
  );
}

function MethodCard({ method, accentColor }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 shadow-md border border-gray-200"
    >
      <div className={`inline-block p-3 bg-${accentColor}-100 rounded-lg mb-4`}>
        {React.cloneElement(method.icon, { className: `text-${accentColor}-600` })}
      </div>
      <h4 className="font-bold text-gray-900 mb-2">{method.name}</h4>
      <p className="text-sm text-gray-600">{method.description}</p>
    </motion.div>
  );
}

function ProcessStep({ step, number, accentColor }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: number * 0.1 }}
      className="flex items-start gap-4 bg-white p-4 rounded-lg shadow-sm"
    >
      <div className={`flex-shrink-0 w-8 h-8 bg-gradient-to-br from-${accentColor}-500 to-${accentColor}-600 text-white rounded-full flex items-center justify-center font-bold text-sm`}>
        {number}
      </div>
      <p className="text-gray-700 pt-1">{step}</p>
    </motion.div>
  );
}
