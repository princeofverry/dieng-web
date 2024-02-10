import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import penginapanCover from '../assets/penginapanCover.png';

const Penginapan = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="h-screen w-full">
      <div className="h-screen w-full">
        <img src={penginapanCover} alt="Background" className="h-screen w-full object-cover" />

        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className='sm:text-6xl text-4xl text-center text-white font-bold' data-aos="zoom-in" data-aos-anchor-placement="bottom-bottom" data-aos-duration="700">
            Rest Comfortably in Dieng
          </h1>
        </div>

      </div>

      <div className="md:mx-auto bg-white flex flex-col justify-center items-center py-4 pb-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#E16A44] mb-4 px-4 mt-4">PLACE TO STAY</h2>
      </div>


      {/* Card 1 */}
      <div className="card card-compact bg-base-100 shadow-xl w-full sm:w-96" data-aos="zoom-in" data-aos-duration="1500">
        <div className="card-body flex flex-col items-left">
          <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
          <div className="card-title mt-4 ml-4">
            <p>07.00 - 17.00</p>
          </div>
          <h2 className='sm:text-3xl text-4xl text-left ml-4 mb-6 font-bold'>Telaga Menjer</h2>
          <div className="card-actions mt-2 ml-4 mb-6">
            <button className="bg-[#E16A44] text-white px-4 py-2 font-bold rounded">SELENGKAPNYA</button>
          </div>
        </div>
      </div>


    </div>

  )
}

export default Penginapan;