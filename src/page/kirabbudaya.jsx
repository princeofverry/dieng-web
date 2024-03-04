import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import kirabBudaya2 from '../assets/kirabbudaya2.png';
import iconTempat from '../assets/iconTempat.png';
import iconTanggal from '../assets/iconTanggal.png';
import iconTiket from '../assets/iconTiket.png';

const Kirab = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="">
      <div className="relative h-screen w-full">
        <img src={kirabBudaya2} alt="Background" className="h-full w-full object-cover" />

        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>

        {/* Kotak Putih */}
        <div className="px-2 absolute top-1/2 -right-0 md:right-1/4 transform md:translate-x-1/2 -translate-y-1/4 md:-translate-y-1/2 text-left">
          <div className="bg-white md:p-16 p-4 pb-36 rounded-2xl relative">
            <h1 className="text-3xl text-[#262626] font-bold mb-4">KIRAB BUDAYA</h1>
            <div className="flex items-center mb-6">
              <img src={iconTempat} alt="Icon Tempat" className="mr-3 w-1/6" />
              <p className="text-lg">Dieng, Wonosobo</p>
            </div>
            <div className="flex items-center mb-6">
              <img src={iconTanggal} alt="Icon Tanggal" className="mr-3 w-1/6" />
              <p className="text-lg underline">20 Feb 2024</p>
            </div>
            <div className="flex items-center mb-6">
              <img src={iconTiket} alt="Icon Tiket" className="mr-3 w-1/6" />
              <p className="text-lg">Gratis</p>

            </div>
            <div className="bg-[#E16A44] text-white p-2 rounded-md text-center">
              <a href="https://maps.app.goo.gl/3wPP1oQAd6LHg1EbA" target="_blank" rel="noopener noreferrer">
                <span className="text-xl">Maps &#10140; </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="md:mx-auto bg-[#F9F9F9] py-8">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#E16A44] mb-4 px-4 mt-4 pl-12" data-aos="zoom-in" data-aos-duration="1000">DESKRIPSI</h2>
        <div className="flex items-center mb-2 md:mb-0 px-4" data-aos="zoom-in" data-aos-duration="1000">
          <span className="font-regular text-gray-800 text-justify pr-12 pl-8">
            Kirab budaya menjadi salah satu daya tarik Dieng Culture Festival yang banyak menarik wisatawan.
            Pasalnya, acara ini dimulai sebelum dilangsungkan ruwatan atau pemotongan rambut gimbal.
            Kirab budaya berisi kesenian tradisional yang mengiringi upacara adat ruwatan.
            Kesenian tradisional ini mengiringi anak berambut gimbal yang akan dicukur rambutnya.
            Festival ini diisi oleh kesenian tradisional jawa, seperti angklung,
            barongsai kali wetan, lengger, dan masih banyak lagi. Sangat ramai dan meriah!
          </span>
        </div>

      </div>
    </div>
  );
}

export default Kirab;