import React from 'react';
import LandingPageHeader from '../components/landing-page/LandingPageHeader';
import HeroSection from '../components/landing-page/HeroSection';
import AboutSection from '../components/landing-page/AboutSection';
import MenuSection from '../components/landing-page/MenuSection';
import TestimonialsSection from '../components/landing-page/TestimonialsSection';
import CallToActionSection from '../components/landing-page/CallToActionSection';
import ContactSection from '../components/landing-page/ContactSection';
import LandingPageFooter from '../components/landing-page/LandingPageFooter';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <LandingPageHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <MenuSection />
        <TestimonialsSection />
        <CallToActionSection />
        <ContactSection />
      </main>
      <LandingPageFooter />
    </div>
  );
};

export default Index;
