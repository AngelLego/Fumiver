# Guía de Instalación y Configuración

## Requisitos Previos

- Node.js 18+ 
- PostgreSQL 14+
- Cuenta de OpenAI (para el agente IA)

## Instalación

### 1. Instalar dependencias

```bash
npm install
```

### 2. Configurar Base de Datos

Crear base de datos PostgreSQL:

```sql
CREATE DATABASE fumigacion_db;
```

Ejecutar el schema:

```bash
psql -U postgres -d fumigacion_db -f backend/src/database/schema.sql
```

### 3. Configurar Variables de Entorno

Copiar el archivo de ejemplo:

```bash
cp backend/.env.example backend/.env
```

Editar `backend/.env` con tus credenciales:

```env
PORT=5000
DB_HOST=localhost
DB_PORT=5432
DB_NAME=fumigacion_db
DB_USER=postgres
DB_PASSWORD=tu_password

JWT_SECRET=genera_un_secret_seguro
OPENAI_API_KEY=tu_api_key_de_openai

SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=tu_email@gmail.com
SMTP_PASS=tu_app_password
```

### 4. Iniciar el Proyecto

Modo desarrollo (frontend + backend):

```bash
npm run dev
```

O por separado:

```bash
# Terminal 1 - Backend
npm run dev:backend

# Terminal 2 - Frontend
npm run dev:frontend
```

## Acceso

- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## Crear Usuario Administrador

```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Admin",
    "email": "admin@fumipro.com",
    "password": "tu_password_seguro",
    "role": "admin"
  }'
```

## Estructura de Carpetas

```
/
├── frontend/          # React + Vite
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.jsx
│   └── package.json
├── backend/           # Node.js + Express
│   ├── src/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── middleware/
│   │   └── server.js
│   └── package.json
└── package.json       # Root workspace
```

## Próximos Pasos

1. Personalizar colores y branding en `frontend/tailwind.config.js`
2. Configurar integración con redes sociales
3. Agregar imágenes reales a la galería
4. Configurar WhatsApp Business API
5. Implementar panel administrativo
