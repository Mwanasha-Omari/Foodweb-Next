import React from 'react';
import { FaSearch, FaHome, FaHeart, FaUser, FaClock } from 'react-icons/fa';
import Image from 'next/image';

const DownloadSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-between gap-12">
      <div className="relative w-full max-w-sm">
        <div className="relative bg-black rounded-[60px] p-3 aspect-[1/2]">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/2 h-7 bg-black rounded-b-3xl" />
          <div className="bg-white h-full w-full rounded-[48px] p-6 relative">
            <div className="flex justify-between items-center mb-6">
              <button className="p-2">
                <div className="space-y-1">
                  <div className="w-4 h-0.5 bg-gray-400" />
                  <div className="w-4 h-0.5 bg-gray-400" />
                  <div className="w-4 h-0.5 bg-gray-400" />
                </div>
              </button>
              <div className="w-8 h-8 rounded-full bg-gray-200" />
            </div>
            <h1 className="text-2xl font-bold mb-4">Delicious<br />food for you</h1>
            <div className="relative mb-6">
              <input
                type="text"
                placeholder="Search"
                className="w-full bg-pink-50 rounded-full py-3 px-12 text-gray-600"
              />
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
            <div className="flex gap-4 mb-6 text-sm">
              <span className="text-red-500 border-b-2 border-red-500 pb-2">All</span>
              <span className="text-gray-400">Burger</span>
              <span className="text-gray-400">Pizza</span>
              <span className="text-gray-400">Rice-Bowl</span>
            </div>
            <div className="flex gap-4 overflow-x-auto">
              <div className="bg-white rounded-3xl p-4 shadow-lg min-w-[160px]">
                <div className="relative mb-4">
                  <img
                    src="/api/placeholder/150/150"
                    alt="Delicious burger"
                    className="rounded-full w-full"
                  />
                </div>
                <h3 className="text-center font-medium mb-2">Delicious burger</h3>
                <p className="text-center text-red-500">$12.5</p>
              </div>
            </div>
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex justify-between items-center">
                <FaHome size={24} className="text-red-500" />
                <FaHeart size={24} className="text-gray-300" />
                <FaUser size={24} className="text-gray-300" />
                <FaClock size={24} className="text-gray-300" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-xl">
        <p className="text-orange-500 font-medium mb-4">Download Our App</p>
        <h2 className="text-5xl font-serif mb-4">
          It's all here.<br />
          All in one app.
        </h2>
        <p className="text-gray-500 text-lg mb-8">
          Discover local, on-demand delivery or Pickup from restaurants, nearby grocery and convenience stores, and more.
        </p>

        <div className="flex justify-between gap-4">
          <div className="w-52 h-12">
            <Image
              src="/images/plAY.jpeg"
              width={220}
              height={40}
              alt="App Store"
              className="object-contain"
            />
          </div>
          <div className="w-52 h-12">
            <Image
              src="/images/playstore.jpg"
              width={220}
              height={40}
              alt="Play Store"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadSection;
