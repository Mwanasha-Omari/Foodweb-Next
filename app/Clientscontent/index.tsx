'use client'
import React, { useState } from 'react';
import { PiQuotesFill } from "react-icons/pi";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Kyler Peris",
    content: "The meals were delicious and freshly prepared!",
    image: "/images/mercy.webp"  
  },
  {
    id: 2,
    name: "Mark Namaswa",
    content: "The staff was friendly and attentive.",
    image: "/images/mark.webp"   
  },
  {
    id: 3,
    name: "Jane Kibara",
    content: "The atmosphere was cozy and inviting.",
    image: "/images/jane.webp" 
  },
];

const Clientcontent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center">
        <h2 className="text-4xl font-serif mb-8">What Our Clients Say</h2>
        
        <div className="relative mb-16">
          <div className="text-orange text-6xl font-serif absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-12">
            <PiQuotesFill />
          </div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto pt-8">
            {testimonials[currentIndex].content}
          </p>
        </div>
        <div className="flex justify-center items-center gap-4 mb-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={testimonial.id}
              className={`w-16 h-16 rounded-full overflow-hidden ${
                idx === currentIndex ? 'border-4 border-yellow-400' : 'bg-pink-50'
              }`}
            >
              <img
                src={testimonial.image}  
                alt={testimonial.name}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        <div className="text-center">
          <h3 className="text-xl font-medium mb-1">
            {testimonials[currentIndex].name}
          </h3>
          <p className="text-gray-600">
            {testimonials[currentIndex].role}
          </p>
        </div>

        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={handlePrev}
            className="p-3 bg-gray-100 rounded-lg hover:bg-orange transition-colors"
            aria-label="Previous testimonial">
            <FaChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="p-3 bg-yellow-400 rounded-lg hover:bg-yellow-500 transition-colors"
            aria-label="Next testimonial">
            <FaChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Clientcontent;
