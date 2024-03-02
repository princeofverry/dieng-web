import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import penginapanCover from '../assets/penginapanCover.png';
import penginapan2 from '../assets/penginapan2.jpeg';
import penginapan4 from '../assets/penginapan4.jpeg';
import penginapan3 from '../assets/penginapan3.jpeg';
import Star19 from "../assets/Star19.png";
import people2 from "../assets/people2.png";
import Bathtub from "../assets/Bathtub.png";
import bed from "../assets/Bed.png";
import shower from "../assets/Shower.png";
import breakfast from "../assets/breakfast.png";

const Penginapan = () => {
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
            <div className="flex flex-wrap md:flex-row items-center space-x-4">
              <div className="flex items-center space-x-2 mb-2 md:mb-0">
                <div className="border border-#271E1B p-2 rounded-md px-4">
                  <span className="text-gray-600">Harga</span>
                  <span className="text-[#271E1B] transform rotate-90 ml-1 inline-block px-1">&#8250;</span>
                </div>
              </div>
              <div className="flex items-center space-x-4 mb-2 md:mb-0">
                <div className="flex items-center space-x-2">
                  <div className="border border-#271E1B p-2 rounded-md px-4">
                    <span className="text-gray-600">Rating</span>
                    <span className="text-[#271E1B] transform rotate-90 ml-1 inline-block px-1">&#8250;</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-4 mb-2 md:mb-0">
                <div className="flex items-center space-x-2">
                  <div className="border border-#271E1B p-2 rounded-md px-9">
                    <span className="text-gray-600">Masukkan Teks</span>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>

        {/* GOLDEN ORCHID */}
        <div className="bg-white mb-8 flex flex-col md:flex-row rounded overflow-hidden"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1000">
          {/* Image Section */}
          <div className="md:w-2/6 relative">
            <div className="absolute top-0 left-0 w-full h-60 gradient-overlay"></div>
            <div className="absolute top-0 left-0 w-full h-60 gradient-overlay"></div>
            <img src={penginapan3} alt="Golden Orchid Villa" className="w-full h-full object-cover rounded" />
          </div>
          {/* Text Content Section */}
          <div className="md:w-3/6 relative">
            <div className="md:ml-4 md:pl-4 relative text-justify pl-4">
              <h3 className="text-xl md:text-3xl text-[#E16A44] pt-6 font-semibold mb-2">GOLDEN ORCHID VILLA</h3>
              <h3 className="text-sm font-medium md:text-lg mb-2">Villa</h3>
              <p className="text-gray-600 pb-8 sm:pr-8 pr-4">Penginapan keluarga yang berlokasi di kawasan wisata dieng desa Karang sari, Kecamatan Batur, Kabupaten Banjarnegara. Golden Orchid menawarkan dua jenis penginapan, yaitu villa segitiga dan villa joglo dengan pemandangan bukit dan landscape pedesaan yang luar biasa yang dapat memanjakan mata.</p>
              <div className="flex items-center sm:justify-start justify-center">
                <img src={Star19} alt="rating golden orchid" width={22} height={22} />
                <h3 className="text-sm font-medium md:text-base pt-0 pl-3 text-[#E16A44]"> 4.8 (8,030)</h3>
              </div>
              <h3 className="text-sm font-semibold md:text-lg pt-2 text-[#E16A44] flex sm:justify-start justify-center"> IDR 700.000,00</h3>
              {/* Maps Link */}
              <div className="card-actions mt-8 mb-4 flex sm:justify-start justify-center">
                <a href="https://maps.app.goo.gl/GTvZjR7uN4juRnoU8" target="_blank" rel="noopener noreferrer">
                  <button className="bg-[#E16A44] text-white px-8 py-2 font-medium rounded">Maps</button>
                </a>
              </div>
            </div>
          </div>
          {/* information section*/}
          <div className="md:w-1/6 relative bg-[#ECECEC] pl-8 pb-8 pt-8">
            <div className="flex items-center pt-6">
              <img src={people2} alt="people golden orchid" width={22} height={22} />
              <h3 className="text-sm font-medium md:text-base pl-3 text-[#606060]"> 5-6 People</h3>
            </div>
            <div className="flex items-center pt-6">
              <img src={bed} alt="bed golden orchid" width={22} height={22} />
              <h3 className="text-sm font-medium md:text-base pl-3 text-[#606060]"> 3 Bedroom</h3>
            </div>
            <div className="flex items-center pt-6">
              <img src={Bathtub} alt="bathroom golden orchid" width={22} height={22} />
              <h3 className="text-sm font-medium md:text-base pl-3 text-[#606060]"> 2 Bathroom</h3>
            </div>
            <div className="flex items-center pt-12">
              <img src={shower} alt="water heater golden orchid" width={22} height={22} />
              <h3 className="text-sm font-medium md:text-base pl-3 text-[#606060]"> Water heater</h3>
            </div>
            <div className="flex items-center pt-6">
              <img src={breakfast} alt="breakfast golden orchid" width={22} height={22} />
              <h3 className="text-sm font-medium md:text-base pl-3 text-[#606060]"> Breakfast</h3>
            </div>
          </div>
        </div>

        {/* THE MOBY PARK */}
        <div className="bg-white mb-8 flex flex-col md:flex-row rounded overflow-hidden"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1000">
          {/* Image Section */}
          <div className="md:w-2/6 relative">
            <div className="absolute top-0 left-0 w-full h-60 gradient-overlay"></div>
            <div className="absolute top-0 left-0 w-full h-60 gradient-overlay"></div>
            <img src={penginapan2} alt="Golden Orchid Villa" className="w-full h-full object-cover rounded" />
          </div>
          {/* Text Content Section */}
          <div className="md:w-3/6 relative">
            <div className="md:ml-4 md:pl-4 relative text-justify pl-4">
              <h3 className="text-xl md:text-3xl text-[#E16A44] pt-6 font-semibold mb-2">THE MOBY PARK</h3>
              <h3 className="text-sm font-medium md:text-lg mb-2">Glamping</h3>
              <p className="text-gray-600 pb-8 sm:pr-8 pr-4">Glamping ground yang berlokasi di kawasan perkebunan teh Bedakah, Kertek, Wonosobo. The Moby Park bisa disebut tempat yang strategis karena dekat dengan berbagai wisata seru seperti Telaga Bedakah, Gunung Sindoro, dan Gunung Cilik Kaliurip.</p>
              <div className="flex sm:justify-start justify-center">
                <img src={Star19} alt="rating moby park" width={22} height={22} />
                <h3 className="text-sm font-medium md:text-base pt-0 pl-3 text-[#E16A44]"> 4.7 (6,017)</h3>
              </div>
              <h3 className="text-sm font-semibold md:text-lg pt-2 text-[#E16A44] flex sm:justify-start justify-center"> IDR 500.000,00</h3>
              {/* Maps Link */}
              <div className="card-actions mt-8 mb-4 flex sm:justify-start justify-center">
                <a href="https://maps.app.goo.gl/dgrKU5pnkKqk57hD8" target="_blank" rel="noopener noreferrer">
                  <button className="bg-[#E16A44] text-white px-8 py-2 font-medium rounded">Maps</button>
                </a>
              </div>
            </div>
          </div>
          {/* information section*/}
          <div className="md:w-1/6 relative bg-[#ECECEC] pl-8 pb-8 pt-8">
            <div className="flex items-center pt-6">
              <img src={people2} alt="people moby park" width={22} height={22} />
              <h3 className="text-sm font-medium md:text-base pl-3 text-[#606060]"> 2-3 People</h3>
            </div>
            <div className="flex items-center pt-6">
              <img src={Bathtub} alt="bathroom moby park" width={22} height={22} />
              <h3 className="text-sm font-medium md:text-base pl-3 text-[#606060]"> private Bathroom</h3>
            </div>
            <div className="flex items-center pt-12">
              <img src={shower} alt="water heater moby park" width={22} height={22} />
              <h3 className="text-sm font-medium md:text-base pl-3 text-[#606060]"> Water heater</h3>
            </div>
            <div className="flex items-center pt-6">
              <img src={breakfast} alt="breakfast moby park" width={22} height={22} />
              <h3 className="text-sm font-medium md:text-base pl-3 text-[#606060]"> Breakfast</h3>
            </div>
          </div>
        </div>

        {/* MADINNA VILLA */}
        <div className="bg-white mb-8 flex flex-col md:flex-row rounded overflow-hidden"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1000">
          {/* Image Section */}
          <div className="md:w-2/6 relative">
            <div className="absolute top-0 left-0 w-full h-60 gradient-overlay"></div>
            <div className="absolute top-0 left-0 w-full h-60 gradient-overlay"></div>
            <img src={penginapan4} alt="Golden Orchid Villa" className="w-full h-full object-cover rounded" />
          </div>
          {/* Text Content Section */}
          <div className="md:w-3/6 relative">
            <div className="md:ml-4 md:pl-4 relative text-justify pl-4">
              <h3 className="text-xl md:text-3xl text-[#E16A44] pt-6 font-semibold mb-2">MADINNA VILLA</h3>
              <h3 className="text-sm font-medium md:text-lg mb-2">Villa</h3>
              <p className="text-gray-600 pb-8 sm:pr-8 pr-4">Penginapan keluarga yang terletak di sebelah Bima Candi di kawasan wisata dieng. Madinna Villa menawarkan lokasi yang sempunra karena hanya berjarak 1 km dari Telaga Pengilon dan 12 menit ke Candi Arjuna serta Kawah Sikidang dengan berjalan kaki.</p>
              <div className="flex sm:justify-start justify-center">
                <img src={Star19} alt="rating madinna" width={22} height={22} />
                <h3 className="text-sm font-medium md:text-base pt-0 pl-3 text-[#E16A44]"> 4.6 (5,233)</h3>
              </div>
              <h3 className="text-sm font-semibold md:text-lg pt-2 text-[#E16A44] flex sm:justify-start justify-center"> IDR 600.000,00</h3>
              {/* Maps Link */}
              <div className="card-actions mt-8 mb-4 flex sm:justify-start justify-center">
                <a href="https://maps.app.goo.gl/XafTpFKRbn3KFhCk7" target="_blank" rel="noopener noreferrer">
                  <button className="bg-[#E16A44] text-white px-8 py-2 font-medium rounded">Maps</button>
                </a>
              </div>
            </div>
          </div>
          {/* information section*/}
          <div className="md:w-1/6 relative bg-[#ECECEC] pl-8 pb-8 pt-8">
            <div className="flex items-center pt-6">
              <img src={people2} alt="people madinna" width={22} height={22} />
              <h3 className="text-sm font-medium md:text-base pl-3 text-[#606060]"> 3-4 People</h3>
            </div>
            <div className="flex items-center pt-6">
              <img src={bed} alt="bed madinna" width={22} height={22} />
              <h3 className="text-sm font-medium md:text-base pl-3 text-[#606060]"> 2 Bedroom</h3>
            </div>
            <div className="flex items-center pt-6">
              <img src={Bathtub} alt="bathroom madinna" width={22} height={22} />
              <h3 className="text-sm font-medium md:text-base pl-3 text-[#606060]"> 1 Bathroom</h3>
            </div>
            <div className="flex items-center pt-12">
              <img src={shower} alt="water heater madinna" width={22} height={22} />
              <h3 className="text-sm font-medium md:text-base pl-3 text-[#606060]"> Water heater</h3>
            </div>
            <div className="flex items-center pt-6">
              <img src={breakfast} alt="breakfast madinna" width={22} height={22} />
              <h3 className="text-sm font-medium md:text-base pl-3 text-[#606060]"> Breakfast</h3>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Penginapan;