import React from 'react';
import LandingPageHeader from '../components/LandingPageHeader';
import HeroSection from '../components/HeroSection';
import MenuSection from '../components/MenuSection';
import AboutSection from '../components/AboutSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';
import CallToActionSection from '../components/CallToActionSection';
import LandingPageFooter from '../components/LandingPageFooter';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased">
      <LandingPageHeader />
      <main>
        <HeroSection />
        <MenuSection />
        <AboutSection />
        <TestimonialsSection />
        <CallToActionSection />
        <ContactSection />
      </main>
      <LandingPageFooter />
    </div>
  );
};

export default Index;
