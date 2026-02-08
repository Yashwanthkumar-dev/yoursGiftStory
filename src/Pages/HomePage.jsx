import React from 'react'
import WhyChooseUs from '../Components/WhyChooseUs';
import CategoryCard from '../Components/CategoryCard';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Testimonial from '../Components/Testimonial';
const HomePage = () => {
    const phoneNumber = "918148035717";
    const message = "Hi YoursGiftStory! I want to personalize a gift. "

    const whatsAppLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    return (
        <>
            {/* hero section */}
            <motion.div
                initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.2, ease: 'easeInOut', delay: '0.48' }}
                className='w-screen flex flex-col items-center justify-center px-4 py-54 bg-linear-to-r from-[#F5FAFA] to-green-50'>

                <div
                    className='text-center flex flex-col items-center -mt-12'>

                    <h1 className='font-playfair text-[26px] font-bold leading-tight text-[#2A5D5D]'>
                        Every Gift Tells a Story.
                    </h1>

                    <span
                        className='text-[#B59454] font-playfair font-semibold text-[20px] mt-1 italic'>
                        Let’s write yours
                    </span>

                    <p className='font-poppins text-[14px] mt-4 text-gray-500 leading-relaxed mx-auto'>
                        Don't just give a gift, share a memory. <br />
                        Personalized treasures for your favorite people.
                    </p>

                </div>

                <motion.div initial={{opacity:0 , y:-299}} animate={{opacity:1 , y:0}} transition={{duration:1 , ease:'easeInOut' , delay:1.1}} 
                className='flex flex-col space-y-3 mt-4'>
                    {/* <button className='font-playfair capitalize bg-[#B59454] px-12 py-2 rounded-lg text-white text-[16px] font-medium'><a href={whatsAppLink} target='_blank' rel='noopener noreferrer'>Personalized now</a></button> */}
                    <button className=' outline-none font-playfair capitalize bg-[#B59454] px-12 py-2 rounded-lg text-white text-[16px] font-medium'>view stories</button>
                </motion.div>
            </motion.div>
            {/* hero section */}

            {/* why us section*/}
            <div>
                <WhyChooseUs />
            </div>
            {/* why us section*/}

            {/* category section */}
            <div className='bg-[#2a5d5d0a] py-7'>
                <CategoryCard />
            </div>
            {/* category section */}

            {/* what app image */}
            <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className='fixed bottom-4 right-4  bg-green-500 text-white rounded-full p-2 shadow-md'>
                <a href={whatsAppLink} rel='nooperer noreferrer' target='_blank'><FaWhatsapp size={30} /></a>
            </motion.div>
            {/* what app image */}

            {/* testtimonial */}
            <div className='py-8'>
                <Testimonial />
            </div>
            {/* testtimonial */}
        </>
    )
}

export default HomePage