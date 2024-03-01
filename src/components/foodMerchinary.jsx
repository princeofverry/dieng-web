import React from 'react';
import { Link } from 'react-router-dom';
import carica from '../assets/carica.png';
import ongklok from '../assets/ongklok.png';
import jamur from '../assets/jamur.png';
import tempe from '../assets/tempe.png';
import kacang from '../assets/kacang.png';
import buntil from '../assets/buntil.png'

const FoodMerchinary = () => {
    return (
        <>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#E16A44] py-8 text-center">Must-eat Foods</h2>
            <div className="flex flex-wrap justify-evenly items-center my-4 md:px-8 px-0">
                <div className="md:w-1/3 md:h-1/3 w-full p-2">
                   
                        <div className="flex flex-col items-center">
                            <img src={carica} alt="Carica" className="w-52 h-52 object-cover rounded-full mb-4" />
                            <div className='px-8'>
                                <p className="text-sm text-[#E16A44] font-semibold text-center mb-2">Carica</p>
                                <p className="text-sm text-gray-500 text-center">Manisan buah carica yang segar, manis dan lembut</p>
                            </div>
                        </div>
                    
                </div>
                <div className="md:w-1/3 md:h-1/3 w-full p-2">
                  
                        <div className="flex flex-col items-center">
                            <img src={ongklok} alt="Mie Ongklok" className="w-52 h-52 object-cover rounded-full mb-4" />
                            <div className="px-8">
                                <p className="text-sm text-[#E16A44] font-semibold text-center mb-2">Mie Ongklok</p>
                                <p className="text-sm text-gray-500 text-center">Mi rebus dengan kuah kental berkanji yang disebut loh dan disajikan bersama sate sapi, kambing, atau ayam</p>
                            </div>
                        </div>
                    
                </div>
                <div className="md:w-1/3 md:h-1/3 w-full p-2">
                   
                        <div className="flex flex-col items-center">
                            <img src={kacang} alt="Kacang dieng" className="w-52 h-52 object-cover rounded-full mb-4" />
                            <div className="px-8">
                                <p className="text-sm text-[#E16A44] font-semibold text-center mb-2">Kacang Dieng</p>
                                <p className="text-sm text-gray-500 text-center">Kacang tanah yang dipanggang dengan bumbu khas</p>
                            </div>
                        </div>
                   
                </div>
                <div className="md:w-1/3 md:h-1/3 w-full p-2">
                  
                        <div className="flex flex-col items-center">
                            <img src={jamur} alt="Keripik Jamur" className="w-52 h-52 object-cover rounded-full mb-4" />
                            <div className="px-8">
                                <p className="text-sm text-[#E16A44] font-semibold text-center mb-2">Keripik Jamur</p>
                                <p className="text-sm text-gray-500 text-center">Keripik dari jamur kancing yang digoreng dan diberi bumbu khas</p>
                            </div>
                        </div>
                  
                </div>
                <div className="md:w-1/3 md:h-1/3 w-full p-2">
                   
                        <div className="flex flex-col items-center">
                            <img src={tempe} alt="Tempe Kemul" className="w-52 h-52 object-cover rounded-full mb-4" />
                            <div className="px-8">
                                <p className="text-sm text-[#E16A44] font-semibold mb-2 text-center">Tempe Kemul</p>
                                <p className="text-sm text-gray-500 text-center">
                                    Tempe goreng dibalut gandum dan campuran tepung singkong serta beras, biasanya dengan daun kucai.</p>
                            </div>
                        </div>
                   
                </div>
                <div className="md:w-1/3 md:h-1/3 w-full p-2">
                    
                        <div className="flex flex-col items-center">
                            <img src={buntil} alt="Buntil Singkong" className="w-52 h-52 object-cover rounded-full mb-4" />
                            <div className="px-8">
                                <p className="text-sm text-[#E16A44] font-semibold mb-2 text-center">Buntil Singkong</p>
                                <p className="text-sm text-gray-500 text-center">Bungkusan talas atau daun singkong yang berisi parutan kelapa dan bumbu pedas yang terbuat dari santan.</p>
                            </div>
                        </div>
                 
                </div>
            </div>
        </>
    )
}

export default FoodMerchinary