import React from 'react'

const WelcomingText = () => {
    return (
        <>
            <div className="bg-white flex flex-col justify-center items-center py-4 pb-16">
                <hr className="border-t-4 border-[#e16a44] md:w-44 w-16 mx-auto md:my-8 my-4" />
                <h1 className="text-[#E16A44] md:text-5xl text-2xl font-semibold" data-aos="flip-up" data-aos-duration="700">
                    WELCOME TO DIENG
                </h1>
                <p className="text-[#271E1B] md:text-xl text-sm pt-8 md:px-44 px-4 md:text-center text-justify tracking-widest" data-aos="zoom-in" data-aos-duration="1000">
                    "Negeri di atas awan, sebuah surga di alam yang mempesona. Tempat para Dewa bersemayam, di mana spiritualitas dan keindahan alam menyatu dalam harmoni yang memukau, memikat hati para petualang dengan pesonanya yang magis."
                </p>
            </div>
        </>
    )
}

export default WelcomingText