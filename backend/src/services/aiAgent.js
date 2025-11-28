import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const SYSTEM_PROMPT = `Eres un asistente virtual experto en fumigación para una empresa profesional. 
Tu objetivo es ayudar a los clientes a obtener cotizaciones precisas.

Debes recopilar la siguiente información:
1. Tipo de servicio (residencial, industrial, empresarial)
2. Área aproximada en metros cuadrados
3. Tipo de plaga (cucarachas, ratas, termitas, hormigas, etc.)
4. Ubicación
5. Nivel de urgencia (normal, urgente, emergencia)

Sé amable, profesional y eficiente. Haz preguntas claras y específicas.
No inventes precios, solo recopila información.`;

export async function chatWithAgent(messages, conversationHistory = []) {
  try {
    const fullMessages = [
      { role: 'system', content: SYSTEM_PROMPT },
      ...conversationHistory,
      { role: 'user', content: messages }
    ];

    const response = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: fullMessages,
      temperature: 0.7,
      max_tokens: 500,
    });

    return {
      message: response.choices[0].message.content,
      usage: response.usage
    };
  } catch (error) {
    console.error('Error en OpenAI:', error);
    throw new Error('Error al procesar la solicitud con IA');
  }
}

export function calculateQuotation(data) {
  const { serviceType, areaM2, pestType, urgency, location } = data;
  
  // Precios base por tipo de servicio
  const basePrices = {
    residencial: 800,
    industrial: 1500,
    empresarial: 1200
  };

  // Precio por m²
  const pricePerM2 = {
    residencial: 15,
    industrial: 12,
    empresarial: 13
  };

  // Multiplicador por urgencia
  const urgencyMultiplier = {
    normal: 1.0,
    urgente: 1.3,
    emergencia: 1.6
  };

  // Multiplicador por tipo de plaga
  const pestMultiplier = {
    cucarachas: 1.0,
    ratas: 1.2,
    termitas: 1.5,
    chinches: 1.4,
    hormigas: 0.9,
    otros: 1.0
  };

  const basePrice = basePrices[serviceType] || 1000;
  const areaCost = areaM2 * (pricePerM2[serviceType] || 10);
  const urgencyFactor = urgencyMultiplier[urgency] || 1.0;
  const pestFactor = pestMultiplier[pestType] || 1.0;

  const totalPrice = (basePrice + areaCost) * urgencyFactor * pestFactor;

  return {
    basePrice,
    areaCost,
    urgencyFactor,
    pestFactor,
    totalPrice: Math.round(totalPrice),
    breakdown: {
      base: basePrice,
      area: areaCost,
      urgency: urgency,
      pest: pestType
    }
  };
}
