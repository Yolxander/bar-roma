'use client'

import { useState } from 'react';
import { Cinzel, Cormorant_Garamond } from 'next/font/google'
import Header from '../../components/Header'
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Footer from "@/components/Footer";

const cinzel = Cinzel({
    subsets: ['latin'],
    weight: ['400', '700'],
})

const cormorantGaramond = Cormorant_Garamond({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
})

export default function MenuPage() {
    // Use useState to manage the menu open/close state
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Function to toggle menu open/close
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);  // Toggle between true and false
    }

    const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-[#f7f0d6] transition ease transform duration-300`

    return (
        <div className={`min-h-screen bg-[#000000] text-[#f7f0d6] z-1 ${cormorantGaramond.className}`}>
            {/* Pass toggleMenu and isMenuOpen to Header */}
            <Header toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} genericHamburgerLine={genericHamburgerLine} />

            <main className="container mx-auto px-4 py-8">
                <h1 className={`text-4xl md:text-5xl text-center mb-8 ${cinzel.className}`}>Our Menu</h1>

                <section className="mb-12">
                    <h2 className={`text-3xl mb-6 ${cinzel.className}`}>Appetizers</h2>
                    <div className="space-y-4">
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="text-xl font-semibold">Cajun Zucchini Chips</h3>
                                <p>green olive yogurt, cajun seasoning</p>
                            </div>
                            <span className="text-lg">$13.00</span>
                        </div>
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="text-xl font-semibold">Roma Keftedes</h3>
                                <p>zucchini, goat cheese, roasted sweet pepper sauce, tahini yogurt</p>
                            </div>
                            <span className="text-lg">$15.00</span>
                        </div>
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="text-xl font-semibold">Fritto Misto</h3>
                                <p>calamari, shrimp, salmon, pickled anaheim chili, sambal mayo</p>
                            </div>
                            <span className="text-lg">$17.00</span>
                        </div>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className={`text-3xl mb-6 ${cinzel.className}`}>Main Courses</h2>
                    <div className="space-y-4">
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="text-xl font-semibold">Lamb Piri Tacos</h3>
                                <p>6-hr braised lamb shoulder, crisp fried avocado, pickled shallots, chili crisp, cashew crema (df)</p>
                            </div>
                            <span className="text-lg">$19.00</span>
                        </div>
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="text-xl font-semibold">Grilled Octopus</h3>
                                <p>chili cilantro vinaigrette, celeriac puree</p>
                            </div>
                            <span className="text-lg">$27.00</span>
                        </div>
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="text-xl font-semibold">Pomegranate Chicken Skewers</h3>
                                <p>chicken marinated in roasted sweet pepper sauce, pomegranate seeds, greek yogurt</p>
                            </div>
                            <span className="text-lg">$20.00</span>
                        </div>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className={`text-3xl mb-6 ${cinzel.className}`}>Drinks</h2>
                    <div className="space-y-4">
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="text-xl font-semibold">Lavender 75</h3>
                                <p>Gin, lavender & butterfly pea flower syrup, champagne</p>
                            </div>
                            <span className="text-lg">$19.00</span>
                        </div>
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="text-xl font-semibold">Chocolate Almond Espresso Martini</h3>
                                <p>White rum, orgeat, chocolate bitters, espresso</p>
                            </div>
                            <span className="text-lg">$18.00</span>
                        </div>
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="text-xl font-semibold">Cardamom Espresso Martini</h3>
                                <p>1800 anejo tequila, kahlua, cardamom syrup, espresso</p>
                            </div>
                            <span className="text-lg">$21.00</span>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'tween', duration: 0.3 }}
                        className="fixed inset-0 bg-[#000000] text-[#f7f0d6] bg-opacity-90 z-1 flex items-center justify-center"
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
