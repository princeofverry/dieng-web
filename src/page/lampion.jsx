import React from 'react';
import kirabBudaya2 from '../assets/kirabbudaya2.png';

const Lampion = () => {
  return (
    <div>
      {/* Kontainer utama */}
      <div className="mx-auto mt-20 relative overflow-hidden">
        {/* Kotak besar dengan gambar kirabBudaya.png */}
        <div className="relative">
          <img src={kirabBudaya2} alt="Kirab Budaya" className="w-full h-full object-cover" />
        </div>
        {/* Kotak putih di tengah gambar secara vertikal */}
        <div className="absolute top-1/2 right-20 transform translate-y-[-50%] bg-white mr-24 pr-20 pb-20 rounded-xl">
          <h3 className="text-xl text-[#E16A44] font-semibold mb-2">Kirab Budaya</h3>
          <p className="text-gray-600">Dieng, Wonosobo</p>
          <p className="text-gray-600">20 Feb 2024</p>
          <p className="text-gray-600">Gratis</p>
        </div>
      </div>
      {/* Tambahkan komponen-komponen atau konten lain sesuai kebutuhan */}
    </div>
  );
}

export default Lampion;
