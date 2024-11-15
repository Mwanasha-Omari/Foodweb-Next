'use client'
import React from 'react';
import { FaUtensils, FaCogs, FaTags, FaShippingFast } from "react-icons/fa"; 

const ServiceSection = () => {
  const services = [
    {
      icon: <FaUtensils className="w-16 h-16 text-orange" />, 
      title: "55+ Restaurants",
    },
    {
      icon: <FaCogs className="w-16 h-16 text-orange" />,  
      title: "Good Quality",
    },
    {
      icon: <FaTags className="w-16 h-16 text-orange" />,  
      title: "Discount System",
    },
    {
      icon: <FaShippingFast className="w-16 h-16 text-orange" />,  
      title: "Fast Delivery",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-16">Our Service</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="mb-6">
              {service.icon}
            </div>
            <h3 className="text-xl font-medium text-gray-800">
              {service.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceSection
