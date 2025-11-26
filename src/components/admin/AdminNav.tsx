import { NavLink } from 'react-router-dom';

const AdminNav = () => (
  <aside className="w-64 bg-gray-800 text-white p-4">
    <nav className="flex flex-col space-y-2">
      <NavLink to="/admin" end className={({ isActive }) => isActive ? "bg-gray-700 p-2 rounded" : "p-2 rounded hover:bg-gray-700"}>Dashboard</NavLink>
      <NavLink to="/admin/menu-items" className={({ isActive }) => isActive ? "bg-gray-700 p-2 rounded" : "p-2 rounded hover:bg-gray-700"}>Menu Items</NavLink>
      <NavLink to="/admin/categories" className={({ isActive }) => isActive ? "bg-gray-700 p-2 rounded" : "p-2 rounded hover:bg-gray-700"}>Categories</NavLink>
      <NavLink to="/admin/orders" className={({ isActive }) => isActive ? "bg-gray-700 p-2 rounded" : "p-2 rounded hover:bg-gray-700"}>Orders</NavLink>
      <NavLink to="/admin/reservations" className={({ isActive }) => isActive ? "bg-gray-700 p-2 rounded" : "p-2 rounded hover:bg-gray-700"}>Reservations</NavLink>
      <NavLink to="/admin/events-offers" className={({ isActive }) => isActive ? "bg-gray-700 p-2 rounded" : "p-2 rounded hover:bg-gray-700"}>Events/Offers</NavLink>
      <NavLink to="/admin/users" className={({ isActive }) => isActive ? "bg-gray-700 p-2 rounded" : "p-2 rounded hover:bg-gray-700"}>Users</NavLink>
      <NavLink to="/admin/feedback" className={({ isActive }) => isActive ? "bg-gray-700 p-2 rounded" : "p-2 rounded hover:bg-gray-700"}>Feedback</NavLink>
    </nav>
  </aside>
);

export default AdminNav;