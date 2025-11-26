import { useAuth } from '@/hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const SignIn = () => {
  const { login, logout, user, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (role: 'admin' | 'customer') => {
    login(role);
    if (role === 'admin') {
      navigate('/admin');
    } else {
      navigate('/user/profile');
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <Card className="w-full max-w-md mx-4">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Jirani Restaurant</CardTitle>
          <CardDescription>
            {isAuthenticated ? `Welcome, ${user?.name || user?.email}` : 'Sign in to access your account'}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {isAuthenticated ? (
            <div className="flex flex-col space-y-4">
                <Button onClick={() => navigate(user?.role === 'admin' ? '/admin' : '/user/profile')}>
                    Go to Dashboard
                </Button>
                <Button variant="outline" onClick={handleLogout}>
                    Sign Out
                </Button>
            </div>
          ) : (
            <div className="flex flex-col space-y-4">
              <p className="text-center text-sm text-gray-600">For demonstration purposes, please select a role to sign in as.</p>
              <Button onClick={() => handleLogin('customer')}>
                Sign In as Customer
              </Button>
              <Button variant="secondary" onClick={() => handleLogin('admin')}>
                Sign In as Admin
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default SignIn;