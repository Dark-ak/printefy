import plant from "../assets/plant.svg"
import { motion } from "framer-motion"



const Profit = () => {


    const parentVariants = {
        hidden: { opacity: 0, x: "" },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 1.5,
                when: "beforeChildren",
                staggerChildren: 0.3,
                delayChildren: 0.3

            }
        }
    }

    const childVariants = {
        hidden: { opacity: 0, y: 200 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    }

    return (
        <div className='px-4 py-20 md:px-56'>
            <div className="flex">
                <motion.div variants={parentVariants} initial="hidden" viewport={{once:true}} whileInView="visible"  className='bg-[#202a41] text-white px-4 py-14 rounded-3xl flex overflow-hidden flex-col gap-4 md:w-[700px] md:px-24 md:h-[700px] md:gap-10 md:py-20 md:pb-20'>
                    <motion.div variants={childVariants} className="flex  flex-col gap-4 md:gap-10">
                        <p className='text-4xl font-bold '>Make Money, Risk-Free</p>
                        <p className='font-medium'>You pay for fullfilment only when you make a sale</p>
                        <div className='bg-[#041530] py-8 rounded-xl px-6 flex flex-col gap-6'>
                            <div className='flex justify-between'>
                                <p className='font-medium'>You sell a t shirt</p>
                                <p className='font-medium'>$30</p>
                            </div>

                            <div className='flex justify-between'>
                                <p className='font-medium'>You sell a t shirt</p>
                                <p className='font-medium'>$12</p>
                            </div>

                            <div className='h-[1px] bg-blue-200'></div>

                            <div className='flex justify-between'>
                                <p className='text-xl font-bold text-green-500'>Your Profit</p>
                                <p className='text-xl font-bold text-green-500'>$18</p>
                            </div>
                        </div>

                        <div className='flex flex-col items-start gap-6'>
                            <button className='bg-blue-500 font-medium px-5 py-2 rounded-md'>Start Selling</button>
                            <p className='font-medium'>100% Free to use · 900+ Products · Largest print network</p>
                        </div>
                    </motion.div>
                </motion.div>
                <div className="hidden lg:block z-30">
                    <img src={plant} alt="" className="w-[700px] h-[700px]" />
                </div>
            </div>
        </div>
    )
}

export default Profit