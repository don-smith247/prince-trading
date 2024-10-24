import React, { useState, useEffect } from 'react';
import { Send, CheckCircle, DollarSign, Clock, User } from 'lucide-react';

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    tradingExperience: 'beginner',
    preferredMarket: 'stocks',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const formSections = [
    {
      title: "Personal Information",
      icon: <User className="w-6 h-6" />,
      fields: ['name', 'email', 'phone']
    },
    {
      title: "Trading Background",
      icon: <Clock className="w-6 h-6" />,
      fields: ['tradingExperience', 'preferredMarket']
    },
    {
      title: "Your Message",
      icon: <DollarSign className="w-6 h-6" />,
      fields: ['message']
    }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({
        name: '',
        email: '',
        phone: '',
        tradingExperience: 'beginner',
        preferredMarket: 'stocks',
        message: '',
      });
      setCurrentStep(0);
    }, 2000);
  };

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const nextStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, formSections.length - 1));
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 0));
  };

  const renderField = (fieldName) => {
    switch (fieldName) {
      case 'tradingExperience':
        return (
          <div className="relative transform transition-all duration-500 hover:scale-102">
            <select
              name="tradingExperience"
              value={formState.tradingExperience}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 appearance-none"
            >
              <option value="beginner">Beginner (0-1 years)</option>
              <option value="intermediate">Intermediate (1-3 years)</option>
              <option value="advanced">Advanced (3+ years)</option>
            </select>
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        );
      case 'preferredMarket':
        return (
          <div className="relative transform transition-all duration-500 hover:scale-102">
            <select
              name="preferredMarket"
              value={formState.preferredMarket}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 appearance-none"
            >
              <option value="stocks">Stocks</option>
              <option value="forex">Forex</option>
              <option value="crypto">Cryptocurrency</option>
              <option value="commodities">Commodities</option>
            </select>
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        );
      case 'message':
        return (
          <div className="relative transform transition-all duration-500 hover:scale-102">
            <textarea
              name="message"
              value={formState.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 peer placeholder-transparent"
              placeholder="Your Message"
            ></textarea>
            <label className="absolute left-4 -top-6 text-sm text-gray-600 peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:text-sm transition-all duration-300">
              Your Message
            </label>
          </div>
        );
      default:
        return (
          <div className="relative transform transition-all duration-500 hover:scale-102">
            <input
              type={fieldName === 'email' ? 'email' : fieldName === 'phone' ? 'tel' : 'text'}
              name={fieldName}
              value={formState[fieldName]}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 peer placeholder-transparent"
              placeholder={fieldName.charAt(0).toUpperCase() + fieldName.slice(1)}
            />
            <label className="absolute left-4 -top-6 text-sm text-gray-600 peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:text-sm transition-all duration-300">
              {fieldName.charAt(0).toUpperCase() + fieldName.slice(1).replace(/([A-Z])/g, ' $1')}
            </label>
          </div>
        );
    }
  };

  return (
    <div className={`w-full max-w-2xl mx-auto p-6 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
      <div className={`bg-white rounded-xl shadow-lg p-6 md:p-8 transition-all duration-500 transform ${isSubmitted ? 'scale-95 opacity-0' : 'scale-100 opacity-100'}`}>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between mb-2">
              {formSections.map((section, index) => (
                <div
                  key={index}
                  className={`flex-1 ${index !== formSections.length - 1 ? 'border-b-2' : ''} 
                    ${index < currentStep ? 'border-blue-500' : 'border-gray-200'}
                    transition-all duration-500`}
                >
                  <div className={`flex items-center justify-center w-8 h-8 rounded-full 
                    ${index <= currentStep ? 'bg-blue-500 text-white' : 'bg-gray-200'}
                    transition-all duration-500 transform ${index === currentStep ? 'scale-110' : 'scale-100'}`}>
                    {section.icon}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form Section Title */}
          <h3 className="text-2xl font-bold text-center mb-6 transform transition-all duration-500">
            {formSections[currentStep].title}
          </h3>

          {/* Form Fields */}
          <div className="space-y-6 transition-all duration-500 transform">
            {formSections[currentStep].fields.map((fieldName) => (
              <div key={fieldName} className="transition-all duration-500 transform">
                {renderField(fieldName)}
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between gap-4 mt-8">
            <button
              type="button"
              onClick={prevStep}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105
                ${currentStep === 0 ? 'opacity-0 pointer-events-none' : 'bg-gray-200 hover:bg-gray-300'}`}
            >
              Previous
            </button>
            
            {currentStep === formSections.length - 1 ? (
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 py-3 px-6 rounded-lg text-white font-medium flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                {isSubmitting ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                ) : (
                  <>
                    <Send size={20} /> Submit
                  </>
                )}
              </button>
            ) : (
              <button
                type="button"
                onClick={nextStep}
                className="flex-1 py-3 px-6 rounded-lg text-white font-medium bg-blue-600 hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Next
              </button>
            )}
          </div>
        </form>
      </div>

      {/* Success Message */}
      <div
        className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-xl shadow-2xl transition-all duration-500 ${
          isSubmitted ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="animate-bounce">
            <CheckCircle size={48} className="text-green-500" />
          </div>
          <h3 className="text-2xl font-semibold">Thank you!</h3>
          <p className="text-gray-600">We'll get back to you soon.</p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;