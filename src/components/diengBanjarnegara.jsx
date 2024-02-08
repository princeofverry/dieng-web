import React from 'react'
import DiengBanjarnegaraPict from '../assets/DiengBanjarnegara.png'
// import people from "../assets/people.png"
// import flag from '../assets/flag.png'
// import routing from '../assets/routing.png'
// import Couting from './couting'

const DiengBanjarnegara = () => {
    return (
        <>
            <div className="h-fit w-full md:py-20 py-4 bg-[#F9F9F9]">
                {/* maps */}
                <div className="flex lg:flex-row flex-col items-center justify-center gap-20">
                    <img src={DiengBanjarnegaraPict} className="md:px-0 px-4 rounded-xl" data-aos="fade-up" data-aos-anchor-placement="top-bottom"
                        data-aos-duration="1000" />
                    <div className="flex flex-col md:items-start items-center lg:w-1/3" data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom"
                        data-aos-duration="1000">
                        <h1 className="text-[#e16a44] md:text-4xl text-2xl font-medium mt-4 mx-auto lg:mx-0">
                            <span className="border-t-4 border-[#e16a44] inline ">
                                DIENG
                            </span>
                        </h1>
                        {/* lorem 90 kata */}
                        <p className='text-black sm:text-base text-sm sm:text-balance text-justify mt-4 lg:px-0 px-4 md:pt-8 pt-0' >
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil iusto rerum vel minus perferendis corporis dicta nostrum ratione. Fugit nihil quibusdam laudantium iste reprehenderit dolor excepturi fugiat tempora quam cupiditate iure neque, ipsum expedita id minima molestiae delectus atque eligendi dolores. Soluta quos, nam in corrupti odio, vero obcaecati quo autem animi vitae praesentium non omnis iure commodi blanditiis delectus? At libero officia optio cupiditate culpa facere dignissimos incidunt numquam quibusdam eum minus ipsam architecto praesentium neque repellat, quasi alias est quae omnis aliquid. Dolorum vero odio tempore cum nulla?
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DiengBanjarnegara

