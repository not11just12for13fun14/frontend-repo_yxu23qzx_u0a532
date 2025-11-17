import { motion } from 'framer-motion'

export default function WhyJoinUs() {
  const stats = [
    { label: 'Projects Delivered', value: '250+' },
    { label: 'Uptime across managed infra', value: '99.99%' },
    { label: 'Average NPS', value: '72' },
    { label: 'Active Partners', value: '30+' },
  ]

  return (
    <section id="why" className="relative py-24 bg-gradient-to-b from-[#295E73] to-[#2A7ABC] text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.2),transparent_60%)]" aria-hidden />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl font-bold"
            >
              Work With Us
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-3 text-white/90"
            >
              Partner with a team that blends strategy, creativity, and engineering excellence. We deliver scalable systems, secure integrations, and delightful product experiences.
            </motion.p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="rounded-xl p-5 bg-white/10 border border-white/10"
                >
                  <div className="text-2xl font-bold">{s.value}</div>
                  <div className="text-white/80 text-sm mt-1">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl overflow-hidden border border-white/10"
          >
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxUZWFtJTIwY29sbGFib3JhdGlvbnxlbnwwfDB8fHwxNzYzMzQ5MzE3fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Team collaboration" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
