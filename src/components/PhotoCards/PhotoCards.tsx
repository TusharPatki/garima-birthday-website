import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const photos = Array(10).fill(null).map((_, index) => ({
  id: index + 1,
  caption: `Memory ${index + 1}`,
  placeholder: `https://picsum.photos/800/600?random=${index}`
}));

const PhotoCards: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-chewy text-center mb-12 text-purple-600">
          Photo Memories 📸
        </h2>
        
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
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
          {photos.map((photo) => (
            <SwiperSlide key={photo.id}>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform">
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={photo.placeholder}
                    alt={photo.caption}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-4">
                  <p className="text-gray-700">{photo.caption}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PhotoCards; 