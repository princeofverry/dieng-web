import React, { useEffect } from 'react';
import merchinaryCover from '../assets/merchinaryCover.png';
import FoodMerchinary from '../components/foodMerchinary';
import HaveSouvenirs from '../components/HaveSouvenirs';
import WhereToFindIt from '../components/whereToFindIt';


const Merchinary = () => {

  return (
    <div className="">
      {/* Hero section */}
      <div className="h-screen w-full relative">
        <img src={merchinaryCover} alt="Background" className="h-screen w-full object-cover" />

        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className='sm:text-6xl lg:text-8xl text-4xl text-center text-white font-bold' data-aos="zoom-in" data-aos-anchor-placement="bottom-bottom" data-aos-duration="700">
            Taste of Dieng
          </h1>
        </div>
      </div>

      {/* Foods section ada di components */}
      <div data-aos="fade-up" data-aos-duration="500">
        <FoodMerchinary />
      </div>

      {/* suvenir ada di components*/}
      <div data-aos="fade-up" data-aos-duration="500">
        <HaveSouvenirs />
      </div>

      {/* gambar dikiri dan kanan*/}
      <div data-aos="fade-up" data-aos-duration="500">
        <WhereToFindIt />
      </div>
    </div>
  );
}

export default Merchinary;
