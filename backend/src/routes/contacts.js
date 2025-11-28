import express from 'express';
import pool from '../config/database.js';
import { sendEmail } from '../services/email.js';

const router = express.Router();

// Crear nuevo contacto
router.post('/', async (req, res) => {
  try {
    const { name, phone, email, serviceType, message } = req.body;
    
    const result = await pool.query(
      `INSERT INTO contacts (name, phone, email, service_type, message)
       VALUES ($1, $2, $3, $4, $5) RETURNING id`,
      [name, phone, email, serviceType, message]
    );

    // Enviar email de notificación
    await sendEmail({
      to: process.env.ADMIN_EMAIL,
      subject: 'Nuevo contacto desde la web',
      text: `Nombre: ${name}\nTeléfono: ${phone}\nEmail: ${email}\nServicio: ${serviceType}\nMensaje: ${message}`
    });

    res.json({ success: true, contactId: result.rows[0].id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
