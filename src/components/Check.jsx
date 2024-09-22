import React, {useRef} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { useSwiper } from 'swiper/react';
// import { useRef } from 'react';


const Check = () => {
  const swiperRef = useRef(null);

  return (
    <div className="relative w-full">
      {/* Swiper Carousel */}
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="h-64"
      >
        <SwiperSlide>
          <div className="flex justify-center items-center bg-gray-200 h-full">
            <img src="https://via.placeholder.com/300" alt="Slide 1" className="h-full" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center bg-gray-200 h-full">
            <img src="https://via.placeholder.com/300" alt="Slide 2" className="h-full" />
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Custom Navigation Buttons */}
      <button
        className="absolute left-2 bottom-0 transform -translate-y-1/2 bg-black z-50 text-white px-4 py-2 rounded"
        onClick={() => swiperRef.current?.swiper?.slidePrev()}
      >
        Prev
      </button>
      <button
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black z-50 text-white px-4 py-2 rounded"
        onClick={() => swiperRef.current?.swiper?.slideNext()}
      >
        Next
      </button>
    </div>
  );
    };
    

export default Check