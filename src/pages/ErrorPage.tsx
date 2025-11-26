import { useRouteError, Link } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError() as any;
  console.error(error);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center">
      <img src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/7a324c89-1af0-4263-ac87-5b142101d8e1/error-illustration-sgetqak-1763445642469.webp" alt="Error Illustration" className="w-64 h-auto mb-8" />
      <h1 className="text-4xl font-bold text-gray-800">Oops! Something went wrong.</h1>
      <p className="text-lg text-gray-600 mt-4 mb-8">
        We can't seem to find the page you're looking for or an unexpected error occurred.
      </p>
      <p className="text-md text-gray-500 mb-8">
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to="/" className="px-6 py-3 bg-amber-500 text-white font-semibold rounded-full hover:bg-amber-600 transition-colors">
        Go Back Home
      </Link>
    </div>
  );
}
