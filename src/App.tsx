import { Outlet } from 'react-router-dom';
import { Toaster } from 'sonner';
import Header from './components/common/Header';
import Footer from './components/common/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50/50">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <Toaster richColors />
    </div>
  );
}

export default App;