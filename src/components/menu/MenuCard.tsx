import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PlusCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  isNew?: boolean;
  isSpecial?: boolean;
}

interface MenuCardProps {
  item: MenuItem;
}

const MenuCard = ({ item }: MenuCardProps) => {
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigating to details page
    // In a real app, you would dispatch an action to add to cart
    console.log(`Added ${item.name} to cart`);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden group flex flex-col"
    >
      <div className="relative">
        <Link to={`/menu/${item.id}`}>
          <img src={item.image} alt={item.name} className="w-full h-48 object-cover group-hover:brightness-75 transition-all duration-300" />
        </Link>
        {(item.isNew || item.isSpecial) && (
          <div className={`absolute top-2 left-2 text-white text-xs font-bold px-2 py-1 rounded ${item.isNew ? 'bg-green-500' : 'bg-red-500'}`}>
            {item.isNew ? 'NEW' : 'SPECIAL'}
          </div>
        )}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Link to={`/menu/${item.id}`}>
                <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                    View Details
                </Button>
            </Link>
        </div>
      </div>
      <div className="p-4 flex-grow flex flex-col">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white truncate">{item.name}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mt-1 flex-grow">{item.description}</p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-xl font-bold text-red-600 dark:text-red-500">ETB {item.price.toFixed(2)}</span>
          <Button onClick={handleAddToCart} size="sm" className="bg-red-600 text-white hover:bg-red-700 rounded-full">
            <PlusCircle className="w-5 h-5 mr-1" />
            Add
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default MenuCard;
