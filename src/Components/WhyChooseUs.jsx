import React from 'react'
import { Heart, Star, Truck } from 'lucide-react';
import { motion } from 'framer-motion';
const WhyChooseUs = () => {

    const whyusUs = [
        {
            title: "Handcrafted with love",
            descritpion: "Every custom gift is carefully designed and handcrafted by skilled Indian artisans. We ensure a personal touch in every unique treasure we create.",
            icon: <Heart />
        },
        {
            title: "Express Delivery",
            descritpion: "Need a last-minute personalized gift? Our express shipping ensures your heartfelt surprises reach their destination across India right on time.",
            icon: <Truck />
        },
        {
            title: "Premium Quality",
            descritpion: "We use only high-grade materials and meticulous quality control to ensure your personalized keepsakes stay beautiful for a lifetime.",
            icon: <Star />

        }
    ]
    return (
        <>

            {/* why us */}
            <div

                className='pb-12 overflow-hidden mx-18'>
                <div>
                    <motion.h2
                        initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1, ease: 'easeInOut' }}
                        className='text-center mt-8 font-playfair text-[#2A5D5D] font-semibold text-[25px] capitalize w-[12rem] tracking-wide mx-auto'>Why choose YoursGiftStory</motion.h2>
                </div>
                <div className='p-4 space-y-12 md:border md:flex md:items-center '>
                    {
                        whyusUs.map((card, index) => (
                            <motion.div key={index}
                                initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: 'easeInOut' }}
                                className='text-center p-4 rounded-lg bg-white font-playfair shadow-md shadow-gray-300 mt-5 space-y-3 hover:shadow-lg transition duration-500 h-50'>
                                <div className='text-[#B59454] py-3 bg-[#b5955418] mx-auto w-12 flex justify-center rounded-full'>{card.icon}</div>
                                <h3 className='font-medium text-xl text-teal-700 capitalize tracking-wide'>{card.title}</h3>
                                <p className='font-playfair text-gray-600 leading-relaxed text-[1rem]'>{card.descritpion}</p>
                            </motion.div>
                        ))
                    }
                </div>


            </div>

            {/* why us */}
        </>
    )
}

export default WhyChooseUs