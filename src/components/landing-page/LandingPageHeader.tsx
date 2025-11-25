import React from 'react';
import { Button } from '@/components/ui/button';

const LandingPageHeader: React.FC = () => {
  return (
    <header className="relative z-10 w-full px-4 py-6 md:px-8">
      <div className="container mx-auto flex items-center justify-between">
        {/* Shop Logo/Name */}
        <div className="text-3xl font-bold text-white tracking-tight drop-shadow-lg">
          Burger Bliss
        </div>

        {/* Order Now Button */}
        <div>
          <Button
            variant="default"
            size="lg"
            className="relative overflow-hidden rounded-full bg-orange-500 px-6 py-3 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
          >
            Order Now
            <span className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <svg
                className="h-5 w-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default LandingPageHeader;
