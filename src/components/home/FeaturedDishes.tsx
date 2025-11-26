import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const featuredDishes = [
  {
    name: 'Exotic Fruit Salad',
    description: 'A vibrant mix of seasonal exotic fruits.',
    price: '$12.99',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/7a324c89-1af0-4263-ac87-5b142101d8e1/featured-dish-1-83xln97-1763409900972.webp',
  },
  {
    name: 'Grilled Perfection Steak',
    description: 'Perfectly grilled to your liking.',
    price: '$28.99',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/7a324c89-1af0-4263-ac87-5b142101d8e1/featured-dish-2-d7vuhcz-1763409908254.webp',
  },
  {
    name: 'Molten Chocolate Lava Cake',
    description: 'A decadent dessert for chocolate lovers.',
    price: '$10.99',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/7a324c89-1af0-4263-ac87-5b142101d8e1/featured-dish-3-dhxvlvj-1763409915107.webp',
  },
];

const FeaturedDishes = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <h2 className="text-center text-4xl font-bold">⭐ Featured Dishes</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {featuredDishes.map((dish) => (
            <Card key={dish.name} className="group overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-2xl">
              <CardContent className="p-0">
                <div className="relative">
                  <img src={dish.image} alt={dish.name} className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 p-4 opacity-0 transition-opacity group-hover:opacity-100">
                    <Button variant="secondary">View Details</Button>
                    <Button className="mt-2 bg-amber-500 hover:bg-amber-600">Add to Cart</Button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">{dish.name}</h3>
                  <p className="mt-2 text-gray-600">{dish.description}</p>
                  <p className="mt-4 text-lg font-semibold">{dish.price}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDishes;