'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const quotes = [
  {
    text: "La música es mi forma de expresar lo que las palabras no pueden decir",
    color: "text-neon-pink"
  },
  {
    text: "Cada nota es un pedazo de mi alma",
    color: "text-neon-green"
  },
  {
    text: "La música urbana es mi voz, mi identidad",
    color: "text-neon-blue"
  }
];

export function Quotes() {
  const [currentQuote, setCurrentQuote] = useState(0);

  return (
    <section id="quotes" className="py-20 bg-black/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-pink-500 mb-8">
            Mis Frases
          </h2>
          <AnimatePresence mode="wait">
            <motion.p
              key={currentQuote}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className={`font-bebas-neue text-4xl md:text-5xl tracking-wider ${quotes[currentQuote].color}`}
            >
              "{quotes[currentQuote].text}"
            </motion.p>
          </AnimatePresence>
          <button
            onClick={() => setCurrentQuote((prev) => (prev + 1) % quotes.length)}
            className="mt-8 px-8 py-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors"
          >
            Siguiente
          </button>
        </motion.div>
      </div>
    </section>
  );
}
