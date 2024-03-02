import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import penginapanCover from '../assets/penginapanCover.png';
import lampion from '../assets/lampion.png';
import ruwatan from '../assets/ruwatan.png';
import baritan from '../assets/baritan.png';
import kirabBudaya from '../assets/kirabBudaya.png';

const Penginapan = () => {
  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="">
      <div className="h-screen w-full">
        <img src={penginapanCover} alt="Background" className="h-screen w-full object-cover" />

        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className='sm:text-5xl text-4xl text-center text-white font-bold' data-aos="zoom-in" data-aos-anchor-placement="bottom-bottom" data-aos-duration="700">
            Rest Comfortably in Dieng
          </h1>
        </div>

      </div>

      <div className="p-4 sm:p-8 md:mx-auto bg-[#F9F9F9]" data-aos="fade-right" data-aos-duration="1000">
        <h2 className="text-3xl md:text-5xl font-semibold text-[#E16A44] mb-4 text-center">Place to Stay</h2>

        <div className="bg-white p-4 rounded-md shadow-md mb-8" data-aos="zoom-in" data-aos-duration="2500">
          <nav className="flex items-center flex-col md:flex-row md:justify-between">
            <div className="flex items-center mb-2 md:mb-0">
              <span className="font-regular text-gray-800 md:text-lg">Sort By:</span>
            </div>
            <div className="flex items-center space-x-4 flex-wrap">
              <div className="flex items-center space-x-2 mb-2 md:mb-0">
                <div className="border border-#271E1B p-2 rounded-md px-4">
                  <span className="text-gray-600">Price</span>
                  <span className="text-[#271E1B] transform rotate-90 ml-1 inline-block px-1">&#8250;</span>
                </div>
              </div>

              <div className="flex items-center space-x-4 mb-2 md:mb-0">
                <div className="flex items-center space-x-2">
                  <div className="border border-#271E1B p-2 rounded-md px-4">
                    <span className="text-gray-600">Rate</span>
                    <span className="text-[#271E1B] transform rotate-90 ml-1 inline-block px-1">&#8250;</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4 mb-2 md:mb-0">
                <div className="flex items-center space-x-2">
                  <div className="border border-#271E1B p-2 rounded-md px-16">
                    <span className="text-gray-600">Masukkan Teks</span>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>

        {/* Golden Orchid */}
        <div className="bg-white mb-8 flex flex-col md:flex-row rounded overflow-hidden"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1000">
          {/* Image Section */}
          <div className="md:w-1/4 relative">
              <div className="absolute top-0 left-0 w-full h-60 gradient-overlay" style={{ background: 'linear-gradient(to top, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 20%, rgba(0, 0, 0, 0.5) 100%)' }}></div>
              <div className="absolute top-0 left-0 w-full h-60 gradient-overlay"></div>
              <img src={kirabBudaya} alt="Festival Lampion" className="w-full h-60 object-cover rounded" />
          </div>
          {/* Text Content Section */}
          <div className="md:w-2/3 md:ml-4 md:pl-4 relative">
            <h3 className="text-xl md:text-3xl text-[#E16A44] pt-6 font-semibold mb-2">GOLDEN ORCHID VILLA</h3>
            <h3 className="text-sm font-medium md:text-lg mb-2">5 Feb 2024 <span className="font-normal">🕗 07.00 WIB</span></h3>
            <p className="text-gray-600">Kirab Budaya adalah perayaan yang mempromosikan dan memperingati warisan budaya suatu daerah melalui parade atau prosesi dengan pakaian adat dan seni tradisional.</p>
            {/* Details Link */}
            <div className="absolute sm:bottom-6 bottom-0 right-4">
              <Link to="/Kirab" className="text-500 cursor-pointer">See Details &#8250;</Link>
            </div>
          </div>
        </div>

        {/* RUWATAN */}
        <div className="bg-white mb-8 flex flex-col md:flex-row rounded overflow-hidden"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1000">
          {/* Image Section */}
          <div className="md:w-1/3 relative">
            <Link to="/Kirab">
              <div className="absolute top-0 left-0 w-full h-60 gradient-overlay" style={{ background: 'linear-gradient(to top, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 20%, rgba(0, 0, 0, 0.5) 100%)' }}></div>
              <div className="absolute top-0 left-0 w-full h-60 gradient-overlay"></div>
              <img src={ruwatan} alt="Festival Lampion" className="w-full h-60 object-cover rounded" />
            </Link>
          </div>

          {/* Text Content Section */}
          <div className="md:w-2/3 md:ml-4 md:pl-4 relative">
            <h3 className="text-xl md:text-3xl text-[#E16A44] pt-6 font-semibold mb-2">RUWATAN</h3>
            <h3 className="text-sm font-medium md:text-lg mb-2">5 Feb 2024 <span className="font-normal">🕗 07.00 WIB</span></h3>
            <p className="text-gray-600">Ruwatan adalah ritual Jawa untuk membersihkan diri secara spiritual dan memperoleh perlindungan dari hal-hal buruk, biasanya dilakukan dengan persembahan kepada dewa atau roh.</p>

            {/* Details Link */}
            <div className="absolute sm:bottom-6 bottom-0 right-4">
              <Link to="/Kirab" className="text-500 cursor-pointer">See Details &#8250;</Link>
            </div>
          </div>
        </div>

        {/* BARITAN */}
        <div className="bg-white mb-8 flex flex-col md:flex-row rounded overflow-hidden"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1000">
          {/* Image Section */}
          <div className="md:w-1/3 relative">
            <Link to="/Kirab">
              <div className="absolute top-0 left-0 w-full h-60 gradient-overlay" style={{ background: 'linear-gradient(to top, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 20%, rgba(0, 0, 0, 0.5) 100%)' }}></div>
              <div className="absolute top-0 left-0 w-full h-60 gradient-overlay"></div>
              <img src={baritan} alt="Festival Lampion" className="w-full h-60 object-cover rounded" />
            </Link>
          </div>

          {/* Text Content Section */}
          <div className="md:w-2/3 md:ml-4 md:pl-4 relative">
            <h3 className="text-xl md:text-3xl text-[#E16A44] pt-6 font-semibold mb-2">BARITAN</h3>
            <h3 className="text-sm font-medium md:text-lg mb-2">5 Feb 2024 <span className="font-normal">🕗 07.00 WIB</span></h3>
            <p className="text-gray-600">Baritan adalah tradisi perjalanan kelompok dari satu desa ke desa lain, sering kali diiringi oleh musik tradisional dan acara keagamaan, memperkuat hubungan sosial di antara masyarakat.</p>

            {/* Details Link */}
            <div className="absolute sm:bottom-6 bottom-0 right-4">
              <Link to="/Kirab" className="text-500 cursor-pointer">See Details &#8250;</Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Penginapan;