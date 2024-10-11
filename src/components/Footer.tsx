import {useRef, useState} from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { Cormorant_Garamond, Cinzel } from 'next/font/google'

const cormorantGaramond = Cormorant_Garamond({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
})

const cinzel = Cinzel({
    subsets: ['latin'],
    weight: ['400', '700'],
})

export default function Footer() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.3 })
    const [showMessage, setShowMessage] = useState(false)

    const toggleMessage = () => setShowMessage(!showMessage)

    return (
        <footer className="bg-[#f7f0d6] text-[#000000] py-16">
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
                className="container mx-auto px-4"
            >
                <div className="text-center mb-12">
                    <h2 className={`text-4xl md:text-6xl mb-6 ${cinzel.className}`}>DINING IN TORONTO</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    <div className="text-left">
                        <p className={`${cormorantGaramond.className}`}>123 King Street West</p>
                        <p className={`${cormorantGaramond.className}`}>Toronto, ON M5X 1A4</p>
                        <p className={`${cormorantGaramond.className}`}>info@barroma.com</p>
                        <p className={`${cormorantGaramond.className}`}>+1 (416) 555-0123</p>
                    </div>
                    <div className="text-center">
                        <button onClick={toggleMessage} className={`inline-block mb-2 ${cinzel.className} hover:text-[#bdbca0] transition-colors`}>
                            BOOK A TABLE
                        </button>
                    </div>
                    <div className="text-right">
                        <p className={`mb-2 ${cinzel.className}`}>FACEBOOK</p>
                        <p className={`mb-2 ${cinzel.className}`}>INSTAGRAM</p>
                    </div>
                </div>
                <div className="flex justify-between text-sm border-t border-[#000000] pt-4">
                    <p className={`${cormorantGaramond.className}`}>BAR ROMA GROUP MEDIA All Rights Reserved</p>
                    <p className={`${cormorantGaramond.className}`}>Crafted with passion in the heart of Toronto</p>
                </div>
            </motion.div>

            {showMessage && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center text-white z-[103]"
                >
                    <div className="p-6 bg-[#333] rounded-lg text-center">
                        <p className="text-lg mb-4">Please contact Sempre Studios for more information on the available booking options.</p>
                        <p className="text-lg mb-4">Email: hello@semprestudios.com</p>
                        <button
                            className="bg-[#f7f0d6] text-black px-4 py-2 rounded"
                            onClick={toggleMessage}
                        >
                            Close
                        </button>
                    </div>
                </motion.div>
            )}
        </footer>
    )
}