import React from "react";
import { Heart, Star, Truck } from "lucide-react";
import { motion } from "framer-motion";
const WhyChooseUs = () => {
  const whyusUs = [
    {
      title: "Handcrafted with love",
      descritpion:
        "Every custom gift is carefully designed and handcrafted by skilled Indian artisans. We ensure a personal touch in every unique treasure we create.",
      icon: <Heart />,
    },
    {
      title: "Express Delivery",
      descritpion:
        "Need a last-minute personalized gift? Our express shipping ensures your heartfelt surprises reach their destination across India right on time.",
      icon: <Truck />,
    },
    {
      title: "Premium Quality",
      descritpion:
        "We use only high-grade materials and meticulous quality control to ensure your personalized keepsakes stay beautiful for a lifetime.",
      icon: <Star />,
    },
  ];
  return (
    <>
      {/* why us */}
      <div className="pb-12 overflow-hidden mx-10 lg:mx-1 ">
        {/* animation */}

        <div>
          <motion.div
            animate={{
              y: [1, -20, 10],
              opacity: [0.3, 0, 0.3],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="p-6 rounded-full w-fit relative bg-primary"
          ></motion.div>


          {/* square */}

           <motion.div
            animate={{
              y: [1, -20, 10],
              opacity: [0.3, 0, 0.3],
              scale: [1, 1.1, 1],
              rotate:360
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="p-6 rounded-lg w-fit relative bg-primary left-450 top-150"
          ></motion.div>
        </div>

        <div>
          <motion.h2
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="text-center mt-8 font-playfair text-primary font-semibold text-[25px] capitalize w-48 tracking-wide mx-auto md:mt-10 lg:w-full lg:mb-10 "
          >
            Why choose YoursGiftStory
          </motion.h2>
        </div>
        <div className=" space-y-12 md:flex md:space-x-3  lg:flex lg:ml-3 xl:flex xl:px-65 xl:space-x-9  overflow-hidden">
          {whyusUs.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="shadow-md px-6 py-4 mt-3  rounded-lg border-gray-200   overflow-hidden md:h-100 md:w-70 md:mt-10 md:border-gray-200 md:border lg:h-90 lg:px-8 lg:w-80 xl:border-gray-200 xl:w-100 "
            >
              {/* icon  */}
              <div className="text-secondary py-3 bg-[#b5955418] mx-auto w-12 flex justify-center rounded-full md:w-18 lg:my-2">
                {card.icon}
              </div>

              {/* title */}
              <h3 className="font-medium text-xl text-teal-700 capitalize tracking-wide text-center my-2 md:text-[19px] lg:my-6 xl:text-xl">
                {card.title}
              </h3>

              {/* description */}
              <p className="font-playfair text-gray-600 leading-relaxed text-[1rem]  text-justify md:text-lg md:h-50 lg:my-4 lg:text-center xl:text-xl xl:text-center">
                {card.descritpion}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* why us */}
    </>
  );
};

export default WhyChooseUs;
