import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PlusCircle } from 'lucide-react';

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
        <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
        {(item.isNew || item.isSpecial) && (
          <div className={`absolute top-2 left-2 text-white text-xs font-bold px-2 py-1 rounded ${item.isNew ? 'bg-green-500' : 'bg-red-500'}`}>
            {item.isNew ? 'NEW' : 'SPECIAL'}
          </div>
        )}
        <Link to={`/menu/${item.id}`} className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-white text-lg font-semibold border-2 border-white rounded-full px-4 py-2">View Details</span>
        </Link>
      </div>
      <div className="p-4 flex-grow flex flex-col">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white truncate">{item.name}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mt-1 flex-grow">{item.description}</p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-xl font-bold text-red-600 dark:text-red-500">ETB {item.price.toFixed(2)}</span>
          <button className="flex items-center text-red-600 dark:text-red-500 hover:text-red-700 dark:hover:text-red-400 transition-colors duration-300">
            <PlusCircle className="w-6 h-6" />
            <span className="ml-2 text-sm font-semibold">Add</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default MenuCard;
