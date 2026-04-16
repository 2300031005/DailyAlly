import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import TrustSignals from './components/TrustSignals/TrustSignals'
import Services from './components/Services/Services'
import HowItWorks from './components/HowItWorks/HowItWorks'
import Testimonials from './components/Testimonials/Testimonials'
import CTABanner from './components/CTABanner/CTABanner'
import FAQ from './components/FAQ/FAQ'
import Footer from './components/Footer/Footer'
import { useScrollReveal } from './hooks/useScrollReveal'

export default function App() {
  // Activate scroll-reveal for all .reveal elements across every section
  useScrollReveal('.reveal')

  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <TrustSignals />
        <Services />
        <HowItWorks />
        <Testimonials />
        <CTABanner />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
