'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import 'remixicon/fonts/remixicon.css';

export default function Track() {
 
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const ticksRef = useRef([]);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { y: -50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: 1,
          toggleActions: 'play none none reverse'
        }
      }
    );

    gsap.fromTo(
      paragraphRef.current,
      { y: -50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        delay: 0.5,
        scrollTrigger: {
          trigger: paragraphRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: 1,
          toggleActions: 'play none none reverse'
        }
      }
    );

    ticksRef.current.forEach((tick, index) => {
      gsap.fromTo(
        tick,
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          delay: index * 0.2,
          scrollTrigger: {
            trigger: tick,
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: 1,
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

    gsap.fromTo(
      imageRef.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: 1,
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, []);
    return (
        <div className="main w-full flex items-center justify-center h-auto lg:h-[90vh] xl:h-auto bg-[#DFF5FF]" id="track">
        <div className="w-[95vw] flex items-end justify-center">
        <div className="w-full track flex flex-col items-center lg:items-start gap-[2vw]">
        <div  className="heading flex flex-col items-center lg:items-start justify-center pt-10">
          <h2 ref={headingRef} className="text-[1.8rem] lg:text-[4rem] font-semibold" >Track From Anywhere</h2>
          <p ref={paragraphRef} className="text-[0.9rem] w-[80vw] lg:w-[40vw] text-center lg:text-left pl-[1vw]">Monitor your progress seamlessly from any location, at your convenience.</p>
          </div>
        <div className="w-full image-icons flex flex-col lg:flex-row items-center lg:items-start justify-between gap-[5vw] lg:gap-0">
          <div  className="ticks flex flex-col items-start justify-center ml-10">
            <div ref={(el) => ticksRef.current[0] = el} className="first flex items-center justify-center gap-5 animate-from-right">
            <i className="text-[3.5rem] text-[#5B43BD] ri-checkbox-circle-fill"></i>
              <p className="text-[1.3rem] lg:text-[1.5rem] font-semibold text-center">Easy to use</p>
            </div>
            <div ref={(el) => ticksRef.current[1] = el} className="first flex items-center justify-center gap-5 animate-from-right">
            <i className="text-[3.5rem] text-[#5B43BD] ri-checkbox-circle-fill"></i>
              <p className="text-[1.3rem] lg:text-[1.5rem] font-semibold">Moniter & Manage</p>
            </div>
            <div ref={(el) => ticksRef.current[2] = el} className="first flex items-center justify-center gap-5 animate-from-right">
            <i className="text-[3.5rem] text-[#5B43BD] ri-checkbox-circle-fill"></i>
              <p className="text-[1.3rem] lg:text-[1.5rem] font-semibold"> Stay Connected</p>
            </div>
          </div>
           {/* images */}
      <div  className='w-[70vw] lg:w-[40vw] h-auto overflow-hidden'>

        {/* ref={imageRef} */}
       {/* <img  className='w-full lg:w-[25vw]' src="" alt="half mobile image " />  */}
         
      </div>
      </div>
      </div>
     
      </div> 
      </div>     
    );
  }