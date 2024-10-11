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
                    Exceptional dining at exceptional locations.
                </h2>
                <div className={`text-lg  md:text-xl space-y-6 ${cormorantGaramond.className}`}>
                    <p>
                        Foodie heaven awaits you in Toronto, where five-star restaurants sit side by side with traditional taverns, serving the freshest and tastiest cuisine. Our selection of signature restaurants offers contemporary Canadian restaurants serving modern interpretations of traditional
                    </p>
                    <p>
                        Canadian dishes, as well as restaurants serving international cuisine made with local ingredients in a number of the most memorable locations you can imagine.
                    </p>
                </div>
            </motion.div>
        </section>
    )
}