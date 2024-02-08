import React from 'react'
import DestinationDD from '../assets/DestinationDD.png'
import PenginapanDD from '../assets/PenginapanDD.png'
import FoodnShopDD from '../assets/FoodnShopDD.png'
import FestivalDD from '../assets/FestivalDD.png'

const DiscoverDieng = () => {
    return (
        <>
            <div className="bg-[#F9F9F9] flex flex-col justify-center items-center py-4 pb-16">
                <hr className="border-t-4 border-[#e16a44] md:w-24 w-16 mx-auto md:my-8 my-4" />
                <h1 className="text-[#E16A44] md:text-4xl text-xl font-semibold">
                    Discover Dieng
                </h1>
                <div>
                    <div className='flex flex-wrap gap-12 xl:px-8 px-4 justify-center items-center py-8'>
                        <div className="relative md:px-0 px-4 overflow-hidden">
                            <div className="relative group hover:scale-95 transition-all">
                                <img src={DestinationDD} className="w-full transition-transform duration-300 transform-gpu group-hover:rotate-2 filter brightness-50" alt="Destination Image" />
                                <h1 className="absolute inset-0 flex items-center justify-center text-white drop-shadow-2xl font-bold text-4xl pointer-events-none">DESTINATION</h1>
                            </div>
                        </div>
                        <div className="relative md:px-0 px-4 overflow-hidden">
                            <div className="relative group hover:scale-95 transition-all">
                                <img src={PenginapanDD} className="w-full transition-transform duration-300 transform-gpu group-hover:rotate-2 filter brightness-50" alt="Destination Image" />
                                <h1 className="absolute inset-0 flex items-center justify-center text-white drop-shadow-2xl font-bold text-4xl pointer-events-none">PENGINAPAN</h1>
                            </div>
                        </div>
                        <div className="relative md:px-0 px-4 overflow-hidden">
                            <div className="relative group hover:scale-95 transition-all">
                                <img src={FoodnShopDD} className="w-full transition-transform duration-300 transform-gpu group-hover:rotate-2 filter brightness-50" alt="Destination Image" />
                                <h1 className="absolute inset-0 flex items-center justify-center text-white drop-shadow-2xl font-bold text-4xl pointer-events-none">FOOD & SHOP</h1>
                            </div>
                        </div>
                        <div className="relative md:px-0 px-4 overflow-hidden">
                            <div className="relative group hover:scale-95 transition-all">
                                <img src={FestivalDD} className="w-full transition-transform duration-300 transform-gpu group-hover:rotate-2 filter brightness-50" alt="Destination Image" />
                                <h1 className="absolute inset-0 flex items-center justify-center text-white drop-shadow-2xl font-bold text-4xl pointer-events-none">FESTIVAL</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DiscoverDieng