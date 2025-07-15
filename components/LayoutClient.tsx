'use client';

import { Navbar } from './Navbar';
import { Hero } from './Hero';
import { Biography } from './Biography';
import { Quotes } from './Quotes';
import { SocialLinks } from './SocialLinks';
import { ContactForm } from './ContactForm';
import { Footer } from './Footer';
import { BandaImportante } from './BandaImportante';

export function LayoutClient() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Biography />
      <Quotes />
      <BandaImportante />
      <SocialLinks />
      <ContactForm />
      <Footer />
    </main>
  );
}
