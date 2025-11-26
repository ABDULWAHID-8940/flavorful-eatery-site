import { useState } from 'react';
import Header from '@/components/common/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { ShieldCheck, Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast, Toaster } from 'sonner';

const ProgressIndicator = ({ currentStep }: { currentStep: number }) => {
  const steps = ['Cart', 'Checkout Details', 'Payment', 'Confirmation'];
  return (
    <div className='flex items-center justify-center w-full py-8 px-4'>
      <div className='flex items-center w-full max-w-2xl'>
        {steps.map((step, index) => (
          <div key={step} className='flex items-center w-full'>
            <div className='flex flex-col items-center'>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${index <= currentStep ? 'bg-primary text-primary-foreground' : 'bg-gray-200 text-gray-500'}`}>
                {index + 1}
              </div>
              <p className={`mt-2 text-sm ${index <= currentStep ? 'text-primary' : 'text-gray-500'}`}>{step}</p>
            </div>
            {index < steps.length - 1 && (
              <div className={`flex-grow h-1 mx-4 ${index < currentStep ? 'bg-primary' : 'bg-gray-200'}`} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const OrderSummary = () => (
  <Card className='sticky top-24 shadow-lg'>
    <CardHeader>
      <CardTitle>Final Order Summary</CardTitle>
    </CardHeader>
    <CardContent>
      <div className='space-y-4'>
        {/* Mock order items */}
        <div className='flex justify-between items-center'>
          <div>
            <p className='font-semibold'>Jollof Rice with Chicken</p>
            <p className='text-sm text-gray-500'>Quantity: 1</p>
          </div>
          <p>₦3,500</p>
        </div>
        <div className='flex justify-between items-center'>
          <div>
            <p className='font-semibold'>Gizdodo</p>
            <p className='text-sm text-gray-500'>Quantity: 1</p>
          </div>
          <p>₦2,500</p>
        </div>
        <div className='border-t pt-4 space-y-2'>
            <div className='flex justify-between'><p>Delivery Method:</p><p>Delivery</p></div>
            <div className='flex justify-between'><p>Time:</p><p>ASAP</p></div>
            <div className='flex justify-between'><p>Subtotal:</p><p>₦6,000</p></div>
            <div className='flex justify-between'><p>Tax:</p><p>₦300</p></div>
            <div className='flex justify-between'><p>Delivery Fee:</p><p>₦500</p></div>
            <div className='flex justify-between font-bold text-lg'><p>Grand Total:</p><p>₦6,800</p></div>
        </div>
      </div>
    </CardContent>
  </Card>
);

const PaymentProcessingModal = () => (
    <div className='fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50'>
        <div className='bg-white p-8 rounded-lg shadow-xl flex flex-col items-center'>
            <div className='animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary mb-4'></div>
            <p className='text-lg font-medium'>Processing your payment...</p>
            <p className='text-sm text-gray-500'>Do not close this window.</p>
        </div>
    </div>
);

export default function PaymentPage() {
  const [paymentMethod, setPaymentMethod] = useState('stripe');
  const [isProcessing, setIsProcessing] = useState(false);
  const navigate = useNavigate();

  const handlePayment = () => {
    setIsProcessing(true);
    toast.loading('Processing your payment...');

    // Simulate API call
    setTimeout(() => {
        setIsProcessing(false);
        toast.dismiss();
        // Simulate a random success or failure
        if (Math.random() > 0.2) {
            toast.success('Payment successful!');
            navigate('/payment/success?orderId=12345');
        } else {
            toast.error('Payment failed.');
            navigate('/payment/failure');
        }
    }, 3000);
  };

  const getButtonLabel = () => {
    switch (paymentMethod) {
      case 'stripe': return 'Pay Now with Stripe';
      case 'paypal': return 'Pay with PayPal';
      case 'chapa': return 'Pay with Chapa';
      default: return 'Pay Now';
    }
  }

  return (
    <div className='bg-gray-50 min-h-screen'>
      <Toaster richColors />
      {isProcessing && <PaymentProcessingModal />}
      <Header />
      <main className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        <ProgressIndicator currentStep={2} />
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          <div className='lg:col-span-2'>
            <Card className='shadow-lg'>
              <CardHeader>
                <CardTitle>Choose Payment Method</CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className='mb-6'>
                  <div className='flex items-center space-x-2 border p-4 rounded-md'>
                    <RadioGroupItem value='stripe' id='stripe' />
                    <Label htmlFor='stripe' className='flex items-center justify-between w-full'>
                      <span>Card Payment</span>
                      <img src='https://storage.googleapis.com/dala-prod-public-storage/generated-images/7a324c89-1af0-4263-ac87-5b142101d8e1/stripe-logo-133nemc-1763450730617.webp' alt='Stripe' className='h-6' />
                    </Label>
                  </div>
                  <div className='flex items-center space-x-2 border p-4 rounded-md'>
                    <RadioGroupItem value='paypal' id='paypal' />
                    <Label htmlFor='paypal' className='flex items-center justify-between w-full'>
                      <span>PayPal</span>
                      <img src='https://storage.googleapis.com/dala-prod-public-storage/generated-images/7a324c89-1af0-4263-ac87-5b142101d8e1/paypal-logo-8xwsleb-1763450738628.webp' alt='PayPal' className='h-6' />
                    </Label>
                  </div>
                  <div className='flex items-center space-x-2 border p-4 rounded-md'>
                    <RadioGroupItem value='chapa' id='chapa' />
                    <Label htmlFor='chapa' className='flex items-center justify-between w-full'>
                      <span>Chapa</span>
                      <img src='https://storage.googleapis.com/dala-prod-public-storage/generated-images/7a324c89-1af0-4263-ac87-5b142101d8e1/chapa-logo-7kbx5yx-1763450745503.webp' alt='Chapa' className='h-6' />
                    </Label>
                  </div>
                </RadioGroup>

                {paymentMethod === 'stripe' && (
                  <div className='space-y-4 p-4 border rounded-md bg-gray-50'>
                    <div className='grid grid-cols-1 gap-4'>
                        <Label htmlFor='card-number'>Card Number</Label>
                        <Input id='card-number' placeholder='XXXX XXXX XXXX XXXX' />
                    </div>
                    <div className='grid grid-cols-2 gap-4'>
                        <div>
                            <Label htmlFor='expiry-date'>Expiry Date</Label>
                            <Input id='expiry-date' placeholder='MM/YY' />
                        </div>
                        <div>
                            <Label htmlFor='cvv'>CVV</Label>
                            <Input id='cvv' placeholder='123' />
                        </div>
                    </div>
                    <div>
                        <Label htmlFor='cardholder-name'>Cardholder Name</Label>
                        <Input id='cardholder-name' placeholder='Abdu K' />
                    </div>
                  </div>
                )}

                {paymentMethod === 'paypal' && (
                    <div className='p-4 border rounded-md bg-gray-50 flex justify-center'>
                        <Button className='w-1/2'>Pay with PayPal</Button>
                    </div>
                )}

                {paymentMethod === 'chapa' && (
                    <div className='space-y-4 p-4 border rounded-md bg-gray-50'>
                        <Label htmlFor='chapa-phone'>Phone Number</Label>
                        <Input id='chapa-phone' placeholder='e.g. 0911223344' />
                        <Label htmlFor='chapa-email'>Email</Label>
                        <Input id='chapa-email' type='email' placeholder='user@example.com' />
                    </div>
                )}
                <div className='mt-6 flex items-center justify-center text-sm text-gray-500'>
                    <Lock size={16} className='mr-2'/>
                    <span>We never store your card details.</span>
                    <ShieldCheck size={16} className='ml-4 mr-2'/>
                    <span>SSL Secure</span>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className='lg:col-span-1'>
            <OrderSummary />
          </div>
        </div>
        <div className='mt-8'>
            <Button onClick={handlePayment} className='w-full' disabled={isProcessing}>{getButtonLabel()}</Button>
        </div>
      </main>
    </div>
  );
}
