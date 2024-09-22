import profit from "../assets/higher-profits.svg"
import rocket from "../assets/robust-scaling.svg"
import best from "../assets/best-selection.svg"
import Arrow from "../assets/arrow-down.svg?react"

const Features = () => {
  return (
    <div className='py-20 md:pb-32 md:px-56 relative'>
        <div className='absolute -bottom-8 right-0 flex justify-center m-auto w-full'>
            <Arrow className="text-white z-20 w-[180px]" />
        </div>
        <div className='flex flex-col gap-10 justify-center mx-5 md:flex-row'>
            <div className='flex flex-col gap-6 items-center justify-center md:items-start'>
                <img src={profit} alt="" className='w-[140px]'/>
                <div className='flex flex-col gap-2 items-center md:items-start'>
                    <p className='font-semibold text-2xl'>Higher Profits</p>
                    <p className='text-gray-400 font-medium md:text-left text-center'>We offer some of the lowest prices in the industry because print providers continuously compete to win your business.</p>
                </div>
            </div>
            <div className='flex flex-col gap-6 items-center justify-center md:items-start'>
                <img src={rocket} alt="" className='w-[140px]'/>
                <div className='flex flex-col gap-2 items-center md:items-start'>
                    <p className='font-semibold text-2xl'>Robust Scaling</p>
                    <p className='text-gray-400 font-medium md:text-left text-center'>Easily handle peak holiday seasons, with our wide network of partners and automatic routing functionality.</p>
                </div>
            </div>

            <div className='flex flex-col gap-6 items-center justify-center md:items-start'>
                <img src={best} alt="" className='w-[140px]'/>
                <div className='text-center flex flex-col gap-2 md:items-start'>
                    <p className='font-semibold text-2xl'>Best Selection</p>
                    <p className='text-gray-400 font-medium md:text-left text-center'>With 900+ products and top quality brands, you can choose the best products for your business.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Features