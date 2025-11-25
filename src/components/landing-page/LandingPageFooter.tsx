import React from 'react';
import { DotPattern } from "@/components/ui/dot-pattern";
import { cn } from "@/components/lib/utils";
import { Facebook, Instagram, Twitter } from 'lucide-react';

const LandingPageFooter: React.FC = () => {
  return (
    <footer className="relative w-full overflow-hidden bg-background py-12 md:py-16 border-t border-muted">
      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className={cn(
          "absolute inset-0 h-full w-full opacity-50",
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]"
        )}
      />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between space-y-8 md:flex-row md:space-y-0">
          {/* Copyright */}
          <div className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Burger Bliss. All rights reserved.
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Home</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Menu</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">About Us</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default LandingPageFooter;
