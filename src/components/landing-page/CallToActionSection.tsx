import { ShineButton } from "../ui/shine-button";

export function CallToActionSection() {
  return (
    <section className="relative z-10 w-full py-20 bg-gradient-to-r from-red-600 to-orange-500 text-white overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 animate-fade-in-up">
          Craving the Best Burger in Town?
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90 animate-fade-in-up delay-100">
          Don't wait! Dive into a world of flavor with our gourmet burgers, crispy fries, and refreshing shakes.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <ShineButton
            className="w-full sm:w-auto px-8 py-3 text-lg font-semibold"
            size="lg"
            onClick={() => console.log("Order Now clicked")}
          >
            Order Online Now!
          </ShineButton>
          <ShineButton
            className="w-full sm:w-auto px-8 py-3 text-lg font-semibold bg-white text-orange-600 hover:bg-gray-100 border border-orange-600"
            size="lg"
            onClick={() => console.log("View Menu clicked")}
          >
            View Full Menu
          </ShineButton>
        </div>
      </div>
    </section>
  );
}
