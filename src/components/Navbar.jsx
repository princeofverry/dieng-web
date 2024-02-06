import React from 'react'
import '../style/Navbar.css'
import { useState, useEffect } from 'react'
import logo from '../assets/atasAwan.png'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogoClick = () => {
        navigate('/');
    };

    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        // Set isScrolled to true when the user has scrolled down, and false otherwise
        setIsScrolled(scrollPosition > 0);
    };

    useEffect(() => {
        // Add scroll event listener on mount
        window.addEventListener('scroll', handleScroll);

        // Remove scroll event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <div className={`bg-${isScrolled ? 'blur bg-white bg-opacity-10 md:shadow-md' : 'transparent'} transition-all duration-300 fixed p-4 top-0 w-full max-h-screen z-50 `}>
                <div className={`container mx-auto flex items-center justify-between ${isScrolled ? 'text-black' : 'text-white'}`}>
                    <div className="flex items-center">
                        <img src={logo} width={120} alt="logo" className='cursor-pointer' onClick={handleLogoClick} />
                    </div>
                    <div className='hidden md:flex items-center space-x-6 text-lg font-medium'>
                        <Link to="/Destination" className="link-underline link-underline-black leading-tight hover:text-[#e16a44] transition-all duration-300">Destination</Link>
                        <Link to="/Accommodation" className="link-underline link-underline-black leading-tight hover:text-[#e16a44] transition-all duration-300">Accommodation</Link>
                        <Link to="/Machinery" className="link-underline link-underline-black leading-tight hover:text-[#e16a44] transition-all duration-300">Machinery</Link>
                        <Link to="/Festival" className="link-underline link-underline-black leading-tight hover:text-[#e16a44] transition-all duration-300">Festival</Link>
                        <Link to="/About-us" className="link-underline link-underline-black leading-tight hover:text-[#e16a44] transition-all duration-300">About Us</Link>
                    </div>
                    <div className="md:hidden block items-center z-100">
                        {/* mobile */}
                        <button onClick={toggleMenu} className={`focus:outline-none ${isOpen || isScrolled ? 'text-black' : 'text-white'}`}>
                            {isOpen ? (
                                // SVG untuk menutup
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            ) : (
                                // SVG untuk hamburger
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            {/* Opsi-opsi navigasi untuk tampilan mobile */}
            {
                isOpen && (
                    <div className="md:hidden pt-12 bg-white w-screen fixed text-lg">
                        <a href="#" className="block p-4 text-black">Destination</a>
                        <a href="#" className="block p-4 text-black">Accommodation</a>
                        <a href="#" className="block p-4 text-black">Machinery</a>
                        <a href="#" className="block p-4 text-black">Gallery</a>
                        <a href="#" className="block p-4 text-black">About Us</a>
                    </div>
                )
            }
        </>
    )
}

export default Navbar