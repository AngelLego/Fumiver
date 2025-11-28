import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Bot, User } from 'lucide-react';

export default function AIQuotation() {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: '¡Hola! Soy FumIA 🐞, tu asistente inteligente de FUMIVER. Te ayudaré a obtener una cotización personalizada en minutos. ¿Qué tipo de servicio necesitas: residencial, industrial o empresarial?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    // Simulación de respuesta (conectar con backend)
    setTimeout(() => {
      const response = { 
        role: 'assistant', 
        content: 'Perfecto. ¿Cuál es el área aproximada en metros cuadrados que necesitas fumigar?' 
      };
      setMessages(prev => [...prev, response]);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="py-8 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-primary-500 to-primary-600 text-white p-6 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <motion.div
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="h-full w-full bg-gradient-to-r from-transparent via-white to-transparent"
              />
            </div>
            <div className="relative flex items-center gap-3">
              <motion.img
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                src="/src/img/favicon.png"
                alt="FumIA"
                className="w-12 h-12"
              />
              <div>
                <h1 className="text-2xl font-bold">FumIA - Asistente Inteligente</h1>
                <p className="text-white/90 mt-1">Tu cotización personalizada en minutos</p>
              </div>
            </div>
          </div>

          <div className="h-96 overflow-y-auto p-6 space-y-4">
            {messages.map((msg, index) => (
              <div key={index} className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : ''}`}>
                {msg.role === 'assistant' && (
                  <div className="flex-shrink-0">
                    <Bot className="h-8 w-8 text-primary" />
                  </div>
                )}
                <div className={`max-w-xs md:max-w-md p-4 rounded-lg ${
                  msg.role === 'user' 
                    ? 'bg-primary text-white' 
                    : 'bg-gray-100 text-gray-900'
                }`}>
                  {msg.content}
                </div>
                {msg.role === 'user' && (
                  <div className="flex-shrink-0">
                    <User className="h-8 w-8 text-gray-400" />
                  </div>
                )}
              </div>
            ))}
            {loading && (
              <div className="flex gap-3">
                <Bot className="h-8 w-8 text-primary" />
                <div className="bg-gray-100 p-4 rounded-lg">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="border-t p-4">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Escribe tu mensaje..."
                className="flex-grow px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                onClick={handleSend}
                disabled={loading}
                className="btn-primary flex items-center gap-2"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
