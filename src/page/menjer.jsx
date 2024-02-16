import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import menjer from '../assets/menjer.png';
import iconTempat from '../assets/iconTempat.png';
import iconTanggal from '../assets/iconTanggal.png';
import iconTiket from '../assets/iconTiket.png';

const Menjer = () => {
  return (
    <div>
      <div className="h-screen w-full relative">
        <img src={menjer} alt="Background" className="h-screen w-full object-cover" />

        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className='sm:text-6xl text-4xl text-center text-white font-bold' data-aos="zoom-in" data-aos-anchor-placement="bottom-bottom" data-aos-duration="700">
            Telaga Menjer
          </h1>
        </div>
      </div>

      <div className="md:mx-auto bg-[#F9F9F9] py-8 px-8">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#E16A44] mb-4 px-4 mt-4">
          DESKRIPSI
        </h2>
        
        <div className="mb-4 px-4">
          <span className="font-regular text-gray-800">
            Telaga Menjer merupakan telaga terluas di kawasan Dieng, terletak di Desa Maron Kecamatan Garung Kabupaten Wonosobo, dengan luas sekitar 70 Ha dan kedalaman sekitar 60 meter, berada pada ketinggian sekitar 1300 Mdpl, tepatnya di bawah gunung Sikudi, telaga yang dikenal oleh berbagai kalangan sejak tahun 1905 karena dokumentasinya dipublikasikan oleh Warga berkebangsaan Belanda, bahkan sampai tahun 1940 pun masih sering diabadikan dalam bentuk foto oleh warga Belanda tersebut yang akhirnya datanya tersimpan di Belanda.
          </span>
        </div>

        <div className="mb-4 px-4">
          <span className="font-regular text-gray-800">
            Terletak di bawah gunung yang lebat tentunya menjadi keuntungan tersendiri bagi Telaga Menjer karena airnya akan selalu melimpah. Selain untuk kepentingan wisata, pemancingan, pengairan, telaga Menjer juga dimanfaatkan sebagai pembangkit Listrik Tenaga Air (PLTA) mulai tahun 1982 sampai sekarang. Lokasi yang nyaman seperti di Telaga Menjer ini menjadi idola tersendiri bagi penduduk lokal maupun wisatawan yang berkunjung. Bukit-bukit dan bebatuan yang berdiri kokoh seolah menciptakan benteng tersendiri untuk melindungi kecantikan Telaga Menjer ini.
          </span>
        </div>

        <div className="px-4">
          <span className='font-regular text-gray-800'>
            Untuk mencapai lokasi dapat ditempuh dengan mobil pribadi maupun motor roda dua, jalannya agak naik dan berkelok, dari kota Wonosobo sekitar 12 Km ke arah utara. Hanya diperlukan waktu sekitar 30 menit sampai ke lokasi, dengan mengambil jalan ke kiri sebelum sampai di pasar tradisional Garung, sambil menikmati pemandangan dan sejuknya udara perjalanan jadi terasa sangat singkat. Telaga Menjer sangat mudah dijangkau karena berada pada pertengahan jalur wisata Dieng.
          </span>
        </div>
        <div className="flex items-center py-4 px-4">
          <img src={iconTempat} alt="Icon Tempat" className="w-4 h-4" />
          <p className="text-lg text-gray-800 px-4">Dieng, Wonosobo</p>
        </div>
        <div className="flex items-center pb-4 px-4">
          <img src={iconTiket} alt="Icon Tiket" className="w-4 h-4" />
          <p className="text-lg text-gray-800 px-4">Rp5.000,00</p>
        </div>
        <div class="bg-[#E16A44] text-white p-2 mx-4 inline-block rounded-md">
          <span class="text-lg">Penunjuk Arah / map &#10140;</span>
        </div>
      </div>
      </div>
  );
}

export default Menjer;
