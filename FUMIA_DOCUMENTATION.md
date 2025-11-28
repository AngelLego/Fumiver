# 🐞 FumIA - Asistente Inteligente de FUMIVER

## ¿Qué es FumIA?

**FumIA** es el asistente virtual inteligente de FUMIVER, representado por una catarina (el logo de la empresa). Es el punto de contacto principal para que los clientes obtengan cotizaciones rápidas y personalizadas.

## 🎨 Características de FumIA

### Diseño Visual
- **Icono**: Catarina del logo de FUMIVER
- **Colores**: Gradiente verde (primary) con detalles dorados
- **Animaciones**: 
  - Rotación suave continua
  - Flotación vertical
  - Efecto glow pulsante
  - Sparkles rotando

### Ubicación
- **Posición**: Botón flotante en la esquina inferior derecha
- **Altura**: Justo arriba del botón de WhatsApp
- **Z-index**: 50 (siempre visible)

### Comportamiento

#### Estado Inicial
1. Aparece con animación de entrada (escala + rotación)
2. Muestra tooltip de bienvenida automáticamente
3. El tooltip se oculta después de 5 segundos
4. Animación continua de flotación

#### Al Hacer Click
1. Se abre un panel de chat elegante
2. Muestra mensaje de bienvenida de FumIA
3. Ofrece 3 opciones principales:
   - 💬 Iniciar Cotización con IA
   - 📋 Ver Servicios
   - 📞 Llamar directamente

#### Panel de Chat
- **Header**: Gradiente verde con logo animado
- **Estado**: "En línea" con indicador verde pulsante
- **Mensaje**: Presentación amigable de FumIA
- **Botones**: CTAs claros y llamativos
- **Footer**: "Powered by IA • Disponible 24/7"

## 📱 Responsive Design

### Desktop
- Tamaño completo del panel (384px)
- Tooltip a la izquierda del botón
- Animaciones completas

### Mobile
- Panel adaptado al ancho de pantalla
- Tooltip arriba del botón
- Botones full-width

## 🎯 Funcionalidades

### 1. Tooltip Inteligente
```javascript
- Aparece automáticamente al cargar
- Se puede cerrar manualmente
- Desaparece después de 5 segundos
- No vuelve a aparecer en la sesión
```

### 2. Panel Interactivo
```javascript
- Animación de entrada suave
- Cierre con botón X
- Links funcionales a páginas
- Diseño moderno y profesional
```

### 3. Integración con Rutas
- `/cotizacion-ia` - Página de cotización completa
- `/servicios` - Información detallada de servicios
- `tel:2721037226` - Llamada directa

## 🎨 Paleta de Colores de FumIA

```css
/* Botón Principal */
background: linear-gradient(to bottom right, #34d399, #10b981, #059669);

/* Glow Effect */
color: #34d399;
opacity: 0.5;

/* Panel Header */
background: linear-gradient(to right, #10b981, #059669);

/* Sparkles */
color: #f59e0b; /* Accent amber */
```

## 💬 Mensajes de FumIA

### Mensaje de Bienvenida (Tooltip)
```
¡Hola! Soy FumIA 🐞
Tu asistente inteligente. ¿Necesitas una cotización?
```

### Mensaje Principal (Panel)
```
¡Hola! Soy FumIA, tu asistente inteligente de FUMIVER 🐞

Puedo ayudarte a obtener una cotización personalizada en minutos. 
¿Qué necesitas?
```

### Mensaje en Página de Cotización
```
¡Hola! Soy FumIA 🐞, tu asistente inteligente de FUMIVER. 
Te ayudaré a obtener una cotización personalizada en minutos. 
¿Qué tipo de servicio necesitas: residencial, industrial o empresarial?
```

## 🔧 Componente Técnico

### Ubicación del Archivo
```
frontend/src/components/FumIA.jsx
```

### Props
```javascript
// No recibe props, es autocontenido
<FumIA />
```

### Estados Internos
```javascript
const [isOpen, setIsOpen] = useState(false);        // Panel abierto/cerrado
const [showTooltip, setShowTooltip] = useState(true); // Tooltip visible
```

### Dependencias
```javascript
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import favicon from '../img/favicon.png';
```

## 🎭 Animaciones

### Entrada del Botón
```javascript
initial={{ scale: 0, rotate: -180 }}
animate={{ scale: 1, rotate: 0 }}
transition={{ type: "spring", delay: 2.5 }}
```

### Catarina Flotante
```javascript
animate={{
  rotate: [0, -10, 10, 0],
  y: [0, -5, 0],
}}
transition={{ duration: 3, repeat: Infinity }}
```

### Glow Pulsante
```javascript
animate={{
  scale: [1, 1.3, 1],
  opacity: [0.5, 0.8, 0.5],
}}
transition={{ duration: 2, repeat: Infinity }}
```

### Sparkles Rotando
```javascript
animate={{
  rotate: [0, 360],
  scale: [1, 1.2, 1],
}}
transition={{ duration: 4, repeat: Infinity }}
```

## 📊 Métricas de Uso

### Eventos a Trackear
1. **fumia_button_click** - Click en botón de FumIA
2. **fumia_panel_open** - Apertura del panel
3. **fumia_cta_click** - Click en botones del panel
4. **fumia_tooltip_close** - Cierre manual del tooltip

### Conversiones Esperadas
- 📈 +60% en engagement vs botón estático
- 📈 +45% en clicks hacia cotización
- 📈 +30% en tiempo de interacción

## 🚀 Ventajas de FumIA

### Para el Usuario
1. ✅ Acceso rápido a cotización
2. ✅ Interfaz amigable y clara
3. ✅ Múltiples opciones de contacto
4. ✅ Disponible en todo momento
5. ✅ Respuestas inmediatas

### Para el Negocio
1. 📈 Mayor tasa de conversión
2. 📈 Reducción de fricción
3. 📈 Mejor experiencia de usuario
4. 📈 Branding consistente
5. 📈 Datos de interacción

## 🎯 Mejores Prácticas

### Do's ✅
- Mantener animaciones suaves
- Responder rápido a interacciones
- Usar lenguaje amigable
- Ofrecer múltiples opciones
- Ser consistente con el branding

### Don'ts ❌
- No hacer animaciones muy rápidas
- No ocultar el botón en mobile
- No usar lenguaje técnico
- No forzar la interacción
- No bloquear contenido importante

## 🔮 Futuras Mejoras

### Corto Plazo
1. Integración con OpenAI real
2. Historial de conversaciones
3. Respuestas contextuales
4. Notificaciones push

### Mediano Plazo
1. Chat en tiempo real
2. Transferencia a agente humano
3. Envío de cotizaciones por email
4. Seguimiento automatizado

### Largo Plazo
1. Reconocimiento de voz
2. Análisis de sentimiento
3. Recomendaciones personalizadas
4. Integración con CRM

## 📞 Soporte

Si necesitas ayuda con FumIA:
- 📧 Email: fumiver@hotmail.com
- 📱 Teléfono: 272 103 72 26
- 💬 WhatsApp: Botón flotante verde

---

**FumIA** - Tu asistente inteligente, siempre listo para ayudarte 🐞✨
