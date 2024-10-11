import Link from 'next/link'
import Image from 'next/image'
import {AnimatePresence, motion} from 'framer-motion'
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
    const [showMessage, setShowMessage] = useState(false)

    useEffect(() => {
        setIsMenuPage(window.location.pathname === '/menu')
    }, [])

    const toggleMessage = () => setShowMessage(!showMessage)

    const headerStyle = isMenuPage
        ? " md:px-14 px-1 py-6  md:pt-[50px] md:pb-[100px] flex justify-between items-center bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-10-10%20at%202.06.25%E2%80%AFPM-AFl4DsWpjdsxkVRPN6cDlyuLCqL39b.png')] bg-cover bg-center text-[#f7f0d6]"
        : " md:px-14 px-1 py-6  flex justify-between items-center bg-transparent text-[#f7f0d6]"

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
                    <button className="hover:text-[#bdbca0] transition-colors" onClick={toggleMessage}>RESERVATIONS</button>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <button className="hover:text-[#bdbca0] transition-colors" onClick={toggleMessage}>ABOUT</button>
                </motion.div>
            </nav>

            <button
                className="md:hidden z-[101] flex flex-col h-12 w-12 justify-center items-center group"
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

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'tween', duration: 0.3 }}
                        className="fixed inset-0 bg-[#000000] text-[#f7f0d6] bg-opacity-90  flex items-center justify-center z-[100] "
                    >
                        <nav className={`flex flex-col items-center space-y-8 text-2xl ${cinzel.className}`}>
                            <Link href="/" className="hover:text-[#bdbca0] transition-colors" onClick={toggleMenu}>HOME</Link>
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
                    className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center text-white z-[103]"
                >
                    <div className="p-6 bg-[#333] rounded-lg text-center">
                        <p className="text-lg mb-4">Please contact Sempre Studios to view this page content.</p>
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
        </header>
    )
}
