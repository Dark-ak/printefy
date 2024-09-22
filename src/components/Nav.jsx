import { FiMenu } from "react-icons/fi";
import { useState } from 'react';
import { FaCaretDown } from "react-icons/fa";
import Drawer from './Nav/Drawer';

const Nav = () => {

    const [drawer, setDrawer] = useState(false)

    return (
        <div className='border-b-2 border-gray shadow-md'>
            <div className='px-8 py-4 flex items-center justify-between lg:justify-evenly'>
                <div>
                    <div className="lg:hidden">
                        <FiMenu color='blue' fontSize={30} onClick={() => setDrawer(true)} />
                        <Drawer drawer={drawer} setDrawer={setDrawer} />
                    </div>
                </div>

                <div className="hidden lg:flex gap-6">
                    <p className="font-medium text-gray-500 hover:text-blue-600 cursor-pointer">Catalog</p>
                    <div className="flex group gap-2 items-center  ">
                        <p className="font-medium text-gray-500 cursor-pointer group-hover:text-blue-600">How It Works</p>
                        <FaCaretDown className="text-gray-500 group-hover:text-blue-600 group-hover:rotate-180 duration-200 ease-out" />
                        <div className="hidden group-hover:flex absolute z-30">
                            <div className="flex flex-col  mt-[210px] bg-white w-[250px] gap-4 py-4 pl-6 shadow">
                                <p className="hover:text-blue-500 cursor-pointer">Printify Studio</p>
                                <p className="hover:text-blue-500 cursor-pointer">Printify Express Delivery</p>
                                <p className="hover:text-blue-500 cursor-pointer">Transfer Products</p>
                            </div>
                        </div>
                    </div>
                    <p className="font-medium text-gray-500 hover:text-blue-600 cursor-pointer">Pricing</p>
                    <p className="font-medium text-gray-500 hover:text-blue-600 cursor-pointer">Blog</p>
                    <div className="flex group relative gap-2 items-center  ">
                        <div className="flex items-center gap-2 z-50">
                            <p className="font-medium text-gray-500 cursor-pointer group-hover:text-blue-600">Services</p>
                            <FaCaretDown className="text-gray-500 group-hover:text-blue-600 group-hover:rotate-180 duration-200 ease-out" />
                        </div>
                        <div className="hidden group-hover:flex absolute z-30">
                            <div className="flex flex-col  mt-[210px] bg-white w-[250px] gap-4 py-4 pl-6 shadow">
                                <p className="hover:text-blue-500 cursor-pointer">Printify Studio</p>
                                <p className="hover:text-blue-500 cursor-pointer">Printify Express Delivery</p>
                                <p className="hover:text-blue-500 cursor-pointer">Transfer Products</p>
                            </div>
                        </div>
                    </div>
                    <div className="group flex gap-2 items-center cursor-pointer">
                        <div className="flex  items-center gap-2 z-50">
                            <p className="font-medium text-gray-500 group-hover:text-blue-600">Use Cases</p>
                            <FaCaretDown className="text-gray-500 group-hover:text-blue-600 group-hover:rotate-180 duration-200 ease-out" />
                        </div>
                        <div className="hidden group-hover:flex absolute z-30">
                            <div className="flex flex-col  top-12 mt-[210px] bg-white w-[200px] gap-4 py-4 pl-6 shadow">
                                <p className="hover:text-blue-500 cursor-pointer">Merch for Fans</p>
                                <p className="hover:text-blue-500 cursor-pointer">Merch for eCommerce</p>
                                <p className="hover:text-blue-500 cursor-pointer">Merch for Enterperises</p>
                            </div>
                        </div>
                    </div>


                    <div className="flex group gap-2 items-center relative">
                        <div className="flex items-center gap-2 z-50">
                            <p className="font-medium text-gray-500 cursor-pointer group-hover:text-blue-600">Need Help?</p>
                            <FaCaretDown className="text-gray-500 group-hover:text-blue-600 group-hover:rotate-180 duration-200 ease-out" />
                        </div>
                        <div className="hidden group-hover:flex absolute z-30">
                            <div className="flex flex-col mt-[210px] bg-white w-[200px] gap-4 py-4 pl-6 shadow">
                                <p className="hover:text-blue-500 cursor-pointer">Help Center</p>
                                <p className="hover:text-blue-500 cursor-pointer">My requests</p>
                                <p className="hover:text-blue-500 cursor-pointer">Contacts</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='flex gap-3'>
                    <button className='border-2 border-gray  rounded px-5 py-1 font-semibold'>Login</button>
                    <button className='rounded px-5 py-1 text-white font-semibold bg-blue-600'>Sign up</button>
                </div>
            </div>
        </div>
    )
}

export default Nav