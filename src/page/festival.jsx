import React from 'react';
import festivalCover from '../assets/festivalCover.jpg'
import lampion from '../assets/lampion.png';
import ruwatan from '../assets/ruwatan.png';
import baritan from '../assets/baritan.png';
import kirabBudaya from '../assets/kirabBudaya.png';

const Festival = () => {
  return (
    <div className="h-screen w-full">
      <div className="h-screen">
        <img src={festivalCover} alt="Background" className="h-screen w-full object-cover" />

        {/* Overlay hitam dengan transparansi 50% */}
        {/* <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div> */}

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className='md:text-6xl text-6xl text-white font-bold' data-aos="zoom-in" data-aos-anchor-placement="bottom-bottom" data-aos-duration="700">
            The Charming Side of Dieng
          </h1>
          <p className='md:text-5xl text-sm text-white font-semibold' data-aos="zoom-in" data-aos-duration="1000">...</p>
        </div>
      </div>

      {/* Konten */}
      <div className="p-4 sm:p-8 md:mx-auto bg-[#F9F9F9]">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#E16A44] mb-4">Festival Dieng</h2>

        <div className="bg-white p-4 rounded-md shadow-md mb-8">
          <nav className="flex items-center flex-col md:flex-row md:justify-between">
            <div className="flex items-center mb-2 md:mb-0">
              <span className="font-regular text-gray-800">Filter By:</span>
            </div>
            <div className="flex items-center space-x-4">
              {/* 4 kotak kecil dengan simbol > */}
              <div className="flex items-center space-x-2">
                <div className="border border-#271E1B p-2 rounded-md">
                  <span className="text-gray-600">Urutkan</span>
                  <span className="text-[#271E1B] transform rotate-90 ml-1 inline-block">&#8250;</span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="border border-#271E1B p-2 rounded-md">
                  <span className="text-gray-600">Bulan</span>
                  <span className="text-[#271E1B] transform rotate-90 ml-1 inline-block">&#8250;</span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="border border-#271E1B p-2 rounded-md">
                  <span className="text-gray-600">Tahun</span>
                  <span className="text-[#271E1B] transform rotate-90 ml-1 inline-block">&#8250;</span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="border border-#271E1B p-2 rounded-md">
                  <span className="text-gray-600">Masukkan Teks</span>
                </div>
              </div>
            </div>
          </nav>
        </div>

        {/* LAMPION */}
        <div className="bg-white mb-8 flex flex-col md:flex-row">
          {/* Bagian kiri gambar */}
          <div className="md:w-1/3 mb-4 md:mb-0">
            <img src={lampion} alt="Image" className="w-full h-full object-cover" />
          </div>
          {/* Bagian kanan penjelasan */}
          <div className="md:w-2/3 md:ml-4">
            <h3 className="text-3xl pt-12 pl-4 font-semibold mb-2">FESTIVAL LAMPION</h3>
            <p className="text-gray-600 pl-4">Penjelasan singkat tentang gambar atau topik tertentu.</p>
          </div>
        </div>

        {/* RUWATAN */}
        <div className="bg-white mb-8 flex flex-col md:flex-row">
          {/* Bagian kiri gambar */}
          <div className="md:w-1/3 mb-4 md:mb-0">
            <img src={ruwatan} alt="Image" className="w-full h-full object-cover" />
          </div>
          {/* Bagian kanan penjelasan */}
          <div className="md:w-2/3 md:ml-4">
            <h3 className="text-3xl pt-12 pl-4 font-semibold mb-2">RUWATAN</h3>
            <p className="text-gray-600 pl-4">Penjelasan singkat tentang gambar atau topik tertentu.</p>
          </div>
        </div>


        {/* BARITAN */}
        <div className="bg-white mb-8 flex flex-col md:flex-row">
          {/* Bagian kiri gambar */}
          <div className="md:w-1/3 mb-4 md:mb-0">
            <img src={baritan} alt="Image" className="w-full h-full object-cover" />
          </div>
          {/* Bagian kanan penjelasan */}
          <div className="md:w-2/3 md:ml-4">
            <h3 className="text-3xl pt-12 pl-4 font-semibold mb-2">BARITAN</h3>
            <p className="text-gray-600 pl-4">Penjelasan singkat tentang gambar atau topik tertentu.</p>
          </div>
        </div>


        {/* KIRAB BUDAYA */}
        <div className="bg-white mb-8 flex flex-col md:flex-row">
          {/* Bagian kiri gambar */}
          <div className="md:w-1/3 mb-4 md:mb-0">
            <img src={kirabBudaya} alt="Image" className="w-full h-full object-cover" />
          </div>
          {/* Bagian kanan penjelasan */}
          <div className="md:w-2/3 md:ml-4">
            <h3 className="text-3xl pt-12 pl-4 font-semibold mb-2">KIRAB BUDAYA</h3>
            <p className="text-gray-600 pl-4">Penjelasan singkat tentang gambar atau topik tertentu.</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Festival;
