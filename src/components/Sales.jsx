import React from 'react'
import sales from "../assets/sales.svg"


const Sales = () => {
    return (
        <div className='mx-4 my-10 md:m-32 flex justify-center' >
            <div style={{backgroundImage: `url(${sales})`}} className='h-fit bg-blue-300 px-3 py-2 rounded-lg flex flex-col items-start relative bg-no-repeat bg-right bg-contain md:bg-contain md:w-[800px] md:h-[150px]'>
                <div className='z-10 flex flex-col items-start gap-3 md:flex-row md:items-center md:justify-between h-full'>
                    <p className='font-semibold md:text-2xl md:w-[50%] px-4'>Are you a large business looking for custom solutions?</p>
                    <button className='bg-white border-2 border-gray-400 font-semibold rounded-lg  px-4 py-1'>Talk To Sales</button>
                </div>
            </div>
        </div>
    )
}

export default Sales