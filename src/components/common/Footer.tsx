import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-xl font-bold">About Jollof Joy</h3>
            <p className="mt-4 text-gray-400">
              Jollof Joy offers an authentic African dining experience, celebrating the rich flavors and vibrant culture of the continent.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/menu" className="hover:text-amber-500">Menu</Link></li>
              <li><Link to="/reservations" className="hover:text-amber-500">Reservations</Link></li>
              <li><Link to="/contact" className="hover:text-amber-500">Contact</Link></li>
              <li><Link to="/specials" className="hover:text-amber-500">Specials</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold">Contact Info</h3>
            <ul className="mt-4 space-y-2 text-gray-400">
              <li className="flex items-center gap-2"><Phone className="h-5 w-5" /> +251 911 223344</li>
              <li className="flex items-center gap-2"><Mail className="h-5 w-5" /> info@jollofjoy.com</li>
              <li className="flex items-center gap-2"><MapPin className="h-5 w-5" /> 123 Bole Road, Addis Ababa</li>
              <li className="mt-2">Mon - Fri: 10am - 10pm</li>
              <li>Sat - Sun: 10am - 11pm</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold">Follow Us</h3>
            <div className="mt-4 flex gap-4">
              <a href="#" className="text-gray-400 hover:text-amber-500"><Instagram size={28} /></a>
              <a href="#" className="text-gray-400 hover:text-amber-500"><Facebook size={28} /></a>
              <a href="#" className="text-gray-400 hover:text-amber-500"><Twitter size={28} /></a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8">
          <div className="h-48 w-full overflow-hidden rounded-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126093.3575963229!2d38.70233289726563!3d9.005401900000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x844f6453051a6396!2sBole%2C%20Addis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2sus!4v1684942 Bole%2C%20Addis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2sus!4v1684942864386!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <p className="mt-8 text-center text-gray-500">&copy; {new Date().getFullYear()} Jollof Joy. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;