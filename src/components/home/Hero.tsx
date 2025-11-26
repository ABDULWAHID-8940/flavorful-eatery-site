import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen bg-gray-900 text-white">
      <div className="absolute inset-0">
        <img 
          src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/7a324c89-1af0-4263-ac87-5b142101d8e1/african-restaurant-hero-x936ema-1764157255405.webp" 
          alt="A vibrant dish from an African restaurant" 
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4">
        <h1 className="font-serif text-5xl font-bold md:text-8xl text-white drop-shadow-2xl">Jollof Joy</h1>
        <p className="mt-4 text-lg md:text-2xl max-w-2xl mx-auto text-gray-200">Crafted with Passion, Served with Love. Experience the heart of African cuisine.</p>
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
          <Link to="/menu">
            <Button size="xl" className="bg-gradient-to-r from-amber-500 via-red-500 to-red-600 text-white font-bold shadow-xl transform transition-transform hover:scale-110 rounded-full px-10 py-6 text-xl">
              Order Now
            </Button>
          </Link>
          <Link to="/reservations">
            <Button size="xl" variant="outline" className="border-white text-white hover:bg-white hover:text-black rounded-full px-10 py-6 text-xl transition-all duration-300">
              Reserve a Table
            </Button>
          </Link>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 animate-bounce cursor-pointer" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
        <ChevronDown className="h-10 w-10 text-white drop-shadow-lg" />
      </div>
    </section>
  );
};

export default Hero;
