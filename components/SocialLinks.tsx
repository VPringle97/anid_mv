import { motion } from 'framer-motion';
import { FaInstagram, FaSpotify, FaYoutube, FaTwitter, FaTiktok } from 'react-icons/fa';

export function SocialLinks() {
  const socialLinks = [
    { icon: FaInstagram, href: "https://www.instagram.com/anid_mv/", label: "Instagram" },
    { icon: FaSpotify, href: "https://open.spotify.com/artist/0oH1Q4hef06fVvQbNvAjn8", label: "Spotify" },
    { icon: FaYoutube, href: "https://www.youtube.com/@anidmunoz5800", label: "YouTube" },
    { icon: FaTiktok, href: "https://www.tiktok.com/@anidmunoz0", label: "TikTok" }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-fucsia mb-8">
            Sígueme
          </h2>
          <div className="flex justify-center gap-8">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="text-4xl text-azul hover:text-fucsia transition-colors"
                title={link.label}
              >
                <link.icon />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
