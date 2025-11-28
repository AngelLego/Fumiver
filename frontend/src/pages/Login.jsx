import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Lock, Mail, Eye, EyeOff, LogIn, Shield } from 'lucide-react';
import fumiverLogo from '../img/FUMIVER LOGO.png';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Cargar jQuery si no está disponible
    if (!window.jQuery) {
      const script = document.createElement('script');
      script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const handleLogin = () => {
    const vv_ENTORNO = "app"; // app => PRODUCCIÓN, uat => TEST (PRUEBAS)
    const vv_email = email;
    const vv_password = password;

    if (vv_email.length === 0) {
      alert('Email es campo obligatorio.');
      return;
    }
    
    if (vv_password.length === 0) {
      alert('Password es campo obligatorio.');
      return;
    }

    setIsLoading(true);

    // Usar fetch en lugar de jQuery para mejor compatibilidad con React
    fetch(`https://${vv_ENTORNO}.rupipest.com/api/users/sign_in`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: {
          email: vv_email,
          password: vv_password
        }
      })
    })
    .then(response => response.json())
    .then(datos => {
      setIsLoading(false);
      if (datos.success === true || datos.success === "true") {
        const BASE_URL = `https://${vv_ENTORNO}.rupipest.com/users/sign_in`;
        const url = `${BASE_URL}?email=${vv_email}&password=${vv_password}&autologin=true`;
        window.location.href = url;
      } else {
        alert(datos.message || 'Error al iniciar sesión');
      }
    })
    .catch(error => {
      setIsLoading(false);
      console.error('Error:', error);
      alert('Error al conectar con el servidor. Por favor, intenta de nuevo.');
    });
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-500 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-md w-full space-y-8 relative z-10"
      >
        {/* Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 px-8 py-10 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <motion.div
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="h-full w-full bg-gradient-to-r from-transparent via-white to-transparent"
              />
            </div>
            
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <img
                src={fumiverLogo}
                alt="FUMIVER"
                className="h-20 mx-auto mb-4 drop-shadow-2xl"
              />
              <h2 className="text-3xl font-bold text-white mb-2">
                Iniciar Sesión
              </h2>
              <p className="text-white/90">
                Panel de Administración
              </p>
            </motion.div>
          </div>

          {/* Form */}
          <div className="px-8 py-10">
            <div className="space-y-6">
              {/* Email Input */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Correo Electrónico
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="block w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-400"
                    placeholder="tu@email.com"
                  />
                </div>
              </motion.div>

              {/* Password Input */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                  Contraseña
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="block w-full pl-12 pr-12 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-400"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors" />
                    )}
                  </button>
                </div>
              </motion.div>

              {/* Login Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <button
                  id="btnLogin"
                  onClick={handleLogin}
                  disabled={isLoading}
                  className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-bold py-4 px-6 rounded-xl hover:shadow-xl hover:shadow-primary-500/50 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isLoading ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                      <span>Iniciando sesión...</span>
                    </>
                  ) : (
                    <>
                      <LogIn className="h-5 w-5" />
                      <span>Iniciar Sesión</span>
                    </>
                  )}
                </button>
              </motion.div>
            </div>

            {/* Security Notice */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-8 pt-6 border-t border-gray-200"
            >
              <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                <Shield className="h-4 w-4 text-primary-600" />
                <span>Conexión segura con RupiPest</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Footer Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-center"
        >
          <p className="text-sm text-gray-600">
            ¿Problemas para acceder?{' '}
            <a href="tel:2721037226" className="text-primary-600 font-semibold hover:text-primary-700 transition-colors">
              Contacta soporte
            </a>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
