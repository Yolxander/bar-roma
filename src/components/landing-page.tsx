'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Cormorant_Garamond, Cinzel } from 'next/font/google'

import Footer from './Footer'
import SignatureDish from './SignatureDish'
import ExecutiveChef from './ExecutiveChef'
import NewSection from './NewSection'
import NextSection from './NextSection'
import HeroSection from './HeroSection'

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export function LandingPageComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-[#f7f0d6] transition ease transform duration-300`

  return (
      <div className={`${cormorantGaramond.className}`}>
        <HeroSection
            toggleMenu={toggleMenu}
            isMenuOpen={isMenuOpen}
            genericHamburgerLine={genericHamburgerLine}
        />

        <NextSection />
        <SignatureDish />
        <ExecutiveChef />
        <NewSection />
        <Footer />

        <AnimatePresence>
          {isMenuOpen && (
              <motion.div
                  initial={{ opacity: 0, x: '100%' }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: '100%' }}
                  transition={{ type: 'tween', duration: 0.3 }}
                  className="fixed inset-0 bg-[#000000] text-[#f7f0d6] bg-opacity-90 z-99 flex items-center justify-center"
              >
                <nav className={`flex flex-col items-center space-y-8 text-2xl ${cinzel.className}`}>
                  <Link href="/menu" className="hover:text-[#bdbca0] transition-colors" onClick={toggleMenu}>MENU</Link>
                  <Link href="/reservations" className="hover:text-[#bdbca0] transition-colors" onClick={toggleMenu}>RESERVATIONS</Link>
                  <Link href="/about" className="hover:text-[#bdbca0] transition-colors" onClick={toggleMenu}>ABOUT</Link>
                </nav>
              </motion.div>
          )}
        </AnimatePresence>
      </div>
  )
}