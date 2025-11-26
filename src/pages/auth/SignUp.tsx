import { useAuth } from '@/hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  // In a real app, this would involve a form and API call.
  // For this demo, we'll just log in as a new customer.
  const handleSignUp = () => {
    login('customer');
    navigate('/user/profile');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <Card className="w-full max-w-md mx-4">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Create an Account</CardTitle>
          <CardDescription>Join Jirani to start ordering delicious meals.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
            {/* Placeholder for a real sign-up form */}
            <div className="text-center text-gray-600">
                <p>Sign-up functionality is currently for demonstration. Clicking below will create a new customer account and sign you in.</p>
            </div>
          <Button onClick={handleSignUp} className="w-full">
            Create My Account
          </Button>
          <div className="text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <Link to="/signin" className="font-medium text-amber-600 hover:underline">
                Sign In
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUp;
