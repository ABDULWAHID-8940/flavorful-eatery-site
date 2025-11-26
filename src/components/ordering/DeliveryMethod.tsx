import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Truck, Store, MapPin } from 'lucide-react';

const DeliveryMethod = () => {
  const [deliveryMethod, setDeliveryMethod] = useState('delivery');

  const methods = [
    { id: 'delivery', label: 'Delivery', icon: Truck },
    { id: 'pickup', label: 'Pickup', icon: Store },
    { id: 'dine-in', label: 'Dine-in', icon: MapPin },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className='bg-white/60 backdrop-blur-xl border border-gray-200/50 p-8 rounded-2xl shadow-lg'
    >
      <h2 className='text-2xl font-bold text-gray-800 mb-6'>Delivery Method</h2>
      <div className='flex border border-gray-200 rounded-lg overflow-hidden'>
        {methods.map(method => (
          <button 
            key={method.id} 
            onClick={() => setDeliveryMethod(method.id)} 
            className={`flex-1 py-3 px-4 text-center font-medium transition-colors flex items-center justify-center gap-2 ${deliveryMethod === method.id ? 'bg-primary text-white' : 'bg-white/50 text-gray-700 hover:bg-gray-100/50'}`}>
              <method.icon className='w-5 h-5' />
              {method.label}
          </button>
        ))}
      </div>
      <AnimatePresence mode='wait'>
        <motion.div
          key={deliveryMethod}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className='mt-6'
        >
          {deliveryMethod === 'delivery' && (
            <div className='space-y-4'>
              <input type='text' placeholder='Full Address' className='w-full p-3 border-gray-300 rounded-lg shadow-sm focus:ring-primary focus:border-primary bg-white/70' />
              <input type='text' placeholder='City' className='w-full p-3 border-gray-300 rounded-lg shadow-sm focus:ring-primary focus:border-primary bg-white/70' />
              <textarea placeholder='Delivery Instructions' rows={3} className='w-full p-3 border-gray-300 rounded-lg shadow-sm focus:ring-primary focus:border-primary bg-white/70'></textarea>
            </div>
          )}
          {deliveryMethod === 'pickup' && <p className='text-gray-600 p-4 bg-gray-100/70 rounded-lg'>Pickup from: 123 Jollof Avenue, Accra, Ghana. Ready in approx. 25 mins.</p>}
          {deliveryMethod === 'dine-in' && <p className='text-gray-600 p-4 bg-gray-100/70 rounded-lg'>Table selection is available at the restaurant. Please see the host upon arrival.</p>}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default DeliveryMethod;