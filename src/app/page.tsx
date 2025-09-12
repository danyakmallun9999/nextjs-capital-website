'use client';

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';
import Image from 'next/image';
import ThreeBackground from './components/ThreeBackground';
import { ParallaxSection } from './components/ParallaxSection';
import { AnimatedText } from './components/AnimatedText';

export default function CryptoVCLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const { scrollYProgress } = useScroll();
  const springScrollProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const portfolioAssets = [
    { name: 'Bitcoin', symbol: 'BTC', description: 'Digital Gold & Store of Value', logo: '/images/bitcoin-btc-logo.png' },
    { name: 'Ethereum', symbol: 'ETH', description: 'Smart Contract Platform', logo: '/images/ethereum-eth-logo.png' },
    { name: 'BNB', symbol: 'BNB', description: 'Binance Ecosystem Token', logo: '/images/bnb-bnb-logo.png' },
    { name: 'Story Protocol', symbol: 'STORY', description: 'IP Infrastructure Layer', logo: '/images/story-protocol.png' }
  ];



  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      <ThreeBackground />
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 pt-4 transition-all duration-300 border-b ${
        isScrolled 
          ? 'bg-black/80 backdrop-blur-md border-gray-800/50' 
          : 'bg-transparent border-transparent'
      }`}>
        <div className="w-full px-8 sm:px-12 lg:px-16 xl:px-20">
          <div className="flex items-center justify-between h-20">
            <div className="text-3xl font-bold text-white">
              Dany Capital
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-lg text-white hover:text-white transition-colors smooth-scroll">Philosophy</a>
              <a href="#investment" className="text-lg text-white hover:text-white transition-colors smooth-scroll">Investment</a>
              <a href="#portfolio" className="text-lg text-white hover:text-white transition-colors smooth-scroll">My Holdings</a>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-md border-b border-gray-800/50">
            <div className="px-6 py-6 space-y-6">
               <a href="#about" className="block text-lg text-white hover:text-white smooth-scroll">About</a>
               <a href="#investment" className="block text-lg text-white hover:text-white smooth-scroll">Investment</a>
               <a href="#portfolio" className="block text-lg text-white hover:text-white smooth-scroll">Portfolio</a>
            </div>
        </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Enhanced Ripple Effect */}
        <motion.div 
          className="absolute inset-0 flex items-center justify-center"
          style={{
            y: useTransform(springScrollProgress, [0, 1], [0, -100]),
            scale: useTransform(springScrollProgress, [0, 1], [1, 1.05]),
          }}
        >
          <div className="relative w-96 h-96">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute inset-0 border rounded-full"
                animate={{
                  scale: [1 + i * 0.15, 1.2 + i * 0.15, 1 + i * 0.15],
                  rotate: [0, 360],
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: 4 + i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.2,
                }}
                style={{
                  borderColor: i % 3 === 0 ? 'rgba(59, 130, 246, 0.4)' : i % 3 === 1 ? 'rgba(147, 51, 234, 0.4)' : 'rgba(16, 185, 129, 0.4)',
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Aurora Nebula Background */}
        <motion.div 
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{
            y: useTransform(springScrollProgress, [0, 1], [0, -80]),
            scale: useTransform(springScrollProgress, [0, 1], [1, 1.1]),
          }}
        >
          <div className="relative w-[800px] h-[800px]">
            {/* Aurora Nebula Layers */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={`aurora-${i}`}
                className="absolute inset-0 rounded-full opacity-20"
                animate={{
                  scale: [0.8 + i * 0.1, 1.4 + i * 0.1, 0.8 + i * 0.1],
                  rotate: [0, i % 2 === 0 ? 360 : -360],
                  x: [0, Math.sin(i * 60) * 50, 0],
                  y: [0, Math.cos(i * 60) * 30, 0],
                }}
                transition={{
                  duration: 8 + i * 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.5,
                }}
                style={{
                  background: i % 6 === 0 
                    ? 'radial-gradient(ellipse at center, rgba(147, 51, 234, 0.4) 0%, rgba(59, 130, 246, 0.2) 40%, transparent 70%)'
                    : i % 6 === 1
                    ? 'radial-gradient(ellipse at center, rgba(236, 72, 153, 0.4) 0%, rgba(147, 51, 234, 0.2) 40%, transparent 70%)'
                    : i % 6 === 2
                    ? 'radial-gradient(ellipse at center, rgba(16, 185, 129, 0.4) 0%, rgba(59, 130, 246, 0.2) 40%, transparent 70%)'
                    : i % 6 === 3
                    ? 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.4) 0%, rgba(16, 185, 129, 0.2) 40%, transparent 70%)'
                    : i % 6 === 4
                    ? 'radial-gradient(ellipse at center, rgba(168, 85, 247, 0.4) 0%, rgba(236, 72, 153, 0.2) 40%, transparent 70%)'
                    : 'radial-gradient(ellipse at center, rgba(34, 197, 94, 0.4) 0%, rgba(168, 85, 247, 0.2) 40%, transparent 70%)',
                  filter: `blur(${2 + i}px) saturate(1.5)`,
                }}
              />
            ))}
            
            {/* Additional Floating Aurora Particles */}
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={`particle-${i}`}
                className="absolute w-4 h-4 rounded-full opacity-60"
                animate={{
                  x: [
                    Math.cos(i * 30) * 200,
                    Math.cos(i * 30 + 180) * 300,
                    Math.cos(i * 30) * 200,
                  ],
                  y: [
                    Math.sin(i * 30) * 200,
                    Math.sin(i * 30 + 180) * 300,
                    Math.sin(i * 30) * 200,
                  ],
                  scale: [0.5, 1.2, 0.5],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 6 + i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.3,
                }}
                style={{
                  background: i % 4 === 0 
                    ? 'radial-gradient(circle, rgba(147, 51, 234, 0.8) 0%, transparent 70%)'
                    : i % 4 === 1
                    ? 'radial-gradient(circle, rgba(59, 130, 246, 0.8) 0%, transparent 70%)'
                    : i % 4 === 2
                    ? 'radial-gradient(circle, rgba(16, 185, 129, 0.8) 0%, transparent 70%)'
                    : 'radial-gradient(circle, rgba(236, 72, 153, 0.8) 0%, transparent 70%)',
                  filter: `blur(1px)`,
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              />
            ))}

            {/* Central Aurora Core */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{
                rotate: [0, 360],
                scale: [0.9, 1.1, 0.9],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <div 
                className="w-96 h-96 rounded-full opacity-30"
                style={{
                  background: 'conic-gradient(from 0deg, rgba(147, 51, 234, 0.6), rgba(59, 130, 246, 0.6), rgba(16, 185, 129, 0.6), rgba(236, 72, 153, 0.6), rgba(168, 85, 247, 0.6), rgba(147, 51, 234, 0.6))',
                  filter: 'blur(3px)',
                }}
              />
            </motion.div>
          </div>
        </motion.div>

        <div className="relative z-10 text-center sm:text-center w-full sm:max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-6 sm:mb-8 leading-tight text-left sm:text-center px-4 sm:px-0">
              Blockchain is
              <br />
               <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-emerald-400 bg-clip-text text-transparent">
                 the future.
               </span>
            </h1>
          </motion.div>
          
          <AnimatedText variant="fadeUp" delay={0.4} duration={0.8}>
             <p className="text-lg sm:text-xl md:text-2xl text-white mb-8 sm:mb-12 text-left sm:text-center max-w-none sm:max-w-3xl mx-0 sm:mx-auto px-4 sm:px-0">
              I believe wholeheartedly in Bitcoin and blockchain technology. 
              Investing in the decentralized revolution that will reshape our world.
            </p>
          </AnimatedText>
          
          <AnimatedText variant="fadeUp" delay={0.6} duration={0.8}>
            <div className="flex justify-center px-4 sm:px-6 mt-8">
              <motion.div 
                className="bg-gray-900/50 border border-gray-700/50 rounded-xl sm:rounded-2xl px-4 sm:px-12 py-4 sm:py-8 backdrop-blur-sm w-full max-w-md sm:max-w-2xl"
              >
                <div className="text-center">
                  <div className="text-xs sm:text-sm uppercase tracking-wide sm:tracking-widest text-white/60 mb-2 sm:mb-2">Investment Philosophy</div>
                  <div className="text-base sm:text-lg md:text-xl font-normal text-white leading-relaxed px-2 sm:px-0">
                    &ldquo;Bitcoin is digital gold. Blockchain is the future.&rdquo;
                  </div>
                </div>
              </motion.div>
            </div>
          </AnimatedText>
        </div>

        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
           <ChevronDown className="w-8 h-8 text-white" />
        </motion.div>
      </section>


      {/* Philosophy Section */}
      <section 
        id="about" 
        className="py-32 relative overflow-hidden"
      >
        {/* Background Animation Layer */}
        <motion.div
          className="absolute inset-0 opacity-15"
          style={{
            background: `
              radial-gradient(ellipse at 50% 20%, rgba(16, 185, 129, 0.2) 0%, transparent 60%),
              radial-gradient(ellipse at 20% 80%, rgba(59, 130, 246, 0.15) 0%, transparent 60%)
            `,
            y: useTransform(springScrollProgress, [0, 1], [0, -30]),
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="mb-12 sm:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 sm:mb-12">Philosophy</h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mb-12"></div>
            </motion.div>
          </div>

          <div className="w-full space-y-6 sm:space-y-8 text-base sm:text-lg md:text-xl lg:text-2xl text-white leading-relaxed">
            <AnimatedText variant="slideRight" delay={0.3}>
              <p>
                <span className="text-white font-semibold">My core belief:</span>
                <br />
                Bitcoin represents the greatest monetary revolution in human history.
                Blockchain technology isn&apos;t just an innovation—it&apos;s the foundation
                of a new economic paradigm. I&apos;ve dedicated my capital and conviction
                to supporting projects that accelerate this inevitable transition
                from centralized control to decentralized freedom.
              </p>
            </AnimatedText>
            
            <AnimatedText variant="slideLeft" delay={0.4}>
              <p>
                Every investment decision I make is rooted in one fundamental truth:
                decentralized systems will inevitably replace centralized ones.
                My portfolio focuses on Bitcoin, Ethereum, BNB, and Story Protocol—
                each representing a critical piece of the decentralized future.
                This isn&apos;t speculation; it&apos;s conviction backed by capital.
              </p>
            </AnimatedText>
          </div>
        </div>
      </section>


      {/* My Investment Approach Section */}
      <ParallaxSection 
        id="investment"
        className="py-32"
        speed={0.12}
        enableBackgroundAnimation={true}
        backgroundGradient={`
          radial-gradient(ellipse at 40% 60%, rgba(147, 51, 234, 0.15) 0%, transparent 50%),
          radial-gradient(ellipse at 80% 20%, rgba(236, 72, 153, 0.15) 0%, transparent 50%)
        `}
      >
        <div className="w-full sm:max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimatedText variant="fadeUp" delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-left sm:text-center mb-12 sm:mb-20">My Investment Approach</h2>
          </AnimatedText>
          
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div>
                 <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-white">
                  My Investment Framework
                </h3>
                <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-gray-800 border border-gray-600 rounded-lg w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-xs sm:text-sm font-bold text-white">1</span>
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">Bitcoin-First Conviction</h4>
                     <p className="text-sm sm:text-base md:text-lg text-white">Every investment must align with the fundamental principles of decentralization and sound money that Bitcoin represents.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-gray-800 border border-gray-600 rounded-lg w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-xs sm:text-sm font-bold text-white">2</span>
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">Protocol-Level Innovation</h4>
                     <p className="text-sm sm:text-base md:text-lg text-white">Focus on foundational blockchain infrastructure that enables the next wave of decentralized applications.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-gray-800 border border-gray-600 rounded-lg w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-xs sm:text-sm font-bold text-white">3</span>
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">Long-Term Value Creation</h4>
                     <p className="text-sm sm:text-base md:text-lg text-white">Patient capital deployment with conviction-based holding periods, not short-term speculation.</p>
                  </div>
                </div>
              </div>
            </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="relative mt-8 md:mt-0">
                <motion.div 
                  className="bg-gradient-to-br from-blue-500/10 to-purple-600/10 p-4 sm:p-6 md:p-8 rounded-2xl border border-gray-700"
                >
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex justify-between items-center">
                       <span className="text-sm sm:text-base md:text-lg text-white">Core Assets</span>
                       <span className="text-sm sm:text-base md:text-lg text-white font-semibold">BTC, ETH, BNB</span>
                    </div>
                    <div className="flex justify-between items-center">
                       <span className="text-sm sm:text-base md:text-lg text-white">Investment Thesis</span>
                       <span className="text-sm sm:text-base md:text-lg text-white font-semibold">Bitcoin Maximalist</span>
                    </div>
                    <div className="flex justify-between items-center">
                       <span className="text-sm sm:text-base md:text-lg text-white">Time Horizon</span>
                       <span className="text-sm sm:text-base md:text-lg text-white font-semibold">10+ years</span>
                    </div>
                    <div className="flex justify-between items-center">
                       <span className="text-sm sm:text-base md:text-lg text-white">Conviction Level</span>
                       <span className="text-sm sm:text-base md:text-lg text-white font-semibold">Maximum</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </ParallaxSection>

      {/* Portfolio Section */}
      <ParallaxSection 
        id="portfolio" 
        className="py-32 bg-gray-900/30"
        speed={0.08}
        enableBackgroundAnimation={true}
        backgroundGradient={`
          radial-gradient(ellipse at 60% 40%, rgba(16, 185, 129, 0.15) 0%, transparent 50%),
          radial-gradient(ellipse at 30% 70%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)
        `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimatedText variant="fadeUp" delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 sm:mb-20">My Holdings</h2>
          </AnimatedText>
          
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 pt-4 sm:pt-8">
            {portfolioAssets.map((asset, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <motion.div 
                  className="bg-gray-800/50 border border-gray-700 rounded-xl p-4 sm:p-6 md:p-8 group relative"
                >
                  {/* Logo floating above card - centered on mobile, left on desktop */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 sm:-top-6 sm:left-auto sm:transform-none sm:-left-6 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 z-50">
                    <motion.div
                      className="relative w-full h-full bg-black/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-1 sm:p-2 border border-gray-600/50 shadow-2xl"
                      style={{
                        filter: "drop-shadow(0 10px 20px rgba(0, 0, 0, 0.5))"
                      }}
        >
          <Image
                        src={asset.logo}
                        alt={`${asset.name} logo`}
                        fill
                        className="object-contain p-0.5 sm:p-1"
                        sizes="(max-width: 640px) 64px, (max-width: 768px) 80px, 96px"
                      />
                    </motion.div>
                  </div>

                  <div className="flex items-center mb-3 sm:mb-4 mt-8 sm:mt-4">
                    <div className="w-full text-center sm:text-left sm:ml-10 md:ml-12">
                       <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-white transition-colors">{asset.name}</h4>
                       <p className="text-white text-xs sm:text-sm">{asset.description}</p>
                    </div>
                  </div>
                   <div className="text-white text-xs sm:text-sm text-center sm:text-left sm:ml-10 md:ml-12">
                    Long-term conviction hold
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

        </div>
      </ParallaxSection>


      {/* Footer */}
      <footer className="relative py-16 border-t border-gray-800 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center">
             <div className="text-2xl font-bold text-white mb-8">
              Dany Capital
            </div>
          </div>
           <div className="text-center text-white mt-8 pt-8 border-t border-gray-800">
            © 2024 Dany Capital. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
