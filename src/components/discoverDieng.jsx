import React from 'react'
import DestinationDD from '../assets/DestinationDD.png'
import PenginapanDD from '../assets/PenginapanDD.png'
import FoodnShopDD from '../assets/FoodnShopDD.png'
import FestivalDD from '../assets/FestivalDD.png'
import { Link } from 'react-router-dom';

const DiscoverDieng = () => {
    return (
        <>
            <div className="bg-[#F9F9F9] flex flex-col justify-center items-center py-4 pb-16" data-aos="fade-up">
                <hr className="border-t-4 border-[#e16a44] md:w-24 w-16 mx-auto md:my-8 my-4" />
                <h1 className="text-[#E16A44] md:text-4xl text-xl font-semibold">
                    DISCOVER DIENG
                </h1>
                <div>
                    <div className='flex flex-wrap gap-12 xl:px-8 px-4 justify-center items-center py-8'>
                        <div className="relative md:px-0 px-4 overflow-hidden">
                            <div className="relative group hover:scale-95 transition-all">
                            <Link to="/Destinasi">
                                <img src={DestinationDD} className="w-full transition-transform duration-300 transform-gpu group-hover:rotate-2 filter brightness-50" alt="Destination Image" />
                                <h1 className="absolute inset-0 flex items-center justify-center text-white drop-shadow-2xl font-bold text-4xl pointer-events-none">DESTINATION</h1>
                            </Link>
                            </div>
                        </div>
                        <div className="relative md:px-0 px-4 overflow-hidden">
                            <div className="relative group hover:scale-95 transition-all">
                            <Link to="/Penginapan">
                                <img src={PenginapanDD} className="w-full transition-transform duration-300 transform-gpu group-hover:-rotate-2 filter brightness-50" alt="Destination Image" />
                                <h1 className="absolute inset-0 flex items-center justify-center text-white drop-shadow-2xl font-bold text-4xl pointer-events-none">ACCOMODATION</h1>
                            </Link>
                            </div>
                        </div>
                        <div className="relative md:px-0 px-4 overflow-hidden">
                            <div className="relative group hover:scale-95 transition-all">
                            <Link to="/Merchinary">
                                <img src={FoodnShopDD} className="w-full transition-transform duration-300 transform-gpu group-hover:rotate-2 filter brightness-50" alt="Destination Image" />
                                <h1 className="absolute inset-0 flex items-center justify-center text-white drop-shadow-2xl font-bold text-4xl pointer-events-none">MERCHINARY</h1>
                            </Link>
                            </div>
                        </div>
                        <div className="relative md:px-0 px-4 overflow-hidden">
                            <div className="relative group hover:scale-95 transition-all">
                            <Link to="/Festival">
                                <img src={FestivalDD} className="w-full transition-transform duration-300 transform-gpu group-hover:-rotate-2 filter brightness-50" alt="Destination Image" />
                                <h1 className="absolute inset-0 flex items-center justify-center text-white drop-shadow-2xl font-bold text-4xl pointer-events-none">FESTIVAL</h1>
                            </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DiscoverDieng