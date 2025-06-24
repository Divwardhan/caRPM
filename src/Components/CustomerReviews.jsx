import React from 'react';
import { Star } from 'lucide-react';

const CustomerReviews = () => {
    const reviews = [
      {
        name: 'Colvin McAllister',
        role: '',
        text: "I love the app. Easy to use. I had a problem setting up a new account. Customer service was awesome! The chat feature was very helpful and emailing the fix guys was amazing. Quick response and fixed my account very quickly. If you're looking for this type app, I highly recommend.",
        stars: 5,
        image: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
      },
      {
        name: 'Kishor Dabholkar',
        role: '',
        text: 'Garage Book is a very good software. It is very useful for my workshop and my work is reduced. Job card, vehicle history, billing, accounting, customer reminder, photos of the vehicle before and after work are saved. And specially, I save the job card. And take a print of the bill and give it to the customer, so a special impression is made on the customers of our workshop. Thank you very much to the garage book team.',
        stars: 5,
        image: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
      },
      {
        name: 'Ravindra Kumar Bunkar',
        role: '',
        text: 'I was looking for clutch kit for my car. I ordered from GaragePro spare parts. Very happy with their price and fastest delivery. I recommend everyone to purchase directly from GaragePro instead local shop. You will get better price, better quality and fastest delivery service. There customer support is excellent .',
        stars: 5,
        image: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
      },
    ];
  
    return (
      <section className="relative min-h-[60vh] py-20 px-4 sm:px-6 lg:px-8 bg-[#e7ecf8] text-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-6 text-[#1a3687]">
            What Our Customers Say
          </h2>
          <p className="text-center text-gray-700 text-base sm:text-lg max-w-2xl mx-auto mb-12">
            Real stories from real users across India. Discover how CaRPM is empowering professionals.
          </p>
  
<div className="grid gap-12 sm:gap-14 md:grid-cols-2 lg:grid-cols-3">
  {reviews.map((review, idx) => (
    <div
      key={idx}
      className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-100"
    >
      {/* Avatar */}
      <div className="flex items-center gap-4 mb-5">
        <img
          src={review.image}
          alt={review.name}
          className="w-14 h-14 rounded-full border-2 border-[#1a3687] shadow-sm"
        />
        <div>
          <h4 className="font-semibold text-lg text-[#1a3687]">{review.name}</h4>
          {/* <p className="text-sm text-gray-500">{review.role}</p> */}
        </div>
      </div>

      {/* Review */}
      <p className="text-gray-700 text-sm sm:text-base mb-5 leading-relaxed">
        {review.text}
      </p>

      {/* Stars */}
      <div className="flex items-center space-x-1">
        {Array.from({ length: review.stars }, (_, i) => (
          <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
        ))}
      </div>

      {/* Glow Border on Hover */}
      <div className="absolute inset-0 rounded-2xl pointer-events-none group-hover:ring-2 group-hover:ring-blue-300/40 transition duration-300"></div>
    </div>
  ))}
</div>

        </div>

        {/* Decorative Gradient Blur Background */}
        <div className="absolute -top-20 left-10 w-72 h-72 bg-[#dbe4f5] blur-3xl rounded-full opacity-60 z-0"></div>
        <div className="absolute -bottom-28 right-10 w-96 h-96 bg-[#cfd9f0] blur-3xl rounded-full opacity-60 z-0"></div>
      </section>
    );
  };

export default CustomerReviews;
