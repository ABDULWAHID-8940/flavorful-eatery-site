import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from '@/components/ui/calendar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { useAuth } from '@/hooks/useAuth';
import { Calendar as CalendarIcon, CheckCircle2, Minus, Plus, Loader2 } from 'lucide-react';
import { format } from 'date-fns';
import { toast } from 'sonner';

const Reservations = () => {
  const { user } = useAuth();
  const [date, setDate] = useState<Date | undefined>();
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(2);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [requests, setRequests] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [formErrors, setFormErrors] = useState(false);

  useEffect(() => {
    if (user) {
      setEmail(user.email);
      // Potentially fetch user's name and phone from your backend if available
    }
  }, [user]);

  useEffect(() => {
    setFormErrors(!date || !time || !name || !phone);
  }, [date, time, name, phone]);

  const handleGuestChange = (amount: number) => {
    setGuests((prev) => {
      const newGuests = prev + amount;
      if (newGuests >= 1 && newGuests <= 20) {
        return newGuests;
      }
      return prev;
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formErrors) {
        toast.error('Please fill in all required fields.');
        return;
    }
    setIsSubmitting(true);
    toast.loading('Checking availability...');

    setTimeout(() => {
      setIsSubmitting(false);
      toast.dismiss();
      toast.success('Your table has been successfully reserved!');
      setShowSuccessModal(true);
    }, 3000);
  };
  
  const reservationDetails = {
    date: date ? format(date, 'PPP') : '',
    time,
    guests,
    name
  }

  return (
    <div className='w-full'>
      {/* Hero Section */}
      <section className='relative h-[60vh] bg-cover bg-center' style={{ backgroundImage: `url('https://storage.googleapis.com/dala-prod-public-storage/generated-images/7a324c89-1af0-4263-ac87-5b142101d8e1/reservations-hero-bg-w7xivy2-1763446586843.webp')` }}>
        <div className='absolute inset-0 bg-black/60' />
        <div className='relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4'>
          <h1 className='text-4xl md:text-6xl font-bold tracking-tight'>Reserve Your Table</h1>
          <p className='mt-4 text-lg md:text-xl max-w-2xl'>Experience fine dining with comfort. Book your table instantly and we will confirm your reservation within 2 minutes.</p>
        </div>
      </section>

      {/* Reservation Form Section */}
      <section className='py-16 md:py-24 bg-gray-50/50'>
        <div className='container mx-auto'>
          <div className='max-w-3xl mx-auto bg-white/80 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-2xl shadow-gray-500/10' >
            <form onSubmit={handleSubmit} className='space-y-8'>
              
              {/* Reservation Details */}
              <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant='outline' className='w-full justify-start text-left font-normal h-14'>
                      <CalendarIcon className='mr-2 h-4 w-4' />
                      {date ? format(date, 'PPP') : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className='w-auto p-0'>
                    <Calendar mode='single' selected={date} onSelect={setDate} initialFocus disabled={(d) => d < new Date(new Date().setDate(new Date().getDate() - 1))}/>
                  </PopoverContent>
                </Popover>

                <Select onValueChange={setTime} value={time}>
                    <SelectTrigger className='h-14'><SelectValue placeholder='Select a time' /></SelectTrigger>
                    <SelectContent>
                        <SelectItem value='18:00'>6:00 PM</SelectItem>
                        <SelectItem value='18:30'>6:30 PM</SelectItem>
                        <SelectItem value='19:00'>7:00 PM</SelectItem>
                        <SelectItem value='19:30'>7:30 PM</SelectItem>
                        <SelectItem value='20:00'>8:00 PM</SelectItem>
                        <SelectItem value='20:30'>8:30 PM</SelectItem>
                        <SelectItem value='21:00'>9:00 PM</SelectItem>
                    </SelectContent>
                </Select>

                <div className='flex items-center justify-between border rounded-md h-14 px-4'>
                    <span className='text-muted-foreground'>Guests</span>
                    <div className='flex items-center gap-4'>
                        <Button type='button' variant='ghost' size='icon' onClick={() => handleGuestChange(-1)} disabled={guests <= 1}><Minus className='h-4 w-4'/></Button>
                        <span className='font-bold text-lg'>{guests}</span>
                        <Button type='button' variant='ghost' size='icon' onClick={() => handleGuestChange(1)} disabled={guests >= 20}><Plus className='h-4 w-4'/></Button>
                    </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <Input placeholder='Full Name' value={name} onChange={(e) => setName(e.target.value)} className='h-14' />
                <Input placeholder='Phone Number' value={phone} onChange={(e) => setPhone(e.target.value)} className='h-14' />
              </div>
              <Input placeholder='Email (optional)' value={email} onChange={(e) => setEmail(e.target.value)} className='h-14' />

              {/* Additional Options */}
              <Textarea placeholder='Special Requests (e.g., birthday, allergies)' value={requests} onChange={(e) => setRequests(e.target.value)} rows={4} />

              {/* Reserve Button */}
              <Button type='submit' className='w-full h-16 text-lg' disabled={isSubmitting || formErrors}>
                {isSubmitting ? <Loader2 className='mr-2 h-6 w-6 animate-spin' /> : <CalendarIcon className='mr-2 h-6 w-6' />}
                {isSubmitting ? 'Checking Availability...' : 'Reserve Table'}
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Success Modal */}
      <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
        <DialogContent className='sm:max-w-md text-center p-8'>
          <DialogHeader className='flex flex-col items-center'>
            <div className='bg-green-100 p-3 rounded-full mb-4'>
                <CheckCircle2 className='h-12 w-12 text-green-600' />
            </div>
            <DialogTitle className='text-2xl font-bold'>Your table is reserved!</DialogTitle>
            <DialogDescription className='mt-2 text-base'>
              A confirmation has been sent to your email.
            </DialogDescription>
          </DialogHeader>
          <div className='my-6 bg-gray-100 rounded-lg p-4 space-y-2 text-left'>
            <p><strong>Name:</strong> {reservationDetails.name}</p>
            <p><strong>Date:</strong> {reservationDetails.date}</p>
            <p><strong>Time:</strong> {reservationDetails.time}</p>
            <p><strong>Guests:</strong> {reservationDetails.guests}</p>
          </div>
          <div className='grid grid-cols-2 gap-4'>
            <Button variant='outline'>View My Reservation</Button>
            <Button>Add to Calendar</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Reservations;
