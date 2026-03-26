import { AudienceSection } from './premium/sections/AudienceSection'
import { ContactSection } from './premium/sections/ContactSection'
import { CuratedCategoriesSection } from './premium/sections/CuratedCategoriesSection'
import { ExperienceStorySection } from './premium/sections/ExperienceStorySection'
import { FaqSection } from './premium/sections/FaqSection'
import { Footer } from './premium/sections/Footer'
import { Header } from './premium/sections/Header'
import { HeroSection } from './premium/sections/HeroSection'
import { LifestyleSection } from './premium/sections/LifestyleSection'
import { PackagesSection } from './premium/sections/PackagesSection'
import { ProcessSection } from './premium/sections/ProcessSection'
import { ScenariosSection } from './premium/sections/ScenariosSection'
import { ServicesSection } from './premium/sections/ServicesSection'
import { TrustBarSection } from './premium/sections/TrustBarSection'
import { WhyUsSection } from './premium/sections/WhyUsSection'
import './premium/styles.css'

function App() {
  return (
    <div className="page-shell">
      <Header />
      <main>
        <HeroSection />
        <TrustBarSection />
        <LifestyleSection />
        <ExperienceStorySection />
        <AudienceSection />
        <ServicesSection />
        <CuratedCategoriesSection />
        <ProcessSection />
        <PackagesSection />
        <WhyUsSection />
        <ScenariosSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
