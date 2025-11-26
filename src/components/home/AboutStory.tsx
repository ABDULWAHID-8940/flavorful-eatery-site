import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AboutStory = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="overflow-hidden rounded-lg shadow-xl">
            <img
              src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/7a324c89-1af0-4263-ac87-5b142101d8e1/about-us-image-jbjrv8w-1763409923036.webp"
              alt="Our Story"
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold">📖 Our Story</h2>
            <p className="mt-4 text-lg text-gray-600">
              Jollof Joy was born from a passion for sharing the rich and diverse flavors of Africa with the world. Our founder, inspired by her grandmother's recipes, set out to create a place where people could not only enjoy authentic African cuisine but also experience the warmth and hospitality of the continent.
            </p>
            <p className="mt-4 text-lg text-gray-600">
              We believe in using only the freshest, locally sourced ingredients to craft dishes that are both traditional and innovative. Every meal at Jollof Joy is a celebration of family, community, and the vibrant spirit of Africa.
            </p>
            <Link to="/menu">
              <Button size="lg" className="mt-8 bg-amber-500 hover:bg-amber-600">Explore Our Menu</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;