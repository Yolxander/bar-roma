import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'
import { Cinzel } from 'next/font/google'
import Header from './Header'
import {useState} from "react";

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
    const [showMessage, setShowMessage] = useState(false)

    const toggleMessage = () => setShowMessage(!showMessage)
    return (
        <div className="min-h-screen bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-10-10%20at%202.06.42%E2%80%AFPM-ErQIjDXO6K2eGaOSUAlRlNRyApNImU.png')] bg-cover bg-center text-[#f7f0d6]">
            <div className="min-h-screen bg-[#000000] bg-opacity-50 backdrop-blur-sm flex flex-col">
                <Header toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} genericHamburgerLine={genericHamburgerLine} />
                <main className="flex-grow flex flex-col items-center justify-center text-center px-4 md:mb-12 mb-[180px] z-1 ">
                    <motion.h1
                        className={`text-4xl md:text-8xl mb-6 leading-tight ${cinzel.className}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        BAR ROMA
                    </motion.h1>
                    <motion.p
                        className="md:max-w-lg max-w-[90vw] mb-8 md:text-4xl text-[#dfddc1] text-[20px]"
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
                        <button
                            onClick={toggleMessage}
                            className={`border border-[#f7f0d6] text-[#f7f0d6] px-8 py-3 text-sm hover:bg-[#42482b] hover:border-[#42482b] hover:text-[#f7f0d6] transition-colors ${cinzel.className}`}
                        >
                            RESERVE A TABLE
                        </button>
                    </motion.div>
                </main>
                <div className="p-6 text-center hidden md:flex justify-center">
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
        </div>
    )
}