import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Trash2, ShoppingBag, X } from 'lucide-react';
import { Link } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

// Mock data - replace with actual cart state
const initialCartItems = [
  {
    id: 1,
    name: 'Chicken Alfredo',
    notes: 'Extra cheese, no onions',
    price: 320,
    quantity: 1,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/7a324c89-1af0-4263-ac87-5b142101d8e1/alfredo-thumb-1-g9s7obf-1763447499760.webp',
    addons: [
      { name: 'Extra Cheese', price: 20 },
      { name: 'Herbs', price: 10 },
    ]
  },
  {
    id: 2,
    name: 'Fresh Juice',
    notes: '',
    price: 150,
    quantity: 2,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/7a324c89-1af0-4263-ac87-5b142101d8e1/fresh-juice-thumb-m0a3u2j-1764161203058.webp',
    addons: []
  },
];

const CartItemCard = ({ item, onUpdateQuantity, onRemove }) => {
  const totalPrice = (item.price + item.addons.reduce((sum, addon) => sum + addon.price, 0)) * item.quantity;

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50, transition: { duration: 0.3 } }}
      className="flex items-start gap-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700"
    >
      <img src={item.image} alt={item.name} className="w-20 h-20 md:w-24 md:h-24 rounded-md object-cover shadow-md" />
      <div className="flex-grow">
        <div className="flex justify-between items-start">
            <div>
                <h3 className="font-semibold text-lg text-gray-800 dark:text-white">{item.name}</h3>
                {item.notes && <p className="text-sm text-gray-500 dark:text-gray-400">{item.notes}</p>}
            </div>
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button variant="ghost" size="icon" className="text-gray-500 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400" onClick={() => onRemove(item.id)}>
                            <Trash2 className="h-5 w-5" />
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent><p>Remove item</p></TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </div>
        
        {item.addons.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
                {item.addons.map(addon => (
                    <Badge key={addon.name} variant="secondary">+ {addon.price} ETB {addon.name}</Badge>
                ))}
            </div>
        )}

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-3">
          <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 rounded-full px-2 py-1">
            <Button variant="ghost" size="icon" className="h-6 w-6 rounded-full" onClick={() => onUpdateQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>
              <Minus className="h-4 w-4" />
            </Button>
            <span className="font-bold w-4 text-center">{item.quantity}</span>
            <Button variant="ghost" size="icon" className="h-6 w-6 rounded-full" onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          <p className="font-semibold text-lg text-gray-900 dark:text-white mt-2 sm:mt-0">
            {totalPrice.toFixed(2)} ETB
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const EmptyCart = () => (
    <div className="text-center py-20 col-span-1 lg:col-span-3">
        <ShoppingBag className="mx-auto h-24 w-24 text-gray-400 dark:text-gray-500" strokeWidth={1} />
        <h3 className="mt-4 text-2xl font-semibold text-gray-800 dark:text-white">Your cart is empty.</h3>
        <p className="mt-2 text-gray-500 dark:text-gray-400">Looks like you haven't added anything to your cart yet.</p>
        <Link to="/menu">
            <Button size="lg" className="mt-6 bg-gradient-to-r from-amber-500 via-red-500 to-red-600 text-white font-bold shadow-lg transform transition-transform hover:scale-105">
                Browse Menu
            </Button>
        </Link>
    </div>
);

const PriceSummary = ({ items }) => {
    const subtotal = items.reduce((sum, item) => sum + (item.price + item.addons.reduce((s, a) => s + a.price, 0)) * item.quantity, 0);
    const tax = subtotal * 0.15;
    const serviceFee = 50;
    const deliveryFee = 100;
    const total = subtotal + tax + serviceFee + deliveryFee;

    return (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 sticky top-24">
            <h3 className="text-xl font-bold mb-4">Order Summary</h3>
            <div className="space-y-2 text-gray-600 dark:text-gray-300">
                <div className="flex justify-between"><span>Subtotal</span><span>{subtotal.toFixed(2)} ETB</span></div>
                <div className="flex justify-between"><span>Tax (15%)</span><span>{tax.toFixed(2)} ETB</span></div>
                <div className="flex justify-between"><span>Service Fee</span><span>{serviceFee.toFixed(2)} ETB</span></div>
                <div className="flex justify-between"><span>Delivery Fee</span><span>{deliveryFee.toFixed(2)} ETB</span></div>
            </div>
            <div className="my-4 border-t border-dashed border-gray-300 dark:border-gray-600" />
            <div className="flex items-center gap-2 mb-4">
                <Input placeholder="Promo Code" className="flex-grow" />
                <Button variant="outline">Apply</Button>
            </div>
            <div className="my-4 border-t border-gray-300 dark:border-gray-600" />
            <div className="flex justify-between items-center font-bold text-xl mb-6">
                <span>Total</span>
                <span>{total.toFixed(2)} ETB</span>
            </div>
            <Link to="/checkout">
                <Button size="lg" className="w-full text-lg py-6 bg-gradient-to-r from-amber-500 via-red-500 to-red-600 text-white font-bold shadow-lg transform transition-transform hover:scale-105">
                    Proceed to Checkout
                </Button>
            </Link>
        </div>
    );
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const isUserLoggedIn = false; // Mock auth state

  const handleUpdateQuantity = (itemId, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(cartItems.map(item => item.id === itemId ? { ...item, quantity: newQuantity } : item));
  };

  const handleRemoveItem = (itemId) => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {!isUserLoggedIn && (
            <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 rounded-md mb-6 flex justify-between items-center">
                <p><span className="font-bold">Sign in</span> to save your cart and track your order.</p>
                <div>
                    <Button variant="outline" className="mr-2">Login</Button>
                    <Button>Continue as Guest</Button>
                </div>
            </div>
        )}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {cartItems.length > 0 ? (
            <div className="lg:col-span-2 space-y-4">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Your Cart</h1>
              <AnimatePresence>
                  {cartItems.map(item => (
                      <CartItemCard key={item.id} item={item} onUpdateQuantity={handleUpdateQuantity} onRemove={handleRemoveItem} />
                  ))}
              </AnimatePresence>
              <div className="mt-6">
                <Link to="/menu">
                  <Button variant="outline">Continue Browsing Menu</Button>
                </Link>
              </div>
            </div>
          ) : <EmptyCart />}
          
          {cartItems.length > 0 && (
              <div className="lg:col-span-1">
                  <PriceSummary items={cartItems} />
              </div>
          )}
        </div>
      </div>
    </div>
  );
}
