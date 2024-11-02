import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { BookOpen, Mail, Phone, User, MessageSquare } from 'lucide-react';

function ContactForm() {
  const [state, handleSubmit] = useForm("xpwzpowp");
  
  if (state.succeeded) {
    return (
      <div className="max-w-md mx-auto mt-8 p-6 bg-green-50 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold text-green-700 mb-2">Thank You!</h3>
        <p className="text-green-600">
          We've received your inquiry and will contact you soon about starting your trading journey.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Start Your Trading Journey</h2>
        <p className="text-gray-600">Join our academy and learn from experienced traders</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
     
          <div>
            <label htmlFor="firstName" className="flex items-center text-sm font-medium text-gray-700 mb-1">
              <User className="w-4 h-4 mr-2" />
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              name="firstName"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="lastName" className="flex items-center text-sm font-medium text-gray-700 mb-1">
              <User className="w-4 h-4 mr-2" />
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              name="lastName"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
        </div>

        
        <div>
          <label htmlFor="email" className="flex items-center text-sm font-medium text-gray-700 mb-1">
            <Mail className="w-4 h-4 mr-2" />
            Email Address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-sm mt-1" />
        </div>

        <div>
          <label htmlFor="phone" className="flex items-center text-sm font-medium text-gray-700 mb-1">
            <Phone className="w-4 h-4 mr-2" />
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

 
        <div>
          <label htmlFor="experience" className="flex items-center text-sm font-medium text-gray-700 mb-1">
            <BookOpen className="w-4 h-4 mr-2" />
            Trading Experience
          </label>
          <select
            id="experience"
            name="experience"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          >
            <option value="">Select your course</option>
            <option value="beginner">Beginner (0-4 weeks)</option>
            <option value="intermediate">Intermediate (1-3 months)</option>
            <option value="advanced">Advanced (3+ months)</option>
          </select>
        </div>

     
        <div>
          <label htmlFor="message" className="flex items-center text-sm font-medium text-gray-700 mb-1">
            <MessageSquare className="w-4 h-4 mr-2" />
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Tell us about your trading goals and what you hope to learn..."
            required
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-sm mt-1" />
        </div>

    
        <button
          type="submit"
          disabled={state.submitting}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-200 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {state.submitting ? 'Submitting...' : 'Start Your Journey'}
        </button>
      </form>
    </div>
  );
}

export default ContactForm;