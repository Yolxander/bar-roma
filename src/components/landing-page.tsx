'use client'

import { useState } from 'react'
import { motion} from 'framer-motion'
import { Cormorant_Garamond } from 'next/font/google'

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
