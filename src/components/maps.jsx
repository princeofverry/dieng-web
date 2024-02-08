import React from 'react'

const Maps = () => {
    return (
        <>
            <div className="h-fit w-full md:py-20 py-8 bg-[#F9F9F9]">
                {/* maps */}
                <div className="flex md:flex-row flex-col items-center justify-center gap-20">
                    <div className="flex flex-col md:items-start items-center md:w-1/4" data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom"
                        data-aos-duration="1000">
                        <h1 className="text-[#e16a44] md:text-4xl text-2xl font-medium mt-4">
                            <span className="border-t-4 border-[#e16a44] inline ">
                                DIENG
                            </span>
                        </h1>
                        {/* lorem 90 kata */}
                        <p className='text-black sm:text-base text-sm sm:text-balance text-justify mt-4 md:px-0 px-4 md:pt-8 pt-0 place-items-baseline' >
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil iusto rerum vel minus perferendis corporis dicta nostrum ratione. Fugit nihil quibusdam laudantium iste reprehenderit dolor excepturi fugiat tempora quam cupiditate iure neque, ipsum expedita id minima molestiae delectus atque eligendi dolores. Soluta quos, nam in corrupti odio, vero obcaecati quo autem animi vitae praesentium non omnis iure commodi blanditiis delectus? At libero officia optio cupiditate culpa facere dignissimos incidunt numquam quibusdam eum minus ipsam architecto praesentium neque repellat, quasi alias est quae omnis aliquid. Dolorum vero odio tempore cum nulla?
                        </p>
                    </div>
                    <iframe
                        data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom"
                        data-aos-duration="1000"
                        src="https://maps.google.com/maps?q=dieng&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
                        width="600"
                        height="450"
                        frameBorder="0"
                        className='rounded-2xl md:w-1/2 w-screen md:px-0 px-4'
                        style={{ border: 0 }}
                        allowFullScreen=""
                        aria-hidden="false"
                        tabIndex="0"
                    />
                </div>
            </div>
        </>
    )
}

export default Maps

