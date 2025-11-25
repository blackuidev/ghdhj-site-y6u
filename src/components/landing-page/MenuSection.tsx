import React from 'react';
import { ScrollCarousel } from '@/components/ui/scroll-carousel';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'burgers' | 'sides' | 'drinks';
}

const menuItems: MenuItem[] = [
  {
    id: 'b1',
    name: 'Classic Burger',
    description: 'Our signature beef patty with lettuce, tomato, onion, and secret sauce.',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'burgers',
  },
  {
    id: 'b2',
    name: 'Spicy Chicken Burger',
    description: 'Crispy chicken, hot sauce, jalapeños, and melted cheese.',
    price: 11.99,
    image: 'https://images.unsplash.com/photo-1561758033-d890a369363d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'burgers',
  },
  {
    id: 'b3',
    name: 'Veggie Delight',
    description: 'Plant-based patty with avocado, pickles, and vegan mayo.',
    price: 10.99,
    image: 'https://images.unsplash.com/photo-1603569280196-74e2a3920c78?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'burgers',
  },
  {
    id: 's1',
    name: 'Crispy Fries',
    description: 'Golden, crispy, and perfectly salted.',
    price: 3.99,
    image: 'https://images.unsplash.com/photo-1594007654729-407edc19256f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'sides',
  },
  {
    id: 's2',
    name: 'Onion Rings',
    description: 'Hand-battered and fried to perfection.',
    price: 4.49,
    image: 'https://images.unsplash.com/photo-1534041697777-be5515286266?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'sides',
  },
  {
    id: 'd1',
    name: 'Cola',
    description: 'Refreshing carbonated drink.',
    price: 2.49,
    image: 'https://images.unsplash.com/photo-1546484396-fb35a6a2f640?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'drinks',
  },
  {
    id: 'd2',
    name: 'Milkshake',
    description: 'Creamy vanilla milkshake, a classic.',
    price: 4.99,
    image: 'https://images.unsplash.com/photo-1572490122746-77be1c2513ad?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'drinks',
  },
];

const categories = [
  { id: 'burgers', name: 'Our Delicious Burgers' },
  { id: 'sides', name: 'Tasty Sides' },
  { id: 'drinks', name: 'Refreshing Drinks' },
];

const MenuSection: React.FC = () => {
  return (
    <section id="menu" className="w-full py-20 lg:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-foreground">
            Explore Our Menu
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            From classic favorites to new delights, there's something for everyone.
          </p>
        </div>

        {categories.map((category) => (
          <div key={category.id} className="mb-16">
            <h3 className="text-2xl font-semibold tracking-tight text-center mb-8 md:text-4xl text-foreground">
              {category.name}
            </h3>
            <ScrollCarousel className="py-4">
              {menuItems
                .filter((item) => item.category === category.id)
                .map((item) => (
                  <Card key={item.id} className="min-w-[300px] max-w-[300px] h-full flex flex-col justify-between overflow-hidden group mx-4">
                    <CardHeader className="p-0 relative h-48">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <CardTitle className="absolute bottom-4 left-4 text-white text-xl z-10 drop-shadow-lg">{item.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 flex-grow">
                      <CardDescription className="text-sm text-muted-foreground">
                        {item.description}
                      </CardDescription>
                    </CardContent>
                    <CardFooter className="flex justify-between items-center p-4 border-t">
                      <span className="text-2xl font-bold text-primary">${item.price.toFixed(2)}</span>
                      <Button variant="default">Add to Cart</Button>
                    </CardFooter>
                  </Card>
                ))}
            </ScrollCarousel>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MenuSection;
