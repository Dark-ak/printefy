import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import create from "../../assets/custom-products.png"
import handle from "../../assets/fullfillment.png"
import sell from "../../assets/your-products.png"
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";


const Slide = () => {
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
                className="h-[400px]"
            >
                <SwiperSlide>
                    <div className="flex justify-center items-center bg-[#f7f7f7] h-[300px]">
                        <div className='flex flex-col items-center md:items-start'>
                            <img src={create} alt="" className='w-[150px] ' />
                            <div className='flex flex-col gap-2 justify-center my-3 items-center md:items-start'>
                                <p className='font-semibold text-blue-500 text-xl'>CREATE</p>
                                <p className='font-bold text-2xl'>custom products</p>
                                <p className='text-center md:text-left text-gray-500'> Easily add your designs to a wide range of products using our free tools </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex justify-center items-center bg-[#f7f7f7] h-[300px]">
                        <div className='flex flex-col items-center md:items-start'>
                            <img src={sell} alt="" className='w-[150px] ' />
                            <div className='flex flex-col gap-2 justify-center my-3 items-center md:items-start'>
                                <p className='font-semibold text-blue-500 text-xl'>SELL</p>
                                <p className='font-bold text-2xl'>on Your Terms</p>
                                <p className='text-center md:text-left text-gray-500'>You choose the products, sale price, and where to sell</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex justify-center items-center bg-[#f7f7f7] h-full">
                        <div className='flex flex-col items-center md:items-start'>
                            <img src={handle} alt="" className='w-[150px] ' />
                            <div className='flex flex-col gap-2 justify-center my-3 items-center md:items-start'>
                                <p className='font-semibold text-blue-500 text-xl'>We Handle</p>
                                <p className='font-bold text-2xl'>custom products</p>
                                <p className='text-center md:text-left text-gray-500'> Once an order is placed, we automatically handle all the printing and delivery logistics </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

            {/* Custom Navigation Buttons */}
            <button
                className="absolute bottom-0 transform -translate-y-1/2 z-50 text-white px-4 py-2 rounded"
                onClick={() => swiperRef.current?.swiper?.slidePrev()}
            >
                <MdKeyboardArrowLeft color='black' fontSize={40} />

            </button>
            <button
                className="absolute right-2 bottom-0  transform -translate-y-1/2  z-50 text-white px-4 py-2 rounded"
                onClick={() => swiperRef.current?.swiper?.slideNext()}
            >
                <MdKeyboardArrowRight color='black' fontSize={40} />
            </button>
        </div>
    );
};


export default Slide