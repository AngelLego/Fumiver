// Base de datos en memoria para desarrollo
// En producción, reemplazar con PostgreSQL o MySQL

class InMemoryDB {
  constructor() {
    this.users = [];
    this.services = [
      {
        id: 1,
        name: 'Fumigación Residencial',
        type: 'residencial',
        description: 'Protección completa para tu hogar',
        base_price: 800,
        price_per_m2: 15,
        target_pests: ['cucarachas', 'hormigas', 'arañas', 'mosquitos'],
        methods: 'Aplicación de gel, nebulización, trampas',
        benefits: 'Sin olor, seguro para mascotas',
        guarantees: 'Garantía de 3 meses',
        active: true
      },
      {
        id: 2,
        name: 'Fumigación Industrial',
        type: 'industrial',
        description: 'Soluciones para grandes espacios',
        base_price: 1500,
        price_per_m2: 12,
        target_pests: ['ratas', 'ratones', 'termitas', 'cucarachas'],
        methods: 'Fumigación térmica, cebos, barreras',
        benefits: 'Certificación sanitaria, reportes detallados',
        guarantees: 'Garantía de 6 meses',
        active: true
      },
      {
        id: 3,
        name: 'Fumigación Empresarial',
        type: 'empresarial',
        description: 'Mantén tu negocio impecable',
        base_price: 1200,
        price_per_m2: 13,
        target_pests: ['moscas', 'cucarachas', 'roedores', 'chinches'],
        methods: 'Tratamientos especializados por sector',
        benefits: 'Horarios flexibles, discreción total',
        guarantees: 'Garantía de 4 meses',
        active: true
      }
    ];
    this.quotations = [];
    this.contacts = [];
    this.gallery = [];
    this.posts = [];
    this.metrics = [];
  }

  // Simular queries de PostgreSQL
  async query(sql, params = []) {
    // Parsear el tipo de query
    const sqlLower = sql.toLowerCase().trim();

    if (sqlLower.startsWith('select')) {
      return this.handleSelect(sql, params);
    } else if (sqlLower.startsWith('insert')) {
      return this.handleInsert(sql, params);
    } else if (sqlLower.startsWith('update')) {
      return this.handleUpdate(sql, params);
    } else if (sqlLower.startsWith('delete')) {
      return this.handleDelete(sql, params);
    }

    return { rows: [] };
  }

  handleSelect(sql, params) {
    if (sql.includes('FROM services')) {
      return { rows: this.services };
    } else if (sql.includes('FROM users')) {
      if (params.length > 0) {
        const user = this.users.find(u => u.email === params[0]);
        return { rows: user ? [user] : [] };
      }
      return { rows: this.users };
    } else if (sql.includes('FROM quotations')) {
      return { rows: this.quotations };
    } else if (sql.includes('FROM contacts')) {
      return { rows: this.contacts };
    }
    return { rows: [] };
  }

  handleInsert(sql, params) {
    if (sql.includes('INTO users')) {
      const newUser = {
        id: this.users.length + 1,
        name: params[0],
        email: params[1],
        password: params[2],
        role: params[3] || 'editor',
        created_at: new Date()
      };
      this.users.push(newUser);
      return { rows: [{ id: newUser.id, name: newUser.name, email: newUser.email, role: newUser.role }] };
    } else if (sql.includes('INTO quotations')) {
      const newQuotation = {
        id: this.quotations.length + 1,
        service_type: params[0],
        area_m2: params[1],
        pest_type: params[2],
        location: params[3],
        urgency: params[4],
        calculated_price: params[5],
        client_name: params[6],
        client_phone: params[7],
        client_email: params[8],
        conversation_log: params[9],
        status: 'pending',
        created_at: new Date()
      };
      this.quotations.push(newQuotation);
      return { rows: [{ id: newQuotation.id }] };
    } else if (sql.includes('INTO contacts')) {
      const newContact = {
        id: this.contacts.length + 1,
        name: params[0],
        phone: params[1],
        email: params[2],
        service_type: params[3],
        message: params[4],
        status: 'new',
        created_at: new Date()
      };
      this.contacts.push(newContact);
      return { rows: [{ id: newContact.id }] };
    }
    return { rows: [{ id: 1 }] };
  }

  handleUpdate(sql, params) {
    return { rows: [] };
  }

  handleDelete(sql, params) {
    return { rows: [] };
  }

  on(event, callback) {
    if (event === 'connect') {
      setTimeout(() => callback(), 100);
    }
  }
}

const db = new InMemoryDB();

console.log('✅ Base de datos en memoria inicializada');

export default db;
