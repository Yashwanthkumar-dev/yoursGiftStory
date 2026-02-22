import React from "react";
import WhyChooseUs from "../Components/WhyChooseUs";
import CategoryCard from "../Components/CategoryCard";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import Testimonial from "../Components/Testimonial";
import bannerImage1 from "../assets/banner_image_1.jpeg";
import bannerImage2 from "../assets/banner_image_2.jpeg";
import bannerImage3 from "../assets/banner_image_3.jpeg";
import bannerImage4 from "../assets/banner_image_4.jpeg";
import {Link} from "react-router-dom";
const HomePage = () => {
  const phoneNumber = "918148035717";
  const message = "Hi YoursGiftStory! I want to personalize a gift. ";

  const whatsAppLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const image = [
    {
      Alter: "banner-image-1",
      pic: bannerImage1,
      className: " rounded-lg shadow-xl absolute top-30 right-70 lg:right-118 hover:shadow-2xl duration-600 transition",
    },
    {
      Alter: "banner-image-2",
      pic: bannerImage2,
      className: " rounded-lg shadow-lg absolute top-77 right-22 lg:right-43 lg:top-100 hover:shadow-2xl duration-600 transition",
    },
    {
      Alter: "banner-image-3",
      pic: bannerImage3,
      className: " rounded-lg shadow-lg absolute top-20 right-23 lg:right-43 hover:shadow-2xl duration-600 transition",
    },
    {
      Alter: "banner-image-4",
      pic: bannerImage4,
      className: " rounded-lg shadow-lg absolute top-87 right-70 lg:right-126 lg:top-119 hover:shadow-2xl duration-600 transition",
    },
  ];
  return (
    <>
      {/* hero section */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeInOut", delay: "0.48" }}
        className="w-full flex items-center justify-center px-4 py-54 bg-linear-to-r from-[#F5FAFA] to-green-50 relative overflow-x-hidden" 
      >
        {/* animation part */}
        <div className="hidden lg:inline-block">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="border-3 border-secondary/10 p-6 rounded-full absolute top-40 left-30"
          ></motion.div>

          <motion.div
            animate={{ y: [0, -10, 0], rotate:360 }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
            className=" p-6 rounded-lg absolute top-100 left-50 bg-secondary/20"
          ></motion.div>

          <motion.div
            animate={{ x: [0, -20, 0],y:[0,20,0], rotate:360 }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
            className=" p-6 rounded-lg absolute top-30 right-20 border-secondary/60 border-3"
          ></motion.div>

          <motion.div
            animate={{ x: [0, -20, 40,0],y:[0,20,0,0], rotate:360 }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
            className=" p-8 absolute top-110 right-130 rounded-full bg-secondary/20 "
          ></motion.div>
        </div>


        {/* left part */}
        <div className="text-center flex flex-col items-center -mt-12 md:text-left md:w-full md:ml-10 md:mt-5 ">
          <h1 className="font-playfair text-[26px] font-bold leading-tight text-primary sm:text-2xl md:text-3xl md:w-full md:-mt-9 md:ml-2 lg:text-5xl lg:ml-20 ">
            Every Gift Tells a Story.
          </h1>

          <span className="text-secondary font-playfair font-semibold text-[20px] mt-1 italic sm:text-2xl md:text-3xl md:text-left md:w-full md:mt-7 md:ml-2 md:italic lg:ml-20 lg:text-4xl">
            Let’s write yours
          </span>

          <p
            className="font-poppins text-[14px] mt-4 text-gray-500 leading-relaxed mx-auto
                    sm:text-xl md:text-left md:w-125 md:text-xl md:ml-2 md:mt-7 lg:ml-10 lg:text-3xl" 
          >
            Don't just give a gift, share a memory. <br className="md:hidden" />
            Personalized treasures for your favorite people.
          </p>
          <motion.div
            initial={{ opacity: 0, y: -299 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 1.1 }}
            className="flex mt-6 md:justify-start md:w-full md:ml-5 md:mt-10 lg:ml-20 "
          >
            <Link to="/gift-gallery"
            className=" outline-none font-playfair capitalize bg-secondary px-12 py-2 rounded-lg text-white text-[16px] font-medium sm:text-lg lg:text-xl lg:py-4 lg:rounded-2xl cursor-pointer hover:bg-secondary/80">
              view stories
            </Link>
          </motion.div>
        </div>
        {/* right part */}
        <div className=" hidden lg:inline-block  lg:border">
          {image &&
            image.map((img, index) => {
              return (
                <div className={`${img.className} overflow-hidden `} key={index}>
                  <img
                    src={img.pic}
                    alt={img.Alter}
                    className="h-70 w-65  rounded-lg hover:scale-110 transition duration-600 "
                  />
                </div>
              );
            })}
        </div>
      </motion.div>
      {/* hero section */}

      {/* why us section*/}
      <div>
        <WhyChooseUs />
      </div>
      {/* why us section*/}

      {/* category section */}
      <div className="bg-[#2a5d5d0a] py-7">
        <CategoryCard />
      </div>
      {/* category section */}

      {/* what app image */}
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        className="fixed bottom-4 right-4  bg-green-500 text-white rounded-full p-2 shadow-md"
      >
        <a href={whatsAppLink} rel="nooperer noreferrer" target="_blank">
          <FaWhatsapp size={30} />
        </a>
      </motion.div>
      {/* what app image */}

      {/* testtimonial */}
      <div className="py-8">
        <Testimonial />
      </div>
      {/* testtimonial */}
    </>
  );
};

export default HomePage;
