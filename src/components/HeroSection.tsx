import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'
import { Cinzel } from 'next/font/google'
import Header from './Header'

const cinzel = Cinzel({
    subsets: ['latin'],
    weight: ['400', '700'],
})

interface HeroSectionProps {
    toggleMenu: () => void
    isMenuOpen: boolean
    genericHamburgerLine: string
}

export default function HeroSection({ toggleMenu, isMenuOpen, genericHamburgerLine }: HeroSectionProps) {
    return (
        <div className="min-h-screen bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-10-10%20at%202.06.42%E2%80%AFPM-ErQIjDXO6K2eGaOSUAlRlNRyApNImU.png')] bg-cover bg-center text-[#f7f0d6]">
            <div className="min-h-screen bg-[#000000] bg-opacity-50 backdrop-blur-sm flex flex-col">
                <Header toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} genericHamburgerLine={genericHamburgerLine} />
                <main className="flex-grow flex flex-col items-center justify-center text-center px-4 mb-12 z-[-1]">
                    <motion.h1
                        className={`text-4xl md:text-8xl mb-6 leading-tight ${cinzel.className}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        BAR ROMA
                    </motion.h1>
                    <motion.p
                        className="md:max-w-lg max-w-md mb-8 md:text-4xl text-[#dfddc1]"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        Experience the enchanting midnight garden vibe
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                    >
                        <Link
                            href="/reservations"
                            className={`border border-[#f7f0d6] text-[#f7f0d6] px-8 py-3 text-sm hover:bg-[#42482b] hover:border-[#42482b] hover:text-[#f7f0d6] transition-colors ${cinzel.className}`}
                        >
                            RESERVE A TABLE
                        </Link>
                    </motion.div>
                </main>
                <div className="p-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="flex flex-col items-center"
                    >
                        <Link
                            href="#next-section"
                            className={`text-sm hover:text-[#bdbca0] transition-colors ${cinzel.className}`}
                        >
                            Continue
                        </Link>
                        <ChevronDown className="mt-2 w-4 h-4" />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}