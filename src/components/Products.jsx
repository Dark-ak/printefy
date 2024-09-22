
import clothesM from "../assets/clothes-mobile.jpeg"
import bottom from "../assets/clothes-bottom.svg"
import { GoArrowRight } from "react-icons/go";
import Slide from './Products/Slide';
import Arrow from "../assets/arrow-down.svg?react"
import clothes from "../assets/clothes.jpg"
import sell from "../assets/your-products.png"
import handle from "../assets/fullfillment.png"
import create from "../assets/custom-products.png"


const Products = () => {
    return (
        <div className='bg-[#f7f7f7] relative lg:px-24'>
            <div className='absolute -bottom-8 right-0 flex z-30 justify-center m-auto w-full'>
                <Arrow className="text-[#f7f7f7] w-[180px]" />
            </div>
            <div className='px-4 pt-20 flex justify-center  '>
                <div className='rounded-3xl flex max-w-[500px] bg-white lg:bg-transparent md:max-w-full flex-col items-end lg:flex-row lg:bg-none'>
                    <div className='relative block lg:hidden'>
                        <img src={clothesM} alt="" className='rounded-3xl' />
                        <img src={bottom} alt="" className='absolute bottom-0 right-0 w-[70%]' />
                    </div>
                    <div className='relative bg-blue-500 hidden lg:w-1/2 lg:block rounded-xl'>
                        <img src={clothes} alt="" className='min-w-[450px] max-w-[500px] ' />
                        <img src={bottom} alt="" className='absolute bottom-0 right-0 w-[300px]' />
                    </div>
                    <div className='rounded-3xl bg-white max-w-[500px] lg:max-w-[700px] lg:rounded-l-none lg:pl-32  lg:py-10 lg:h-[60vh] '>
                        <div className=' flex flex-col gap-3 px-6 py-4 md:gap-8'>
                            <p className='text-2xl font-bold sm:w-[70%] md:text-3xl'>Easily Add Your designs to wide range of products</p>
                            <p className='font-medium text-gray-400 lg:w-[80%]'>With our free design tools, you can easily add your custom designs to t-shirts, mugs, phone cases, and hundreds of other products.</p>
                        </div>

                        <div className='flex items-center pb-10 px-6 group gap-2 cursor-pointer'>
                            <p className=' font-medium text-blue-500 cursor-pointer group-hover:text-blue-950'>All products</p>
                            <GoArrowRight fontSize={30} className='text-blue-500 group-hover:text-blue-950 cursor-pointer' />
                        </div>
                    </div>
                </div>
            </div>

            <div className='px-4 py-8 md:py-32 hidden lg:block'>
                <div className='flex flex-col justify-center items-center md:justify-start md:flex-row gap-10'>
                    <div className='flex flex-col items-center md:items-start'>
                        <img src={create} alt="" className='w-[150px] ' />
                        <div className='flex flex-col gap-2 justify-center my-3 items-center md:items-start'>
                            <p className='font-semibold text-blue-500 text-xl'>CREATE</p>
                            <p className='font-bold text-2xl'>custom products</p>
                            <p className='text-center md:text-left text-gray-500'> Easily add your designs to a wide range of products using our free tools </p>
                        </div>
                    </div>
                    <div className='flex flex-col items-center md:items-start'>
                        <img src={sell} alt="" className='w-[150px] ' />
                        <div className='flex flex-col gap-2 justify-center my-3 items-center md:items-start'>
                            <p className='font-semibold text-blue-500 text-xl'>SELL</p>
                            <p className='font-bold text-2xl'>on Your Terms</p>
                            <p className='text-center md:text-left text-gray-500'>You choose the products, sale price, and where to sell</p>
                        </div>
                    </div>
                    <div className='flex flex-col items-center md:items-start'>
                        <img src={handle} alt="" className='w-[150px] ' />
                        <div className='flex flex-col gap-2 justify-center my-3 items-center md:items-start'>
                            <p className='font-semibold text-blue-500 text-xl'>We Handle</p>
                            <p className='font-bold text-2xl'>custom products</p>
                            <p className='text-center md:text-left text-gray-500'> Once an order is placed, we automatically handle all the printing and delivery logistics </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='lg:hidden relative pt-10 pb-20'>
                <div className='relative py-20 px-4'>
                    <Slide />
                </div>
            </div>
        </div>
    )
}

export default Products