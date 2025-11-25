import React from 'react';
import { ImageReveal } from '@/components/ui/image-reveal';
import { TextScrollMarquee } from '@/components/ui/text-scroll-marquee';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative w-full py-20 md:py-32 bg-background text-foreground overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <h2 className="text-5xl md:text-7xl font-bold text-center mb-16 relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
          Our Story
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative z-10">
            <p className="text-lg md:text-xl leading-relaxed mb-6 text-muted-foreground">
              Welcome to Burger Bliss, where every bite tells a tale of passion, quality, and community. Founded in 20XX by a team of culinary enthusiasts, our journey began with a simple dream: to craft the perfect burger. We believe in using only the freshest, locally sourced ingredients to create mouth-watering masterpieces that tantalize your taste buds and leave you craving more.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
              From our humble beginnings in a small kitchen, we've grown into a beloved neighborhood staple, cherished for our innovative flavors and unwavering commitment to excellence. Our secret? A blend of classic techniques and modern twists, all served with a generous helping of love.
            </p>
          </div>
          <div className="relative w-full h-80 md:h-96 flex items-center justify-center">
            <ImageReveal
              src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Our First Burger Shop"
              className="rounded-xl shadow-2xl border border-primary/20 w-full h-full object-cover"
              width={500}
              height={400}
            />
          </div>
        </div>

        <h2 className="text-5xl md:text-7xl font-bold text-center mb-16 relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-accent to-primary">
          Our Mission & Values
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative w-full h-60 md:h-80 flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 p-4">
            <TextScrollMarquee
              text="Fresh Ingredients • Unforgettable Taste • Community Focused • Sustainable Practices • Passionate Craftsmanship"
              className="text-3xl md:text-5xl font-extrabold text-primary/80 whitespace-nowrap"
            />
          </div>
          <div className="relative z-10">
            <p className="text-lg md:text-xl leading-relaxed mb-6 text-muted-foreground">
              Our mission is simple: to deliver an unparalleled burger experience that delights every sense. We are committed to sourcing the highest quality ingredients, supporting local farmers, and creating a welcoming atmosphere where everyone feels at home.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
              Our core values are built on freshness, innovation, and integrity. We strive for culinary perfection while maintaining a strong sense of social responsibility. Every burger we serve is a testament to our dedication to quality and our love for what we do.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
