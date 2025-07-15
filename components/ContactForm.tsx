'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log('Formulario enviado:', formData);
  };

  return (
    <section id="contact" className="py-20 bg-black/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-fucsia mb-8 text-center">
            Contáctame
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Nombre"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full p-3 bg-fondo-negro bg-opacity-50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-verde"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full p-3 bg-fondo-negro bg-opacity-50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-verde"
              />
            </div>
            <div>
              <textarea
                rows={4}
                placeholder="Mensaje"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full p-3 bg-fondo-negro bg-opacity-50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-verde"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 px-6 bg-fucsia hover:bg-opacity-80 rounded-lg font-semibold transition-colors text-white"
            >
              Enviar Mensaje
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
