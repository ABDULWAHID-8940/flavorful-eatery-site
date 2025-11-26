import { useAuth } from '@/hooks/useAuth';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    return <div>Loading user profile...</div>;
  }

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <div className="flex items-center gap-6">
            <Avatar className="h-24 w-24 border-4 border-amber-400">
              <AvatarImage src={user.avatar_url} alt={user.name} />
              <AvatarFallback className="text-4xl">{user.email.charAt(0).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-3xl font-bold">{user.name || 'Jirani User'}</CardTitle>
              <CardDescription className="text-lg text-gray-600">{user.email}</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-8 pt-6">
            <div className="space-y-4">
                <h3 className="font-semibold text-xl">Account Details</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-md">
                    <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="font-medium text-gray-500">Role</p>
                        <p className="capitalize font-semibold text-gray-800">{user.role}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="font-medium text-gray-500">User ID</p>
                        <p className="font-semibold text-gray-800 truncate">{user.id}</p>
                    </div>
                </div>
            </div>

            <div className="flex justify-end gap-4">
                <Button variant="outline" onClick={() => navigate('/user/orders')}>View My Orders</Button>
                <Button onClick={handleLogout} variant="destructive">Sign Out</Button>
            </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;