import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  BookOpen, 
  Users, 
  Award,
  PlayCircle,
  ChevronRight,
  Check,
  Video,
  Signal,
  MessageSquare,
  BarChart2
} from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const statsData = [
    { icon: Users, value: '5000+', label: 'Active Students' },
    { icon: Award, value: '95%', label: 'Success Rate' },
    { icon: TrendingUp, value: '₦100M+', label: 'Student Profits' },
    { icon: BookOpen, value: '50+', label: 'Trading Courses' },
  ];

  return (
    <div className="relative bg-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[40vw] h-[40vw] bg-blue-100/50 rounded-full blur-3xl -top-48 -right-48 animate-pulse" />
        <div className="absolute w-[30vw] h-[30vw] bg-blue-50/50 rounded-full blur-2xl bottom-0 -left-20 animate-pulse delay-300" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="pt-12 pb-16 lg:pt-20 lg:pb-24">
          {/* Main Hero Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="inline-block px-4 py-1 bg-blue-50 rounded-full border border-blue-100"
                >
                  <span className="text-blue-600 text-sm font-medium">
                    #1 Trading Academy in Nigeria
                  </span>
                </motion.div>
                
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
                >
                  Master the Art of <span className="text-blue-600">Trading</span> With Confidence
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-lg text-gray-600 max-w-xl"
                >
                  Join thousands of successful traders who have transformed their trading journey with our expert-led courses and real-time market analysis.
                </motion.p>
              </div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col md:flex-row gap-4"
              >
                <button className="w-full md:w-auto px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold flex items-center gap-2 hover:bg-blue-700 transform hover:scale-105 transition-all duration-300">
                 <Link
                    to="contact-us" // Link to the Contact Us section
                    className="get-started-button"
                    >
                    Get Started Now
                 </Link>
                  <ChevronRight className="w-5 h-5" />
                </button>
                
                <button className="w-full md:w-auto px-8 py-4 bg-gray-100 text-gray-800 rounded-lg font-semibold flex items-center gap-2 hover:bg-gray-200 transform hover:scale-105 transition-all duration-300">
                  <PlayCircle className="w-5 h-5" />
                  Watch Demo
                </button>
              </motion.div>
            </motion.div>

            {/* Right Column - Trading Chart Animation */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative w-full h-[300px] sm:h-[400px] bg-gray-50 rounded-2xl backdrop-blur-xl p-6 border border-gray-200"
            >
              {/* Add your trading chart component or image here */}
              <img 
                src="./trading.jpg" 
                alt="Trading Chart" 
                className="w-full h-full object-cover rounded-lg"
              />
              
              {/* Floating Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Profit Today</p>
                    <p className="text-lg font-bold text-green-500">+₦250,000</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12"
          >
            {statsData.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                className="bg-gray-50 rounded-lg p-6 text-center transform hover:scale-105 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  <stat.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h4>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const PricingSection = () => {
  const plans = [
    {
      name: 'Basic Beginner Course',
      price: '₦100,000',
      duration: '4 weeks',
      features: [
        { icon: BookOpen, text: 'Free Books' },
        { icon: Video, text: '+10 Hours Of Recorded Lessons' },
        { icon: Signal, text: 'Daily Setups And Signals' },
        { icon: MessageSquare, text: 'Community Chat' },
        { icon: BarChart2, text: 'Community Analysis' },
        { icon: Users, text: 'Live Lessons And Trading' },
      ]
    },
    {
      name: 'Advanced Course',
      price: '₦150,000',
      duration: '8 weeks',
      features: [
        { icon: BookOpen, text: 'Free Books' },
        { icon: Video, text: '+10 Hours Of Recorded Lessons' },
        { icon: Signal, text: 'Daily Setups And Signals' },
        { icon: MessageSquare, text: 'Community Chat' },
        { icon: BarChart2, text: 'Community Analysis' },
        { icon: Users, text: 'Live Lessons And Trading' },
      ]
    }
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Our Pricing Plans</h2>
          <p className="text-gray-600 mt-4">Choose the plan that suits your trading journey</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">{plan.name}</h3>
              <p className="text-gray-600 mb-6">{plan.duration} of in-depth training</p>
              <div className="mb-8">
                <p className="text-3xl font-extrabold text-blue-600">{plan.price}</p>
                <span className="text-gray-500">One-time payment</span>
              </div>

              <ul className="space-y-4">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                    <span className="text-gray-700">{feature.text}</span>
                  </li>
                ))}
              </ul>

              <button className="mt-8 w-full px-4 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all">
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const CombinedComponent = () => {
  return (
    <div>
      <HeroSection />
      <PricingSection />
    </div>
  );
};

export default CombinedComponent;
