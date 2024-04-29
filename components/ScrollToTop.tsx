import React, { useState, useEffect } from 'react';

let prevTop = 0;
const ScrollToTop = () => {
    const [showScrollButton, setShowScrollButton] = useState(false);

    const handleScroll = () => {
        const top = window.scrollY;
        if (top < prevTop && window.scrollY > 100) {
            prevTop = top;
            setShowScrollButton(true);
        } else {
            prevTop = top;
            setShowScrollButton(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };


    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <button onClick={scrollToTop} aria-label="Scroll to top"
            title="Scroll to top" className={`border fixed  z-[99999]  bottom-5 right-3 md:bottom-14 md:right-10 border-gray-400 rounded-full sm:p-2 size-[40px] md:size-[50px] flex items-center justify-center text-xl md:text-3xl  hover:bg-red-100 shadow-lg  bg-red-50 transition-all ease-in-out ${!showScrollButton && "hidden"}`}>☝️</button>
    );
};

export default ScrollToTop;
