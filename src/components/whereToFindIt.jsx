import React from 'react'
import Boemi from '../assets/boemi.png'
import maknohan from '../assets/maknohan.png'

const WhereToFindIt = () => {
    return (
        <>
            <div className="mx-auto bg-white flex flex-col justify-center items-center py-4">
                <h2 className="text-3xl md:text-4xl font-semibold text-[#E16A44] mb-4 px-4 mt-4">Where to find it?</h2>
                <div className="bg-[#ECECEC] mx-8 mt-12 flex flex-col md:flex-row rounded overflow-hidden">
                    {/* Image Section */}
                    <div className="md:w-1/3 relative">
                        <div className="absolute top-0 left-0 w-full h-60"></div>
                        <img src={Boemi} alt="Boemi Dieng" className="w-full h-60 object-cover" />
                    </div>

                    {/* Text Content Section */}
                    <div className="md:w-2/3 md:ml-4 md:pr-4 relative">
                        <h3 className="text-xl md:text-3xl text-[#E16A44] md:text-left text-center pt-6 pl-2 font-semibold mb-2">Boemi Dieng</h3>
                        <p className="text-gray-600 text-justify px-4 md:px-2">Rumah makan dan pusat oleh-oleh khas Dieng Wonosobo termurah dan terlengkap yang menawarkan berbagai souvenir. Boemi Dieng juga memiliki pusat  melayani informasi shuttle bus.</p>
                        <div className="flex md:justify-start justify-center md:items-end items-center mb-4">
                            <a href="https://maps.app.goo.gl/MTmuAS8cufwuc8W16" target="_blank" rel="noopener noreferrer">
                                <button className="bg-[#E16A44] rounded-md text-white py-2 px-16 md:mt-8 mt-4">Maps</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>


            {/* gambar dikanan */}
            <div className="bg-[#ECECEC] mx-8 my-12 flex flex-col md:flex-row rounded overflow-hidden">

                {/* Text Content Section */}
                <div className="md:w-2/3 md:mr-4 md:pr-4 relative order-2 md:order-none">
                    <h3 className="text-xl md:text-3xl text-[#E16A44] pt-6 font-semibold mb-2 md:text-right text-center">MakNohan</h3>
                    <p className="text-gray-600 md:text-right text-justify px-4 md:px-0">Pusat oleh-oleh makanan khas Dieng Wonosobo yang menyediakan berbagai jenis oleh-oleh, mulai dari makanan, cemilan, baju, souvenir hingga kain khas dengan harga terjangkau dan kualitas terbaik.</p>
                    <div className="flex md:justify-end justify-center md:items-end items-center mb-4">
                        <a href="https://maps.app.goo.gl/hQcz9wNqfeY1KhVp9" target="_blank" rel="noopener noreferrer">
                            <button className="bg-[#E16A44] text-white rounded-md py-2 px-16 md:mt-8 mt-4">Maps</button>
                        </a>
                    </div>
                </div>

                {/* Image Section */}
                <div className="md:w-1/3 relative order-1 md:order-none">
                    <div className="absolute top-0 left-0 w-full h-60"></div>
                    <img src={maknohan} alt="MakNohan" className="w-full h-60 object-cover" />
                </div>
            </div>

        </>
    )
}

export default WhereToFindIt