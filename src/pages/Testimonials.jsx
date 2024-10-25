import React, { useState } from 'react';
import { Star, ArrowLeft, ArrowRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Mariam",
    role: "Day Trader",
    image: "./mar.jpg",
    content: "After 6 months of following the academy's strategy, I've consistently generated 12% monthly returns. The risk management techniques alone were worth the investment.",
    rating: 5,
    stats: "Monthly Returns: +12%",
    location: "Ilorin, Nigeria."
  },
  {
    id: 2,
    name: "Zainab",
    role: "Forex Trader",
    image: "./zee.jpg",
    content: "The live trading sessions were eye-opening. I learned more in 3 months here than in 2 years of self-study. Now I trade with confidence and a clear strategy.",
    rating: 5,
    stats: "Win Rate: 68%",
    location: "Lagos, Nigeria."
  },
  {
    id: 3,
    name: "Don Smith",
    role: "Swing Trader",
    image: "./don.jpg",
    content: "The mentorship program transformed my approach to market analysis. The community support is incredible, and the weekly coaching calls are invaluable.",
    rating: 5,
    stats: "Portfolio Growth: 47% YTD",
    location: "Lagos, Nigeria."
  }
];

const TestimonialsPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
     
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Trader Success Stories
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Join thousands of successful traders who have transformed their trading journey with our academy
        </p>
      </div>

    
      <div className="bg-blue-600 py-8 mb-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="text-white">
            <div className="text-4xl font-bold mb-2">5,000+</div>
            <div className="text-blue-100">Successful Students</div>
          </div>
          <div className="text-white">
            <div className="text-4xl font-bold mb-2">82%</div>
            <div className="text-blue-100">Success Rate</div>
          </div>
          <div className="text-white">
            <div className="text-4xl font-bold mb-2">$100k+</div>
            <div className="text-blue-100">Student Profits in 2024</div>
          </div>
        </div>
      </div>

     
      <div className="max-w-4xl mx-auto mb-16">
        <div className="bg-white rounded-lg shadow-xl p-8">
          <div className="flex justify-between items-center mb-8">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full hover:bg-gray-100"
            >
              <ArrowLeft className="h-6 w-6 text-gray-600" />
            </button>
            <div className="flex items-center space-x-4">
              <img
                src={testimonials[activeIndex].image}
                alt={testimonials[activeIndex].name}
                className="w-20 h-20 rounded-full object-cover"
              />
              <div>
                <h3 className="text-xl font-semibold">{testimonials[activeIndex].name}</h3>
                <p className="text-gray-600">{testimonials[activeIndex].role}</p>
                <p className="text-sm text-gray-500">{testimonials[activeIndex].location}</p>
              </div>
            </div>
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full hover:bg-gray-100"
            >
              <ArrowRight className="h-6 w-6 text-gray-600" />
            </button>
          </div>
          
          <div className="mb-6">
            <Quote className="h-8 w-8 text-blue-600 mb-4" />
            <p className="text-lg text-gray-700 italic">
              {testimonials[activeIndex].content}
            </p>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex space-x-1">
              {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <div className="text-blue-600 font-semibold">
              {testimonials[activeIndex].stats}
            </div>
          </div>
        </div>
      </div>


      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Ready to Write Your Success Story?
        </h2>
        <p className="text-gray-600 mb-8">
          Join our next cohort and start your journey to becoming a profitable trader
        </p>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transform transition hover:-translate-y-1">
          <a href="contact-us">Start Your Journey Today</a>
        </button>
      </div>
    </div>
  );
};

export default TestimonialsPage;