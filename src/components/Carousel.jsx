import React, { useRef, useEffect } from 'react';

const Carousel = ({ images }) => {
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

    return (
        <div className="flex flex-col items-center">
            <div className="flex overflow-x-auto w-full mb-4 pb-4" ref={containerRef}>
                <div className="flex">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 mr-4 shadow-lg pb-4"
                        >
                            <img src={image.src} alt={`Image ${index + 1}`} className="xl:w-96 w-80 h-64 object-cover" />
                            <h1 className="text-lg font-medium pl-4 my-4">{image.title}</h1>
                            <p className="text-base text-[#606060] pl-4 mb-2">{image.keterangan}</p>
                            <a href="#" className="text-[#1E1E2F] pl-4 text-sm underline">Learn More</a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Carousel;
