import React from 'react'
import robert from "../assets/robert-voltaire.png"
import star from "../assets/star-S46SZESO.svg"
import Arrow from "../assets/arrow-down.svg?react"

const FeedBack = () => {
    return (
        <div className='bg-gray-100 px-4 py-20 relative md:px-32'>
            <div className='absolute -bottom-8 right-0 flex z-30 justify-center m-auto w-full'>
                <Arrow className="text-gray-100 w-[180px]" />
            </div>
            <div className='flex flex-col gap-10 md:items-center'>
                <div className='flex flex-col gap-4 md:items-center md:flex-row md:gap-20'>
                    <p className='font-bold text-3xl md:text-4xl md:w-[30%]'>Trsuted by over 8M sellers all over the world</p>
                    <p className='text-gray-500 font-medium md:w-[40%]'>Whether you are just getting started or run an enterprise-level e-commerce business, we do everything we can to ensure a positive merchant experience.</p>
                </div>

                <div className='flex md:gap-10 flex-col lg:flex-row md:justify-start'>

                    <div className='bg-white px-6 rounded-3xl py-8 flex gap-6 flex-col md:px-10'>
                        <div className='flex gap-5  '>
                            <img src={robert} alt="" className='rounded-xl h-16  object-cover ' />
                            <div>
                                <p className='font-bold text-xl'>Robert A.Volatire</p>
                                <p className='font-medium text-blue-500'>Store Link</p>
                                <div className='flex gap-2 my-2'>
                                    <img src={star} alt="" />
                                    <img src={star} alt="" />
                                    <img src={star} alt="" />
                                    <img src={star} alt="" />
                                    <img src={star} alt="" />
                                </div>
                            </div>
                        </div>

                        <div>
                            <p className='text-gray-700 text-lg'>
                                Whether you are just getting started or run an enterprise-level e-commerce business, we do everything we can to ensure a positive merchant experience.
                            </p>
                        </div>
                    </div>
                    <div className='bg-white px-6 rounded-3xl py-8 flex gap-6 flex-col md:px-10'>
                        <div className='flex gap-5  '>
                            <img src={robert} alt="" className='rounded-xl h-16  object-cover ' />
                            <div>
                                <p className='font-bold text-xl'>Robert A.Volatire</p>
                                <p className='font-medium text-blue-500'>Store Link</p>
                                <div className='flex gap-2 my-2'>
                                    <img src={star} alt="" />
                                    <img src={star} alt="" />
                                    <img src={star} alt="" />
                                    <img src={star} alt="" />
                                    <img src={star} alt="" />
                                </div>
                            </div>
                        </div>

                        <div>
                            <p className='text-gray-700 text-lg'>
                                Whether you are just getting started or run an enterprise-level e-commerce business, we do everything we can to ensure a positive merchant experience.
                            </p>
                        </div>
                    </div>
                    <div className='bg-white px-6 rounded-3xl py-8 flex gap-6 flex-col md:px-10'>
                        <div className='flex gap-5  '>
                            <img src={robert} alt="" className='rounded-xl h-16  object-cover ' />
                            <div>
                                <p className='font-bold text-xl'>Robert A.Volatire</p>
                                <p className='font-medium text-blue-500'>Store Link</p>
                                <div className='flex gap-2 my-2'>
                                    <img src={star} alt="" />
                                    <img src={star} alt="" />
                                    <img src={star} alt="" />
                                    <img src={star} alt="" />
                                    <img src={star} alt="" />
                                </div>
                            </div>
                        </div>

                        <div>
                            <p className='text-gray-700 text-lg'>
                                Whether you are just getting started or run an enterprise-level e-commerce business, we do everything we can to ensure a positive merchant experience.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeedBack