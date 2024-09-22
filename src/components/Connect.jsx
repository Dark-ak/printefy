
import printify from "../assets/printify.svg"
import logo from "../assets/stores-background.svg"
import etsy from "../assets/etsy-MXXFYORZ.svg"
import square from "../assets/squarespace-FIBF2RIF.svg"
import more from "../assets/more-integration.svg"

const Connect = () => {
  return (
    <div className='px-4'>
      <div className='flex flex-col gap-10 mt-16 w-full '>
        <div className='flex flex-col items-center gap-4'>
          <p className='font-semibold text-3xl md:text-5xl'>Connect your store</p>
          <p className='text-gray-400 font-medium'>Printify easily integrates with major e-commerce platforms and marketplaces</p>
        </div>
        <div className='h-[400px] flex items-start bg-no-repeat bg-center relative' style={{ backgroundImage: `url(${logo})` }} >
          <div className='bg-blue-500 absolute left-[50%] rounded-xl top-[30%] md:px-12 md:py-10'>
            <img src={printify} alt="" />
          </div>
          <div className='bg-white shadow-xl md:px-6 py-8 rounded-xl absolute left-[40%]'>
            <img src={etsy} alt="" className='w-12'/>
          </div>
          <div className='bg-white shadow-xl md:px-6 py-8 rounded-xl absolute bottom-0 left-[20%]'>
            <img src={square} alt="" className='w-20'/>
          </div>
          <div className='bg-white shadow-xl md:px-2 py-2 rounded-xl absolute bottom-0 left-[40%]'>
            <img src={more} alt="" className='w-28'/>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Connect