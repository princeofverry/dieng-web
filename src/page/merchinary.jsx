import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import merchinaryCover from '../assets/merchinaryCover.png';
import Boemi from '../assets/boemi.png'
import maknohan from '../assets/maknohan.png'
import FoodMerchinary from '../components/foodMerchinary';
import HaveSouvenirs from '../components/HaveSouvenirs';


const Merchinary = () => {

  return (
    <div className="">
      {/* Hero section */}
      <div className="h-screen w-full relative">
        <img src={merchinaryCover} alt="Background" className="h-screen w-full object-cover" />

        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className='sm:text-7xl text-4xl text-center text-white font-bold' data-aos="zoom-in" data-aos-anchor-placement="bottom-bottom" data-aos-duration="700">
            Taste of Dieng
          </h1>
        </div>
      </div>

      {/* Foods section ada di components */}
      <FoodMerchinary />

      {/* suvenir ada di components*/}
      <HaveSouvenirs />

      {/* dimanaa*/}
      {/* gambar dikiri */}
      <div className="mx-auto bg-white flex flex-col justify-center items-center py-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#E16A44] mb-4 px-4 mt-4">Where to find it?</h2>
        <div className="bg-[#F9F9F9] mx-8 mt-12 flex flex-col md:flex-row rounded overflow-hidden">
          {/* Image Section */}
          <div className="md:w-1/3 relative">
            <Link to="/Boemi">
              <div className="absolute top-0 left-0 w-full h-60"></div>
              <img src={Boemi} alt="Boemi Dieng" className="w-full h-60 object-cover" />
            </Link>
          </div>

          {/* Text Content Section */}
          <div className="md:w-2/3 md:ml-4 md:pl-4 relative">
            <h3 className="text-xl md:text-3xl text-[#E16A44] pt-6 font-semibold mb-2">Boemi Dieng</h3>
            <p className="text-gray-600">Rumah makan dan pusat oleh-oleh khas Dieng Wonosobo termurah dan terlengkap yang menawarkan berbagai souvenir. Boemi Dieng juga memiliki pusat  melayani informasi shuttle bus.</p>
            <button className="bg-[#E16A44] text-white py-2 px-4 mt-4">Maps</button>
          </div>
        </div>
      </div>


      {/* gambar dikanan */}
      <div className="bg-[#F9F9F9] mx-8 my-12 flex flex-col md:flex-row rounded overflow-hidden">
        {/* Text Content Section */}
        <div className="md:w-2/3 md:mr-4 md:pr-4 relative">
          <h3 className="text-xl md:text-3xl text-[#E16A44] pt-6 font-semibold mb-2">MakNohan</h3>
          <p className="text-gray-600">Pusat oleh-oleh makanan khas Dieng Wonosobo yang menyediakan berbagai jenis oleh-oleh, mulai dari makanan, cemilan, baju, souvenir hingga kain khas dengan harga terjangkau dan kualitas terbaik.</p>
          <button className="bg-[#E16A44] text-white py-2 px-4 mt-4">Maps</button>
        </div>

        {/* Image Section */}
        <div className="md:w-1/3 relative">
          <Link to="/maknohan">
            <div className="absolute top-0 left-0 w-full h-60"></div>
            <img src={maknohan} alt="MakNohan" className="w-full h-60 object-cover" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Merchinary;
