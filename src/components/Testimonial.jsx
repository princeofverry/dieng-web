import React, { useState } from 'react';
import profile from '../assets/goyounjung.jpg';

const Testimonial = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const testimonials = [
        {
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quas necessitatibus. Ipsam est tempore illum autem, consequatur ratione nobis soluta sint animi vel, quisquam ad corporis ea architecto, veritatis fugit.",
            author: "Go younjung"
        },
        {
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quas necessitatibus. Ipsam est tempore illum autem, consequatur ratione nobis soluta sint animi vel, quisquam ad corporis ea architecto, veritatis fugit.",
            author: "Jihyo"
        },
        {
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quas necessitatibus. Ipsam est tempore illum autem, consequatur ratione nobis soluta sint animi vel, quisquam ad corporis ea architecto, veritatis fugit.",
            author: "Bambang"
        },
        {
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quas necessitatibus. Ipsam est tempore illum autem, consequatur ratione nobis soluta sint animi vel, quisquam ad corporis ea architecto, veritatis fugit.",
            author: "Edi"
        }
    ];

    const handleNext = () => {
        setCurrentSlide(currentSlide === testimonials.length - 2 ? 0 : currentSlide + 2);
    };

    const handlePrev = () => {
        setCurrentSlide(currentSlide === 0 ? testimonials.length - 2 : currentSlide - 2);
    };

    return (
        <>
            <div className="bg-[#F9F9F9]">
                <h1 className="text-[#e16a44] md:text-4xl text-2xl font-medium mx-auto lg:mx-0 text-center py-8">
                    TESTIMONI
                </h1>
                <div className="pb-4 flex flex-row gap-8 justify-center items-center">
                    {testimonials.slice(currentSlide, currentSlide + 2).map((testimonial, index) => (
                        <div key={index} className="bg-white md:w-1/4 w-full p-4 rounded-xl shadow-xl">
                            <p className="text-justify">{testimonial.text}</p>
                            <div className="flex flex-row justify-start items-center gap-4 pt-2">
                                <img src={profile} alt="profile" width="48px" className='rounded-full' />
                                <h3 className="font-medium">{testimonial.author}</h3>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center py-4">
                    <button onClick={handlePrev} className={`w-4 h-4 rounded-full mr-2 ${currentSlide === 0 ? 'bg-gray-800' : 'bg-gray-200'}`}>
                    </button>
                    <button onClick={handleNext} className={`w-4 h-4 rounded-full ${currentSlide === testimonials.length - 2 ? 'bg-gray-800' : 'bg-gray-200'}`}>
                    </button>
                </div>
            </div>
        </>
    );
};

export default Testimonial;
