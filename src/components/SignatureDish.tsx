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

export default function SignatureDish() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.3 })

    return (
        <section className="min-h-screen bg-[#000000] text-[#f7f0d6] flex items-center py-16">
            <div className="container mx-auto px-4">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col md:flex-row items-center"
                >
                    <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                        <h3 className={`text-sm uppercase tracking-wider mb-2 ${cinzel.className}`}>Signature Cocktail</h3>
                        <h2 className={`text-4xl md:text-5xl mb-4 ${cinzel.className}`}>Pineapple Caipirinha</h2>
                        <p className={`text-lg mb-6 ${cormorantGaramond.className}`}>
                            A refreshing twist on the classic caipirinha, this cocktail brings tropical vibes with every sip. Fresh pineapple meets zesty lime and sugarcane rum for a new wave of flavor, topped with a grilled pineapple garnish for the perfect finish.
                        </p>
                        <Link
                            href="/menu"
                            className={`inline-flex items-center text-lg hover:text-[#bdbca0] transition-colors ${cinzel.className}`}
                        >
                            View menu <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </div>
                    <div className="md:w-1/2">
                        <Image
                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-10-10%20at%203.28.25%E2%80%AFPM-uikruYcPUtTf5ume5XoFtfCloHhvBx.png"
                            alt="Signature cocktail with grilled pineapple garnish"
                            width={600}
                            height={400}
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
