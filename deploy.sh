#!/bin/bash

echo "🚀 Desplegando FUMIVER a Vercel..."
echo ""

# Verificar si Vercel CLI está instalado
if ! command -v vercel &> /dev/null
then
    echo "❌ Vercel CLI no está instalado"
    echo "📦 Instalando Vercel CLI..."
    npm install -g vercel
fi

# Ir a la carpeta frontend
cd frontend

# Build del proyecto
echo "🔨 Construyendo el proyecto..."
npm run build

# Desplegar a Vercel
echo "☁️ Desplegando a Vercel..."
vercel --prod

echo ""
echo "✅ ¡Despliegue completado!"
echo "🌐 Tu sitio estará disponible en la URL proporcionada por Vercel"
