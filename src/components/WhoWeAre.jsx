import { motion } from 'framer-motion'

export default function WhoWeAre() {
  const items = [
    { title: 'Discovery', desc: 'We explore your goals to shape the best approach.' },
    { title: 'Design', desc: 'We craft intuitive, beautiful, and scalable interfaces.' },
    { title: 'Build', desc: 'We develop robust, secure, and performant solutions.' },
    { title: 'Iterate', desc: 'We measure, learn, and evolve with your business.' },
  ]

  return (
    <section id="about" className="relative py-24 bg-[#295E73]">
      <div className="absolute inset-0 opacity-[0.15]" aria-hidden>
        <div className="absolute -top-10 -left-10 w-72 h-72 rounded-full bg-[#36BBD9] blur-3xl" />
        <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-[#2A7ABC] blur-3xl" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold"
        >
          We are a team of IT professionals who can turn your idea into reality.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mt-4 text-white/90 max-w-2xl"
        >
          From concept to launch, we collaborate with you at every step. Our process ensures clarity, speed, and quality.
        </motion.p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="relative rounded-xl p-6 bg-white/5 border border-white/10 hover:border-[#36BBD9]/50 transition-colors"
            >
              <div className="w-10 h-10 rounded-md bg-gradient-to-br from-[#36BBD9] to-[#2A7ABC] mb-3" />
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-white/80 text-sm mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
