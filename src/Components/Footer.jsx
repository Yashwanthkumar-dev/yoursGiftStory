import React from 'react'

const Footer = () => {
  return (
    <>
      <div className='bg-[#2A5D5D] py-6 selection:bg-[#B59454]'>
        <div className='mx-[1.5rem]'>
          <div>
            <h4 className='text-[#B59454]  font-playfair font-bold text-[22px] py-3 capitalize pt-5'>Our journey</h4>
          </div>
          <div>
            <p className='font-playfair text-white/80 font-medium text-[14px] leading-relaxed text-left'>YoursGiftStory is India’s premium destination for handcrafted personalized gifts. We specialize in turning your emotions into tangible treasures through custom wooden engravings, personalized photo frames, and luxury gift hampers. Our mission is to help you celebrate every chapter of your story with elegance and love.</p>
          </div>
        </div>

        {/* 
        social media icon want to insert in this code
        */}

        <div className='mx-[1.5rem] leading-relaxed'>
          <div className='py-3'>
            <h4 className='font-playfair font-bold text-[#B59454] text-[22px] capitalize'>stay updated</h4>
          </div>
          <div>
            <p className='font-playfair text-white/80 font-medium text-[14px] leading-relaxed text-left'>Subscribe to our newsletter for exclusive offers, gift ideas, and heartwarming stories.</p>
          </div>
          <div>
            <input type="email" className='my-4 w-68 py-1.5 rounded-3xl bg-white/20 placeholder:text-white/60 pl-4 placeholder:font-playfair outline-0 font-playfair text-white' placeholder='Your email address ' />
          </div>
          <div >
            <button className='text-white/90 capitalize font-playfair  w-68 py-1.5 rounded-3xl bg-[#B59454]
            outline-none font-bold'>subscribe</button>
          </div>
          <div>

          </div>
        </div>

        <div className='py-4 mx-5 text-white/15'>
          <hr />
        </div>

        <div className='mx-5 leading-relaxed'>
          <p className='text-[14px] font-playfair text-white/50 text-center'>&copy; 2026 YoursGiftStory. Crafting memories, one gift at a time
          </p>
        </div>
      </div>
    </>
  )
}

export default Footer