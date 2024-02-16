
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import merchinaryCover from '../assets/merchinaryCover.png';
import carica from '../assets/carica.png';
import ongklok from '../assets/ongklok.png';
import jamur from '../assets/jamur.png';
import tempe from '../assets/tempe.png';
import kacang from '../assets/kacang.png';
import buntil from '../assets/buntil.png'
import edelweis from '../assets/edelweis.png'
import kaos from '../assets/kaos.png'
import syal from '../assets/syal.png'
import tas from '../assets/tas.png'
import aksesoris from '../assets/aksesoris.png'
import belerang from '../assets/belerang.png'
import miniatur from '../assets/miniatur.png'
import Boemi from '../assets/boemi.png'
import maknohan from '../assets/maknohan.png'

const items = [
  {
    image: kaos,
    title: 'Pakaian',
    description: 'Kaos, jaket, dan jenis pakaian lainnya dengan desain seputar wisata Dieng.',
  },
  {
    image: syal,
    title: 'Syal dan Kupluk',
    description: 'Syal dan kupluk rajutan dengan tulisan khas Dieng.',
  },
  {
    image: tas,
    title: 'Tas Bahu',
    description: 'Tas bahu buatan tangan dengan desain unik khas Dieng.',
  },
  {
    image: aksesoris,
    title: 'Aksesoris',
    description: 'Berbagai aksesoris dengan desain khas Dieng, mulai dari gantungan kunci hingga gelang.',
  },
  {
    image: belerang,
    title: 'Hiasan Batu Belerang',
    description: 'Ukiran batu belerang yang diambil langsung dari kawah Sikidang.',
  },
  {
    image: miniatur,
    title: 'Miniatur',
    description: 'Miniatur buatan tangan berbagai bentuk, mulai dari domba, candi, hingga sepeda.',
  },
  // Tambahkan item lainnya sesuai kebutuhan
];

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

      {/* Foods section */}
      <div className="mx-auto bg-white flex flex-col justify-center items-center py-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#E16A44] mb-4 px-4 mt-4">Must-eat Foods</h2>

        <div className="flex flex-wrap justify-center items-center mt-8">
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
            <Link to="/food-details/1">
              <div className="flex flex-col items-center">
                <img src={carica} alt="Carica" className="w-32 h-32 object-cover rounded-full mb-2" />
                <p className="text-sm text-[#E16A44] font-semibold">Carica</p>
                <p className="text-sm text-gray-500 text-center">Manisan buah carica yang segar, manis dan lembut</p>
              </div>
            </Link>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
            <Link to="/food-details/2">
              <div className="flex flex-col items-center">
                <img src={ongklok} alt="Mie Ongklok" className="w-32 h-32 object-cover rounded-full mb-2" />
                <p className="text-sm text-[#E16A44] font-semibold">Mie Ongklok</p>
                <p className="text-sm text-gray-500 text-center">Mi rebus dengan kuah kental berkanji yang disebut loh dan disajikan bersama sate sapi, kambing, atau ayam</p>
              </div>
            </Link>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
            <Link to="/food-details/3">
              <div className="flex flex-col items-center">
                <img src={kacang} alt="Kacang dieng" className="w-32 h-32 object-cover rounded-full mb-2" />
                <p className="text-sm text-[#E16A44] font-semibold">Kacang Dieng</p>
                <p className="text-sm text-gray-500 text-center">Kacang tanah yang dipanggang dengan bumbu khas</p>
              </div>
            </Link>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
            <Link to="/food-details/4">
              <div className="flex flex-col items-center">
                <img src={jamur} alt="Keripik Jamur" className="w-32 h-32 object-cover rounded-full mb-2" />
                <p className="text-sm text-[#E16A44] font-semibold">Keripik Jamur</p>
                <p className="text-sm text-gray-500 text-center">Keripik dari jamur kancing yang digoreng dan diberi bumbu khas</p>
              </div>
            </Link>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
            <Link to="/food-details/5">
              <div className="flex flex-col items-center">
                <img src={tempe} alt="Tempe Kemul" className="w-32 h-32 object-cover rounded-full mb-2" />
                <p className="text-sm text-[#E16A44] font-semibold">Tempe Kemul</p>
                <p className="text-sm text-gray-500 text-center">Tempe yang digoreng dengan dibalut gandum, pati/ tepung singkong juga tepung beras dan biasanya ditambah daun kucai untuk pelengkap.</p>
              </div>
            </Link>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
            <Link to="/food-details/6">
              <div className="flex flex-col items-center">
                <img src={buntil} alt="Buntil Singkong" className="w-32 h-32 object-cover rounded-full mb-2" />
                <p className="text-sm text-[#E16A44] font-semibold">Buntil Singkong</p>
                <p className="text-sm text-gray-500 text-center">Bungkusan talas atau daun singkong yang berisi parutan kelapa dan bumbu pedas yang terbuat dari santan.</p>
              </div>
            </Link>
          </div>
          
          
        </div>
      </div>
      

      {/* suvenir */}
      <div className="flex justify-center items-center bg-[#F9F9F9]">
      
        <div className="w-full md:w-1/2 lg:w-1/3 p-4">
          <div className="w-full text-center py-4">
            <h2 className="text-3xl font-bold text-[#E16A44] mb-4">Must-have Souvenirs</h2>
          </div>
          <Link to="/details/large-card">
            <div className="relative rounded-lg">
              <img src={edelweis} alt="Large Card" className="w-full h-full object-cover mb-4" />
              <div className="absolute inset-0 flex flex-col justify-end text-white p-4">
                <h2 className="text-2xl font-bold mb-2">Tanaman Edelweis Mini</h2>
                <p className="text-sm">Bunga Edelweis dengan bau harum khas yang bisa menjadi hiasan ruangan</p>
              </div>
            </div>
          </Link>
        </div>

        <div className="w-full md:w-1/2 lg:w-2/3 flex flex-wrap justify-around">
          {items.map((item, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/3 p-4" style={{ height: 'calc(100% / 3)' }}>
              <Link to={`/details/card-${index + 2}`}>
                <div className="rounded-lg h-full">
                  <img src={item.image} alt={`Card ${index + 2}`} className="w-full h-full object-cover mb-4" />
                  <div className="text-center">
                    <h3 className="text-lg font-bold mb-2 text-[#E16A44]">{item.title}</h3>
                  </div>
                </div>
              </Link>
            </div>
          ))}
      </div>
    </div>

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
