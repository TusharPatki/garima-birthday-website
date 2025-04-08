import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCards, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';

// INSTRUCTIONS TO UPDATE PHOTOS:
// 1. Add your photos to the src/assets/images/photos folder
// 2. Import them here like the example below
// 3. Add them to the photos array with a caption for each memory

// Example import for when you add your photos:
// import photo1 from '../../assets/images/photos/photo1.jpg';
// import photo2 from '../../assets/images/photos/photo2.jpg';


import firstMeeting from '../../assets/images/photos/First Meeting.png';
import lostPhone from '../../assets/images/photos/When she lost her phone.png';
import officeLaunch from '../../assets/images/photos/Office Launch party.png'; // Fixed capital L in Launch
import meetingAgain from '../../assets/images/photos/garima meeting again.png';
import railwayStation from '../../assets/images/photos/Meeting garima on railwaystation.png';
import birthdayPresent from '../../assets/images/photos/My birthday present.png'; // Added extra image

// This array holds all your photos and their captions
// To add your own photos:
// 1. Place them in src/assets/images/photos/
// 2. Import them at the top of this file
// 3. Replace the placeholders in this array with your photos and memories
const photos = [
  {
    id: 1,
    image: firstMeeting,
    caption: 'Remember the time when we first met and you asked me this? It will always stay with me.',
  },
  {
    id: 2,
    image: lostPhone,
    caption: 'I remember the day when you lost your phone and we were so scared, but when I saw you smiling in the cafeteria it felt like a miracle.',
  },
  {
    id: 3,
    image: officeLaunch,
    caption: 'I know this day is not a good memory for you, but I still remember how pretty you looked that day. We cannot change what happened, but we can replace it with other good memories.',
  },
  {
    id: 4,
    image: meetingAgain,
    caption: 'I remember this day you were sad and also quite worried, but still you were there for your family, fearlessly standing with them to help.',
  },
  {
    id: 5,
    image: railwayStation,
    caption: 'I remember this day - you were looking so cute and happy. I am so happy and proud of you!',
  },
  {
    id: 6,
    image: birthdayPresent,
    caption: 'That time when you gave me the perfect birthday present - it meant so much to me!',
  },
];

const PhotoCards = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-chewy text-center mb-12 text-purple-600">
          Photo Memories 📸
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <Swiper
            modules={[Navigation, EffectCards, Pagination]}
            effect="cards"
            grabCursor={true}
            navigation
            pagination={{ clickable: true }}
            className="mySwiper"
          >
            {photos.map((photo) => (
              <SwiperSlide key={photo.id}>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 flex flex-col">
                  <div className="overflow-hidden flex items-center justify-center bg-gray-50 p-4" style={{ height: '500px' }}>
                    <img
                      src={photo.image}
                      alt={`Memory ${photo.id}`}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <div className="p-6 bg-white">
                    <p className="text-gray-700 text-lg font-medium">{photo.caption}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default PhotoCards; 