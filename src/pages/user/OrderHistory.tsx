import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Search, ShoppingBag, Trash2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

// Mock Data - Replace with API call
const pastOrders = [
  {
    id: '#ORD-32651',
    date: 'Aug 10, 2025 - 7:45 PM',
    status: 'Delivered',
    items: [
      { name: 'Chicken Alfredo', quantity: 1, image: '/api/placeholder/100/100' },
      { name: 'Fresh Juice', quantity: 1, image: '/api/placeholder/100/100' },
      { name: 'Caesar Salad', quantity: 1, image: '/api/placeholder/100/100' },
    ],
    total: 520,
    paymentMethod: 'Visa',
  },
  {
    id: '#ORD-32650',
    date: 'Aug 9, 2025 - 12:30 PM',
    status: 'In Progress',
    items: [{ name: 'Jollof Rice', quantity: 2, image: '/api/placeholder/100/100' }],
    total: 380,
    paymentMethod: 'Chapa',
  },
  {
    id: '#ORD-32649',
    date: 'Aug 8, 2025 - 8:00 PM',
    status: 'Cancelled',
    items: [{ name: 'Pizza Margherita', quantity: 1, image: '/api/placeholder/100/100' }],
    total: 250,
    paymentMethod: 'PayPal',
  },
];

const statusColors = {
  Delivered: 'bg-green-100 text-green-800 border-green-300',
  'In Progress': 'bg-orange-100 text-orange-800 border-orange-300',
  Cancelled: 'bg-red-100 text-red-800 border-red-300',
};

const OrderCard = ({ order }) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
    className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300"
  >
    <div className="p-6">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-4">
        <div>
          <p className="font-bold text-lg text-gray-800 dark:text-white">{order.id}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">{order.date}</p>
        </div>
        <Badge className={`mt-2 sm:mt-0 ${statusColors[order.status]}`}>{order.status}</Badge>
      </div>
      <div className="my-4 border-t border-gray-200 dark:border-gray-700" />
      <div>
        <p className="font-semibold mb-3 text-gray-700 dark:text-gray-300">Items</p>
        <div className="space-y-3">
          {order.items.slice(0, 3).map((item, index) => (
            <div key={index} className="flex items-center space-x-3">
              <img src={item.image} alt={item.name} className="w-10 h-10 rounded-full object-cover" />
              <span className="text-gray-600 dark:text-gray-300">{item.name} x{item.quantity}</span>
            </div>
          ))}
          {order.items.length > 3 && <p className="text-sm text-gray-500">+ {order.items.length - 3} more</p>}
        </div>
      </div>
      <div className="my-4 border-t border-gray-200 dark:border-gray-700" />
      <div className="flex flex-col sm:flex-row justify-between sm:items-center">
        <div>
          <p className="font-semibold text-gray-800 dark:text-white text-lg">Total: {order.total} ETB</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">Paid with {order.paymentMethod}</p>
        </div>
        <div className="flex items-center space-x-2 mt-4 sm:mt-0">
          <Button variant="outline">View Details</Button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-primary-foreground px-4 py-2 rounded-md font-semibold flex items-center space-x-2"
          >
            <span>Reorder</span>
          </motion.button>
        </div>
      </div>
    </div>
  </motion.div>
);

const EmptyState = () => (
  <div className="text-center py-20">
    <ShoppingBag className="mx-auto h-24 w-24 text-gray-400 dark:text-gray-500" strokeWidth={1} />
    <h3 className="mt-4 text-2xl font-semibold text-gray-800 dark:text-white">You have no previous orders.</h3>
    <p className="mt-2 text-gray-500 dark:text-gray-400">Your past orders will appear here.</p>
    <Button className="mt-6">Order Now</Button>
  </div>
);

export default function OrderHistory() {
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  // const [orders, setOrders] = useState(pastOrders); // Use this when connected to API
  const orders = pastOrders; // Using mock data for now

  const filteredOrders = orders
    .filter(order => filter === 'All' || order.status === filter)
    .filter(order => 
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.items.some(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
    );

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Your Orders</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-1">Track and view your past orders.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input 
              placeholder="Search by order ID or item name" 
              className="pl-10" 
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            {['All', 'Delivered', 'In Progress', 'Cancelled'].map(f => (
              <Button 
                key={f} 
                variant={filter === f ? 'default' : 'outline'}
                onClick={() => setFilter(f)}
                className="whitespace-nowrap"
              >
                {f}
              </Button>
            ))}
          </div>
        </div>

        {filteredOrders.length > 0 ? (
          <div className="grid grid-cols-1 gap-6">
            <AnimatePresence>
              {filteredOrders.map(order => <OrderCard key={order.id} order={order} />)}
            </AnimatePresence>
          </div>
        ) : (
          <EmptyState />
        )}
      </div>
    </div>
  );
}
