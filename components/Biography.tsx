import Image from 'next/image';
import { motion } from 'framer-motion';

export function Biography() {
  return (
    <section id="biography" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/images/artist-photo.jpg"
              alt="Anid_MV"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
          </div>
          
          <div className="space-y-6">
            <motion.h2
              whileHover={{ scale: 1.05 }}
              className="font-orbitron text-4xl md:text-5xl font-bold text-fucsia"
            >
              Mi Bio
            </motion.h2>
            <p className="text-lg text-texto-gris">
              Soy una artista urbana apasionada por la música y la creatividad. Mi estilo mezcla elementos modernos con raíces tradicionales, creando un sonido único y auténtico.
            </p>
            <p className="text-lg text-texto-gris">
              Mi música busca conectar con las emociones más profundas y transmitir mensajes de empoderamiento y esperanza.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
