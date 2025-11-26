import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { ChevronLeft, Star, Minus, Plus, Heart, ShoppingCart, Share2, Leaf, Wheat, Milk, Drumstick } from 'lucide-react';

// Mock Data - In a real app, you'd fetch this based on itemId
const dishData = {
  id: '1',
  name: 'Grilled Chicken Alfredo',
  tagline: 'Creamy pasta with premium grilled chicken and herbs.',
  category: 'Dinner • Pasta',
  price: 320.00,
  availability: 'Available',
  images: {
    main: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/7a324c89-1af0-4263-ac87-5b142101d8e1/grilled-chicken-alfredo-main-igej4u2-1763447492287.webp',
    thumbnails: [
      'https://storage.googleapis.com/dala-prod-public-storage/generated-images/7a324c89-1af0-4263-ac87-5b142101d8e1/alfredo-thumb-1-g9s7obf-1763447499760.webp',
      'https://storage.googleapis.com/dala-prod-public-storage/generated-images/7a324c89-1af0-4263-ac87-5b142101d8e1/alfredo-thumb-2-0mx4qt4-1763447508313.webp',
      'https://storage.googleapis.com/dala-prod-public-storage/generated-images/7a324c89-1af0-4263-ac87-5b142101d8e1/alfredo-thumb-3-1dlzzok-1763447515751.webp',
    ],
  },
  labels: ['Bestseller', 'New'],
  ingredients: [
    { name: 'Chicken', icon: Drumstick, dietary: '' },
    { name: 'Pasta', icon: Wheat, dietary: 'Contains Gluten' },
    { name: 'Alfredo Sauce', icon: Milk, dietary: 'Contains Dairy' },
    { name: 'Herbs', icon: Leaf, dietary: '' },
  ],
  nutrition: {
    calories: '680 kcal',
    protein: '32g',
    carbs: '45g',
    fat: '28g',
  },
  reviews: {
    average: 4.6,
    total: 123,
    distribution: [80, 15, 3, 1, 1],
    items: [
      {
        avatar: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/7a324c89-1af0-4263-ac87-5b142101d8e1/avatar-1-3he94py-1763447552951.webp',
        name: 'Abebe Bikila',
        rating: 5,
        date: '2 weeks ago',
        comment: 'Absolutely delicious! The chicken was perfectly grilled and the sauce was so creamy. Best Alfredo in Addis!',
      },
      {
        avatar: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/7a324c89-1af0-4263-ac87-5b142101d8e1/avatar-2-zrkv5sq-1763447560462.webp',
        name: 'Fatuma Roba',
        rating: 4,
        date: '1 month ago',
        comment: 'Really enjoyed this dish. A bit rich for my taste, but the flavor was fantastic. Will order again.',
      },
    ],
  },
  relatedDishes: [
      { id: '2', name: 'Gourmet Beef Burger', price: 280, image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/7a324c89-1af0-4263-ac87-5b142101d8e1/related-dish-burger-kthcanu-1763447523515.webp' },
      { id: '3', name: 'Chicken Caesar Salad', price: 220, image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/7a324c89-1af0-4263-ac87-5b142101d8e1/related-dish-salad-woea2fv-1763447530883.webp' },
      { id: '4', name: 'Chocolate Lava Cake', price: 180, image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/7a324c89-1af0-4263-ac87-5b142101d8e1/related-dish-cake-aq0h9nh-1763447538036.webp' },
      { id: '5', name: 'Margherita Pizza', price: 250, image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/7a324c89-1af0-4263-ac87-5b142101d8e1/related-dish-pizza-d3tqs7p-1763447545760.webp' },
  ],
};

const FoodDetails = () => {
  const { itemId } = useParams(); // In a real app, use this to fetch data
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);
  const [mainImage, setMainImage] = useState(dishData.images.main);

  const handleAddToCart = () => {
    if (isAdded) return;
    setIsAdded(true);
    toast.success(`${dishData.name} added to your cart!`, {
      action: { label: 'View Cart', onClick: () => console.log('Navigate to cart') },
    });
    if ('vibrate' in navigator) navigator.vibrate(100);
    setTimeout(() => setIsAdded(false), 2000); // Reset button state
  };

  const addedButtonClass = 'bg-green-500';
  const primaryButtonClass = 'bg-gradient-to-r from-amber-500 via-red-500 to-red-600 hover:scale-105';

  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <Link to="/menu" className="flex items-center text-red-600 dark:text-red-500 hover:underline mb-6">
          <ChevronLeft size={20} />
          <span>Back to Menu</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Section */}
          <div>
            <div className="relative group">
              <img src={mainImage} alt={dishData.name} className="w-full h-auto max-h-[500px] object-cover rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-105" />
              <div className="absolute top-4 left-4 flex gap-2">
                {dishData.labels.map(label => (
                  <span key={label} className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">{label}</span>
                ))}
              </div>
            </div>
            <div className="flex gap-3 mt-4">
              {dishData.images.thumbnails.map((thumb, idx) => (
                <img key={idx} src={thumb} onClick={() => setMainImage(thumb)} className={`w-20 h-20 rounded-lg object-cover cursor-pointer border-2 ${mainImage === thumb ? 'border-red-600' : 'border-transparent'} hover:border-red-500 transition-all`}/>
              ))}
            </div>
          </div>

          {/* Details Section */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-red-600 dark:text-red-500 font-semibold">{dishData.category}</p>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">{dishData.name}</h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">{dishData.tagline}</p>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-4xl font-bold text-red-600 dark:text-red-500">ETB {dishData.price.toFixed(2)}</p>
              <div className="flex items-center gap-2">
                <span className={`w-3 h-3 rounded-full ${dishData.availability === 'Available' ? 'bg-green-500' : 'bg-red-500'}`}></span>
                <span className="text-sm font-medium">{dishData.availability}</span>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Ingredients</h3>
              <div className="flex flex-wrap gap-4">
                {dishData.ingredients.map(ing => (
                  <div key={ing.name} className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 p-2 rounded-lg">
                    <ing.icon className="w-5 h-5 text-red-600" />
                    <span className="text-sm font-medium">{ing.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Nutrition Facts</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                  <div className="text-center"><p className="font-bold text-lg">{dishData.nutrition.calories}</p><p className="text-sm text-gray-500">Calories</p></div>
                  <div className="text-center"><p className="font-bold text-lg">{dishData.nutrition.protein}</p><p className="text-sm text-gray-500">Protein</p></div>
                  <div className="text-center"><p className="font-bold text-lg">{dishData.nutrition.carbs}</p><p className="text-sm text-gray-500">Carbs</p></div>
                  <div className="text-center"><p className="font-bold text-lg">{dishData.nutrition.fat}</p><p className="text-sm text-gray-500">Fat</p></div>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="flex items-center gap-4 bg-gray-100 dark:bg-gray-800 rounded-full p-2">
                <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="p-2 rounded-full bg-white dark:bg-gray-700"><Minus size={16}/></button>
                <span className="text-xl font-bold w-8 text-center">{quantity}</span>
                <button onClick={() => setQuantity(q => q + 1)} className="p-2 rounded-full bg-white dark:bg-gray-700"><Plus size={16}/></button>
              </div>
              <Button onClick={handleAddToCart} size="lg" className={`w-full text-white font-bold rounded-full flex items-center justify-center gap-2 transition-all duration-300 transform ${isAdded ? addedButtonClass : primaryButtonClass}`}>
                {isAdded ? <><Star size={20}/> Added!</> : <><ShoppingCart size={20}/> Add to Cart</>}
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-16">
            <h2 className="text-3xl font-bold mb-6">Customer Reviews</h2>
            <div className='flex flex-col md:flex-row gap-8 items-start'>
                <div className='w-full md:w-1/3 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md'>
                    <div className='flex items-center gap-2'>
                        <p className='text-4xl font-bold'>{dishData.reviews.average}</p>
                        <div>
                            <div className='flex'>{[...Array(5)].map((_, i) => <Star key={i} size={20} className={i < Math.round(dishData.reviews.average) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}/>)}</div>
                            <p className='text-sm text-gray-500'>Based on {dishData.reviews.total} reviews</p>
                        </div>
                    </div>
                    <div className='mt-4 space-y-1'>
                        {dishData.reviews.distribution.map((p, i) => (
                            <div key={i} className='flex items-center gap-2'>
                                <span className='text-sm'>{5-i} star</span>
                                <div className='w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5'><div className='bg-yellow-400 h-2.5 rounded-full' style={{width: `${p}%`}}></div></div>
                                <span className='text-sm w-8 text-right'>{p}%</span>
                            </div>
                        ))}
                    </div>
                     <Button variant="outline" className="w-full mt-6">Write a Review</Button>
                </div>
                <div className='w-full md:w-2/3 space-y-6'>
                    {dishData.reviews.items.map((review, i) => (
                        <div key={i} className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md'>
                            <div className='flex items-center gap-4'>
                                <img src={review.avatar} className='w-12 h-12 rounded-full object-cover'/>
                                <div>
                                    <p className='font-bold'>{review.name}</p>
                                    <div className='flex items-center gap-2'>
                                        <div className='flex'>{[...Array(5)].map((_, i) => <Star key={i} size={16} className={i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}/>)}</div>
                                        <p className='text-sm text-gray-500'>{review.date}</p>
                                    </div>
                                </div>
                            </div>
                            <p className='mt-4 text-gray-700 dark:text-gray-300'>{review.comment}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        <div className="mt-16">
            <h2 className="text-3xl font-bold mb-6">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {dishData.relatedDishes.map(dish => (
                    <Link to={`/menu/${dish.id}`} key={dish.id} className='bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden group'>
                        <img src={dish.image} alt={dish.name} className='w-full h-32 object-cover group-hover:scale-105 transition-transform'/>
                        <div className='p-4'>
                            <h4 className='font-semibold truncate'>{dish.name}</h4>
                            <p className='text-red-600 font-bold mt-1'>ETB {dish.price.toFixed(2)}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
      </div>

      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm p-4 border-t border-gray-200 dark:border-gray-700 flex items-center gap-4">
        <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 rounded-full p-1">
            <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="p-2 rounded-full bg-white dark:bg-gray-700"><Minus size={14}/></button>
            <span className="text-lg font-bold w-6 text-center">{quantity}</span>
            <button onClick={() => setQuantity(q => q + 1)} className="p-2 rounded-full bg-white dark:bg-gray-700"><Plus size={14}/></button>
        </div>
        <Button onClick={handleAddToCart} size="lg" className={`w-full text-white font-bold rounded-full flex items-center justify-center gap-2 transition-all duration-300 transform ${isAdded ? addedButtonClass : primaryButtonClass}`}>
            {isAdded ? 'Added!' : `Add for ETB ${(dishData.price * quantity).toFixed(2)}`}
        </Button>
      </div>
    </div>
  );
};

export default FoodDetails;
