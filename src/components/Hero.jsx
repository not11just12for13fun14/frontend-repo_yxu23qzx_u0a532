import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative h-[90vh] w-full overflow-hidden bg-[#242D40]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#242D40]/40 via-[#242D40]/70 to-[#242D40] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight"
          >
            Creating Quality Experience
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mt-4 text-lg text-white/90"
          >
            Looking for a partner to bring your ideas to life?
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-8 flex items-center gap-4"
          >
            <a
              href="#contact"
              className="relative inline-flex items-center justify-center px-6 py-3 rounded-md font-semibold text-white bg-[#2A7ABC] overflow-hidden"
            >
              <span className="relative z-10">Get Started</span>
              <span className="absolute inset-0 rounded-md ring-0 transition-all duration-300 hover:ring-8 hover:ring-[#36BBD9]/40" />
            </a>
            <a href="#services" className="text-white/80 hover:text-white transition-colors">
              Explore services
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
