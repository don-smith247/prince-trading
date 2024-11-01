import React, { useState, useEffect } from 'react';
import { Send, CheckCircle, DollarSign, Clock, User } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

const ContactAndBusinessHours = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    tradingExperience: 'beginner',
    preferredMarket: 'crypto',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const [state, handleSubmit] = useForm("xldejwjo");

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
      title: "Select Plans",
      icon: <Clock className="w-6 h-6" />,
      fields: ['tradingExperience', 'preferredMarket']
    },
    {
      title: "Your Message",
      icon: <DollarSign className="w-6 h-6" />,
      fields: ['message']
    }
  ];

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
              <option value="beginner">Basic Beginner Course (4 weeks)</option>
              <option value="advanced">Advanced Course (8 weeks)</option>
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

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    
    const response = await handleSubmit({
      name: formState.name,
      email: formState.email,
      phone: formState.phone,
      tradingExperience: formState.tradingExperience,
      preferredMarket: formState.preferredMarket,
      message: formState.message,
    });

    if (response) {
      setIsSubmitted(true);
      
      setTimeout(() => {
        
        setFormState({
          name: '',
          email: '',
          phone: '',
          tradingExperience: 'beginner',
          preferredMarket: 'stocks',
          message: '',
        });
      
        setCurrentStep(0);
        setIsSubmitted(false);
      }, 2000); 
    }

    setIsSubmitting(false);
  };

  return (
    <div className={`w-full max-w-2xl mx-auto p-6 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
      <div className={`bg-white rounded-xl shadow-lg p-6 md:p-8 transition-all duration-500 transform ${isSubmitted ? 'scale-95 opacity-0' : 'scale-100 opacity-100'}`}>
        <form onSubmit={handleSubmitForm} className="space-y-6">
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

          <h3 className="text-2xl font-bold text-center mb-6 transform transition-all duration-500">
            {formSections[currentStep].title}
          </h3>

          <div className="space-y-6 transition-all duration-500 transform">
            {formSections[currentStep].fields.map((fieldName) => (
              <div key={fieldName} className="transition-all duration-500 transform">
                {renderField(fieldName)}
                <ValidationError 
                  prefix={fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} 
                  field={fieldName} 
                  errors={state.errors} 
                />
              </div>
            ))}
          </div>

          <div className="flex justify-between mt-8">
            {currentStep > 0 && (
              <button
                type="button"
                onClick={prevStep}
                className="py-2 px-4 bg-gray-300 text-gray-700 rounded-lg transition duration-300 hover:bg-gray-400"
              >
                Back
              </button>
            )}
            {currentStep < formSections.length - 1 ? (
              <button
                type="button"
                onClick={nextStep}
                className="py-2 px-4 bg-blue-500 text-white rounded-lg transition duration-300 hover:bg-blue-600"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting}
                className="py-2 px-4 bg-blue-500 text-white rounded-lg transition duration-300 hover:bg-blue-600"
              >
                {isSubmitting ? 'Sending...' : 'Submit'}
              </button>
            )}
          </div>
        </form>

        {isSubmitted && (
          <div className="mt-6 text-center text-green-600">
            <CheckCircle className="inline-block w-6 h-6 mb-1" />
            <p>Thank you! Your message has been sent successfully.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactAndBusinessHours;
