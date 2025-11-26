import { Card, CardContent } from '@/components/ui/card';
import { Coffee, Egg, Fish, Utensils } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  { name: 'Breakfast', icon: <Egg className="h-8 w-8" /> },
  { name: 'Lunch', icon: <Utensils className="h-8 w-8" /> },
  { name: 'Dinner', icon: <Fish className="h-8 w-8" /> },
  { name: 'Drinks', icon: <Coffee className="h-8 w-8" /> },
  { name: 'Desserts', icon: <Utensils className="h-8 w-8" /> },
];

const MenuCategories = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto">
        <h2 className="text-center text-4xl font-bold">🍽️ Browse by Category</h2>
        <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-5">
          {categories.map((category) => (
            <Link to="/menu" key={category.name}>
              <Card className="group transform cursor-pointer rounded-lg text-center shadow-md transition-all hover:-translate-y-2 hover:bg-amber-500 hover:text-white">
                <CardContent className="p-6">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 text-amber-600 transition-colors group-hover:bg-white group-hover:text-amber-600">
                    {category.icon}
                  </div>
                  <h3 className="mt-4 text-xl font-bold">{category.name}</h3>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuCategories;