# 🚀 Guía de Despliegue en Vercel

## Opción 1: Despliegue desde la Terminal (Recomendado)

### Paso 1: Instalar Vercel CLI
```bash
npm install -g vercel
```

### Paso 2: Login en Vercel
```bash
vercel login
```

### Paso 3: Desplegar el Frontend
```bash
cd frontend
vercel
```

Sigue las instrucciones:
1. **Set up and deploy**: Yes
2. **Which scope**: Selecciona tu cuenta
3. **Link to existing project**: No
4. **Project name**: fumiver (o el nombre que prefieras)
5. **Directory**: ./ (dejar por defecto)
6. **Override settings**: No

### Paso 4: Desplegar a Producción
```bash
vercel --prod
```

---

## Opción 2: Despliegue desde GitHub (Más Fácil)

### Paso 1: Crear Repositorio en GitHub
1. Ve a https://github.com/new
2. Crea un nuevo repositorio llamado "fumiver"
3. No inicialices con README

### Paso 2: Subir el Código
```bash
# En la carpeta raíz del proyecto
git init
git add .
git commit -m "Initial commit - FUMIVER website"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/fumiver.git
git push -u origin main
```

### Paso 3: Conectar con Vercel
1. Ve a https://vercel.com
2. Click en "Add New Project"
3. Importa tu repositorio de GitHub
4. Configura:
   - **Framework Preset**: Vite
   - **Root Directory**: frontend
   - **Build Command**: npm run build
   - **Output Directory**: dist
5. Click en "Deploy"

---

## Configuración Importante

### Variables de Entorno (Si es necesario)
En Vercel Dashboard → Settings → Environment Variables:

```
VITE_API_URL=https://tu-backend-url.com
```

### Configuración del Proyecto

**Root Directory**: `frontend`  
**Build Command**: `npm run build`  
**Output Directory**: `dist`  
**Install Command**: `npm install`

---

## Verificación Post-Despliegue

### Checklist
- [ ] Página de inicio carga correctamente
- [ ] Splash screen funciona
- [ ] FumIA aparece y funciona
- [ ] Navegación entre páginas funciona
- [ ] Imágenes se cargan correctamente
- [ ] WhatsApp button funciona
- [ ] Login funciona
- [ ] Responsive en móvil

### URLs a Verificar
- `/` - Inicio
- `/servicios` - Servicios
- `/cotizacion-ia` - Cotización
- `/galeria` - Galería
- `/nosotros` - Nosotros
- `/contacto` - Contacto
- `/login` - Login

---

## Solución de Problemas Comunes

### Error: "Module not found"
**Solución**: Verifica que todas las rutas de importación sean correctas y relativas.

### Error: "Build failed"
**Solución**: 
```bash
cd frontend
npm install
npm run build
```
Si funciona localmente, debería funcionar en Vercel.

### Imágenes no cargan
**Solución**: Asegúrate de que las rutas de imágenes sean relativas:
```javascript
import logo from '../img/logo.png'
// En lugar de
import logo from '/src/img/logo.png'
```

### Rutas 404
**Solución**: Vercel maneja las rutas de React Router automáticamente, pero verifica que `vercel.json` esté configurado correctamente.

---

## Actualizar el Sitio

### Desde Terminal
```bash
cd frontend
vercel --prod
```

### Desde GitHub
Simplemente haz push a la rama main:
```bash
git add .
git commit -m "Actualización"
git push
```
Vercel desplegará automáticamente.

---

## Dominio Personalizado

### Agregar Dominio
1. Ve a Vercel Dashboard
2. Settings → Domains
3. Agrega tu dominio (ej: fumiver.com)
4. Sigue las instrucciones para configurar DNS

### Configuración DNS
Si tienes un dominio:
1. Agrega un registro A apuntando a Vercel
2. O agrega un CNAME apuntando a tu proyecto.vercel.app

---

## Backend (Opcional)

El backend actual corre localmente. Para producción, considera:

### Opción 1: Railway
```bash
# Instalar Railway CLI
npm install -g @railway/cli

# Login
railway login

# Desplegar
cd backend
railway init
railway up
```

### Opción 2: Render
1. Ve a https://render.com
2. New → Web Service
3. Conecta tu repositorio
4. Configura:
   - **Root Directory**: backend
   - **Build Command**: npm install
   - **Start Command**: npm start

### Opción 3: Heroku
```bash
# Instalar Heroku CLI
npm install -g heroku

# Login
heroku login

# Crear app
cd backend
heroku create fumiver-api

# Desplegar
git push heroku main
```

---

## Monitoreo

### Analytics
Vercel incluye analytics automáticamente:
- Visitas
- Tiempo de carga
- Errores
- Dispositivos

### Logs
Ver logs en tiempo real:
```bash
vercel logs
```

---

## Costos

### Vercel
- **Hobby (Gratis)**:
  - Despliegues ilimitados
  - 100 GB bandwidth
  - Dominio .vercel.app gratis
  
- **Pro ($20/mes)**:
  - 1 TB bandwidth
  - Dominios personalizados ilimitados
  - Soporte prioritario

---

## Comandos Útiles

```bash
# Ver proyectos
vercel list

# Ver logs
vercel logs

# Eliminar proyecto
vercel remove fumiver

# Ver información del proyecto
vercel inspect

# Rollback a versión anterior
vercel rollback
```

---

## Contacto y Soporte

- **Vercel Docs**: https://vercel.com/docs
- **Vercel Support**: https://vercel.com/support
- **Community**: https://github.com/vercel/vercel/discussions

---

## 🎉 ¡Listo!

Una vez desplegado, tu sitio estará disponible en:
- **URL Temporal**: https://fumiver.vercel.app
- **URL Personalizada**: https://tu-dominio.com (si configuras)

**¡FUMIVER estará en línea y accesible desde cualquier parte del mundo!** 🌍

---

**Última actualización**: 22 de Noviembre, 2025  
**Versión**: 1.0.0
