import React from 'react'
import create from "../../assets/custom-products.png"
import sell from "../../assets/your-products.png"
import handle from "../../assets/fullfillment.png"



const Slide = () => {
  return (
    <div className='px-4 py-8 md:py-32'>
        <div className='flex flex-col justify-center items-center md:justify-start md:flex-row gap-10'>
            <div className='flex flex-col items-center md:items-start'>
                <img src={create} alt="" className='w-[150px] '/>
                <div className='flex flex-col gap-2 justify-center my-3 items-center md:items-start'>
                    <p className='font-semibold text-blue-500 text-xl'>CREATE</p>
                    <p className='font-bold text-2xl'>custom products</p>
                    <p className='text-center md:text-left text-gray-500'> Easily add your designs to a wide range of products using our free tools </p>
                </div>
            </div>
            <div className='flex flex-col items-center md:items-start'>
                <img src={sell} alt="" className='w-[150px] '/>
                <div className='flex flex-col gap-2 justify-center my-3 items-center md:items-start'>
                    <p className='font-semibold text-blue-500 text-xl'>SELL</p>
                    <p className='font-bold text-2xl'>on Your Terms</p>
                    <p className='text-center md:text-left text-gray-500'>You choose the products, sale price, and where to sell</p>
                </div>
            </div>
            <div className='flex flex-col items-center md:items-start'>
                <img src={handle} alt="" className='w-[150px] '/>
                <div className='flex flex-col gap-2 justify-center my-3 items-center md:items-start'>
                    <p className='font-semibold text-blue-500 text-xl'>We Handle</p>
                    <p className='font-bold text-2xl'>custom products</p>
                    <p className='text-center md:text-left text-gray-500'> Once an order is placed, we automatically handle all the printing and delivery logistics </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Slide