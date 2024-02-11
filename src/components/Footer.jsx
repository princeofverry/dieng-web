import React from 'react'
import logo from '../assets/logo.png'
import google from '../assets/google.png'
import youtube from '../assets/youtube.png'
import instagram from '../assets/instagram.png'
import twitter from '../assets/twitter.png'

const Footer = () => {
    return (
        <>
            <div className="bg-[#271E1B] text-white py-8 px-4">
                <div className="flex md:flex-row flex-col">
                    <div className="md:px-4 md:ml-12 ml-0 md:w-1/2 flex flex-col">
                        <img src={logo} className="md:w-1/3 p-2 bg-white mb-4" />
                        <p className="text-sm md:ml-0 ml-4 mb-4">ATASAWAN adalah Website Pusat Informasi Pariwisata Dieng yang dikelola oleh Tim Newbie.</p>
                        <div className="flex md:flex-row flex-col items-center gap-4">
                            <h2 className="text-sm font-bold">FOLLOW US</h2>
                            <div className="flex flex-row gap-6 mb-4">
                                <div className="bg-white rounded-full p-2 cursor-pointer">
                                    <img src={google} alt='google' />
                                </div>
                                <div className="bg-white rounded-full p-2 cursor-pointer">
                                    <img src={youtube} alt='youtube' />
                                </div>
                                <div className="bg-white rounded-full p-2 cursor-pointer">
                                    <img src={instagram} alt='instagram' />
                                </div>
                                <div className="bg-white rounded-full p-2 cursor-pointer">
                                    <img src={twitter} alt='twitter' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2 md:px-64 flex flex-col pl-4">
                        <h1 className='text-xl mb-4'>Fitur</h1>
                        <ul className='font-base font-extralight mb-4'>
                            <li>Destination</li>
                            <li>Accommodation</li>
                            <li>Merchinary</li>
                            <li>Gallery</li>
                        </ul>
                    </div>
                    <div className="w-1/2 ml-4">
                        <h1 className='mb-4'>Contact With Us</h1>
                        <div class="font-extralight">
                            <p>WA : +62 812 543 687 90</p>
                            <p>AtasAwandieng@gmail.com</p>
                        </div>
                    </div>
                </div>
                <h1 class="pt-8 font-light text-xs md:text-sm text-center">Copyright 2024. Made with ❤️ by Newbie Team</h1>
            </div>
        </>
    )
}

export default Footer