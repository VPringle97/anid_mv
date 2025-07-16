'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export function LatestSong() {
  const [trackId, setTrackId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLatestSong = async () => {
      try {
        const response = await fetch('/api/spotify');
        if (!response.ok) {
          const data = await response.json();
          throw new Error(data.error || 'Failed to fetch latest song');
        }
        const data = await response.json();
        setTrackId(data.trackId);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLatestSong();
  }, []);

  if (isLoading) {
    return (
      <section className="py-20 bg-black/50 text-center">
        <p className="text-texto-gris">Cargando la última canción...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 bg-black/50 text-center">
        <p className="text-red-500">Error: {error}</p>
      </section>
    );
  }

  if (!trackId) {
    return null;
  }

  return (
    <section id="latest-song" className="py-20 bg-black/50">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-fucsia mb-8">
            Mi Último Lanzamiento
          </h2>
          <div className="flex justify-center">
            <iframe
              src={`https://open.spotify.com/embed/track/${trackId}`}
              width="100%"
              height="380"
              frameBorder="0"
              allowTransparency={true}
              allow="encrypted-media"
              className="max-w-lg rounded-lg"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
