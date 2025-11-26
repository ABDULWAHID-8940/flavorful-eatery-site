import { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useAuth } from '@/hooks/useAuth';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Instagram, Facebook, Twitter, Mail, Phone, Menu as MenuIcon, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';

const navLinks = [
  { href: "/menu", label: "Menu" },
  { href: "/checkout", label: "Order Now" },
  { href: "/contact", label: "Contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSignOut = () => {
    logout();
    navigate("/");
  };

  return (
    <header className={`sticky top-0 z-50 transition-shadow ${isScrolled ? "shadow-lg bg-white/80 backdrop-blur-sm" : "bg-white"}`}>
      <div className="bg-gray-100/50 py-1 text-sm text-gray-600">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a href="tel:+251911223344" className="flex items-center gap-1.5 hover:text-amber-600 transition-colors">
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">+251 911 223344</span>
            </a>
            <a href="mailto:info@jiranirestaurant.com" className="flex items-center gap-1.5 hover:text-amber-600 transition-colors">
              <Mail className="h-4 w-4" />
              <span className="hidden sm:inline">info@jiranirestaurant.com</span>
            </a>
          </div>
          <div className="flex items-center gap-3">
            <a href="#" aria-label="Instagram" className="hover:text-amber-600 transition-colors"><Instagram className="h-5 w-5" /></a>
            <a href="#" aria-label="Facebook" className="hover:text-amber-600 transition-colors"><Facebook className="h-5 w-5" /></a>
            <a href="#" aria-label="Twitter" className="hover:text-amber-600 transition-colors"><Twitter className="h-5 w-5" /></a>
          </div>
        </div>
      </div>
      <nav className="py-4">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <svg width="40" height="40" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="100" cy="100" r="95" fill="#FBBF24"/>
                <path d="M100 25C113.807 25 125 36.1929 125 50V150C125 163.807 113.807 175 100 175C86.1929 175 75 163.807 75 150V50C75 36.1929 86.1929 25 100 25Z" fill="#FFFFFF"/>
                <path d="M100 50C106.627 50 112 55.3726 112 62V138C112 144.627 106.627 150 100 150C93.3726 150 88 144.627 88 138V62C88 55.3726 93.3726 50 100 50Z" fill="#4B3224"/>
            </svg>
            <span className="font-serif text-2xl font-bold text-gray-800">Jirani</span>
          </Link>
          
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <NavLink 
                key={link.href} 
                to={link.href} 
                className={({ isActive }) => 
                  `relative text-lg font-medium text-gray-600 after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-amber-500 after:transition-transform hover:after:scale-x-100 ${isActive ? "text-amber-500 after:scale-x-100" : ""}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-2 focus:outline-none rounded-full">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src={user.avatar_url || `https://i.pravatar.cc/150?u=${user.id}`} alt={user.name || ''} />
                    <AvatarFallback>{(user.email || "U").charAt(0).toUpperCase()}</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>
                    <p className="font-semibold">{user.name || "Jirani User"}</p>
                    <p className="text-xs text-gray-500">{user.email}</p>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild><Link to="/user/profile">Profile</Link></DropdownMenuItem>
                  <DropdownMenuItem asChild><Link to="/user/orders">My Orders</Link></DropdownMenuItem>
                  <DropdownMenuItem asChild><Link to="/user/reservations">My Reservations</Link></DropdownMenuItem>
                   {user.role === "admin" && (
                    <>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem asChild><Link to="/admin">Admin Dashboard</Link></DropdownMenuItem>
                    </>
                  )}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleSignOut} className="cursor-pointer text-red-600">Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button variant="ghost" className="hidden sm:inline-flex" onClick={() => navigate("/signin")}>
                Sign In
              </Button>
            )}
             <Button asChild className="rounded-full bg-amber-500 text-white hover:bg-amber-600 transition-colors shadow-sm">
                <Link to="/reservations">Book a Table</Link>
            </Button>

            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MenuIcon className="h-6 w-6" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[350px]">
                  <div className="flex flex-col h-full">
                    <div className="flex justify-between items-center border-b pb-4">
                        <Link to="/" className="flex items-center gap-2">
                           <svg width="30" height="30" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="100" cy="100" r="95" fill="#FBBF24"/>
                                <path d="M100 25C113.807 25 125 36.1929 125 50V150C125 163.807 113.807 175 100 175C86.1929 175 75 163.807 75 150V50C75 36.1929 86.1929 25 100 25Z" fill="#FFFFFF"/>
                                <path d="M100 50C106.627 50 112 55.3726 112 62V138C112 144.627 106.627 150 100 150C93.3726 150 88 144.627 88 138V62C88 55.3726 93.3726 50 100 50Z" fill="#4B3224"/>
                            </svg>
                            <span className="font-serif text-xl font-bold text-gray-800">Jirani</span>
                        </Link>
                        <SheetClose asChild>
                             <Button variant="ghost" size="icon">
                                <X className="h-6 w-6" />
                                <span className="sr-only">Close menu</span>
                            </Button>
                        </SheetClose>
                    </div>
                    <nav className="flex flex-col gap-4 mt-8">
                      {navLinks.map((link) => (
                        <SheetClose asChild key={link.href}>
                          <NavLink 
                            to={link.href} 
                            className={({ isActive }) => `text-lg font-medium ${isActive ? "text-amber-500" : "text-gray-700"}`}>
                            {link.label}
                          </NavLink>
                        </SheetClose>
                      ))}
                    </nav>
                    <div className="mt-auto border-t pt-6">
                     {user ? (
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <Avatar>
                                    <AvatarImage src={user.avatar_url || `https://i.pravatar.cc/150?u=${user.id}`} alt={user.name || ''} />
                                    <AvatarFallback>{(user.email || "U").charAt(0).toUpperCase()}</AvatarFallback>
                                </Avatar>
                                <div>
                                    <p className="font-semibold">{user.name || "User"}</p>
                                    <p className="text-xs text-gray-500">{user.email}</p>
                                </div>
                            </div>
                            <Button variant="outline" onClick={handleSignOut}>Logout</Button>
                        </div>
                     ) : (
                        <SheetClose asChild>
                            <Button className="w-full" onClick={() => navigate("/signin")}>Sign In</Button>
                        </SheetClose>
                      )}
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>

          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;