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
            © {new Date().getFullYear()} Anid_MV. Todos los derechos reservados.
          </p>
       
        </motion.div>
      </div>
    </footer>
  );
}
