'use client';

import { Navbar } from './Navbar';
import { Hero } from './Hero';
import { Biography } from './Biography';
import { Quotes } from './Quotes';
import { SocialLinks } from './SocialLinks';
import { ContactForm } from './ContactForm';
import { Footer } from './Footer';
import { BandaImportante } from './BandaImportante';
import { LatestSong } from './LatestSong';

export function LayoutClient() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
    
      <Biography />
      <LatestSong />
      <Quotes />
      <BandaImportante />
      <SocialLinks />
      <ContactForm />
      <Footer />
    </main>
  );
}
