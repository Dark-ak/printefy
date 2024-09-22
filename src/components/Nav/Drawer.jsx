/* eslint-disable react/prop-types */

import { RiCloseLargeLine } from "react-icons/ri";
import { FaChevronUp } from "react-icons/fa";

import { useState } from "react";

const Drawer = ({ drawer, setDrawer }) => {


    const [active, setActive] = useState(0)

    const toggleActive = (index) => {
        setActive(active !== index ? index : 0)
    }

    return (
        <div className={`z-50 fixed inset-0 ${drawer ? "block" : "hidden"}`}>
            <div className='flex'>
                <div className='min-w-[300px] h-screen bg-white'>
                    <div className="">
                        <div className='flex justify-center border-b-2 shadow-sm relative items-center py-3'>
                            <p className='text-2xl font-bold'>Menu</p>
                            <div className='absolute right-0 mr-6'>
                                <RiCloseLargeLine size={16} color='gray' onClick={() => setDrawer(false)} />
                            </div>
                        </div>
                        <div className='py-6 px-4 flex flex-col gap-6'>
                            <p className='text-lg font-semibold'>Catalog</p>
                            <div className="" onClick={() => toggleActive(1)}>
                                <div className='flex items-center justify-between'>
                                    <p className='text-lg font-semibold'>How it works</p>

                                    <FaChevronUp  className="rotate-180"/>
                                </div>
                                <div
                                    className={`overflow-hidden transition-max-height duration-300 ease-in-out ${active === 1 ? 'max-h-fit' : 'max-h-0'}`}
                                >
                                    <div className="flex flex-col gap-4 py-5 px-8">
                                        <p className="font-medium">How Printify Works</p>
                                        <p className="font-medium">Print On demand</p>
                                        <p className="font-medium">Printify Quality Assurance</p>
                                        <p className="font-medium">Want to sell?</p>

                                    </div>
                                </div>


                            </div>
                            <p className='text-lg font-semibold'>Pricing</p>
                            <p className='text-lg font-semibold'>Blog</p>
                            <div className="" onClick={() => toggleActive(2)}>
                                <div className='flex items-center justify-between'>
                                    <p className='text-lg font-semibold'>Services</p>

                                    <FaChevronUp  className="rotate-180"/>
                                </div>
                                <div
                                    className={`overflow-hidden transition-max-height duration-300 ease-in-out ${active === 2 ? 'max-h-40' : 'max-h-0'}`}
                                >
                                    <div className="flex flex-col gap-4 py-5 px-8">
                                        <p className="font-medium">Printify Studio</p>
                                        <p className="font-medium">Printify Express Delivery</p>
                                        <p className="font-medium">Transfer Products</p>
                                        <p className="font-medium">Order in Bulk</p>
                                        <p className="font-medium">Experts Program</p>
                                        
                                    </div>
                                </div>


                            </div>
                            <div className="h-full" onClick={() => toggleActive(3)}>
                                <div className='flex items-center justify-between'>
                                    <p className='text-lg font-semibold'>Use-cases</p>

                                    <FaChevronUp  className="rotate-180"/>
                                </div>
                                <div
                                    className={`overflow-hidden transition-max-height duration-300 ease-in-out ${active === 3 ? 'max-h-40' : 'max-h-0'}`}
                                >
                                    <div className="flex flex-col gap-4 py-5 px-8">
                                        <p className="font-medium">Merch for Fans</p>
                                        <p className="font-medium">Merch for eCommerce</p>
                                        <p className="font-medium">Merch for Enterperises</p>
                                        <p className="font-medium">Grow Your Store</p>
                                        
                                    </div>
                                </div>


                            </div>
                            <div className="" onClick={() => toggleActive(4)}>
                                <div className='flex items-center justify-between'>
                                    <p className='text-lg font-semibold'>Need Help</p>

                                    <FaChevronUp  className="rotate-180"/>
                                </div>
                                <div
                                    className={`overflow-hidden transition-max-height duration-300 ease-in-out ${active === 4 ? 'max-h-40' : 'max-h-0'}`}
                                >
                                    <div className="flex flex-col gap-4 py-5 px-8">
                                        <p className="font-medium">Help Center</p>
                                        <p className="font-medium">My requests</p>
                                        <p className="font-medium">Contacts</p>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
                <div onClick={() => setDrawer(false)} className='bg-black opacity-45 w-full'>
                    <p>working</p>
                </div>
            </div>

        </div>
    )
}

export default Drawer