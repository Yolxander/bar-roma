import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
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

export default function NewSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.3 })

    return (
        <section className="min-h-screen bg-[#42482b] text-[#f7f0d6] flex items-center pb-12">
            <div className="container mx-auto px-4">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col md:flex-row-reverse items-center"
                >
                    <div className="md:w-1/2 mb-8 md:mb-0 md:pl-8">
                        <div className="grid grid-cols-1 gap-8">
                            <Image
                                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-10-10%20at%203.39.20%E2%80%AFPM-GcdF4t7RKqjfYS4e18X69V5E3XDzvX.png"
                                alt="Pomegranate marinated Chicken skewers"
                                width={500}
                                height={375}
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <h3 className={`text-sm uppercase tracking-wider mb-2 ${cinzel.className}`}>Signature Dish</h3>
                        <h2 className={`text-4xl md:text-5xl mb-6 ${cinzel.className}`}>Pomegranate Chicken</h2>
                        <div className={`text-lg space-y-6 ${cormorantGaramond.className}`}>
                            <p>
                                Savor our pomegranate marinated chicken skewers, grilled to perfection and served with a vibrant pomegranate reduction. This dish showcases our dedication to combining traditional techniques with exciting flavor profiles.
                            </p>
                            <p>
                                Experience the perfect balance of sweet and savory, with tender chicken infused with the tangy notes of pomegranate. Our chefs have crafted this dish to delight your palate and showcase the best of our culinary expertise.
                            </p>
                            <div className="mt-8">
                                <Link
                                    href="/menu"
                                    className={`inline-flex items-center text-lg hover:text-[#bdbca0] transition-colors ${cinzel.className}`}
                                >
                                    Explore our menu <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}