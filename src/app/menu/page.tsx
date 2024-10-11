'use client'

import { useState } from 'react'
import { Cinzel, Cormorant_Garamond } from 'next/font/google'
import { AnimatePresence, motion } from "framer-motion"
import Link from "next/link"
import Header from '../../components/Header'
import Footer from "@/components/Footer";
const cinzel = Cinzel({
    subsets: ['latin'],
    weight: ['400', '700'],
})

const cormorantGaramond = Cormorant_Garamond({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
})

type MenuItem = {
    name: string
    price: string
    description: string
    category: string
}

const menuItems: MenuItem[] = [
    // Appetizers
    {
        name: "Cajun Zucchini Chips",
        price: "$13.00",
        description: "green olive yogurt, cajun seasoning",
        category: "Appetizers"
    },
    {
        name: "Roma Keftedes",
        price: "$15.00",
        description: "zucchini, goat cheese, roasted sweet pepper sauce, tahini yogurt",
        category: "Appetizers"
    },
    {
        name: "Fritto Misto",
        price: "$17.00",
        description: "calamari, shrimp, salmon, pickled anaheim chili, sambal mayo",
        category: "Appetizers"
    },
    {
        name: "Crispy Salmon Cucumber roll",
        price: "$18.00",
        description: "lemon avocado smash, watermelon radish, ginger & sesame oil, chili crisp (df)",
        category: "Appetizers"
    },
    {
        name: "Oysters",
        price: "$24.00",
        description: "Raw - Half dz.",
        category: "Appetizers"
    },
    {
        name: "Char Butter - 3 pc",
        price: "$14.00",
        description: "charred scallion butter, crispy panko, pecorino cheese",
        category: "Appetizers"
    },
    // Main Courses
    {
        name: "Lamb Piri Tacos",
        price: "$19.00",
        description: "6-hr braised lamb shoulder, crisp fried avocado, pickled shallots, chili crisp, cashew crema (df)",
        category: "Main Courses"
    },
    {
        name: "Lamb Polpette",
        price: "$22.00",
        description: "lamb mixed with roasted eggplant, sweet tomato sauce, goat cheese, fresh herbs",
        category: "Main Courses"
    },
    {
        name: "Black Tiger Shrimp",
        price: "$27.00",
        description: "grilled shrimp, lemon, garlic butter (gf)",
        category: "Main Courses"
    },
    {
        name: "Pomegranate Chicken Skewers",
        price: "$20.00",
        description: "chicken marinated in roasted sweet pepper sauce, pomegranate seeds, greek yogurt",
        category: "Main Courses"
    },
    {
        name: "Grilled Octopus",
        price: "$27.00",
        description: "chili cilantro vinaigrette, celeriac puree",
        category: "Main Courses"
    },
    // Cocktails
    {
        name: "Lavender 75",
        price: "$19.00",
        description: "Gin, lavender & butterfly pea flower syrup, champagne. Garnish: crushed lavender and butterfly pea flower",
        category: "Cocktails"
    },
    {
        name: "Chocolate Almond Espresso Martini",
        price: "$18.00",
        description: "White rum, orgeat, chocolate bitters, espresso. Garnish: chocolate swirl",
        category: "Cocktails"
    },
    {
        name: "Roasted Pineapple Caiprinha",
        price: "$17.00",
        description: "",
        category: "Cocktails"
    },
    {
        name: "Cardamom Espresso Martini",
        price: "$21.00",
        description: "1800 anejo tequila, kahlua, cardamom syrup, espresso. Garnish: cardamom pods",
        category: "Cocktails"
    },
    {
        name: "The Bitter Mai Tai",
        price: "$18.00",
        description: "Dark rum, orgeat, campari, cointreau, lime juice. Garnish: crushed ice, pineapple leaf, dehydrated lime, tiki glass",
        category: "Cocktails"
    },
    // Wine
    {
        name: "Primitivo Puglia",
        price: "$13.00",
        description: "6oz: $13.00, 9oz: $18.00",
        category: "Wine"
    },
    {
        name: "La Vitto",
        price: "$13.00",
        description: "6oz: $13.00, 9oz: $18.00",
        category: "Wine"
    },
    {
        name: "Mont Rubi",
        price: "$80.00",
        description: "Bottle",
        category: "Wine"
    },
    {
        name: "Feinberg Riesling",
        price: "$60.00",
        description: "Bottle",
        category: "Wine"
    },
    {
        name: "Diwald Zweigelt Rose",
        price: "$75.00",
        description: "Bottle",
        category: "Wine"
    },
    // Soft Drinks
    {
        name: "Coke",
        price: "$4.00",
        description: "",
        category: "Soft Drinks"
    },
    {
        name: "Coke Zero",
        price: "$4.00",
        description: "",
        category: "Soft Drinks"
    },
    {
        name: "Ginger Ale",
        price: "$4.00",
        description: "",
        category: "Soft Drinks"
    },
    {
        name: "Tonic Water",
        price: "$4.00",
        description: "",
        category: "Soft Drinks"
    },
    {
        name: "Sprite",
        price: "$4.00",
        description: "",
        category: "Soft Drinks"
    },
]

export default function MenuPage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

    const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-[#f7f0d6] transition ease transform duration-300`
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const categories = Array.from(new Set(menuItems.map(item => item.category)))

    const filteredItems = selectedCategory
        ? menuItems.filter(item => item.category === selectedCategory)
        : menuItems

    return (
        <div className={`min-h-screen bg-[#000000] text-[#f7f0d6] z-1 ${cormorantGaramond.className}`}>
            {/* Pass toggleMenu and isMenuOpen to Header */}
            <Header toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} genericHamburgerLine={genericHamburgerLine} />

            <main className="container mx-auto px-4 py-8">
                <h1 className={`text-4xl md:text-5xl text-center mb-8 ${cinzel.className}`}>Our Menu</h1>

                <div className="mb-8 flex flex-wrap justify-center gap-4">
                    <button
                        onClick={() => setSelectedCategory(null)}
                        className={`px-4 py-2 rounded ${selectedCategory === null ? 'bg-[#f7f0d6] text-[#000000]' : 'bg-[#000000] text-[#f7f0d6] border border-[#f7f0d6]'}`}
                    >
                        All
                    </button>
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-2 rounded ${selectedCategory === category ? 'bg-[#f7f0d6] text-[#000000]' : 'bg-[#000000] text-[#f7f0d6] border border-[#f7f0d6]'}`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="space-y-8">
                    {filteredItems.map((item, index) => (
                        <div key={index} className="flex justify-between items-start">
                            <div>
                                <h3 className="text-xl font-semibold">{item.name}</h3>
                                <p>{item.description}</p>
                            </div>
                            <span className="text-lg">{item.price}</span>
                        </div>
                    ))}
                </div>
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