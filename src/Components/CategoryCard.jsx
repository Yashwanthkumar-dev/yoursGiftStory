import React from 'react'

const CategoryCard = (props) => {
    const categoryData = [
        {
            id: 1,
            title: "Gift Box",
            description: "gift box description",
            alt: "YoursGiftStory-Gift-Box"
        },
        {
            id: 2,
            title: "Hoops Embroidery",
            description: "Hoops Embroidery description",
            alt: "YoursGiftStory-Hoops-Embroidery",
        },
        {
            id: 3,
            title: "Resin Art",
            description: "Resin Art descritpion",
            alt: "YoursGiftStory-Resin-Art"
        },
        {
            id: 4,
            title: "Paper Flower Bouquet",
            description: "paper Flower Bouquet description",
            alt: "YoursGiftStory-Paper-Flower-Bouquet"
        },
        {
            id: 5,
            title: "Personalised letters",
            description: "personalised letters description",
            alt: "YoursGiftStory-personalised-letters"
        }]
    return (
        <>
            <div className='border p-4'>
                {
                    categoryData && categoryData.map((cat) => (
                        <div key={cat.ifd} className='border flex flex-col items-center p-2 my-4'>
                            <h4 className='font-playfair'>{cat.title}</h4>
                            <p>{cat.description}</p>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default CategoryCard