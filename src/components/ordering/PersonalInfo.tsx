import { motion } from 'framer-motion';
import { User, Mail, Phone } from 'lucide-react';

const PersonalInfo = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className='bg-white/60 backdrop-blur-xl border border-gray-200/50 p-8 rounded-2xl shadow-lg'
  >
    <h2 className='text-2xl font-bold text-gray-800 mb-6'>Personal Information</h2>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
      <div className='relative'>
        <User className='absolute top-3 left-3 text-gray-400' />
        <input type='text' placeholder='Full Name' defaultValue='Abdu Jallow' className='pl-10 p-3 w-full border-gray-300 rounded-lg shadow-sm focus:ring-primary focus:border-primary bg-white/70' />
      </div>
      <div className='relative'>
        <Mail className='absolute top-3 left-3 text-gray-400' />
        <input type='email' placeholder='Email' defaultValue='abdu.jallow@example.com' className='pl-10 p-3 w-full border-gray-300 rounded-lg shadow-sm focus:ring-primary focus:border-primary bg-white/70' />
      </div>
      <div className='relative md:col-span-2'>
        <Phone className='absolute top-3 left-3 text-gray-400' />
        <input type='tel' placeholder='Phone Number' defaultValue='+220 123 4567' className='pl-10 p-3 w-full border-gray-300 rounded-lg shadow-sm focus:ring-primary focus:border-primary bg-white/70' />
      </div>
    </div>
  </motion.div>
);

export default PersonalInfo;