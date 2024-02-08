import React from 'react';
import '../style/Navbar.css';
import { useState, useEffect } from 'react';
import logo from '../assets/atasAwan.png';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogoClick = () => {
        navigate('/');
    };

    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        setIsScrolled(scrollPosition > 0);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {/* pengen atasnya putih? */}
            {/* <div className={`navigation bg-${isScrolled ? 'white' : 'transparent'} md:bg-${isScrolled ? 'transparent' : 'transparent'} ${isScrolled ? 'shadow-md' : ''}  transition-all duration-300 fixed p-4 top-0 w-full z-50`}> */}
            <div className={`navigation sm:bg-${isScrolled ? 'white bg-white sm:bg-opacity-10 sm:backdrop-filter sm:backdrop-blur-md text-white shadow-md transition-all duration-300' : 'transparent'}  ${isScrolled ? 'shadow-md' : ''} transition-all duration-300 fixed p-4 top-0 w-full z-50`}>
                <div className="container mx-auto flex items-center justify-between">
                    <div className="flex items-center">
                        <img src={logo} width={120} alt="logo" className="cursor-pointer" onClick={handleLogoClick} />
                    </div>
                    <div className={`hidden md:flex items-center space-x-6 text-lg font-medium text-${isScrolled ? 'black' : 'white'}`}>
                        <Link to="/Destinasi" className="link-underline leading-tight hover:text-[#e16a44] transition-all duration-300">Destination</Link>
                        <Link to="/Accommodation" className="link-underline leading-tight hover:text-[#e16a44] transition-all duration-300">Accommodation</Link>
                        <Link to="/Machinery" className="link-underline leading-tight hover:text-[#e16a44] transition-all duration-300">Machinery</Link>
                        <Link to="/Festival" className="link-underline leading-tight hover:text-[#e16a44] transition-all duration-300">Festival</Link>
                        <Link to="/About-us" className="link-underline leading-tight hover:text-[#e16a44] transition-all duration-300">About Us</Link>
                    </div>
                    <div className="md:hidden block">
                        <button onClick={toggleMenu} className={`focus:outline-none ${isScrolled || isOpen ? 'text-black' : 'text-white'}`}>
                            {isOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className={`md:hidden fixed top-16 left-0 right-0 z-50 bg-${isScrolled ? 'white shadow-md' : 'transparent'} font-semibold rounded-b-lg`}>
                    <div className="container mx-auto py-4 flex flex-col items-center">
                        <Link to="/Destinasi" className="block py-2 ">Destination</Link>
                        <Link to="/Accommodation" className="block py-2 ">Accommodation</Link>
                        <Link to="/Machinery" className="block py-2 ">Machinery</Link>
                        <Link to="/Festival" className="block py-2 ">Festival</Link>
                        <Link to="/About-us" className="block py-2 ">About Us</Link>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
