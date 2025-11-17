import { useState } from 'react'
import { motion } from 'framer-motion'

export default function CTA() {
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => setLoading(false), 1200)
  }

  return (
    <section id="contact" className="relative py-20 bg-[#242D40] text-white">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_80%_20%,rgba(54,187,217,0.15),transparent_40%),radial-gradient(circle_at_20%_80%,rgba(42,122,188,0.15),transparent_40%)]" aria-hidden />
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold">Let's Build Something Great</h2>
        <p className="text-center text-white/80 mt-2">Tell us about your project and we'll reach out.</p>
        <form onSubmit={handleSubmit} className="mt-8 grid gap-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <input placeholder="Name" required className="w-full bg-white/5 border border-white/10 focus:border-[#36BBD9] outline-none rounded-md px-4 py-3 placeholder-white/50" />
            <input placeholder="Email" type="email" required className="w-full bg-white/5 border border-white/10 focus:border-[#36BBD9] outline-none rounded-md px-4 py-3 placeholder-white/50" />
          </div>
          <input placeholder="Company" className="w-full bg-white/5 border border-white/10 focus:border-[#36BBD9] outline-none rounded-md px-4 py-3 placeholder-white/50" />
          <textarea placeholder="What are you building?" rows={4} className="w-full bg-white/5 border border-white/10 focus:border-[#36BBD9] outline-none rounded-md px-4 py-3 placeholder-white/50" />
          <motion.button
            whileTap={{ scale: 0.98 }}
            className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md font-semibold text-white bg-[#2A7ABC] ${loading ? 'opacity-80' : ''}`}
            disabled={loading}
          >
            {loading ? (
              <span className="inline-flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#36BBD9] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                </span>
                Sending...
              </span>
            ) : (
              'Send Message'
            )}
          </motion.button>
        </form>
      </div>
    </section>
  )
}
