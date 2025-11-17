import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Smartphone, CreditCard, Network, Shield, Cloud, Cog, Database, LineChart, Rocket, Puzzle } from 'lucide-react'

const services = [
  { key: 'app', title: 'App Building', icon: Smartphone, desc: 'Native and cross-platform apps with pixel-perfect UIs and real-time experiences.' },
  { key: 'payments', title: 'Payments', icon: CreditCard, desc: 'Secure payment integrations, subscriptions, and global transactions with PCI compliance.' },
  { key: 'integrate', title: 'Integrations', icon: Network, desc: 'Connect CRMs, ERPs, data pipelines, and third-party APIs seamlessly.' },
  { key: 'security', title: 'Infrastructure Security', icon: Shield, desc: 'Zero-trust architectures, threat monitoring, and incident response.' },
  { key: 'cloud', title: 'Cloud & DevOps', icon: Cloud, desc: 'Scalable cloud-native systems, CI/CD, containers, and infrastructure as code.' },
  { key: 'automation', title: 'Automation', icon: Cog, desc: 'Workflow automation and AI-assisted processes that reduce manual work.' },
  { key: 'data', title: 'Data & AI', icon: Database, desc: 'ML pipelines, analytics dashboards, and data platforms for insight and action.' },
  { key: 'growth', title: 'Growth Engineering', icon: LineChart, desc: 'Experimentation frameworks and growth funnels to scale your product.' },
  { key: 'launch', title: 'Product Launch', icon: Rocket, desc: 'From MVP to enterprise rollouts with quality and reliability.' },
  { key: 'plugins', title: 'Plugin Ecosystems', icon: Puzzle, desc: 'Designing modular architectures with extensibility and developer tools.' },
]

export default function Services() {
  const [active, setActive] = useState(null)

  return (
    <section id="services" className="relative py-24 bg-[#242D40] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(54,187,217,0.12),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(42,122,188,0.12),transparent_40%)]" aria-hidden />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold">Our 10 Core Services</h2>
        <p className="mt-3 text-white/80 max-w-2xl">Each card is interactive—hover and click to explore more.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {services.map((s, idx) => (
            <motion.button
              key={s.key}
              onClick={() => setActive(active === s.key ? null : s.key)}
              whileHover={{ y: -4 }}
              className={`group relative rounded-xl p-4 text-left border transition-colors ${active === s.key ? 'border-[#36BBD9]' : 'border-white/10 hover:border-[#36BBD9]/60'} bg-white/5`}
            >
              <div className="flex items-start gap-3">
                <span className="p-2 rounded-md bg-gradient-to-br from-[#36BBD9]/30 to-[#2A7ABC]/30 text-[#36BBD9]">
                  <s.icon size={20} />
                </span>
                <div>
                  <h3 className="font-semibold">{s.title}</h3>
                  <p className="text-sm text-white/70 mt-1">{s.desc}</p>
                </div>
              </div>
              <span className="absolute inset-0 rounded-xl pointer-events-none ring-0 group-hover:ring-8 ring-[#36BBD9]/10 transition-all" />

              <AnimatePresence>
                {active === s.key && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-3 border-t border-white/10 pt-3 text-sm text-white/80"
                  >
                    <div className="grid grid-cols-2 gap-2">
                      <div className="p-2 rounded bg-white/5">Interactive demo</div>
                      <div className="p-2 rounded bg-white/5">Case studies</div>
                      <div className="p-2 rounded bg-white/5">Tech stack</div>
                      <div className="p-2 rounded bg-white/5">Best practices</div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  )
}
