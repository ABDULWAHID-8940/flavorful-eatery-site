import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, CreditCard } from 'lucide-react';
import { toast } from 'sonner';

const visaLogo = 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/7a324c89-1af0-4263-ac87-5b142101d8e1/visa-logo-gw8z4tn-1763554112651.webp';
const mastercardLogo = 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/7a324c89-1af0-4263-ac87-5b142101d8e1/mastercard-logo-70ft7q1-1763554118521.webp';
const mpesaLogo = 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/7a324c89-1af0-4263-ac87-5b142101d8e1/mpesa-logo-s16lb85-1763554124573.webp';

const PaymentOptions = () => {
  const [paymentMethod, setPaymentMethod] = useState('card');

  const handlePayment = () => {
    toast.loading('Processing payment...');
    setTimeout(() => {
      toast.success('Payment successful! Your order is confirmed.');
    }, 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className='bg-white/60 backdrop-blur-xl border border-gray-200/50 p-8 rounded-2xl shadow-lg'
    >
      <h2 className='text-2xl font-bold text-gray-800 mb-6'>Payment</h2>
      <div className='flex border border-gray-200 rounded-lg overflow-hidden mb-6'>
        <button onClick={() => setPaymentMethod('card')} className={`flex-1 py-3 px-4 text-center font-medium transition-colors flex items-center justify-center gap-2 ${paymentMethod === 'card' ? 'bg-primary text-white' : 'bg-white/50 text-gray-700 hover:bg-gray-100/50'}`}>Card</button>
        <button onClick={() => setPaymentMethod('mpesa')} className={`flex-1 py-3 px-4 text-center font-medium transition-colors flex items-center justify-center gap-2 ${paymentMethod === 'mpesa' ? 'bg-primary text-white' : 'bg-white/50 text-gray-700 hover:bg-gray-100/50'}`}>M-Pesa</button>
      </div>
      <AnimatePresence mode='wait'>
        {paymentMethod === 'card' && (
          <motion.div key='card' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className='space-y-4'>
            <div className='flex justify-end items-center gap-2 mb-2'>
                <img src={visaLogo} alt='Visa' className='h-6' />
                <img src={mastercardLogo} alt='Mastercard' className='h-6' />
            </div>
            <div className='relative'>
              <CreditCard className='absolute top-3 left-3 text-gray-400' />
              <input type='text' placeholder='Card Number' className='pl-10 p-3 w-full border-gray-300 rounded-lg shadow-sm focus:ring-primary focus:border-primary bg-white/70' />
            </div>
            <div className='grid grid-cols-2 gap-4'>
              <input type='text' placeholder='MM/YY' className='p-3 w-full border-gray-300 rounded-lg shadow-sm focus:ring-primary focus:border-primary bg-white/70' />
              <input type='text' placeholder='CVC' className='p-3 w-full border-gray-300 rounded-lg shadow-sm focus:ring-primary focus:border-primary bg-white/70' />
            </div>
            <input type='text' placeholder='Cardholder Name' className='p-3 w-full border-gray-300 rounded-lg shadow-sm focus:ring-primary focus:border-primary bg-white/70' />
          </motion.div>
        )}
        {paymentMethod === 'mpesa' && (
            <motion.div key='mpesa' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className='space-y-4'>
                <div className='flex justify-end'>
                    <img src={mpesaLogo} alt='M-Pesa' className='h-8' />
                </div>
                <input type='tel' placeholder='Safaricom Phone Number' className='p-3 w-full border-gray-300 rounded-lg shadow-sm focus:ring-primary focus:border-primary bg-white/70' />
                <p className='text-xs text-gray-500 text-center'>You will receive a push notification to confirm the payment.</p>
            </motion.div>
        )}
      </AnimatePresence>
      <div className='mt-8'>
        <button onClick={handlePayment} className='w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-lg text-lg transition-transform transform hover:scale-105 shadow-lg flex items-center justify-center'>
          <Lock className='w-5 h-5 mr-2' /> Pay $32.50 Securely
        </button>
        <p className='text-xs text-gray-500 text-center mt-4'>Your payment is secure and encrypted.</p>
      </div>
    </motion.div>
  );
};

export default PaymentOptions;