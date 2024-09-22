
import { FaCheck } from "react-icons/fa6";
import { IoPlayCircleOutline } from "react-icons/io5";

const Hero = () => {
    return (
        <div>
            <div>
                <div className='mt-24  pl-10 pr-20 md:px-20 md:my-36 md:pl-40'>
                    <p className='text-3xl font-bold md:w-[70%] md:text-6xl'>Create and sell custom products</p>
                    <div className='py-5 flex flex-col gap-2 md:mt-4'>
                        <div className='flex gap-2 items-center'>
                            <FaCheck color='blue' />
                            <p className='font-medium'>100% Free to use</p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <FaCheck color='blue' />
                            <p className='font-medium'>900+  High-Quality Products</p>
                        </div><div className='flex gap-2 items-center'>
                            <FaCheck color='blue' />
                            <p className='font-medium'>Largest global print network</p>
                        </div>
                    </div>

                    <div className='flex gap-3 mt-5 flex-row max-[464px]:flex-col md:mt-6'>
                        <button className="bg-blue-500 text-white px-6 rounded font-medium py-3 w-fit max-[464px]:w-full">
                            Start for Free
                        </button>
                        <div className="flex items-center gap-2 justify-center border-2 border-gray-400 blue-white px-6 rounded font-medium py-3 w-fit max-[464px]:w-full">
                            <IoPlayCircleOutline size={25}/>
                            <p>How it Works?</p>
                        </div>
                    </div>

                    <p className='text-blue-500 font-medium my-4'>Trusted by over 8M sellers all over the world</p>
                </div>
            </div>
        </div>
    )
}

export default Hero