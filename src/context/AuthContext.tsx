import { createContext, useState, ReactNode, useMemo, useEffect } from 'react';
import { User } from '@/lib/types';

// Mock user data for demonstration
const mockAdminUser: User = {
  id: 'adm-123',
  email: 'admin@jirani.com',
  role: 'admin',
  name: 'Jirani Admin',
  avatar_url: 'https://i.pravatar.cc/150?u=admin',
};

const mockCustomerUser: User = {
  id: 'usr-456',
  email: 'customer@example.com',
  role: 'customer',
  name: 'Aisha Customer',
  avatar_url: 'https://i.pravatar.cc/150?u=customer',
};


interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (role: 'admin' | 'customer') => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  // On initial load, check for a stored user session
  useEffect(() => {
    const storedUser = localStorage.getItem('jirani-user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);


  const login = (role: 'admin' | 'customer') => {
    const userToLogin = role === 'admin' ? mockAdminUser : mockCustomerUser;
    setUser(userToLogin);
    localStorage.setItem('jirani-user', JSON.stringify(userToLogin));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('jirani-user');
  };

  const authValue = useMemo(() => ({
    user,
    isAuthenticated: !!user,
    login,
    logout,
  }), [user]);

  return (
    <AuthContext.Provider value={authValue}>
      {children}
    </AuthContext.Provider>
  );
}
