'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
export const GetApp = () => {
    
  const containerRef = useRef(null);
  const h1Ref = useRef(null);
  const pRef = useRef(null);
  const btnsRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%', // Start the animation when the container is 80% into view
        end: 'bottom 20%', // End the animation when the bottom of the container is 20% from the top of the viewport
        scrub: 0.5, // Smoothly link the animation to the scroll position
        toggleActions: 'play reverse play reverse', // Play forward on scroll down, reverse on scroll up
      },
    });

    // Animating each element with a slight delay
    tl.fromTo(
      h1Ref.current,
      { x: 50, opacity: 0 }, // Start position below and invisible
      { x: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    )
      .fromTo(
        pRef.current,
        { x: 50, opacity: 0 }, // Start position below and invisible
        { x: 0, opacity: 1, duration: 1, ease: 'power3.out' },
        '-=0.8' // Overlap with the previous animation for a smoother effect
      )
      .fromTo(
        btnsRef.current,
        { x: 50, opacity: 0 }, // Start position below and invisible
        { x: 0, opacity: 1, duration: 1, ease: 'power3.out' },
        '-=0.8' // Overlap with the previous animation for a smoother effect
      );
  }, []);
  return (
        <div className="get-the-app w-full h-[80vh] lg:h-[90vh] flex items-center justify-center" id="download">
          <div className="hidden lg:block lg:w-[50vw] img-container">
            <img src="suk_img7.png" alt="app interface" />
          </div>
  <div ref={containerRef} className="container2 text-white flex flex-col items-center justify-center gap-7 lg:gap-[2vw] w-full lg:w-[50vw]">
    <h1 ref={h1Ref} className="text-[2rem] md:text-[4rem] font-bold text-black">Get The App</h1>
    <p ref={pRef} className="text-[1rem] w-[80vw] lg:w-[38vw] text-center text-black">Start your wellness journey today—download the Sukhino app and take the first step towards a healthier, balanced life.</p>
    {/* <button className="w-[25vw] lg:w-[10vw] h-[7vh] bg-[#D9D9D9] rounded-3xl text-black animate-slide-up">Download</button> */}
    <div ref={btnsRef} className="btns  flex flex-col lg:flex-row  gap-[1vw]">
                    <button className='w-auto h-[9vh] px-3 rounded-2xl bg-black'>
                      <span className='flex items-center justify-center gap-[1vw]'>
                        <img className='w-7' src="Google Play.svg" alt="google play image" />
                        <span className='flex flex-col'>
                          <span className='text-[0.7rem]'>GET IT ON</span>
                          <span>Google Play</span>
                        </span>
                      </span>
                    </button>
                    <button className='w-auto h-[9vh] px-3 rounded-2xl bg-black'>
                      <span className='flex items-center justify-center gap-[1vw]'>
                        <img className='w-7' src="Apple Logo.svg" alt="Apple Store image" />
                        <span className='flex flex-col'>
                          <span className='text-[0.7rem]'>Download on the</span>
                          <span>App Store</span>
                        </span>
                      </span>
                    </button>
                  </div>
  </div>
</div>
  )
}
