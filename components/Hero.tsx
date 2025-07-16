'use client';

import { motion } from 'framer-motion';
import { FaYoutube } from 'react-icons/fa';

export function Hero() {
  const youtubeUrl = 'https://www.youtube.com/embed/eTC7VaH2jFw';

  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0 overflow-hidden">
        <a 
          href="https://www.youtube.com/watch?v=eTC7VaH2jFw" 
          target="_blank" 
          rel="noopener noreferrer"
          className="absolute bottom-4 right-4 z-20 bg-black/60 hover:bg-red-600 transition-colors p-3 rounded-full text-white text-2xl"
          aria-label="Ver video en YouTube"
        >
          <FaYoutube />
        </a>
        <iframe
          src={youtubeUrl + '?autoplay=1&mute=1&loop=1&playlist=eTC7VaH2jFw'}
          title="Video de fondo"
          allow="autoplay; encrypted-media"
          allowFullScreen
          className="w-full h-full scale-125"
          frameBorder="0"
        />
      </div>
      
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative text-center z-10"
      >
        <h1 className="font-orbitron text-6xl md:text-8xl font-bold text-fucsia mb-4">
          Que show mi people
        </h1>
        <p className="text-2xl md:text-4xl text-texto-gris">
          Espero que les esté gustando este rollo
        </p>
      </motion.div>
    </section>
  );
}
