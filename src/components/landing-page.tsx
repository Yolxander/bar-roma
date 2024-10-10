"use client"

import { useState, useRef } from 'react'
import Link from 'next/link'
import { ChevronDown, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { Cormorant_Garamond, Cinzel } from 'next/font/google'

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '700'],
})

function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
      <footer className="bg-[#f7f0d6] text-[#000000] py-16">
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            className="container mx-auto px-4"
        >
          <div className="text-center mb-12">
            <h2 className={`text-4xl md:text-6xl mb-6 ${cinzel.className}`}>DINING IN TORONTO</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-left">
              <p className={`${cormorantGaramond.className}`}>123 King Street West</p>
              <p className={`${cormorantGaramond.className}`}>Toronto, ON M5X 1A4</p>
              <p className={`${cormorantGaramond.className}`}>info@barroma.com</p>
              <p className={`${cormorantGaramond.className}`}>+1 (416) 555-0123</p>
            </div>
            <div className="text-center">
              <Link href="/reservations" className={`inline-block mb-2 ${cinzel.className} hover:text-[#bdbca0] transition-colors`}>
                BOOK A TABLE
              </Link>
            </div>
            <div className="text-right">
              <p className={`mb-2 ${cinzel.className}`}>FACEBOOK</p>
              <p className={`mb-2 ${cinzel.className}`}>INSTAGRAM</p>
              <p className={`${cinzel.className}`}>PINTEREST</p>
            </div>
          </div>
          <div className="flex justify-between text-sm border-t border-[#000000] pt-4">
            <p className={`${cormorantGaramond.className}`}>BAR ROMA GROUP MEDIA All Rights Reserved</p>
            <p className={`${cormorantGaramond.className}`}>Crafted with passion in the heart of Toronto</p>
          </div>
        </motion.div>
      </footer>
  )
}

function ExecutiveChef() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
      <section className="min-h-screen bg-[#42482b] text-[#f7f0d6] flex items-center">
        <div className="container mx-auto px-4">
          <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row items-center"
          >
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <div className="grid grid-cols-1 gap-8">
                <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-10-10%20at%203.39.40%E2%80%AFPM-oLzypXSPmfYT4zLwjIe198nVU6daJQ.png"
                    alt="6-hour braised lamb shoulder crispy taco"
                    width={500}
                    height={375}
                    className="rounded-lg shadow-lg"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <h3 className={`text-sm uppercase tracking-wider mb-2 ${cinzel.className}`}>Bar Roma Specialties</h3>
              <h2 className={`text-4xl md:text-5xl mb-6 ${cinzel.className}`}>Culinary Delights</h2>
              <div className={`text-lg space-y-6 ${cormorantGaramond.className}`}>
                <p>
                  Dive into our 6-hour braised lamb shoulder crispy tacos with fried avocado and cashew crema. A perfect blend of tender meat and crunchy textures, this dish exemplifies our commitment to innovative, flavorful cuisine.
                </p>
                <p>
                  Join us for happy hour from 5-7pm and experience these culinary masterpieces alongside our carefully curated drink selection.
                </p>
                <div className="mt-8">
                  <Link
                      href="/reservations"
                      className={`inline-flex items-center text-lg hover:text-[#bdbca0] transition-colors ${cinzel.className}`}
                  >
                    Make a reservation <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
  )
}

function NewSection() {
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

function SignatureDish() {
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
              <h3 className={`text-sm uppercase tracking-wider mb-2 ${cinzel.className}`}>Signature dish</h3>
              <h2 className={`text-4xl md:text-5xl mb-4 ${cinzel.className}`}>Whitefish fillet</h2>
              <p className={`text-lg mb-6 ${cormorantGaramond.className}`}>
                Slowly cooked in olive oil, dark fish sauce, olive pesto and toasted hazelnuts, cream of carrot and parsley, cauliflower fried in butter, dill oil.
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

function NextSection() {
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
          <div className={`text-lg md:text-xl space-y-6 ${cormorantGaramond.className}`}>
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

export function LandingPageComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-[#f7f0d6] transition ease transform duration-300`

  return (
      <div className={`${cormorantGaramond.className}`}>
        <div className="min-h-screen bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-10-10%20at%202.06.42%E2%80%AFPM-ErQIjDXO6K2eGaOSUAlRlNRyApNImU.png')] bg-cover bg-center text-[#f7f0d6]">
          <div className="min-h-screen bg-[#000000] bg-opacity-50 backdrop-blur-sm flex flex-col">
            <header className="p-6 flex justify-between items-center">
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
                      className="brightness-200"
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
                    transition={{ duration: 0.5, delay:  0.3 }}
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
            <main className="flex-grow flex flex-col items-center justify-center text-center px-4 mb-12">
              <motion.h1
                  className={`text-4xl md:text-8xl mb-6 leading-tight  ${cinzel.className}`}
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
                Experience Roman hospitality in the heart of Toronto.
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

        <NextSection />
        <SignatureDish />
        <ExecutiveChef />
        <NewSection />
        <Footer />

        <AnimatePresence>
          {isMenuOpen && (
              <motion.div
                  initial={{ opacity: 0, x: '100%' }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: '100%' }}
                  transition={{ type: 'tween', duration: 0.3 }}
                  className="fixed inset-0 bg-[#000000] bg-opacity-90 z-40 flex items-center justify-center"
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