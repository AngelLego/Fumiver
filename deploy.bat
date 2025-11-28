@echo off
echo 🚀 Desplegando FUMIVER a Vercel...
echo.

REM Verificar si Vercel CLI está instalado
where vercel >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Vercel CLI no está instalado
    echo 📦 Instalando Vercel CLI...
    npm install -g vercel
)

REM Ir a la carpeta frontend
cd frontend

REM Build del proyecto
echo 🔨 Construyendo el proyecto...
call npm run build

REM Desplegar a Vercel
echo ☁️ Desplegando a Vercel...
call vercel --prod

echo.
echo ✅ ¡Despliegue completado!
echo 🌐 Tu sitio estará disponible en la URL proporcionada por Vercel
pause
