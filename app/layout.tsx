import type { Metadata } from 'next'
import { Orbitron, Poppins, Bebas_Neue } from 'next/font/google'
import './globals.css'

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
  weight: ['400', '700'],
})

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '600', '700'],
})

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  variable: '--font-bebas-neue',
  weight: ['400'],
})

export const metadata: Metadata = {
  title: 'Anid_MV',
  description: 'Página oficial de Anid_MV',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${orbitron.variable} ${poppins.variable} ${bebasNeue.variable} scroll-smooth`}>
      <body className={`font-poppins bg-black text-white`}>
        {children}
      </body>
    </html>
  )
}
