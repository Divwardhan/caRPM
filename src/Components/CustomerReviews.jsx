import React from 'react';
import { Star } from 'lucide-react';

const CustomerReviews = () => {
    const reviews = [
      {
        name: 'Colvin McAllister',
        role: 'Workshop Owner, Delhi',
        text: "I love the app. Easy to use. I had a problem setting up a new account. Customer service was awesome! The chat feature was very helpful and emailing the fix guys was amazing. Quick response and fixed my account very quickly. If you're looking for this type app, I highly recommend.",
        stars: 5,
        image: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
      },
      {
        name: 'Kishor Dabholkar',
        role: 'Fleet Manager, Bangalore',
        text: 'Garage Book is a very good software. It is very useful for my workshop and my work is reduced. Job card, vehicle history, billing, accounting, customer reminder, photos of the vehicle before and after work are saved. And specially, I save the job card. And take a print of the bill and give it to the customer, so a special impression is made on the customers of our workshop. Thank you very much to the garage book team.',
        stars: 5,
        image: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
      },
      {
        name: 'Ravindra Kumar Bunkar',
        role: 'Auto Parts Retailer, Pune',
        text: 'I was looking for clutch kit for my car. I ordered from GaragePro spare parts. Very happy with their price and fastest delivery. I recommend everyone to purchase directly from GaragePro instead local shop. You will get better price, better quality and fastest delivery service. There customer support is excellent .',
        stars: 5,
        image: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
      },
    ];
  
    return (
      <section className="relative min-h-[60vh] py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-[#0f182c] via-[#0f182c] to-[#1a337c] text-white overflow-hidden">
        {/* Background glows */}
        <div className="absolute top-[-50px] left-[10%] w-36 sm:w-72 h-36 sm:h-72 bg-white/5 blur-3xl rounded-full z-0" />
        <div className="absolute bottom-[-80px] right-[15%] w-48 sm:w-96 h-48 sm:h-96 bg-yellow-500/10 blur-2xl rounded-full z-0" />
  
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4">
            What Our Customers Say
          </h2>
          <p className="text-center text-gray-400 text-base sm:text-lg max-w-2xl mx-auto mb-8 sm:mb-12">
            Real stories from real users across India. Discover how CaRPM is empowering professionals.
          </p>
  
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review, idx) => (
              <div
                key={idx}
                className="relative bg-gradient-to-br from-slate-800/40 to-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-4 sm:p-6 shadow-xl hover:shadow-2xl transition-all duration-300 group"
              >
                {/* Avatar */}
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-12 sm:w-14 h-12 sm:h-14 rounded-full border-2 border-blue-500 shadow-lg"
                  />
                  <div>
                    <h4 className="font-semibold text-base sm:text-lg">{review.name}</h4>
                  </div>
                </div>
  
                {/* Review */}
                <p className="text-gray-300 text-sm sm:text-base mb-4 leading-relaxed line-clamp-6">
                  {review.text}
                </p>
  
                {/* Stars */}
                <div className="flex items-center space-x-1">
                  {Array.from({ length: review.stars }, (_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
  
                {/* Glow Border on Hover */}
                <div className="absolute inset-0 rounded-2xl pointer-events-none group-hover:ring-2 group-hover:ring-blue-400/40 transition duration-300"></div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-12 sm:h-24 bg-gradient-to-t from-[#0f182c] to-transparent" />
      </section>
    );
  };

export default CustomerReviews;
