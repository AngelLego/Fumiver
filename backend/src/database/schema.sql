-- Tabla de usuarios administradores
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  role VARCHAR(20) DEFAULT 'editor',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de servicios
CREATE TABLE services (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  type VARCHAR(50) NOT NULL,
  description TEXT,
  base_price DECIMAL(10,2),
  price_per_m2 DECIMAL(10,2),
  target_pests TEXT[],
  methods TEXT,
  benefits TEXT,
  guarantees TEXT,
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de cotizaciones
CREATE TABLE quotations (
  id SERIAL PRIMARY KEY,
  service_type VARCHAR(50) NOT NULL,
  area_m2 DECIMAL(10,2),
  pest_type VARCHAR(100),
  location VARCHAR(255),
  urgency VARCHAR(50),
  severity_level VARCHAR(50),
  calculated_price DECIMAL(10,2),
  client_name VARCHAR(100),
  client_phone VARCHAR(20),
  client_email VARCHAR(100),
  status VARCHAR(50) DEFAULT 'pending',
  conversation_log JSONB,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de galería
CREATE TABLE gallery (
  id SERIAL PRIMARY KEY,
  title VARCHAR(200),
  description TEXT,
  category VARCHAR(50),
  image_url VARCHAR(500),
  location VARCHAR(200),
  before_after BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de publicaciones/blog
CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  title VARCHAR(200) NOT NULL,
  content TEXT,
  excerpt TEXT,
  image_url VARCHAR(500),
  author_id INTEGER REFERENCES users(id),
  published BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de contactos
CREATE TABLE contacts (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  phone VARCHAR(20),
  email VARCHAR(100),
  service_type VARCHAR(50),
  message TEXT,
  status VARCHAR(50) DEFAULT 'new',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de configuración del agente IA
CREATE TABLE ai_config (
  id SERIAL PRIMARY KEY,
  key VARCHAR(100) UNIQUE NOT NULL,
  value TEXT,
  description TEXT,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de métricas
CREATE TABLE metrics (
  id SERIAL PRIMARY KEY,
  metric_type VARCHAR(50) NOT NULL,
  metric_value JSONB,
  date DATE DEFAULT CURRENT_DATE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Índices para optimización
CREATE INDEX idx_quotations_status ON quotations(status);
CREATE INDEX idx_quotations_created ON quotations(created_at);
CREATE INDEX idx_services_type ON services(type);
CREATE INDEX idx_contacts_status ON contacts(status);
