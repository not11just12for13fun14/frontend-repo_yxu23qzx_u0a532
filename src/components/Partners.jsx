import { motion } from 'framer-motion'

const logos = [
  'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/7/7e/Stripe_Logo%2C_revised_2016.svg',
  'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
]

export default function Partners() {
  return (
    <section id="partners" className="relative py-20 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-white text-2xl font-semibold">Our Partners</h2>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {logos.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative rounded-xl p-6 bg-white/5 border border-white/10 hover:border-[#36BBD9]/50 transition"
            >
              <img src={src} alt="Partner" className="h-8 w-auto mx-auto opacity-90 group-hover:opacity-100 transition" />
              <span className="pointer-events-none absolute inset-0 rounded-xl ring-0 group-hover:ring-8 ring-[#36BBD9]/10 transition-all" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
