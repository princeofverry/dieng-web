import React from 'react'
import Img1 from '../assets/OurGallery/1.png'
import Img2 from '../assets/OurGallery/2.png'
import Img3 from '../assets/OurGallery/3.png'
import Img4 from '../assets/OurGallery/4.png'
import Img5 from '../assets/OurGallery/5.png'
import Img6 from '../assets/OurGallery/6.png'
import Img7 from '../assets/OurGallery/7.png'
import Img8 from '../assets/OurGallery/8.png'
import Img9 from '../assets/OurGallery/9.png'

const OurGallery = () => {
    return (
        <>
            <div className="bg-[#F9F9F9] flex flex-col justify-center items-center py-4 pb-16" data-aos="fade-up">
                <div>
                    <hr className="border-t-4 border-[#e16a44] md:w-24 w-16 mx-auto md:my-8 my-4" />
                    <h1 className="text-[#E16A44] md:text-4xl text-xl font-semibold">
                        OUR GALLERY
                    </h1>
                </div>
                <div class="grid sm:grid-cols-4 grid-cols-1 grid-rows-3 sm:gap-8 gap-4 sm:px-0 px-4 mt-8 justify-center items-center">
                    <div class="sm:col-span-1 sm:row-span-1 sm:block hidden"><img src={Img1} class="w-full" /></div>
                    <div class="sm:col-span-1 sm:row-span-2 sm:block hidden"><img src={Img4} class="w-full" /></div>
                    <div class="sm:col-span-2 sm:row-span-1 sm:block hidden"><img src={Img6} class="w-full" /></div>
                    <div class="sm:col-span-1 sm:row-span-1"><img src={Img2} class="w-full" /></div>
                    <div class="sm:col-span-1 sm:row-span-1"><img src={Img3} class="w-full" /></div>
                    <div class="sm:col-span-1 sm:row-span-1"><img src={Img5} class="w-full" /></div>
                    <div class="sm:col-span-1 sm:row-span-1"><img src={Img7} class="w-full" /></div>
                    <div class="sm:col-span-1 sm:row-span-1"><img src={Img8} class="w-full" /></div>
                    <div class="sm:col-span-2 sm:row-span-1"><img src={Img9} class="w-full" /></div>
                </div>

            </div>
        </>
    )
}

export default OurGallery