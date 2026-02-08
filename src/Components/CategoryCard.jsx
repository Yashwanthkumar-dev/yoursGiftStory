import flower_boquet from "../assets/Flower-boquet.jpeg"
import Gift_Box from "../assets/Gift_Box.jpeg"
import Hoop_wedding from "../assets/Hoop-wedding.jpeg"
// import photo_box from"../assets/photo-box.jpeg"
import resin_art from "../assets/resin_art.jpeg"
import { FaArrowRightLong } from "react-icons/fa6"
import { motion } from "framer-motion"
const CategoryCard = () => {
    const categoryData = [
        {
            id: 1,
            title: "Gift Box",
            description: "Surprise your loved ones with our premium personalized Gift Boxes. Curated with love for birthdays, anniversaries, and special moments.",
            alt: "YoursGiftStory-Custom-Personalized-Gift-Box",
            image: Gift_Box
        },
        {
            id: 2,
            title: "Hoops Embroidery",
            description: "Beautifully handcrafted Embroidery Hoops to preserve your memories. Perfect personalized wall decor and unique wedding keepsakes.",
            alt: "YoursGiftStory-Hoops-Embroidery",
            image: Hoop_wedding
        },
        {
            id: 3,
            title: "Resin Art",
            description: "Exquisite Resin Art pieces from custom keychains to preservation frames. Turn your special flowers and memories into timeless art.",
            alt: "YoursGiftStory-Resin-Art",
            image: resin_art
        },
        {
            id: 4,
            title: "Paper Flower Bouquet",
            description: "Everlasting Paper Flower Bouquets handcrafted with precision. A unique, eco-friendly gift that stays fresh forever.",
            alt: "YoursGiftStory-Paper-Flower-Bouquet",
            image: flower_boquet
        },
    ]
    return (
        <>
            <div>
                <h5 className='font-playfair text-center font-extrabold capitalize text-[#2A5D5D] text-[26px]'>Shop by story</h5>
            </div>
            <div className='p-4 grid grid-cols gap-2'>
                {
                    categoryData && categoryData.map((cat) => (
                        <motion.div
                            initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: 'easeInOut' }}
                            key={cat.ifd} className=' my-4 rounded-lg shadow-lg pb-4 leading-relaxed bg-white overflow-hidden group'>
                            <img
                                src={cat.image} alt={cat.alt} className="w-full rounded-t-2xl  h-80 transition-transform duration-500 group-hover:scale-110" />
                            <h4 className='font-playfair text-[18px] mt-4 font-semibold tracking-wide text-[#2A5D5D] ml-3 '>{cat.title}</h4>
                            <p className='capitalize font-playfair text-sm tracking-wide text-[16px] mx-3 text-justify text-gray-500 leading-relaxed'>{cat.description}</p>
                            <div className="flex items-center gap-x-3 font-playfair text-[#B59454] "><a href="#" className="font-bold capitalize mt-2 ml-3">view collection </a>
                                <i><FaArrowRightLong size={16} className="mt-3 group-hover:translate-x-2 transition ease-in-out duration:300" /></i></div>

                        </motion.div>
                    ))
                }
            </div>
        </>
    )
}

export default CategoryCard