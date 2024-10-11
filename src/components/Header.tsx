import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Cinzel } from 'next/font/google'
import { useState, useEffect } from 'react'

const cinzel = Cinzel({
    subsets: ['latin'],
    weight: ['400', '700'],
})

interface HeaderProps {
    toggleMenu: () => void
    isMenuOpen: boolean
    genericHamburgerLine: string
}

export default function Header({ toggleMenu, isMenuOpen, genericHamburgerLine }: HeaderProps) {
    const [isMenuPage, setIsMenuPage] = useState(false)

    useEffect(() => {
        setIsMenuPage(window.location.pathname === '/menu')
    }, [])

    const headerStyle = isMenuPage
        ? "p-6 md:pt-[50px] md:pb-[150px] flex justify-between items-center bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-10-10%20at%202.06.25%E2%80%AFPM-AFl4DsWpjdsxkVRPN6cDlyuLCqL39b.png')] bg-cover bg-center text-[#f7f0d6]"
        : "p-6 flex justify-between items-center bg-transparent text-[#f7f0d6]"

    return (
        <header className={headerStyle}>
            <Link href="/" aria-label="Home">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/o-removebg-preview-wllVCxwiDmtibRmg7IS1q6gvATOqng.png"
                        alt="Bar Roma Logo"
                        width={80}
                        height={80}
                        className={isMenuPage ? "brightness-200" : "brightness-100"}
                    />
                </motion.div>
            </Link>
            <nav className={`hidden md:flex space-x-8 text-sm ${cinzel.className}`}>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <Link href="/menu" className="hover:text-[#bdbca0] transition-colors">MENU</Link>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <Link href="/reservations" className="hover:text-[#bdbca0] transition-colors">RESERVATIONS</Link>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <Link href="/about" className="hover:text-[#bdbca0] transition-colors">ABOUT</Link>
                </motion.div>
            </nav>
            <button
                className="md:hidden z-50 flex flex-col h-12 w-12 justify-center items-center group"
                onClick={toggleMenu}
                aria-label="Toggle menu"
            >
                <div
                    className={`${genericHamburgerLine} ${
                        isMenuOpen
                            ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
                            : "opacity-50 group-hover:opacity-100"
                    }`}
                />
                <div
                    className={`${genericHamburgerLine} ${
                        isMenuOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
                    }`}
                />
                <div
                    className={`${genericHamburgerLine} ${
                        isMenuOpen
                            ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
                            : "opacity-50 group-hover:opacity-100"
                    }`}
                />
            </button>
        </header>
    )
}