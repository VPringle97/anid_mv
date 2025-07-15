import { motion } from 'framer-motion';

export function Footer() {
  return (
    <footer className="py-10 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-gray-400 mb-4">
            © 2025 Anid_MV. Todos los derechos reservados.
          </p>
          <div className="flex justify-center space-x-4">
            <motion.a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              className="text-gray-400 hover:text-pink-500 transition-colors"
            >
              Términos de Uso
            </motion.a>
            <motion.a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              className="text-gray-400 hover:text-pink-500 transition-colors"
            >
              Política de Privacidad
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
