import { AboutSection } from './premium/sections/AboutSection'
import { ContactSection } from './premium/sections/ContactSection'
import { CuratedCategoriesSection } from './premium/sections/CuratedCategoriesSection'
import { FaqSection } from './premium/sections/FaqSection'
import { Footer } from './premium/sections/Footer'
import { Header } from './premium/sections/Header'
import { HeroSection } from './premium/sections/HeroSection'
import { PackagesSection } from './premium/sections/PackagesSection'
import { ProcessSection } from './premium/sections/ProcessSection'
import { SocialProofSection } from './premium/sections/SocialProofSection'
import { WhyUsSection } from './premium/sections/WhyUsSection'
import './premium/styles.css'

function App() {
  return (
    <div className="page-shell">
      <Header />
      <main>
        <HeroSection />
        <ProcessSection />
        <PackagesSection />
        <CuratedCategoriesSection />
        <WhyUsSection />
        <AboutSection />
        <SocialProofSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
