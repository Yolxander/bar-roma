import { useRef } from 'react'
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
                        <Link href="/reservations" className={`inline-block mb-2 ${cinzel.className} hover:text-[#bdbca0] transition-colors`}>
                            BOOK A TABLE
                        </Link>
                    </div>
                    <div className="text-right">
                        <p className={`mb-2 ${cinzel.className}`}>FACEBOOK</p>
                        <p className={`mb-2 ${cinzel.className}`}>INSTAGRAM</p>
                        <p className={`${cinzel.className}`}>PINTEREST</p>
                    </div>
                </div>
                <div className="flex justify-between text-sm border-t border-[#000000] pt-4">
                    <p className={`${cormorantGaramond.className}`}>BAR ROMA GROUP MEDIA All Rights Reserved</p>
                    <p className={`${cormorantGaramond.className}`}>Crafted with passion in the heart of Toronto</p>
                </div>
            </motion.div>
        </footer>
    )
}