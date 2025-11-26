import { useState } from 'react';
import { Toaster } from 'sonner';
import { AnimatePresence } from 'framer-motion';
import Header from '@/components/common/Header';
import StepIndicator from '@/components/ordering/StepIndicator';
import OrderSummary from '@/components/ordering/OrderSummary';
import PersonalInfo from '@/components/ordering/PersonalInfo';
import DeliveryMethod from '@/components/ordering/DeliveryMethod';
import PaymentOptions from '@/components/ordering/PaymentOptions';
import { Button } from '@/components/ui/button';

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
                    <Button onClick={() => setStep(2)} size="lg" className='bg-gradient-to-r from-amber-500 via-red-500 to-red-600 text-white font-bold shadow-lg transform transition-transform hover:scale-105 py-4 px-10 text-lg rounded-lg'>
                        Proceed to Payment
                    </Button>
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
