    import { div } from 'framer-motion/client'
    import React from 'react'

    const Testimonial = () => {
        const testtimonialData = [
            {
                description: "First of all thank you so much for taking my order in last minute 🙏 💕 and the packing was so good and thank you for your responds and the efforts and patience you have 💗 i'm total happy with your service because you have handle this last min order very well and it's good job and I'm so so happy with this ❤️ wishing you good luck and more order to you in future 😊 best wishes for you to grow more ✨😁 Thank you so much!!",
                rating: "⭐⭐⭐⭐"
            },
            {
                description: "Your incredible skill and attention to detail are truly breathtaking. This gift is a masterpiece!!❤️ The passion and creatively you pour into your creations are evident, and I am so impressed 😍 I'm in you've talent and the beautifull gift you've crafted 🫶 Thank uhh chooomuch💕💕",
                rating: "⭐⭐⭐⭐"
            }, {
                description: "Thank you it's was amazing frame ❤️ unexcepted one thank yo sooooooooooooo muchhh 🤗. Thank you for accepting my order and made it as a wonderful one. Really too good and nice ma.Thank you it's was amazing frame ❤️ unexpected one thank you sooooo much 🤗",
                rating: "⭐⭐⭐"
            },
            {
                description: "Sowndaryaaa. She loved the gift, especially sunflower bouquet 💐 💛, Not only she whole family loved it, Thank you much 💯 I wish you reach more highsssssssss",
                rating: "⭐⭐"
            }

        ]

        return (
            <>
                <div className='text-center font-playfair font-semibold text-[22px] text-[#2A5D5D] capitalize tracking-wide'>
                    <h4>customer Love</h4>
                </div>
                {
                    testtimonialData && testtimonialData.map((review, index) => (
                        <div key={index} className='mx-4 p-4 rounded-xl shadow-lg font-playfair  mt-7 leading-relaxed text-justify'>
                            <i>{review.rating}⭐</i>
                            <p className='font-playfair font-medium text-gray-500'>" {review.description} "</p>
                        </div>
                    ))
                }
            </>
        )
    }

    export default Testimonial