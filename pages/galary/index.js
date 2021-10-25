import React from 'react'
import Image from 'next/image'
import image1 from '../../public/1.jpg'
import image2 from '../../public/2.jpg'
import image3 from '../../public/3.jpg'
import image4 from '../../public/4.jpg'
import image5 from '../../public/5.jpg'

const galary =[
    {
        title:"image 1",
        image:image1,
    },
    {
        title:"image 2",
        image:image2,
    },
    {
        title:"image 3",
        image:image3,
    },
    {
        title:"image 4",
        image:image4,
    },
    {
        title:"image 5",
        image:image5,
    },
]

const Garary = () => {
    return (
        <div className="container">
           
                
                    <div  style={{width:"100%",height:"auto",position:"relative"}}>
                        <Image src={image1} layout='fill' alt="image" objectFit="cover"  />
                        
                       

                    </div>
               
            
            
        </div>
    )
}

export default Garary
