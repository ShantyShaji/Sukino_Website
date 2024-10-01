 'use client';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const [showButton, setShowButton] = useState(false);

  // Refs for footer elements to animate
  const footerElementsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      {/* Back to Top Button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-[14vw] sm:right-[5vw] lg:right-4 w-[16vw] sm:w-[8vw] md:w-[8vw] lg:w-[5vw] xl:w-[4.7vw] h-[10vh] sm:h-[11vh] lg:h-[9vh] xl:h-[10vh] bg-[#5B43BD] border border-white text-white rounded-full shadow-lg hover:bg-[#5B43BD] transition-transform transform hover:scale-105"
          aria-label="Back to top"
        >
          <i className="text-[2rem] lg:text-[1.5rem] ri-arrow-up-fill"></i>
        </button>
      )}

      <div className="footer w-full h-auto lg:h-[90vh] flex flex-col items-center justify-center gap-16 text-black">
      <div
          className="footer-p2 flex flex-col lg:flex-row items-center lg:items-end justify-between w-[95vw] gap-7 lg:gap"
        >
          <p className='text-4xl lg:text-8xl font-semibold w-[80vw]'>Your Journey to Wellness Starts Here!</p>
        </div>
        <div
          className="footer-p1 w-[95vw] flex flex-col lg:flex-row items-center lg:items-start justify-between gap-7 lg:gap"
        >
          <div
            className="logo w-auto lg:w-[10vw] flex items-start justify-center"
            
          >
            <img className='w-auto lg:w-[10vw]' src="sukhino_logo.svg" alt="sukhino logo" />
            {/* <p className='text-left text-6xl'>
              Sukhino
            </p> */}
          </div>
          <div
            className="quicklinks w-auto lg:w-[20vw] flex flex-col items-center lg:items-start gap-3"
          >
            <p className='font-semibold'>Quick Links</p>
            <ul className='flex flex-col gap-1 text-[0.9rem]'>
              <a href="#home"><li>Home</li></a>
              <a href="#gettoknow"><li>Get To Know</li></a>
              <a href="#feature"><li>Feature</li></a>
              <a href="#pricing"><li>Pricing</li></a>
              <a href="#contact"><li>Contact</li></a>
            </ul>
          </div>
          <div
            className="product-help w-auto lg:w-[20vw] flex flex-col items-center lg:items-start gap-7 lg:gap-14"
          >
            <div className='flex flex-col items-center lg:items-start gap-3'>
              <p className='flex flex-col items-center lg:items-start gap-3 font-semibold'>Product Help</p>
              <ul className='text-[0.9rem] flex flex-col items-center lg:items-start'>
                <li>Privacy Policy</li>
                <li>Terms and conditions</li>
              </ul>
            </div>
          </div>
          <div className="icons w-[10vw] flex flex-col items-center lg:items-start justify-center  gap-3 text-black">
          <p className='text-base font-semibold'>Connect</p>
          <span className='flex items-center lg:items-start gap-5'>
              <i className="text-[1.2rem] ri-facebook-fill"></i>
              <i className="text-[1.2rem] ri-linkedin-fill"></i>
              <i className="text-[1.2rem] ri-mail-fill"></i>
              </span>
            </div>
        </div>
        <div className="footer-p3 flex flex-col items-center lg:items-start justify-center gap-[3vw]">
        <hr className='w-[95vw] text-black' />
        <p className="text-sm">Copyright © Sukhino | All rights reserved</p>
        </div>
      </div>
    </div>
  );
}
