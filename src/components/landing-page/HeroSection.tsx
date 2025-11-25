import React from 'react';
import { AuroraBackground } from '@/components/ui/aurora-background';
import { SparkleParticles } from '@/components/ui/sparkle-particles';
import { TypingText } from '@/components/ui/typing-text';
import { ShineButton } from '@/components/ui/shine-button';

export const HeroSection = () => {
  return (
    <AuroraBackground>
      <div className="relative flex flex-col h-screen w-full items-center justify-center overflow-hidden">
        {/* SparkleParticles as a background layer within the hero section */}
        <SparkleParticles
          minSize={0.5}
          maxSize={1.5}
          particleDensity={50}
          className="absolute inset-0 z-0"
        />

        {/* Main content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg leading-tight">
            <TypingText
              text="The Burger Joint"
              className="inline-block"
              duration={150}
            />
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl font-light">
            <TypingText
              text="Sizzling Burgers, Unforgettable Taste. Experience the Difference!"
              className="inline-block"
              duration={100}
              delay={1000}
            />
          </p>
          <ShineButton
            className="mt-6 text-lg px-8 py-3"
            onClick={() => console.log('Order Now clicked!')}
          >
            Order Now
          </ShineButton>
        </div>
      </div>
    </AuroraBackground>
  );
};
