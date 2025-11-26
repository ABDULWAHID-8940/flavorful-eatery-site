import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const images = [
  'https://storage.googleapis.com/dala-prod-public-storage/generated-images/7a324c89-1af0-4263-ac87-5b142101d8e1/hero-image-1-c6xsv7w-1763409879811.webp',
  'https://storage.googleapis.com/dala-prod-public-storage/generated-images/7a324c89-1af0-4263-ac87-5b142101d8e1/hero-image-2-1ccnlzv-1763409887199.webp',
  'https://storage.googleapis.com/dala-prod-public-storage/generated-images/7a324c89-1af0-4263-ac87-5b142101d8e1/hero-image-3-x12ejgi-1763409894898.webp',
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen bg-gray-900 text-white">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImage ? 'opacity-100' : 'opacity-0'}`}>
          <img src={image} alt="Restaurant" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/50" />
        </div>
      ))}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
        <h1 className="font-serif text-6xl font-bold md:text-8xl">Jollof Joy</h1>
        <p className="mt-4 text-lg md:text-2xl">Crafted with Passion, Served with Love</p>
        <div className="mt-8 space-x-4">
          <Button size="lg" className="bg-amber-500 hover:bg-amber-600 animate-breathing">Order Now</Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black animate-breathing">Reserve a Table</Button>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8" />
      </div>
    </section>
  );
};

export default Hero;