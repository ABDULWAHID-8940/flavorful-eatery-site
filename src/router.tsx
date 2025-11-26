import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Menu from './pages/Menu';
import FoodDetails from './pages/FoodDetails';
import Reservations from './pages/Reservations';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import Chefs from './pages/Chefs';
import Events from './pages/Events';
import Offers from './pages/Offers';
import Reviews from './pages/Reviews';
import Location from './pages/Location';
import SpecialsEvents from './pages/SpecialsEvents';
import Cart from './pages/ordering/Cart';
import OrderConfirmation from './pages/ordering/OrderConfirmation';
import PaymentSuccess from './pages/ordering/PaymentSuccess';
import PaymentFailed from './pages/ordering/PaymentFailed';
import OrderHistory from './pages/user/OrderHistory';
import MyReservations from './pages/user/MyReservations';
import Profile from './pages/user/Profile';
import SignIn from './pages/auth/SignIn';
import SignUp from './pages/auth/SignUp';
import ErrorPage from './pages/ErrorPage';
import AdminLayout from './components/admin/AdminLayout';
import Dashboard from './pages/admin/Dashboard';
import ManageMenuItems from './pages/admin/ManageMenuItems';
import ManageCategories from './pages/admin/ManageCategories';
import ManageOrders from './pages/admin/ManageOrders';
import ManageReservations from './pages/admin/ManageReservations';
import ManageUsers from './pages/admin/ManageUsers';
import ManageEventsOffers from './pages/admin/ManageEventsOffers';
import ViewFeedback from './pages/admin/ViewFeedback';
import JiraniCheckout from './pages/ordering/JiraniCheckout';
import ProtectedRoute from './components/core/ProtectedRoute';

const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/menu', element: <Menu /> },
      { path: '/food/:id', element: <FoodDetails /> },
      { path: '/reservations', element: <Reservations /> },
      { path: '/contact', element: <ContactUs /> },
      { path: '/about', element: <AboutUs /> },
      { path: '/chefs', element: <Chefs /> },
      { path: '/events', element: <Events /> },
      { path: '/offers', element: <Offers /> },
      { path: '/reviews', element: <Reviews /> },
      { path: '/location', element: <Location /> },
      { path: '/specials', element: <SpecialsEvents /> },
      { path: '/cart', element: <Cart /> },
      { path: '/checkout', element: <JiraniCheckout /> },
      { path: '/order-confirmation', element: <OrderConfirmation /> },
      { path: '/payment/success', element: <PaymentSuccess /> },
      { path: '/payment/failure', element: <PaymentFailed /> },
      {
        path: 'user',
        element: <ProtectedRoute />,
        children: [
          { path: 'profile', element: <Profile /> },
          { path: 'orders', element: <OrderHistory /> },
          { path: 'reservations', element: <MyReservations /> },
        ],
      },
      {
        path: 'admin',
        element: <ProtectedRoute adminOnly />,
        children: [
          {
            path: '',
            element: <AdminLayout />,
            children: [
              { index: true, element: <Dashboard /> },
              { path: 'menu-items', element: <ManageMenuItems /> },
              { path: 'categories', element: <ManageCategories /> },
              { path: 'orders', element: <ManageOrders /> },
              { path: 'reservations', element: <ManageReservations /> },
              { path: 'users', element: <ManageUsers /> },
              { path: 'events-offers', element: <ManageEventsOffers /> },
              { path: 'feedback', element: <ViewFeedback /> },
            ],
          },
        ],
      },
    ],
  },
  // Auth routes are outside the main layout
  { path: '/signin', element: <SignIn /> },
  { path: '/signup', element: <SignUp /> },
]);

export default router;