import { useState, useMemo } from 'react';
import { dishes, categories, deals } from '../lib/mock-data';
import { Dish, CartItem } from '../lib/types';
import MenuCard from '../components/menu/MenuCard';
import Footer from '../components/common/Footer';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetFooter } from '../components/ui/sheet';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { toast, Toaster } from 'sonner';
import { Search, ShoppingCart, X, Star, Minus, Plus, Tag } from 'lucide-react';

export default function Menu() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  const [sortOption, setSortOption] = useState('popular');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);

  const handleAddToCart = (dish: Dish) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.dish.id === dish.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.dish.id === dish.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { dish, quantity: 1 }];
      }
    });
    toast.success(`${dish.name} added to cart!`, {
      className: 'toast-success',
    });
  };

  const handleUpdateQuantity = (dishId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveFromCart(dishId);
    } else {
      setCart(cart.map(item => (item.dish.id === dishId ? { ...item, quantity } : item)));
    }
  };

  const handleRemoveFromCart = (dishId: string) => {
    setCart(cart.filter(item => item.dish.id !== dishId));
  };

  const handleViewDetails = (dish: Dish) => setSelectedDish(dish);
  const handleCloseDetails = () => setSelectedDish(null);

  const cartTotal = useMemo(() => cart.reduce((total, item) => total + item.dish.price * item.quantity, 0), [cart]);
  const cartItemCount = useMemo(() => cart.reduce((count, item) => count + item.quantity, 0), [cart]);

  const filteredAndSortedDishes = useMemo(() => {
    let filtered = dishes.filter(dish =>
      dish.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (activeFilter !== 'All') {
        if (['Vegan', 'Spicy', 'Halal'].includes(activeFilter)) {
            filtered = filtered.filter(dish => dish.tags.includes(activeFilter));
        } else {
            filtered = filtered.filter(dish => dish.category === activeFilter);
        }
    }

    switch (sortOption) {
      case 'price-asc':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));
        break;
      default: // popular
        filtered.sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0)); // simple popularity sort by rating
        break;
    }

    return filtered;
  }, [searchTerm, activeFilter, sortOption]);

  const dishesByCategory = useMemo(() => {
    return categories.map(category => ({
      ...category,
      dishes: filteredAndSortedDishes.filter(dish => dish.category === category.name)
    })).filter(category => category.dishes.length > 0);
  }, [filteredAndSortedDishes]);

  const allFilters = ['All', ...categories.map(c => c.name), 'Vegan', 'Spicy', 'Halal'];

  const renderCart = () => (
    <div className="flex flex-col h-full bg-white dark:bg-gray-900">
      <SheetHeader className="p-6 border-b border-gray-200 dark:border-gray-700">
        <SheetTitle className="text-2xl font-bold text-gray-900 dark:text-white">My Order</SheetTitle>
      </SheetHeader>
      <div className="flex-grow p-6 overflow-y-auto">
        {cart.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-400 text-center mt-8">Your cart is empty.</p>
        ) : (
          <div className="space-y-4">
            {cart.map(item => (
              <div key={item.dish.id} className="flex items-center space-x-4">
                <img src={item.dish.image} alt={item.dish.name} className="w-16 h-16 rounded-md object-cover"/>
                <div className="flex-grow">
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200">{item.dish.name}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">${item.dish.price.toFixed(2)}</p>
                </div>
                <div className="flex items-center space-x-2">
                    <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => handleUpdateQuantity(item.dish.id, item.quantity - 1)}><Minus className="h-4 w-4"/></Button>
                    <span className="font-bold text-lg w-4 text-center">{item.quantity}</span>
                    <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => handleUpdateQuantity(item.dish.id, item.quantity + 1)}><Plus className="h-4 w-4"/></Button>
                </div>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-red-500" onClick={() => handleRemoveFromCart(item.dish.id)}><X className="h-5 w-5"/></Button>
              </div>
            ))}
          </div>
        )}
      </div>
      {cart.length > 0 && (
        <SheetFooter className="p-6 border-t border-gray-200 dark:border-gray-700">
          <div className="w-full">
            <div className="flex justify-between items-center font-bold text-lg mb-4">
              <span>Total:</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <Button size="lg" className="w-full bg-red-600 hover:bg-red-700 text-white">Checkout</Button>
          </div>
        </SheetFooter>
      )}
    </div>
  );

  return (
    <div className="bg-gray-50 dark:bg-black text-gray-800 dark:text-gray-200 min-h-screen">
      <Toaster position="top-center" richColors />
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">Our Menu</h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Delicious dishes prepared with fresh ingredients. Explore our categories and order instantly.</p>
        </div>

        <div className="sticky top-0 z-20 bg-gray-50/80 dark:bg-black/80 backdrop-blur-sm py-4 mb-8">
            <div className="relative max-w-lg mx-auto mb-4">
                <Input 
                    type="text" 
                    placeholder="Search for dishes..." 
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                    className="pl-10 text-lg h-12 rounded-full shadow-sm"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
            <div className="flex justify-center space-x-2 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
                {allFilters.map(filter => (
                    <button 
                        key={filter}
                        onClick={() => setActiveFilter(filter)}
                        className={`px-4 py-2 text-sm font-semibold rounded-full shrink-0 transition-colors duration-200 ${activeFilter === filter ? 'bg-red-600 text-white' : 'bg-white dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'}`}>
                        {filter}
                    </button>
                ))}
            </div>
        </div>

        <div className="flex justify-end items-center mb-6">
            <Select onValueChange={setSortOption} defaultValue={sortOption}>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="popular">Most Popular</SelectItem>
                    <SelectItem value="price-asc">Price: Low to High</SelectItem>
                    <SelectItem value="price-desc">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                </SelectContent>
            </Select>
        </div>
        
        {/* Deals Section */}
        <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4 flex items-center"><Tag className="mr-2 text-yellow-500"/>Deals & Combos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {deals.map(deal => (
                    <div key={deal.id} className="bg-cover bg-center rounded-lg shadow-lg text-white p-6 flex flex-col justify-between h-48" style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${deal.image})`}}>
                        <div>
                           <span className="bg-yellow-500 text-black font-bold px-3 py-1 rounded-full text-sm">{deal.discount}% OFF</span>
                           <h3 className="text-2xl font-bold mt-2">{deal.name}</h3>
                        </div>
                        <Button className="bg-yellow-500 hover:bg-yellow-600 text-black self-start">Add Combo</Button>
                    </div>
                ))}
            </div>
        </div>

        {dishesByCategory.map(category => (
            <div key={category.id} className="mb-12">
                <h2 className="text-3xl font-bold mb-2">{category.name}</h2>
                <p className="text-gray-500 dark:text-gray-400 mb-6">{category.description}</p>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {category.dishes.map(dish => (
                        <MenuCard key={dish.id} item={dish} />
                    ))}
                </div>
            </div>
        ))}

        {filteredAndSortedDishes.length === 0 && (
            <div className="text-center py-16">
                <p className="text-2xl font-semibold">No dishes found</p>
                <p className="text-gray-500 mt-2">Try adjusting your search or filters.</p>
            </div>
        )}
      </main>

      {/* Dish Detail Modal */}
      {selectedDish && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center" onClick={handleCloseDetails}>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto m-4 relative animate-in zoom-in-90" onClick={e => e.stopPropagation()}>
            <Button variant="ghost" size="icon" className="absolute top-4 right-4 z-10" onClick={handleCloseDetails}><X/></Button>
            <img src={selectedDish.image} alt={selectedDish.name} className="w-full h-64 object-cover rounded-t-xl" />
            <div className="p-8">
              <div className="flex justify-between items-start">
                <h2 className="text-4xl font-extrabold mb-2">{selectedDish.name}</h2>
                <p className="text-3xl font-bold text-yellow-500">${selectedDish.price.toFixed(2)}</p>
              </div>
              <div className="flex items-center space-x-4 mb-4">
                {selectedDish.tags.map(tag => <span key={tag} className='px-3 py-1 text-sm font-semibold rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'>{tag}</span>)}
                {selectedDish.rating && <div className="flex items-center"><Star className="w-5 h-5 text-yellow-500 mr-1"/> <span className="font-bold">{selectedDish.rating}</span></div>}
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">{selectedDish.description}</p>
              
              {selectedDish.ingredients && (
                  <div className="mb-4">
                    <h4 className="font-bold text-lg mb-2">Ingredients</h4>
                    <p className="text-gray-500 dark:text-gray-400">{selectedDish.ingredients.join(', ')}</p>
                  </div>
              )}
              {selectedDish.allergens && (
                  <div className="mb-6">
                    <h4 className="font-bold text-lg mb-2">Allergens</h4>
                    <p className="text-red-500">{selectedDish.allergens.join(', ')}</p>
                  </div>
              )}

              <Button size="lg" className="w-full bg-red-600 hover:bg-red-700" onClick={() => { handleAddToCart(selectedDish); handleCloseDetails(); }}>Add to Cart</Button>
            </div>
          </div>
        </div>
      )}

      {/* Cart Sheet */}
      <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
        <SheetTrigger asChild>
          <button className="fixed bottom-6 right-6 bg-red-600 text-white p-4 rounded-full shadow-lg z-30 flex items-center space-x-2 animate-in slide-in-from-bottom-12 duration-300">
            <ShoppingCart />
            <span className="font-bold">{cartItemCount}</span>
          </button>
        </SheetTrigger>
        <SheetContent className="p-0 w-full sm:max-w-md">
          {renderCart()}
        </SheetContent>
      </Sheet>

      <Footer />
    </div>
  );
}
