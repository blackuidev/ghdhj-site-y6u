import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Testimonial {
  name: string;
  title: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah L.",
    title: "Local Food Critic",
    quote: "The burgers here are an absolute game-changer! Juicy, flavorful, and perfectly cooked every time. A must-try for any burger enthusiast.",
  },
  {
    name: "Michael B.",
    title: "Regular Customer",
    quote: "I've tried every burger on the menu, and each one is a masterpiece. The staff is always friendly, and the atmosphere is fantastic. My go-to burger spot!",
  },
  {
    name: "Jessica R.",
    title: "Food Blogger",
    quote: "From the artisanal buns to the gourmet toppings, every detail at this burger shop is thoughtfully crafted. It's more than just a meal; it's an experience!",
  },
  {
    name: "David K.",
    title: "Happy Diner",
    quote: "Finally, a burger that lives up to the hype! Fresh ingredients, creative combinations, and that perfect char. Highly recommend the 'Sunrise Sensation'!",
  },
  {
    name: "Emily S.",
    title: "Vegetarian Enthusiast",
    quote: "Their veggie burger is seriously next level! So much flavor and texture, it doesn't feel like an afterthought. I'm hooked!",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-black">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in-up">
          What Our Customers Say
        </h2>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto animate-fade-in-up delay-100">
          Don't just take our word for it. Hear from those who've experienced the best burgers in town!
        </p>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 p-4">
                <Card className="h-full flex flex-col justify-between shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {testimonial.name}
                    </CardTitle>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.title}</p>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-gray-700 dark:text-gray-200 italic leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-100 shadow-md" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-100 shadow-md" />
        </Carousel>
      </div>
    </section>
  );
}
