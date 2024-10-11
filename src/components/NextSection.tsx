import { useRef } from 'react'
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

export default function NextSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.3 })

    return (
        <section id="next-section" className="min-h-screen bg-[#f7f0d6] text-[#000000] flex flex-col justify-center items-center px-4 py-16">
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto text-center"
            >
                <h2 className={`text-4xl md:text-5xl mb-8 ${cinzel.className}`}>
                    Experience the modern twist on Roman cuisine.
                </h2>
                <div className={`text-lg  md:text-xl space-y-6 ${cormorantGaramond.className}`}>
                    <p>
                        Step into Bar Roma, where the heart of Italy meets modern Toronto. Enjoy a vibrant and lively dining experience with handmade pasta, wood-fired pizzas, and an extensive selection of Italian wines, all in a warm, cozy atmosphere.
                    </p>
                    <p>
                        From the rich flavors of traditional dishes like <em>Cacio e Pepe</em> to creative cocktails like the <em>Blackberry Mezcal Sour</em>, Bar Roma blends classic tastes with a contemporary flair, perfect for both casual dining and special occasions.
                    </p>
                </div>
            </motion.div>
        </section>
    )
}
