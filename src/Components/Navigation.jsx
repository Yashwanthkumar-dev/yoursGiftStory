import React, { useState } from 'react'
import companyLogo from "../assets/company-logo.png"
import { Link } from 'react-router-dom';

const Navigation = () => {
    const [showNav, setShowNav] = useState(false);

    // Close menu function
    const closeMenu = () => setShowNav(false);

    return (
        <>
            {/* Header Section */}
            <nav className='flex items-center justify-between py-3 shadow sticky top-0 z-50 bg-white px-4 md:px-10'>
                <div className='flex items-center gap-2'>
                    <img src={companyLogo} alt="YoursGiftStory-Logo" className='w-12 rounded-full md:w-14' />
                    <h1 className='font-playfair font-medium md:text-xl text-[#2A5D5D]'>YoursGiftStory</h1>
                </div>

                {/* Hamburger Menu Icon */}
                <div 
                    className='cursor-pointer space-y-1.5 z-50' 
                    onClick={() => setShowNav(!showNav)}
                >
                    <div className={`w-6 h-0.5 bg-green-600 transition-all ${showNav ? 'rotate-45 translate-y-2' : ''}`}></div>
                    <div className={`w-4 h-0.5 bg-green-600 transition-all ${showNav ? 'opacity-0' : ''}`}></div>
                    <div className={`w-6 h-0.5 bg-green-600 transition-all ${showNav ? '-rotate-45 -translate-y-2' : ''}`}></div>
                </div>
            </nav>

            {/* DARK OVERLAY: Idhu thaan full screen click-ah handle pannum */}
            {showNav && (
                <div 
                    className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 transition-opacity"
                    onClick={closeMenu}
                ></div>
            )}

            {/* NAVIGATION MENU */}
            <div className={`fixed top-0 right-0 h-full w-[70%] max-w-[300px] bg-white z-40 shadow-2xl transition-transform duration-500 ease-in-out ${showNav ? 'translate-x-0' : 'translate-x-full'}`}>
                <ul className='flex flex-col gap-y-6 pt-24 px-8 capitalize font-playfair text-xl text-[#2A5D5D]'>
                    <Link to="/" onClick={closeMenu} className='hover:text-[#B59454] transition-colors'>home</Link>
                    <Link to="/gallery" onClick={closeMenu} className='hover:text-[#B59454] transition-colors'>Gift gallery</Link>
                    <Link to="/about" onClick={closeMenu} className='hover:text-[#B59454] transition-colors'>Our journey</Link>
                    <Link to="/contact" onClick={closeMenu} className='hover:text-[#B59454] transition-colors'>contact</Link>
                </ul>
            </div>
        </>
    )
}

export default Navigation