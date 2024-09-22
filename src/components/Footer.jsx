import React from 'react'
import fb from "../assets/facebook-icon.svg"
import insta from "../assets/instagram-icon.svg"
import linkedin from "../assets/linkedin-icon.svg"
import reddit from "../assets/reddit-icon.svg"
import tiktok from "../assets/Tiktok-1.svg"
import x from "../assets/X-Logo-Green.svg"

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col items-center justify-center gap-5'>
            <p className='text-2xl font-semibold text-blue-600'>Follow us on</p>
            <div className='flex gap-3'>
                <img src={fb} alt="" className=''/>
                <img src={linkedin} alt="" className=''/>
                <img src={reddit} alt="" className=''/>
                <img src={tiktok} alt="" className=''/>
                <img src={fb} alt="" className=''/>
                <img src={x} alt="" className=''/>
            </div>
        </div>

        <div className='w-full bg-gray-100 flex justify-center mt-10 py-2'>
            <p>©Darkak</p>
        </div>
    </div>
  )
}

export default Footer