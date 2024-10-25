import React, { useState } from 'react';
import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
  Calendar
} from 'lucide-react';


import DesktopMenu from './components/DesktopMenu';
import MobMenu from './components/MobMenu';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import OurTeam from './pages/OurTeam';
import ContactUs from './pages/ContactUs';
import TradeHistory from './pages/TradeHistory';
import Testimonials from './pages/Testimonials';

import { Menus } from './utils'; 


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
  return (
    <Router>
      <div className="min-h-screen bg-white text-black">
        <header className="h-16 text-[15px] fixed inset-0 flex items-center border-b border-gray-300 bg-white z-50">
          <nav className="px-3.5 flex justify-between w-full max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
              <TrendingUp className="w-8 h-8 text-blue-400" />
              <h3 className="text-2xl font-bold leading-none">Prince Trading</h3>
              <p>Academy</p>
            </div>

          
            <ul className="gap-x-1 font-bold lg:flex hidden">
              {Menus.map((menu) => (
                <DesktopMenu menu={menu} key={menu.name} />
              ))}
            </ul>

            
            <div className="flex font-bold items-center gap-x-5 lg:hidden">
              <MobMenu Menus={Menus} />
            </div>
          </nav>
        </header>

        <main className="mt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/our-team" element={<OurTeam />} />
            <Route path="/trade-history" element={<TradeHistory />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/testimonials" element={<Testimonials />} />
          </Routes>
        </main>

      
        <Footer />
      </div>
    </Router>
  );
}
