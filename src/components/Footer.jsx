import React from 'react';
import logo from '../assets/logo.png';
import google from '../assets/google.png';
import youtube from '../assets/youtube.png';
import instagram from '../assets/instagram.png';
import twitter from '../assets/twitter.png';
import { Link, useNavigate } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-[#271E1B] text-white py-8 px-4">
            <div className="container mx-auto flex flex-col md:flex-row md:justify-between">
                <div className="md:w-1/2 md:pr-12 flex flex-col">
                    <img src={logo} className="w-32 md:w-1/3 mx-auto md:mx-0 p-2 bg-white mb-4" alt="Logo" />
                    <p className="text-sm ml-0 w-full md:w-1/2 text-justify mb-4">ATASAWAN adalah Website Pusat Informasi Pariwisata Dieng yang dikelola oleh Tim Newbie.</p>
                    <div className="flex sm:flex-row flex-col items-center gap-4 mb-4">
                        <h2 className="text-sm font-bold">FOLLOW US</h2>
                        <div className="flex gap-6">
                            <div className="bg-white rounded-full p-2 cursor-pointer">
                                <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                                    <img src={google} alt='google' />
                                </a>
                            </div>
                            <div className="bg-white rounded-full p-2 cursor-pointer">
                                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                                    <img src={youtube} alt='youtube' />
                                </a>
                            </div>
                            <div className="bg-white rounded-full p-2 cursor-pointer">
                                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                    <img src={instagram} alt='instagram' />
                                </a>
                            </div>
                            <div className="bg-white rounded-full p-2 cursor-pointer">
                                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                                    <img src={twitter} alt='twitter' />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:w-1/4">
                    <h1 className='text-xl mb-4'>Fitur</h1>
                    <ul className='font-base font-extralight mb-4'>
                        <Link to="/Destinasi" className="block py-1 ">Destination</Link>
                        <Link to="/Penginapan" className="block py-1 ">Accommodation</Link>
                        <Link to="/Merchinary" className="block py-1 ">Merchinary</Link>
                        <Link to="/Festival" className="block py-1 ">Festival</Link>
                        <Link to="/Aboutus" className="block py-1 ">About Us</Link>
                    </ul>
                </div>
                <div className="md:w-1/4 md:ml-4">
                    <h1 className='mb-4'>Contact With Us</h1>
                    <div className="font-extralight">
                        <p>WA : +62 812 543 687 90</p>
                        <p>AtasAwan@gmail.com</p>
                    </div>
                </div>
            </div>
            <h1 className="pt-8 font-light text-xs md:text-sm text-center">Copyright 2024. Made with ❤️ by Newbie Team</h1>
        </footer>
    );
};

export default Footer;
