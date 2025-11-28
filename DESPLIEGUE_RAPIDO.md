# ⚡ Despliegue Rápido a Vercel

## 🎯 Opción Más Fácil: Vercel CLI

### 1. Instalar Vercel CLI
```bash
npm install -g vercel
```

### 2. Login en Vercel
```bash
vercel login
```
Se abrirá tu navegador para autenticarte.

### 3. Desplegar
```bash
cd frontend
vercel
```

Responde las preguntas:
- **Set up and deploy**: `Y`
- **Which scope**: Selecciona tu cuenta
- **Link to existing project**: `N`
- **Project name**: `fumiver`
- **Directory**: `./` (presiona Enter)
- **Override settings**: `N`

### 4. Desplegar a Producción
```bash
vercel --prod
```

¡Listo! Tu sitio estará en línea en: `https://fumiver.vercel.app`

---

## 🚀 Opción Automática: Script

### Windows
```bash
deploy.bat
```

### Linux/Mac
```bash
chmod +x deploy.sh
./deploy.sh
```

---

## 🌐 Opción GitHub (Recomendada para Actualizaciones)

### 1. Crear Repositorio en GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/fumiver.git
git push -u origin main
```

### 2. Importar en Vercel
1. Ve a https://vercel.com/new
2. Importa tu repositorio
3. Configura:
   - **Root Directory**: `frontend`
   - **Framework**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Click "Deploy"

### 3. Actualizaciones Automáticas
Cada vez que hagas push a GitHub, Vercel desplegará automáticamente:
```bash
git add .
git commit -m "Actualización"
git push
```

---

## ✅ Verificación

Después del despliegue, verifica:
- [ ] Splash screen funciona
- [ ] FumIA aparece
- [ ] Navegación funciona
- [ ] Imágenes cargan
- [ ] WhatsApp funciona
- [ ] Login funciona

---

## 🔧 Solución de Problemas

### Error de Build
```bash
cd frontend
npm install
npm run build
```

### Imágenes no cargan
Verifica que las rutas sean relativas en los imports.

### 404 en rutas
Ya está configurado en `frontend/vercel.json`

---

## 📞 Soporte

¿Problemas? Contacta:
- Vercel Docs: https://vercel.com/docs
- Vercel Support: https://vercel.com/support

---

**¡Tu sitio estará en línea en menos de 5 minutos!** ⚡
