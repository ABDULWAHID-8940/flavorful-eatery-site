import { useState } from 'react';
import { Toaster } from 'sonner';
import { AnimatePresence } from 'framer-motion';
import Header from '@/components/common/Header';
import StepIndicator from '@/components/ordering/StepIndicator';
import OrderSummary from '@/components/ordering/OrderSummary';
import PersonalInfo from '@/components/ordering/PersonalInfo';
import DeliveryMethod from '@/components/ordering/DeliveryMethod';
import PaymentOptions from '@/components/ordering/PaymentOptions';

const JiraniCheckout = () => {
  const [step, setStep] = useState(1);

  return (
    <div className='bg-gray-50 min-h-screen'>
      <Toaster richColors position='top-center' />
      <Header />
      <div className='py-6 bg-white border-b border-gray-200'>
        <StepIndicator currentStep={step} />
      </div>

      <main className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-12 items-start'>
          <div className='lg:col-span-2 space-y-8'>
            <AnimatePresence mode='wait'>
              {step === 1 && <PersonalInfo />}
              {step === 1 && <DeliveryMethod />}
              {step === 2 && <PaymentOptions />}
            </AnimatePresence>
             <div className='flex justify-end mt-8'>
                {step === 1 && (
                    <button onClick={() => setStep(2)} className='bg-primary text-white font-bold py-3 px-8 rounded-lg text-lg transition-transform transform hover:scale-105 shadow-lg'>
                        Proceed to Payment
                    </button>
                )}
            </div>
          </div>

          <div className='lg:col-span-1'>
            <OrderSummary />
          </div>
        </div>
      </main>
    </div>
  );
};

export default JiraniCheckout;