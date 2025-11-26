import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success('🎉 Thank you for subscribing!');
      setEmail('');
    } else {
      toast.error('Please enter a valid email address.');
    }
  };

  return (
    <section className="bg-amber-50 py-20">
      <div className="container mx-auto">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold">Stay in the Loop</h2>
          <p className="mt-4 text-lg text-gray-600">
            Subscribe to our newsletter for the latest news, updates, and special offers.
          </p>
          <form onSubmit={handleSubmit} className="mt-8 flex items-center justify-center gap-2">
            <Input
              type="email"
              placeholder="Enter your email"
              className="max-w-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button type="submit" className="bg-amber-500 hover:bg-amber-600">Subscribe</Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;