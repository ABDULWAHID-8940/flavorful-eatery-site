import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, Toaster } from 'sonner';
import { Lock } from 'lucide-react';
import Header from '../../components/common/Header';

const ProgressIndicator = () => (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center w-full space-x-4 text-sm font-medium text-gray-500">
            <li className="flex items-center text-green-600">
                <span className="flex items-center justify-center w-8 h-8 border-2 border-green-600 rounded-full shrink-0">1</span><span className="ml-2">Cart</span>
            </li>
            <li className="flex items-center text-green-600 w-full">
                <div className="w-full h-0.5 bg-green-600"></div>
            </li>
            <li className="flex items-center text-green-600">
                <span className="flex items-center justify-center w-8 h-8 border-2 border-green-600 rounded-full shrink-0">2</span><span className="ml-2">Checkout</span>
            </li>
             <li className="flex items-center text-primary-600 w-full">
                <div className="w-full h-0.5 bg-primary-600"></div>
            </li>
            <li className="flex items-center text-primary-600">
                <span className="flex items-center justify-center w-8 h-8 bg-primary-600 text-white rounded-full shrink-0">3</span><span className="ml-2">Payment</span>
            </li>
            <li className="flex items-center w-full text-gray-500">
                 <div className="w-full h-0.5 bg-gray-300"></div>
            </li>
            <li className="flex items-center text-gray-500">
                <span className="flex items-center justify-center w-8 h-8 border-2 border-gray-400 rounded-full shrink-0">4</span><span className="ml-2">Confirmation</span>
            </li>
        </ol>
    </div>
);

const PaymentPage = () => {
    const navigate = useNavigate();
    const [paymentMethod, setPaymentMethod] = useState('card');
    const [isProcessing, setIsProcessing] = useState(false);

    const handlePayment = () => {
        setIsProcessing(true);
        toast.loading('Processing your payment... Do not close this window.');

        setTimeout(() => {
            setIsProcessing(false);
            const isSuccess = Math.random() > 0.2; // 80% success rate
            if (isSuccess) {
                navigate('/payment/success?orderId=12345');
            } else {
                navigate('/payment/failure');
            }
        }, 3000);
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Toaster richColors />
            {isProcessing && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 backdrop-blur-sm">
                    <div className="bg-white p-8 rounded-lg shadow-xl text-center">
                        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary-600 mx-auto mb-4"></div>
                        <p className="text-lg font-semibold">Processing your payment...</p>
                        <p className="text-sm text-gray-600">Do not close this window.</p>
                    </div>
                </div>
            )}
            <Header />
            <div className="py-6 bg-white border-b border-gray-200">
                <ProgressIndicator />
            </div>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2">
                        <div className="bg-white p-8 rounded-xl shadow-lg">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Choose Payment Method</h2>
                            <div className="flex border border-gray-200 rounded-lg overflow-hidden mb-8">
                                <button onClick={() => setPaymentMethod('card')} className={`flex-1 py-4 px-4 text-center font-medium flex items-center justify-center gap-2 transition-colors ${paymentMethod === 'card' ? 'bg-primary-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}><img src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/7a324c89-1af0-4263-ac87-5b142101d8e1/stripe-logo-tbbi3pc-1763450631720.webp" alt="Stripe" className="h-5" /> Card</button>
                                <button onClick={() => setPaymentMethod('paypal')} className={`flex-1 py-4 px-4 text-center font-medium flex items-center justify-center gap-2 transition-colors ${paymentMethod === 'paypal' ? 'bg-primary-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}><img src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/7a324c89-1af0-4263-ac87-5b142101d8e1/paypal-logo-qtzi7nb-1763450638369.webp" alt="PayPal" className="h-6" /> </button>
                                <button onClick={() => setPaymentMethod('chapa')} className={`flex-1 py-4 px-4 text-center font-medium flex items-center justify-center gap-2 transition-colors ${paymentMethod === 'chapa' ? 'bg-primary-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}><img src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/7a324c89-1af0-4263-ac87-5b142101d8e1/chapa-logo-u44q6r7-1763450644516.webp" alt="Chapa" className="h-5" /></button>
                            </div>
                            
                            {paymentMethod === 'card' && (
                                <div className="space-y-4">
                                    <input type="text" placeholder="Card Number" className="w-full p-3 border-gray-300 rounded-md shadow-sm" />
                                    <div className="grid grid-cols-2 gap-4">
                                        <input type="text" placeholder="Expiry Date (MM/YY)" className="w-full p-3 border-gray-300 rounded-md shadow-sm" />
                                        <input type="text" placeholder="CVV" className="w-full p-3 border-gray-300 rounded-md shadow-sm" />
                                    </div>
                                    <input type="text" placeholder="Cardholder Name" className="w-full p-3 border-gray-300 rounded-md shadow-sm" />
                                </div>
                            )}
                            {paymentMethod === 'paypal' && <button className="w-full bg-[#00457C] text-white py-3 rounded-lg font-semibold text-lg hover:bg-[#003057] transition-colors flex items-center justify-center gap-3"><img src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/7a324c89-1af0-4263-ac87-5b142101d8e1/paypal-logo-qtzi7nb-1763450638369.webp" alt="PayPal" className="h-6 filter brightness-0 invert"/>Pay with PayPal</button>}
                            {paymentMethod === 'chapa' && (
                                <div className="space-y-4">
                                    <p className="text-center text-gray-600">You will be redirected to Chapa to complete your payment.</p>
                                    <input type="tel" placeholder="Phone Number" className="w-full p-3 border-gray-300 rounded-md shadow-sm" />
                                    <input type="email" placeholder="Email" className="w-full p-3 border-gray-300 rounded-md shadow-sm" />
                                </div>
                            )}

                            <div className="mt-8 text-center text-sm text-gray-500 flex items-center justify-center">
                                <Lock className="w-4 h-4 mr-2"/> All transactions are secure and encrypted.
                            </div>
                        </div>
                    </div>

                    <div className="lg:sticky top-32 h-fit">
                        <div className="bg-white p-8 rounded-xl shadow-lg space-y-6">
                            <h2 className="text-2xl font-semibold text-gray-800">Final Order Summary</h2>
                             <div className="space-y-3 text-sm text-gray-600 border-b pb-4">
                                <p><strong>Delivery To:</strong> Abdu Jallow, Full Address, City</p>
                                <p><strong>Time:</strong> As soon as possible</p>
                                <p><strong>Notes:</strong> Please make it extra spicy.</p>
                            </div>
                            <div className="pt-4 space-y-2">
                                 <div className="flex justify-between font-bold text-3xl text-gray-800"><p>Total to Pay</p><p>$32.50</p></div>
                            </div>
                            <button onClick={handlePayment} disabled={isProcessing} className="w-full bg-primary-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-primary-700 transition-transform transform hover:scale-105 shadow-lg disabled:bg-gray-400 disabled:cursor-not-allowed">
                                {isProcessing ? 'Processing...' : `Pay Now`}
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default PaymentPage;
