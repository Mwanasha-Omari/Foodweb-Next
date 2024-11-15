'use client'
import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";


const Footer = () => {
  return (
    <div>
      {/* Newsletter Section */}
      <div className=" py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h2 className="text-4xl font-serif mb-4">Subscribe Our Newsletter</h2>
              <p className="text-gray-600">Subscribe on our newsletter to get our news</p>
            </div>
            <div className="flex w-full md:w-auto gap-2">
              <input
                type="email"
                placeholder="Your email address.."
                className="flex-grow md:w-80 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow"
              />
              <button className="bg-yellow text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-yellow transition-colors">
                Subscribe
                <span className="ml-2">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <footer className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div>
              <h3 className="text-2xl font-bold mb-6">FoodHouse.</h3>
              <p className="text-gray-400 mb-6">
                Best cooks and best delivery guys all at your service. Hot tasty food will reach you in 60 minutes.
              </p>
              <div className="flex gap-4">
                {/* Social Media Icons - Leave space for actual icons */}
                <div className="w-10 h-10 text-yellow bg-white rounded-lg flex items-center justify-center">
                <FaFacebookF />
                </div>
                <div className="w-10 h-10 text-yellow bg-white rounded-lg flex items-center justify-center">
                <FaTwitter />
                </div>
                <div className="w-10 h-10 text-yellow bg-white rounded-lg flex items-center justify-center">
                    
                < FaLinkedinIn  /> 
               </div>
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="text-xl mb-6">Company</h4>
              <ul className="space-y-4 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Career</a></li>
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press Info</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              </ul>
            </div>

            {/* Fudo Links */}
            <div>
              <h4 className="text-xl mb-6">Fudo</h4>
              <ul className="space-y-4 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Why Fudo</a></li>
                <li><a href="#" className="hover:text-white transition-colors">How it Works</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Why Choose Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Client Stories</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Gallery</a></li>
              </ul>
            </div>

            {/* Menu Links */}
            <div>
              <h4 className="text-xl mb-6">Menu</h4>
              <ul className="space-y-4 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Breakfast</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Lunch</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Dinner</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Fast Foods</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Drinks</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      {/* Copyright Bar */}
      <div className="bg-yellow text-white py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p>Copyright 2021 Besnik All Right Reserved</p>
            <div className="flex gap-8">
              <a href="#" className="hover:underline">Terms</a>
              <a href="#" className="hover:underline">Privacy</a>
              <a href="#" className="hover:underline">Security</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;