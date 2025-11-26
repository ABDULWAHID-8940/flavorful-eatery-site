import { Link, useSearchParams } from 'react-router-dom';

const PaymentSuccessPage = () => {
    const [searchParams] = useSearchParams();
    const orderId = searchParams.get('orderId');

    return (
        <div className="bg-gray-50 min-h-screen flex items-center justify-center">
            <div className="bg-white p-10 rounded-lg shadow-2xl text-center max-w-md w-full">
                <img src='https://storage.googleapis.com/dala-prod-public-storage/generated-images/7a324c89-1af0-4263-ac87-5b142101d8e1/success-icon-mo6wt1w-1763450650314.webp' alt="Success" className="w-24 h-24 mx-auto mb-6" />
                <h1 className="text-4xl font-bold text-green-600 mb-3">Payment Successful!</h1>
                <p className="text-gray-700 text-lg mb-6">Thank you for your order. We've received your payment and your order is now being processed.</p>
                <div className="bg-gray-100 rounded-lg p-4 mb-6">
                    <p className="text-gray-800 font-semibold">Order Number</p>
                    <p className="text-2xl text-primary-600 font-mono">{orderId || 'N/A'}</p>
                </div>
                <p className="text-gray-600 mb-8">Estimated arrival in <strong>30-45 minutes</strong>.</p>
                <div className="flex justify-center space-x-4">
                    <Link to="/user/orders" className="bg-primary-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-700 transition-colors">View Order Details</Link>
                    <Link to="/" className="bg-gray-200 text-gray-800 py-3 px-6 rounded-lg font-semibold hover:bg-gray-300 transition-colors">Back to Home</Link>
                </div>
            </div>
        </div>
    );
};

export default PaymentSuccessPage;
