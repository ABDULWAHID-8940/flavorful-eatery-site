import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, Toaster } from 'sonner';
import { User, Edit2, MessageSquare } from 'lucide-react';
import Header from '../../components/common/Header';

const ProgressIndicator = () => (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center space-x-4 text-sm font-medium text-gray-500">
            <div className="flex items-center text-primary-600">
                <div className="w-8 h-8 rounded-full border-2 border-primary-600 text-primary-600 flex items-center justify-center">1</div>
                <span className="ml-2">Cart</span>
            </div>
            <div className="flex-1 h-0.5 bg-primary-600"></div>
            <div className="flex items-center text-primary-600">
                <div className="w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center">2</div>
                <span className="ml-2">Checkout Details</span>
            </div>
            <div className="flex-1 h-0.5 bg-gray-300"></div>
            <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">3</div>
                <span className="ml-2">Payment</span>
            </div>
            <div className="flex-1 h-0.5 bg-gray-300"></div>
            <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">4</div>
                <span className="ml-2">Confirmation</span>
            </div>
        </div>
    </div>
);

const CheckoutPage = () => {
    const navigate = useNavigate();
    const [deliveryMethod, setDeliveryMethod] = useState('delivery');
    const [timeSelection, setTimeSelection] = useState('asap');

    const handleProceedToPayment = () => {
        toast.loading('Redirecting to payment...');
        setTimeout(() => {
            navigate('/payment');
        }, 1500);
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Toaster richColors />
            <Header />
            <div className="py-6 bg-white border-b border-gray-200">
                 <ProgressIndicator />
            </div>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-8">
                        {/* Personal Information */}
                        <div className="bg-white p-8 rounded-xl shadow-lg">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-2xl font-semibold text-gray-800">Personal Information</h2>
                                <button className="text-sm text-primary-600 hover:text-primary-700 font-medium flex items-center">
                                    <Edit2 className="w-4 h-4 mr-1" /> Edit
                                </button>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Full Name</label>
                                    <input type="text" defaultValue="Abdu Jallow" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 p-3" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Email</label>
                                    <input type="email" defaultValue="abdu.jallow@example.com" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 p-3" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                                    <input type="tel" defaultValue="+220 123 4567" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 p-3" />
                                </div>
                            </div>
                        </div>

                        {/* Delivery Method */}
                        <div className="bg-white p-8 rounded-xl shadow-lg">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Delivery Method</h2>
                            <div className="flex border border-gray-200 rounded-lg overflow-hidden">
                                <button onClick={() => setDeliveryMethod('dine-in')} className={`flex-1 py-3 px-4 text-center font-medium transition-colors ${deliveryMethod === 'dine-in' ? 'bg-primary-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}>Dine-in</button>
                                <button onClick={() => setDeliveryMethod('delivery')} className={`flex-1 py-3 px-4 text-center font-medium transition-colors ${deliveryMethod === 'delivery' ? 'bg-primary-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}>Delivery</button>
                                <button onClick={() => setDeliveryMethod('pickup')} className={`flex-1 py-3 px-4 text-center font-medium transition-colors ${deliveryMethod === 'pickup' ? 'bg-primary-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}>Pickup</button>
                            </div>
                            <div className="mt-6">
                                {deliveryMethod === 'delivery' && (
                                    <div className="space-y-4">
                                        <input type="text" placeholder="Full Address" className="w-full border-gray-300 rounded-md shadow-sm p-3" />
                                        <input type="text" placeholder="City" className="w-full border-gray-300 rounded-md shadow-sm p-3" />
                                        <textarea placeholder="Delivery Instructions" rows={3} className="w-full border-gray-300 rounded-md shadow-sm p-3"></textarea>
                                    </div>
                                )}
                                {deliveryMethod === 'dine-in' && <p className="text-gray-600 p-4 bg-gray-100 rounded-md">Table selection is available at the restaurant. Please see the host upon arrival.</p>}
                                {deliveryMethod === 'pickup' && <p className="text-gray-600 p-4 bg-gray-100 rounded-md">Pickup from: 123 Jollof Avenue, Accra, Ghana. Ready in approx. 25 mins.</p>}
                            </div>
                        </div>

                        {/* Time Selection & Notes */}
                         <div className="bg-white p-8 rounded-xl shadow-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                               <div>
                                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Time Selection</h2>
                                    <div className="flex items-center justify-between mb-4">
                                        <span>As soon as possible</span>
                                        <button onClick={() => setTimeSelection(timeSelection === 'asap' ? 'schedule' : 'asap')} className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors ${timeSelection === 'asap' ? 'bg-primary-600' : 'bg-gray-200'}`}>
                                            <span className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${timeSelection === 'asap' ? 'translate-x-6' : 'translate-x-1'}`} />
                                        </button>
                                    </div>
                                    {timeSelection === 'schedule' && (
                                        <div className="space-y-4">
                                            <input type="date" className="w-full border-gray-300 rounded-md shadow-sm p-3" />
                                            <input type="time" className="w-full border-gray-300 rounded-md shadow-sm p-3" />
                                        </div>
                                    )}
                               </div>
                               <div>
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Order Notes</h2>
                                <textarea placeholder="Add comments, allergies..." rows={5} className="w-full border-gray-300 rounded-md shadow-sm p-3"></textarea>
                               </div>
                            </div>
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="lg:sticky top-32 h-fit">
                        <div className="bg-white p-8 rounded-xl shadow-lg space-y-6">
                            <h2 className="text-2xl font-semibold text-gray-800">Order Summary</h2>
                            <div className="space-y-4">
                                {[{ name: 'Jollof Rice & Chicken', qty: 1, price: 15.00, img: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/7a324c89-1af0-4263-ac87-5b142101d8e1/jollof-rice-and-chicken-axjwef-1763412574048.webp' }, { name: 'Fried Plantains', qty: 2, price: 5.00, img: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/7a324c89-1af0-4263-ac87-5b142101d8e1/fried-plantain-slices-uuf28d-1763412586737.webp' }].map(item => (
                                    <div key={item.name} className="flex items-center space-x-4">
                                        <img src={item.img} alt={item.name} className="w-16 h-16 rounded-md object-cover" />
                                        <div className="flex-1">
                                            <p className="font-semibold text-gray-800">{item.name}</p>
                                            <p className="text-sm text-gray-500">Qty: {item.qty}</p>
                                        </div>
                                        <p className="font-semibold text-gray-900">${(item.price * item.qty).toFixed(2)}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="border-t border-gray-200 pt-4 space-y-2 text-gray-600">
                                <div className="flex justify-between"><p>Subtotal</p><p>$25.00</p></div>
                                <div className="flex justify-between"><p>Tax (10%)</p><p>$2.50</p></div>
                                <div className="flex justify-between"><p>Delivery Fee</p><p>$5.00</p></div>
                                <div className="border-t border-gray-200 my-2"></div>
                                <div className="flex justify-between font-bold text-lg text-gray-900"><p>Grand Total</p><p>$32.50</p></div>
                            </div>
                            <div className="pt-4">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Promo Code</label>
                                <div className="flex">
                                    <input type="text" placeholder="Enter code" className="flex-1 border-r-0 rounded-l-md p-3" />
                                    <button className="bg-gray-800 text-white px-4 rounded-r-md hover:bg-gray-900 font-medium">Apply</button>
                                </div>
                            </div>
                            <button onClick={handleProceedToPayment} className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-primary-700 transition-transform transform hover:scale-105 shadow-lg">Proceed to Payment &rarr;</button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default CheckoutPage;
