import React, { useState, useEffect } from 'react';
import { Link, BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  TrendingUp,
  BookOpen,
  Users,
  Calendar,
  ChevronDown,
  Menu,
  X
} from 'lucide-react';


import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import OurTeam from './pages/OurTeam';
import ContactUs from './pages/ContactUs';
import TradeHistory from './pages/TradeHistory';
import Testimonials from './pages/Testimonials';

const Header = ({ Menus }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-md' 
          : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          
          <Link to="/" className="flex items-center space-x-2 flex-shrink-0">
            <TrendingUp className="h-8 w-8 text-blue-600" />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900">Prince Trading</span>
              <span className="text-xs text-blue-600 -mt-1">Academy</span>
            </div>
          </Link>

         
          <nav className="hidden lg:flex items-center space-x-1">
            {Menus.map((menu) => (
              <div key={menu.name} className="relative group">
                <Link
                  to={menu.path}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-1 group
                    ${isActiveLink(menu.path)
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                >
                  <span>{menu.name}</span>
                  {menu.subMenus && (
                    <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                  )}
                </Link>

               
                {menu.subMenus && (
                  <div className="absolute left-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2">
                    <div className="bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                      {menu.subMenus.map((subMenu) => (
                        <Link
                          key={subMenu.name}
                          to={subMenu.path}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                        >
                          {subMenu.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          
          <div className="hidden lg:flex items-center space-x-4">
            
            <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-sm hover:shadow-md">
              Start Trading
            </button>
          </div>

          
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>
      </div>

      
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-screen' : 'max-h-0'
        } overflow-hidden bg-white border-t`}
      >
        <div className="px-4 py-2 space-y-1">
          {Menus.map((menu) => (
            <div key={menu.name}>
              <Link
                to={menu.path}
                className={`block px-4 py-2 text-sm font-medium rounded-lg ${
                  isActiveLink(menu.path)
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {menu.name}
              </Link>
              {menu.subMenus && (
                <div className="pl-4 space-y-1">
                  {menu.subMenus.map((subMenu) => (
                    <Link
                      key={subMenu.name}
                      to={subMenu.path}
                      className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {subMenu.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="pt-2">
            <button className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200">
              <a href="contact-us">Start Trading</a>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

const Footer = () => {
  const [emailInput, setEmailInput] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setIsSubscribed(true);
    setTimeout(() => setIsSubscribed(false), 3000);
    setEmailInput('');
  };

  return (
    <footer className="bg-gradient-to-b from-blue-900 to-blue-950 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="space-y-6 transform transition-all duration-500 hover:translate-y-[-5px]">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-8 h-8 text-blue-400" />
              <h3 className="text-2xl font-bold">Prince Trading</h3>
            </div>
            <p className="text-gray-300">
              Reinventing the way of cryptocurrency trading in Nigeria and beyond. Join us to master the art of trading.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400 transition-colors duration-300">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors duration-300">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors duration-300">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors duration-300">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="space-y-6 transform transition-all duration-500 hover:translate-y-[-5px]">
            <h4 className="text-xl font-semibold">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'About Us', path: '/about-us' },
                { name: 'Our Team', path: '/our-team' },
                { name: 'Trade History', path: '/trade-history' },
                { name: 'Contact Us', path: '/contact-us' }
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="flex items-center group text-gray-300 hover:text-blue-400 transition-colors duration-300"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6 transform transition-all duration-500 hover:translate-y-[-5px]">
            <h4 className="text-xl font-semibold">Trading Resources</h4>
            <ul className="space-y-3">
              {[
                { icon: BookOpen, text: 'Trading Guides' },
                { icon: Calendar, text: 'Market Analysis' },
                { icon: TrendingUp, text: 'Trading Signals' },
                { icon: Users, text: 'Community Forum' }
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="flex items-center group text-gray-300 hover:text-blue-400 transition-colors duration-300"
                  >
                    <item.icon className="w-4 h-4 mr-2" />
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6 transform transition-all duration-500 hover:translate-y-[-5px]">
            <h4 className="text-xl font-semibold">Get In Touch</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="w-5 h-5 text-blue-400" />
                <p>Kwara state offa</p>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="w-5 h-5 text-blue-400" />
                <p>+234 916 175 2870</p>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="w-5 h-5 text-blue-400" />
                <p>princetradingacademy@gmail.com</p>
              </div>
            </div>

            <form onSubmit={handleSubscribe} className="space-y-3">
              <h5 className="font-semibold">Subscribe to Our Newsletter</h5>
              <div className="relative">
                <input
                  type="email"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-lg bg-blue-900/50 border border-blue-800 focus:outline-none focus:border-blue-400 transition-colors duration-300"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-400 hover:text-blue-300 transition-colors duration-300"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
              {isSubscribed && (
                <p className="text-green-400 text-sm animate-fade-in">
                  Thank you for subscribing!
                </p>
              )}
            </form>
          </div>
        </div>
      </div>

      <div className="border-t border-blue-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-300 text-center md:text-left">
              © {new Date().getFullYear()} Prince Trading. All rights reserved.
            </p>
            <div className="flex gap-4 xl:gap-6 text-gray-300">
              <a href="#" className="hover:text-blue-400 transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-blue-400 transition-colors duration-300">Terms of Service</a>
              <a href="#" className="hover:text-blue-400 transition-colors duration-300">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};


export default function App() {
  const Menus = [
    { 
      name: 'Home', 
      path: '/' 
    },
    { 
      name: 'About Us', 
      path: '/about-us' 
    },
    { 
      name: 'Our Team', 
      path: '/our-team' 
    },
    { 
      name: 'Trade History', 
      path: '/trade-history',
      subMenus: [
        { name: 'Performance', path: '/trade-history/performance' },
        { name: 'Analysis', path: '/trade-history/analysis' }
      ]
    },
    { 
      name: 'Testimonials', 
      path: '/testimonials' 
    },
    { 
      name: 'Contact Us', 
      path: '/contact-us' 
    },
  ];

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Header Menus={Menus} />
        
        <main className="flex-grow pt-16">
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/our-team" element={<OurTeam />} />
              <Route path="/trade-history" element={<TradeHistory />} />
              <Route path="/trade-history/performance" element={<TradeHistory />} />
              <Route path="/trade-history/analysis" element={<TradeHistory />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/testimonials" element={<Testimonials />} />
              
              
              <Route path="*" element={
                <div className="text-center py-20">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h2>
                  <p className="text-gray-600 mb-8">The page you're looking for doesn't exist or has been moved.</p>
                  <Link 
                    to="/"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Return Home
                  </Link>
                </div>
              } />
            </Routes>
          </div>
        </main>

        <Footer />
      </div>
    </Router>
  );
}