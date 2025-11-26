import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';

const OrderSummary = () => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
    className='lg:sticky top-28 h-fit bg-white/60 backdrop-blur-xl border border-gray-200/50 rounded-2xl shadow-lg w-full'
  >
    <div className='p-6 border-b border-gray-200/70'>
      <h2 className='text-2xl font-bold text-gray-800 flex items-center'><ShoppingBag className='mr-3 text-primary' />Jirani Checkout</h2>
    </div>
    <div className='p-6 space-y-4'>
      <h3 className='text-lg font-semibold text-gray-700'>Your Order</h3>
      {[{ name: 'Jollof Rice & Chicken', qty: 1, price: 15.00, img: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/7a324c89-1af0-4263-ac87-5b142101d8e1/jollof-rice-and-chicken-axjwef-1763412574048.webp' }, { name: 'Fried Plantains', qty: 2, price: 5.00, img: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/7a324c89-1af0-4263-ac87-5b142101d8e1/fried-plantain-slices-uuf28d-1763412586737.webp' }].map(item => (
        <div key={item.name} className='flex items-center space-x-4'>
          <img src={item.img} alt={item.name} className='w-16 h-16 rounded-lg object-cover shadow-sm' />
          <div className='flex-1'>
            <p className='font-semibold text-gray-800'>{item.name}</p>
            <p className='text-sm text-gray-500'>Qty: {item.qty}</p>
          </div>
          <p className='font-semibold text-gray-900'>${(item.price * item.qty).toFixed(2)}</p>
        </div>
      ))}
    </div>
    <div className='p-6 bg-gray-50/50 rounded-b-2xl space-y-2 text-gray-600 text-sm'>
      <div className='flex justify-between'><p>Subtotal</p><p className='font-medium'>$25.00</p></div>
      <div className='flex justify-between'><p>Tax (10%)</p><p className='font-medium'>$2.50</p></div>
      <div className='flex justify-between'><p>Delivery Fee</p><p className='font-medium'>$5.00</p></div>
      <div className='border-t border-gray-200 my-2'></div>
      <div className='flex justify-between font-bold text-lg text-gray-900'><p>Grand Total</p><p>$32.50</p></div>
    </div>
  </motion.div>
); 

export default OrderSummary;