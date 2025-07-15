'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaInstagram } from 'react-icons/fa';

const banda = [
  {
    id: 1,
    name: 'Productor Estrella',
    handle: '@productor_estrella',
    imageUrl: '/images/banda/productor.jpg', // Placeholder image
    profileUrl: 'https://instagram.com/productor_estrella',
  },
  {
    id: 2,
    name: 'DJ Ritmo',
    handle: '@dj_ritmo',
    imageUrl: '/images/banda/dj.jpg', // Placeholder image
    profileUrl: 'https://instagram.com/dj_ritmo',
  },
  {
    id: 3,
    name: 'Visuales Creativos',
    handle: '@visuales_creativos',
    imageUrl: '/images/banda/visuales.jpg', // Placeholder image
    profileUrl: 'https://instagram.com/visuales_creativos',
  },
];

export function BandaImportante() {
  return (
    <section id="banda" className="py-20 bg-black/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-fucsia mb-12">
            Banda Importante
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {banda.map((miembro) => (
              <motion.a
                key={miembro.id}
                href={miembro.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-fondo-negro bg-opacity-50 p-6 rounded-lg border border-gray-800 hover:border-morado transition-colors duration-300"
                whileHover={{ y: -10 }}
              >
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <Image
                    src={miembro.imageUrl}
                    alt={`Foto de ${miembro.name}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
                <h3 className="text-xl font-bold text-texto-gris">{miembro.name}</h3>
                <p className="text-azul flex items-center justify-center gap-2">
                  <FaInstagram />
                  {miembro.handle}
                </p>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
