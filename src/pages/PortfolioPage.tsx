import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution with user authentication, product listings, and a shopping cart.',
    imageUrl: 'https://via.placeholder.com/400x250/333/fff?text=E-commerce',
    projectUrl: '#',
  },
  {
    id: 2,
    title: 'Social Media Dashboard',
    description: 'An interactive dashboard to manage social media posts, analytics, and user engagement.',
    imageUrl: 'https://via.placeholder.com/400x250/444/fff?text=Social+Media',
    projectUrl: '#',
  },
  {
    id: 3,
    title: 'Task Management App',
    description: 'A simple yet powerful task management application with drag-and-drop functionality and progress tracking.',
    imageUrl: 'https://via.placeholder.com/400x250/555/fff?text=Task+Manager',
    projectUrl: '#',
  },
  {
    id: 4,
    title: 'Personal Blog Site',
    description: 'A responsive blog platform with a content management system and dynamic routing.',
    imageUrl: 'https://via.placeholder.com/400x250/666/fff?text=Blog+Site',
    projectUrl: '#',
  },
];

const PortfolioPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">My Portfolio</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioItems.map((item) => (
          <Card key={item.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
              <img src={item.imageUrl} alt={item.title} className="object-cover w-full h-full" />
            </div>
            <CardHeader>
              <CardTitle className="text-xl font-semibold">{item.title}</CardTitle>
              <CardDescription className="text-gray-500 dark:text-gray-400">{item.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              {/* Additional content if needed */}
            </CardContent>
            <CardFooter className="flex justify-end p-4">
              <Button asChild>
                <a href={item.projectUrl} target="_blank" rel="noopener noreferrer">View Project</a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PortfolioPage;
