import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import ProblemSection from './components/sections/ProblemSection';
import AudienceSection from './components/sections/AudienceSection';
import PackagesSection from './components/sections/PackagesSection';
import HowItWorksSection from './components/sections/HowItWorksSection';
import WhyUsSection from './components/sections/WhyUsSection';
import ScenariosSection from './components/sections/ScenariosSection';
import AboutSection from './components/sections/AboutSection';
import FaqSection from './components/sections/FaqSection';
import ContactSection from './components/sections/ContactSection';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="page-shell">
        <HeroSection />
        <ProblemSection />
        <AudienceSection />
        <PackagesSection />
        <HowItWorksSection />
        <WhyUsSection />
        <ScenariosSection />
        <AboutSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
