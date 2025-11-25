import React from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Globe } from '@/components/ui/globe'; // Optional visual map representation
import { cn } from '@/components/lib/utils'; // Assuming cn utility is available
import { MapPin, Clock, MessageSquare } from 'lucide-react';

const ContactSection: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement form submission logic here (e.g., send data to an API)
    console.log('Contact form submitted!');
    alert('Thank you for your message! We will get back to you soon.');
    // Optionally, clear the form fields
    // e.currentTarget.reset();
  };

  return (
    <section id="contact" className="relative py-20 md:py-32 bg-gradient-to-br from-orange-600 via-red-600 to-yellow-500 text-white overflow-hidden">
      {/* Optional background overlay/pattern */}
      <div className="absolute inset-0 bg-black/20 z-0" />

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-5xl md:text-6xl font-extrabold text-center mb-16 tracking-tight drop-shadow-lg text-yellow-200">
          Get in Touch
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column: Location & Hours */}
          <div className="flex flex-col gap-8 p-8 bg-black/40 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 animate-fade-in-left">
            <h3 className="text-3xl font-bold mb-4 flex items-center gap-3 text-yellow-300">
              <MapPin className="w-8 h-8" /> Find Our Shop
            </h3>
            <p className="text-lg leading-relaxed">
              <strong>Address:</strong> 123 Burger Bliss Avenue, Flavor Town, FL 90210
              <br />
              Right next to the famous &#34;Golden Fries&#34; landmark!
            </p>
            <p className="text-lg">
              <strong>Phone:</strong> (555) BURGER-SHOP
            </p>
            <p className="text-lg">
              <strong>Email:</strong> hello@startupburgershop.com
            </p>

            <h3 className="text-3xl font-bold mt-8 mb-4 flex items-center gap-3 text-yellow-300">
              <Clock className="w-8 h-8" /> Opening Hours
            </h3>
            <ul className="list-disc list-inside text-lg space-y-2">
              <li>Monday - Thursday: 11:00 AM - 10:00 PM</li>
              <li>Friday - Saturday: 11:00 AM - 11:00 PM</li>
              <li>Sunday: 12:00 PM - 9:00 PM</li>
            </ul>

            {/* Optional Globe component for visual flair */}
            <div className="mt-12 flex justify-center">
              <Globe className="w-full max-w-xs h-auto aspect-square" />
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="p-8 bg-black/40 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 animate-fade-in-right">
            <h3 className="text-3xl font-bold mb-8 flex items-center gap-3 text-yellow-300">
              <MessageSquare className="w-8 h-8" /> Send Us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-lg font-medium mb-2">Name</label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your Full Name"
                  className="bg-white/10 border-white/30 text-white placeholder-white/60 focus:ring-yellow-400 focus:border-yellow-400 py-3 px-4 text-base"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-medium mb-2">Email</label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  className="bg-white/10 border-white/30 text-white placeholder-white/60 focus:ring-yellow-400 focus:border-yellow-400 py-3 px-4 text-base"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-lg font-medium mb-2">Message</label>
                <Textarea
                  id="message"
                  placeholder="Tell us what's on your mind..."
                  rows={6}
                  className="bg-white/10 border-white/30 text-white placeholder-white/60 focus:ring-yellow-400 focus:border-yellow-400 py-3 px-4 text-base"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full py-4 text-lg font-semibold bg-yellow-400 hover:bg-yellow-500 text-black transition-all duration-300 transform hover:scale-105 shadow-xl rounded-lg"
              >
                Send Your Taste Buds a Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
