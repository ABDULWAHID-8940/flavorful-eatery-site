import { motion } from 'framer-motion';

interface StepIndicatorProps {
  currentStep: number;
}

const steps = ['Cart', 'Checkout', 'Payment'];

const StepIndicator = ({ currentStep }: StepIndicatorProps) => {
  return (
    <div className='w-full py-8 px-4'>
      <div className='flex items-center justify-center w-full max-w-2xl mx-auto'>
        {steps.map((step, index) => (
          <div key={step} className='flex items-center w-full'>
            <div className='flex flex-col items-center'>
              <motion.div
                animate={{ 
                  scale: index === currentStep ? 1.1 : 1,
                  backgroundColor: index <= currentStep ? '#A16207' : '#E5E7EB',
                  color: index <= currentStep ? '#FFFFFF' : '#6B7280'
                }}
                transition={{ duration: 0.3 }}
                className='w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg'
              >
                {index + 1}
              </motion.div>
              <p className={`mt-2 text-sm font-medium ${index <= currentStep ? 'text-primary' : 'text-gray-500'}`}>{step}</p>
            </div>
            {index < steps.length - 1 && (
              <motion.div 
                className='flex-grow h-1 mx-4'
                initial={{ backgroundColor: '#E5E7EB' }}
                animate={{ backgroundColor: index < currentStep ? '#A16207' : '#E5E7EB' }}
                transition={{ duration: 0.3, delay: 0.2 }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepIndicator;