'use client'

import Image from 'next/image';  

const Content = () => {
  return (
    <div className="font-serif">
      <div className="flex mt-40 justify-between items-center font-serif w-3/4 mx-auto" id="home">
  <div className="w-1/2 space-y-4">
    <p className="text-6xl font-extrabold">ENJOY DELICIOUS FOOD</p>
    <p className="text-6xl font-extrabold">
      IN <span className="text-yellow font-extrabold">HEALTHY LIFE</span>
    </p>
    <p>Where we bring you the best and most delicious recipes from around the world.</p>
    <button className="bg-yellow w-52 h-12 text-white font-bold rounded-xl mt-8">GET STARTED</button>
  </div>
  <div className="w-1/2 flex justify-center">
    <Image src="/images/chicken.png" width={500} height={500} className="rounded-full" alt="Chicken" />
  </div>
</div>

      <div className="text-center" id='resturant'>
        <p className="italic font-bold my-8">Online Stores</p>
        <p className="text-5xl font-bold font-serif">Popular Foods</p>
      </div>
      <div className="flex flex-wrap gap-10 justify-evenly mt-20">
  {/* First Food Item */}
  <div className="text-center">
    <Image
      src="/images/fish.jpeg"
      width={250}
      height={250}
      className="rounded-full object-cover mx-auto"
      alt="Fish Dish"
    />
    <p className="font-bold mt-2">Fruit Dish</p>
    <i>Dinko Food</i>
    <Image
      src="/images/rate.jpg"
      width={100}
      height={80}
      className="object-cover mx-auto mt-2"
      alt="Rating"
    />
    <button className="bg-yellow w-52 h-12 text-white rounded-3xl mt-4 mx-auto">
      Add Cart $689
    </button>
  </div>

  {/* Second Food Item */}
  <div className="text-center">
    <Image
      src="/images/S.jpeg"
      width={250}
      height={250}
      className="rounded-full object-cover mx-auto"
      alt="Fruit Dish"
    />
    <p className="font-bold mt-2">Fruit Dish</p>
    <i>Dinko Food</i>
    <Image
      src="/images/rate.jpg"
      width={100}
      height={80}
      className="object-cover mx-auto mt-2"
      alt="Rating"
    />
    <button className="bg-yellow w-52 h-12 text-white rounded-3xl mt-4 mx-auto">
      Add Cart $789
    </button>
  </div>

  {/* Third Food Item */}
  <div className="text-center">
    <Image
      src="/images/pizza.jpeg"
      width={250}
      height={250}
      className="rounded-full object-cover mx-auto"
      alt="Fruit Dish"
    />
    <p className="font-bold mt-2">Fruit Dish</p>
    <i>Dinko Food</i>
    <Image
      src="/images/rate.jpg"
      width={100}
      height={80}
      className="object-cover mx-auto mt-2"
      alt="Rating"
    />
    <button className="bg-yellow w-52 h-12 text-white rounded-3xl mt-4 mx-auto">
      Add Cart $789
    </button>
  </div>

  {/* Fourth Food Item */}
  <div className="text-center">
    <Image
      src="/images/seafood.png"
      width={250}
      height={250}
      className="rounded-full object-cover mx-auto"
      alt="Sea Food"
    />
    <p className="font-bold mt-2">Sea Food</p>
    <i>Dinko Food</i>
    <Image
      src="/images/rate.jpg"
      width={100}
      height={80}
      className="object-cover mx-auto mt-2"
      alt="Rating"
    />
    <button className="bg-yellow w-52 h-12 text-white rounded-3xl mt-4 mx-auto">
      Add Cart $589
    </button>
  </div>
</div>

<div className="flex justify-between items-center bg-[#fdf5eb] py-16 px-10 lg:px-32">
      {/* Text Section */}
      <div className="max-w-md space-y-4">
        <div className="bg-orange text-white font-bold px-3 py-1 rounded-full w-max">
          -50%
        </div>
        <h2 className="text-5xl font-bold text-gray-900">Our Special Offer</h2>
        <p className="text-gray-600">
          Best cooks and best delivery guys all at your service. Hot tasty food
          will reach you in 60 minutes.
        </p>
        <button className="flex items-center bg-yellow text-white font-semibold rounded-full px-6 py-3 mt-4 hover:bg-yellow-600 transition">
          See All Menu
          <span className="ml-2 text-xl">→</span>
        </button>
      </div>

      {/* Image and Reviews Section */}
      <div className="relative">
        {/* Main Image */}
        <Image
          src="/images/mostreviewed.jpeg" // replace with your image path
          width={500}
          height={500}
          className="rounded-full object-cover"
          alt="Special Dish"

        />
        
        {/* Review Card 1 */}
        <div className="absolute top-10 -left-10 bg-white shadow-lg rounded-lg p-4 flex items-center space-x-3">
          <Image
            src="/images/fifth.webp" // replace with your image path
            width={40}
            height={40}
            className="rounded-full"
            alt="Reviewer"
          />
          <div>
            <p className="font-semibold">Cristio Maria</p>
            <p className="text-sm text-gray-500">Healthy and delicious pizza</p>
            <p className="text-yellow-500">★★★★★</p>
          </div>
        </div>

        {/* Review Card 2 */}
        <div className="absolute bottom-10 -right-10 bg-white shadow-lg rounded-lg p-4 flex items-center space-x-3">
          <Image
            src="/images/second.webp" // replace with your image path
            width={40}
            height={40}
            className="rounded-full"
            alt="Reviewer"
          />
          <div>
            <p className="font-semibold">Srah Ali Khan</p>
            <p className="text-sm text-gray-500">Healthy and delicious pizza</p>
            <p className="text-yellow-500">★★★★★</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Content;
