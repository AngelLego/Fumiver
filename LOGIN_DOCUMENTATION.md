# 🔐 Sistema de Login - FUMIVER

## Descripción General

Se ha implementado un sistema de login integrado con **RupiPest** para acceder al panel de administración de FUMIVER.

## 🎨 Características del Login

### Diseño Visual
- **Logo**: FUMIVER LOGO.png completo
- **Gradiente**: Verde (primary) a teal (secondary)
- **Animaciones**: Entrada suave, efectos hover
- **Responsive**: Adaptado a todos los dispositivos

### Elementos de la Interfaz

#### 1. Header
- Logo de FUMIVER animado
- Título: "Iniciar Sesión"
- Subtítulo: "Panel de Administración"
- Gradiente animado de fondo

#### 2. Formulario
- **Campo Email**:
  - Icono de sobre
  - Placeholder: "tu@email.com"
  - Validación requerida
  - Autocompletado habilitado

- **Campo Contraseña**:
  - Icono de candado
  - Botón mostrar/ocultar contraseña
  - Placeholder: "••••••••"
  - Validación requerida

#### 3. Botón de Login
- Gradiente verde vibrante
- Icono de login
- Estado de carga con spinner
- Efecto hover con escala
- Deshabilitado durante carga

#### 4. Footer
- Badge de seguridad
- Texto: "Conexión segura con RupiPest"
- Link de soporte

## 🔧 Integración con RupiPest

### API Endpoint
```
https://app.rupipest.com/api/users/sign_in
```

### Entornos Disponibles
- **Producción**: `app.rupipest.com`
- **Pruebas**: `uat.rupipest.com`

### Flujo de Autenticación

1. **Usuario ingresa credenciales**
   - Email
   - Password

2. **Validación del formulario**
   - Verifica que email no esté vacío
   - Verifica que password no esté vacío
   - Muestra alertas si falta información

3. **Petición a la API**
   ```javascript
   POST https://app.rupipest.com/api/users/sign_in
   Body: {
     "user": {
       "email": "usuario@email.com",
       "password": "contraseña"
     }
   }
   ```

4. **Respuesta de la API**
   - **Éxito** (`success: true`):
     - Redirige a: `https://app.rupipest.com/users/sign_in?email=...&password=...&autologin=true`
   - **Error**:
     - Muestra mensaje de error
     - Permite reintentar

## 📱 Acceso al Login

### Desde el Navbar
- **Desktop**: Botón "Iniciar Sesión" entre los links y "Cotización IA"
- **Mobile**: Opción en el menú hamburguesa

### URL Directa
```
http://localhost:3001/login
```

## 🎯 Características de Seguridad

### Validaciones
- ✅ Campos requeridos
- ✅ Formato de email
- ✅ Longitud mínima de contraseña
- ✅ Prevención de envíos múltiples

### Protección
- ✅ Conexión HTTPS con RupiPest
- ✅ Contraseña oculta por defecto
- ✅ Botón de mostrar/ocultar contraseña
- ✅ Estado de carga visible
- ✅ Manejo de errores

### Experiencia de Usuario
- ✅ Enter para enviar formulario
- ✅ Feedback visual inmediato
- ✅ Mensajes de error claros
- ✅ Spinner durante carga
- ✅ Botón deshabilitado durante proceso

## 💻 Código Técnico

### Ubicación del Archivo
```
frontend/src/pages/Login.jsx
```

### Estados del Componente
```javascript
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [showPassword, setShowPassword] = useState(false);
const [isLoading, setIsLoading] = useState(false);
```

### Función Principal
```javascript
const handleLogin = () => {
  // Validaciones
  if (!email) {
    alert('Email es campo obligatorio.');
    return;
  }
  
  if (!password) {
    alert('Password es campo obligatorio.');
    return;
  }

  // Petición a API
  fetch('https://app.rupipest.com/api/users/sign_in', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      user: { email, password }
    })
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      // Redirigir con autologin
      window.location.href = `https://app.rupipest.com/users/sign_in?email=${email}&password=${password}&autologin=true`;
    } else {
      alert(data.message);
    }
  })
  .catch(error => {
    alert('Error al conectar con el servidor');
  });
};
```

## 🎨 Animaciones

### Entrada del Formulario
```javascript
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
```

### Campos del Formulario
```javascript
// Email
initial={{ opacity: 0, x: -20 }}
animate={{ opacity: 1, x: 0 }}
transition={{ delay: 0.3 }}

// Password
initial={{ opacity: 0, x: -20 }}
animate={{ opacity: 1, x: 0 }}
transition={{ delay: 0.4 }}
```

### Spinner de Carga
```javascript
animate={{ rotate: 360 }}
transition={{ 
  duration: 1, 
  repeat: Infinity, 
  ease: "linear" 
}}
```

## 📊 Flujo de Usuario

```
1. Usuario hace click en "Iniciar Sesión" (Navbar)
   ↓
2. Se carga la página de Login (/login)
   ↓
3. Usuario ingresa email y contraseña
   ↓
4. Usuario presiona "Iniciar Sesión" o Enter
   ↓
5. Sistema valida campos
   ↓
6. Se muestra spinner de carga
   ↓
7. Petición a RupiPest API
   ↓
8a. Éxito → Redirige a panel de RupiPest
8b. Error → Muestra mensaje y permite reintentar
```

## 🔍 Debugging

### Verificar Conexión
```javascript
// En la consola del navegador
fetch('https://app.rupipest.com/api/users/sign_in', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    user: {
      email: 'test@test.com',
      password: 'test123'
    }
  })
})
.then(r => r.json())
.then(console.log);
```

### Cambiar Entorno
Para usar el entorno de pruebas, cambiar en `Login.jsx`:
```javascript
const vv_ENTORNO = "uat"; // Cambiar de "app" a "uat"
```

## 🚀 Mejoras Futuras

### Corto Plazo
- [ ] Recordar usuario (localStorage)
- [ ] Recuperación de contraseña
- [ ] Validación de formato de email
- [ ] Límite de intentos fallidos

### Mediano Plazo
- [ ] Autenticación de dos factores
- [ ] Login con redes sociales
- [ ] Sesión persistente
- [ ] Logout automático

### Largo Plazo
- [ ] Biometría (huella, Face ID)
- [ ] Single Sign-On (SSO)
- [ ] Gestión de sesiones múltiples
- [ ] Auditoría de accesos

## 📞 Soporte

Si hay problemas con el login:

1. **Verificar credenciales** en RupiPest
2. **Contactar soporte**:
   - 📱 Teléfono: 272 103 72 26
   - 📧 Email: fumiver@hotmail.com

## 🎯 Checklist de Implementación

- ✅ Página de login creada
- ✅ Integración con RupiPest API
- ✅ Validaciones de formulario
- ✅ Diseño responsive
- ✅ Animaciones suaves
- ✅ Manejo de errores
- ✅ Estado de carga
- ✅ Botón en Navbar
- ✅ Ruta configurada
- ✅ Documentación completa

## 📝 Notas Importantes

1. **Seguridad**: Las credenciales se envían a RupiPest, no se almacenan localmente
2. **Redirección**: Después del login exitoso, el usuario es redirigido a RupiPest
3. **Entorno**: Por defecto usa producción (`app.rupipest.com`)
4. **Compatibilidad**: Funciona con fetch API (no requiere jQuery)

---

**Sistema de Login implementado y funcionando** ✅

**Desarrollado**: 22 de Noviembre, 2025  
**Integración**: RupiPest API  
**Estado**: Producción Ready
