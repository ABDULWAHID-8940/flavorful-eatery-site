import AdminNav from './AdminNav';

const AdminLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="flex">
    <AdminNav />
    <main className="flex-1 p-6">
      {children}
    </main>
  </div>
);

export default AdminLayout;