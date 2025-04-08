import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const wishes = [
  {
    name: 'Muskan',
    message: 'Happy Birthday Garima! Wishing you loads of happiness and success! 🎂🎈',
    emoji: '🌟'
  },
  {
    name: 'Abhishek',
    message: 'Another year of amazing memories with you! Happy Birthday! 🎉🎁',
    emoji: '🎯'
  },
  {
    name: 'Mansi',
    message: 'To the most amazing friend, have a fantastic birthday! 🎊🎂',
    emoji: '💖'
  },
  {
    name: 'Rupali',
    message: 'Wishing you a day filled with love and laughter! Happy Birthday! 🎈🎉',
    emoji: '🎨'
  }
];

const BirthdayWishes: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-100 to-pink-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-chewy text-center mb-12 text-purple-600">
          Birthday Wishes 🎈
        </h2>
        
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="py-8"
        >
          {wishes.map((wish, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform">
                <div className="text-4xl mb-4">{wish.emoji}</div>
                <p className="text-gray-700 mb-4">{wish.message}</p>
                <p className="font-bold text-purple-600">- {wish.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default BirthdayWishes; 