import { Link } from 'react-router-dom';

const PaymentFailedPage = () => {
    return (
        <div className="bg-gray-50 min-h-screen flex items-center justify-center">
            <div className="bg-white p-10 rounded-lg shadow-2xl text-center max-w-md w-full">
                 <img src='https://storage.googleapis.com/dala-prod-public-storage/generated-images/7a324c89-1af0-4263-ac87-5b142101d8e1/failure-icon-lyn4acs-1763450655614.webp' alt="Failure" className="w-24 h-24 mx-auto mb-6" />
                <h1 className="text-4xl font-bold text-red-600 mb-3">Payment Failed</h1>
                <p className="text-gray-700 text-lg mb-6">Unfortunately, your payment could not be processed. This might be due to a connection error or incorrect payment details.</p>
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8">
                    <p className="text-red-800 font-semibold">Please try again or use a different payment method.</p>
                </div>
                <div className="flex justify-center space-x-4">
                    <Link to="/payment" className="bg-primary-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-700 transition-colors">Retry Payment</Link>
                    <Link to="/checkout" className="bg-gray-200 text-gray-800 py-3 px-6 rounded-lg font-semibold hover:bg-gray-300 transition-colors">Return to Checkout</Link>
                </div>
            </div>
        </div>
    );
};

export default PaymentFailedPage;
