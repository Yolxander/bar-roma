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
    const [showMessage, setShowMessage] = useState(false)

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
    const toggleMessage = () => setShowMessage(!showMessage)

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
                        className="fixed inset-0 bg-[#000000] text-[#f7f0d6] bg-opacity-90  flex items-center justify-center"
                    >
                        <nav className={`flex flex-col items-center space-y-8 text-2xl ${cinzel.className}`}>
                            <Link href="/menu" className="hover:text-[#bdbca0] transition-colors" onClick={toggleMenu}>MENU</Link>
                            <button className="hover:text-[#bdbca0] transition-colors" onClick={toggleMessage}>RESERVATIONS</button>
                            <button className="hover:text-[#bdbca0] transition-colors" onClick={toggleMessage}>ABOUT</button>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>

            {showMessage && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center text-white z-99"
                >
                    <div className="p-6 bg-[#333] rounded-lg text-center">
                        <p className="text-lg mb-4">Please contact Sempre Studios to view this page content.</p>
                        <p className="text-lg mb-4">Email: info@semprestudios.com</p>
                        <button
                            className="bg-[#f7f0d6] text-black px-4 py-2 rounded"
                            onClick={toggleMessage}
                        >
                            Close
                        </button>
                    </div>
                </motion.div>
            )}
        </div>
    )
}
