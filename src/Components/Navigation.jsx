import React, { useState } from "react";
import companyLogo from "../assets/company-logo.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../Components/Navigation.css"
const Navigation = () => {
  const [showNav, setShowNav] = useState(false);

  // Close menu function
  const closeMenu = () => setShowNav(false);

  return (
    <>
      {/* Header Section */}
      <nav className="flex items-center justify-between py-3 shadow sticky top-0 z-50 bg-white px-4 md:px-10 lg:px-25 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="flex items-center gap-2"
        >
          <img
            src={companyLogo}
            alt="YoursGiftStory-Logo"
            className="w-12 rounded-full md:w-14"
          />
          <h1 className="font-playfair font-medium md:text-xl text-primary">
            YoursGiftStory
          </h1>
        </motion.div>
        {/* large screen menu */}
        <ul className=" items-center  capitalize  px-6 gap-x-8 hidden lg:flex">
          <Link to="/" className="font-playfair text-primary text-xl nav">home</Link>
          <Link to="/gift-gallery" className="font-playfair text-primary text-xl nav">
            gift gallery
          </Link>
          <li className="font-playfair text-primary text-xl nav">
            Our journey
          </li>
          <li className="font-playfair text-primary text-xl nav">contact</li>
        </ul>
        {/* Hamburger Menu Icon */}
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="cursor-pointer space-y-1.5 z-50 lg:hidden"
          onClick={() => setShowNav(!showNav)}
        >
          <div
            className={`w-6 h-0.5 bg-green-600 transition-all ${showNav ? "rotate-45 translate-y-2" : ""}`}
          ></div>
          <div
            className={`w-4 h-0.5 bg-green-600 transition-all ${showNav ? "opacity-0" : ""}`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-green-600 transition-all ${showNav ? "-rotate-45 -translate-y-2" : ""}`}
          ></div>
        </motion.div>
      </nav>

      {/* DARK OVERLAY: Idhu thaan full screen click-ah handle pannum */}
      {showNav && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 transition-opacity"
          onClick={closeMenu}
        ></div>
      )}

      {/* mobile amd small screen menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[70%] max-w-75 bg-white z-40 shadow-2xl transition-transform duration-500 ease-in-out ${showNav ? "translate-x-0" : "translate-x-full"}`}
      >
        <ul className="flex flex-col gap-y-6 pt-24 px-8 capitalize font-playfair text-xl text-primary">
          <Link
            to="/"
            onClick={closeMenu}
            className="hover:text-[#B59454] transition-colors"
          >
            home
          </Link>
          <Link
            to="/gift-gallery"
            onClick={closeMenu}
            className="hover:text-secondary transition-colors"
          >
            Gift gallery
          </Link>
          <Link
            to="/about"
            onClick={closeMenu}
            className="hover:text-secondary transition-colors"
          >
            Our journey
          </Link>
          <Link
            to="/contact"
            onClick={closeMenu}
            className="hover:text-secondary transition-colors"
          >
            contact
          </Link>
        </ul>
      </div>

      {/* mobile amd small screen menu */}
    </>
  );
};

export default Navigation;
