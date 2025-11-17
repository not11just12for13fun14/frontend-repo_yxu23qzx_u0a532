import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhoWeAre from './components/WhoWeAre'
import Services from './components/Services'
import WhyJoinUs from './components/WhyJoinUs'
import Partners from './components/Partners'
import CTA from './components/CTA'

function App() {
  return (
    <div className="bg-[#242D40] text-white selection:bg-[#36BBD9]/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <WhoWeAre />
        <Services />
        <WhyJoinUs />
        <Partners />
        <CTA />
      </main>
      <footer className="py-8 text-center text-white/60 text-sm bg-[#0D0D0D]">
        © {new Date().getFullYear()} Fligno. All rights reserved.
      </footer>
    </div>
  )
}

export default App
