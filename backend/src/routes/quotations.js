import express from 'express';
import { chatWithAgent, calculateQuotation } from '../services/aiAgent.js';
import pool from '../config/database.js';

const router = express.Router();

// Chat con el agente IA
router.post('/chat', async (req, res) => {
  try {
    const { message, conversationHistory } = req.body;
    const response = await chatWithAgent(message, conversationHistory);
    res.json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Calcular cotización
router.post('/calculate', async (req, res) => {
  try {
    const quotationData = req.body;
    const calculation = calculateQuotation(quotationData);
    
    // Guardar en base de datos
    const result = await pool.query(
      `INSERT INTO quotations (service_type, area_m2, pest_type, location, urgency, 
       calculated_price, client_name, client_phone, client_email, conversation_log)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING id`,
      [
        quotationData.serviceType,
        quotationData.areaM2,
        quotationData.pestType,
        quotationData.location,
        quotationData.urgency,
        calculation.totalPrice,
        quotationData.clientName,
        quotationData.clientPhone,
        quotationData.clientEmail,
        JSON.stringify(quotationData.conversationLog || [])
      ]
    );

    res.json({ ...calculation, quotationId: result.rows[0].id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obtener todas las cotizaciones
router.get('/', async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT * FROM quotations ORDER BY created_at DESC LIMIT 50'
    );
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
