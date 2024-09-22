import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { useSwiper } from 'swiper/react';


const Check = () => {
    return (
        <div className="relative w-full">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={50}
            slidesPerView={1}

            pagination={{ clickable: true }}
            className="h-64"
          >
            <SwiperSlide>
              <div className='flex flex-col items-center md:items-start bg-gray-200'>
                <img src="" alt="" className='w-[200px]' />
                <div className='flex flex-col gap-2 justify-center my-3 items-center md:items-start'>
                  <p className='font-semibold text-blue-500 text-xl'>CREATE</p>
                  <p className='font-semibold text-2xl'>custom products</p>
                  <p className='text-center md:text-left text-gray-500'>Easily add your designs to a wide range of products using our free tools</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center items-center h-full bg-gray-200">
                <p className="text-2xl">Slide 2</p>
              </div>
            </SwiperSlide>
          </Swiper>
    
          {/* Buttons defined here */}
          <CustomNavigation />
        </div>
      );
    };
    
    const CustomNavigation = () => {
      const swiper = useSwiper();
    
      return (
        <div className="flex justify-between mt-4">
          <button onClick={() => swiper.slidePrev()} className='w-24 bg-slate-800 text-white'>
            Prev
          </button>
          <button onClick={() => swiper.slideNext()} className='w-24 bg-slate-800 text-white'>
            Next
          </button>
        </div>
      );
    };

export default Check