'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm p-4"
    >
      <div className="container mx-auto flex justify-between items-center">
        <motion.h1
          whileHover={{ scale: 1.1 }}
          className="font-orbitron text-3xl font-bold text-fucsia animate-glow"
        >
          Anid_MV
        </motion.h1>
        
        <motion.ul
          className="hidden md:flex space-x-8"
          whileHover={{ scale: 1.05 }}
        >
          <motion.li
            whileHover={{ y: -5 }}
            className="cursor-pointer text-xl text-azul hover:text-fucsia transition-colors"
          >
            <Link href="#home">Inicio</Link>
          </motion.li>
          <motion.li
            whileHover={{ y: -5 }}
            className="cursor-pointer text-xl text-azul hover:text-fucsia transition-colors"
          >
            <Link href="#biography">Bio</Link>
          </motion.li>
          <motion.li
            whileHover={{ y: -5 }}
            className="cursor-pointer text-xl text-azul hover:text-fucsia transition-colors"
          >
            <Link href="#latest-song">Latest Song</Link>
          </motion.li>
          <motion.li
            whileHover={{ y: -5 }}
            className="cursor-pointer text-xl text-azul hover:text-fucsia transition-colors"
          >
            <Link href="#quotes">Quotes</Link>
          </motion.li>
          <motion.li
            whileHover={{ y: -5 }}
            className="cursor-pointer text-xl text-azul hover:text-fucsia transition-colors"
          >
            <Link href="#banda">Banda</Link>
          </motion.li>
          <motion.li
            whileHover={{ y: -5 }}
            className="cursor-pointer text-xl text-azul hover:text-fucsia transition-colors"
          >
            <Link href="#contact">Contacto</Link>
          </motion.li>
        </motion.ul>
      </div>
    </motion.nav>
  );
}
