import React, { useRef, useEffect } from 'react';
import '../style/Carousel.css';

const CarouselPenginapan = ({ images }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        let scrollInterval;

        const startScrolling = () => {
            scrollInterval = setInterval(() => {
                container.scrollLeft += 1; // Mengatur kecepatan scroll di sini
                if (container.scrollLeft % container.clientWidth === 0) {
                    clearInterval(scrollInterval);
                    setTimeout(startScrolling, 3000); // Mengatur jeda antara setiap scroll di sini (dalam milidetik)
                }
            }, 30); // Mengatur interval scroll di sini (dalam milidetik)
        };

        startScrolling();

        return () => clearInterval(scrollInterval);
    }, []);

    const renderRatingStars = (rating) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            if (i < rating) {
                stars.push(
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 0l2.5 7h7.5l-6 4.5 2.5 7-6.5-5-6.5 5 2.5-7-6-4.5h7.5z" />
                    </svg>
                );
            } else {
                stars.push(
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-300 fill-current" viewBox="0 0 20 20">
                        <path d="M10 0l2.5 7h7.5l-6 4.5 2.5 7-6.5-5-6.5 5 2.5-7-6-4.5h7.5z" />
                    </svg>
                );
            }
        }
        return stars;
    };

    return (
        <div className="flex flex-col items-center">
            <div className="flex overflow-x-auto w-full mb-4 pb-4 container" ref={containerRef}>
                <div className="flex">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 mr-4 shadow-lg pb-4"
                        >
                            <img src={image.src} alt={`Image ${index + 1}`} className="xl:w-96 w-80 h-64 object-cover" />
                            <div className="flex flex-col items-center justify-center">
                                <h1 className="text-xl font-medium  my-4">{image.title}</h1>
                                <div className="flex items-center mb-2">
                                    {renderRatingStars(image.rating)}
                                    <span className="ml-2 text-base text-gray-600">{image.rating}</span> {/* Tampilkan rating angka */}
                                </div>
                                <p className="text-base text-[#606060]">{image.harga}</p>
                                <button className="bg-[#E16A44] px-6 py-2 text-white font-semibold text-sm">See More</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CarouselPenginapan;
