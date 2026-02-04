import React from 'react'
import WhyChooseUs from '../Components/WhyChooseUs';

const HomePage = () => {
    const phoneNumber = "918148035717";
    const message = "Hi YoursGiftStory! I want to personalize a gift. "

    const whatsAppLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    return (
        <>
            {/* hero section */}
            <div className='w-screen flex flex-col items-center justify-center px-4 py-48 bg-linear-to-r from-[#F5FAFA] to-green-50 '>

                <div className='text-center flex flex-col items-center -mt-12'>

                    <h1 className='font-playfair text-[26px] font-bold leading-tight text-[#2A5D5D]'>
                        Every Gift Tells a Story.
                    </h1>

                    <span className='text-[#B59454] font-playfair font-semibold text-[20px] mt-1 italic'>
                        Let’s write yours
                    </span>

                    <p className='font-poppins text-[14px] mt-4 text-gray-500 leading-relaxed mx-auto'>
                        Don't just give a gift, share a memory. <br />
                        Personalized treasures for your favorite people.
                    </p>

                </div>

                <div className='flex flex-col space-y-3 mt-4'>
                    <button className='font-playfair capitalize bg-[#B59454] px-12 py-2 rounded-lg text-white text-[16px] font-medium'><a href={whatsAppLink} target='_blank' rel='noopener noreferrer'>Personalized now</a></button>
                    <button className='font-playfair capitalize bg-[#2A5D5D] px-12 py-2 rounded-lg text-white text-[16px] font-medium'>view stories</button>
                </div>
            </div>
            {/* hero section */}
            <div>
                <WhyChooseUs />
            </div>

        </>
    )
}

export default HomePage