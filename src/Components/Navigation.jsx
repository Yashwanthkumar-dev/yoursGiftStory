import React, { useState } from 'react'
import companyLogo from "../assets/company-logo.png"
import { Link } from 'react-router-dom';
const Navigation = () => {
    const [showNav, setShowNav] = useState(false);


    return (
        <>

            <div className='flex items-center justify-between py-3 shadow sticky top-0 z-30 bg-white relative'>
                <div className='flex ml-3 items-center md:ml-5'>
                    <img src={companyLogo} alt="yoursGiftStory-company-logo" className='w-12 rounded-full md:w-14' />
                    <h1 className='font-playfair font-medium md:text-lg'>YoursGiftStory</h1></div>

                <div className=' mr-8 space-y-1 md:mr-10' onClick={() => {
                    setShowNav(!showNav)
                }}>
                    <div className='w-5 border border-green-600'></div>
                    <div className='w-3.5 border border-green-600'></div>
                    <div className='w-5 border border-green-600'></div>
                </div>
            </div>

            {/* navigation contents */}
            <ul className={`flex flex-col items-end w-fit absolute -right-1 gap-y-4 capitalize font-playfair text-lg px-3  transition duration-600 bg-white shadow rounded-sm py-7 ' ${showNav ? 'opacity-100 translate-y-0 ' : 'opacity-0 -translate-y-10 pointer-events-none'}`}>
                <Link to="/" className='w-full px-7 py-2 hover:bg-green-100 rounded-lg transition-all duration-500'>home</Link>
                <li className='w-full px-7 py-2 hover:bg-green-100 rounded-lg transition-all duration-500'>Gift gallery</li>
                <li className='w-full px-7 py-2 hover:bg-green-100 rounded-lg transition-all duration-500'>Our journey</li>
                <li className='w-full px-7 py-2 hover:bg-green-100 rounded-lg transition-all duration-500'>contact</li>
            </ul>


            {/* navigation contents */}


        </>
    )
}

export default Navigation   