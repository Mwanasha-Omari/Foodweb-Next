import React from 'react';

const OffersSection = () => {
  const offers = [
    {
      title: "Any day offers",
      subtitle: "New phenomenon Burger taste",
      price: "$12.90",
      image: "/images/BURGER.png.jpg",
      type: "burger",
      bgColor: "bg-yellow"
    },
    {
      title: "Other flavors",
      subtitle: "Save room. We made salats",
      price: "$12.90",
      image: "/images/SALAD.png",
      type: "salad",
      bgColor: "bg-yellow"
    },
    {
      title: "Find a poco store near you",
      subtitle: "",
      image: "/images/LOCATION5.png",
      type: "location",
      bgColor: "bg-gray"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <p className="text-gray-700 text-lg mb-2">Quality Food👌</p>
        <h1 className="text-6xl font-serif mb-4">Get The Best Offers</h1>
        <p className="text-gray-500 max-w-2xl mx-auto text-lg">
          The food at your doorstep. Why starve when you have us. Your hunger partner.
          Straight out of the oven to your doorstep.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {offers.map((offer, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-lg p-8 relative">
            <div>
              <h3 className="text-4xl font-serif mb-2 leading-tight">{offer.title.split(' ').map(word => (
                <div key={word}>{word}</div>
              ))}</h3>
              {offer.subtitle && (
                <p className="text-gray-500 mb-4 text-lg">{offer.subtitle}</p>
              )}
              {offer.price && (
                <p className="text-yellow text-2xl font-bold mb-8">
                  {offer.price}
                </p>
              )}
            </div>

            <div className="absolute bottom-8 left-8">
              <div className="w-12 h-1 bg-yellow rounded-full"></div>
            </div>

            <div className="absolute bottom-0 right-0 overflow-hidden">
              <div className={`absolute bottom-0 right-0 w-48 h-48 ${offer.bgColor} rounded-full transform translate-x-1/4 translate-y-1/4`}></div>
              
              <div className="relative z-10 w-48 h-48 flex items-center justify-center">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-2">
        {[1, 2, 3].map((dot, index) => (
          <div
            key={dot}
            className={`w-2 h-2 rounded-full ${
              index === 0 ? 'bg-yellow' : 'bg-gray-500'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default OffersSection;