'use client';
import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
export default function Image() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const boxes = [
    { title: 'Trial', price: '$0' },
    { title: 'Monthly', price: '$35' },
    { title: 'Yearly', price: '$55' },
  ];

  useEffect(() => {
    if (isHovered) return; // If hovered, do not start the interval

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % boxes.length);
    }, 1000); // Change box every 3 seconds

    return () => clearInterval(interval);
  }, [isHovered, boxes.length]);

  const imageRef = useRef(null);

  useEffect(() => {
    // Animate the image with scale and opacity effects
    gsap.fromTo(
      imageRef.current,
      {
        opacity: 0,
        scale: 0.8, // Start slightly scaled down for a smooth effect
        y: '50px',  // Start from a slightly lower position for a subtle effect
      },
      {
        opacity: 1,
        scale: 1,  // End at the original size
        y: '0px',  // End at the original position
        duration: 1.5,  // Make the animation longer for a smoother transition
        ease: 'power2.out',  // Use a smooth easing function
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top 60%',  // Start when the image is 60% visible
          toggleActions: 'play none none none',  // Play the animation once
          once: true,  // Ensure the animation only happens once
        },
      }
    );
  }, []);
 //bottom image
 const imgRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      imgRef.current,
      {
        opacity: 0,
        rotation: -45, // Start rotated to the left
        x: -200, // Start position (adjust as needed)
      },
      {
        opacity: 1,
        rotation: 0, // End at the original position
        x: 0, // End at the original position
        duration: 0.2, // Duration of the animation
        ease: 'power2.out', // Smooth easing function
        scrollTrigger: {
          trigger: imgRef.current,
          start: 'top 80%', // Start animation when the top of the image is 80% from the viewport
          end: 'bottom top', // End animation when the bottom of the image hits the top of the viewport
          scrub: true, // Smoothly link animation progress to the scroll position
          toggleActions: 'play none none none', // Play the animation when scrolled into view
          markers: false, // Set to true if you want to see markers for debugging
        },
      }
    );
  }, []); 
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 80%',
          end: 'bottom 30%',
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      paragraphRef.current,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        delay: 0.5, // Delay to make it appear after heading
        scrollTrigger: {
          trigger: paragraphRef.current,
          start: 'top 80%',
          end: 'bottom 30%',
          scrub: true,
        },
      }
    );
  }, []);
    return (
      <div id="Pricing">
         <div className="images relative w-full flex flex-col h-auto overflow-hidden" >
          
          <img ref={imageRef} className="w-full h-auto lg:h-[95vh] object-cover" src="nutri_img.png" alt="nutrition image" />
          <img  className="w-[30%] lg:w-[25vw] absolute z-10 top-[10vw]  left-[15vw]" src="suk_img4.png" alt="app interface" />

          <div className="relative  pricing w-full flex flex-col items-center justify-center h-auto lg:h-[100vh] gap-[5vw] bg-[#DFF5FF]" id="pricing">   
      <div className="w-[85vw] container flex flex-col lg:flex-row items-center justify-center pt-[30vh] gap-5 lg:gap-[25vw]"> 
              
        <div className="heading  flex flex-col items-start justify-center">
          <h1 ref={headingRef} className="ani w-auto lg:w-[30vw] text-6xl font-semibold">Pricing Plan</h1>
          <p ref={paragraphRef} className="ani text-center text-sm w-auto lg:w-[25vw]">Discover the key features that set us apart.</p>
          </div>
          <div
      className="plan w-full h-[60vh] flex items-center justify-center relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {boxes.map((box, index) => (
        <div
          key={box.title}
          className={`box w-auto lg:w-[30vw] h-[60vh] flex flex-col items-center justify-center gap-3 px-3 lg:px-0 rounded-xl shadow-md bg-white hover:bg-[#5B43BD] hover:text-white absolute transition-all duration-500 ease-in-out ${
            index === activeIndex
              ? 'top-0 z-30'
              : index === (activeIndex + 1) % boxes.length
              ? 'top-[10%] z-20'
              : 'top-[20%] z-10'
          }`}
        >
          <h3 className="text-semibold text-[1.3rem]">{box.title}</h3>
          <h1 className="text-bold text-[2rem]">{box.price}</h1>
          <ul className="flex flex-col items-center justify-center gap-3">
            <li>Hydration Reminders</li>
            <li>Sleep Quality Reports</li>
            <li>Personalized Diet Plans</li>
            <li>Progress Tracking & Analytics</li>
            <li>Exercise Routine & Yoga Sessions</li>
          </ul>
        </div>
      ))}
    </div>
           
        </div>
        </div>
        <div className="w-full h-[35vh] sm:h-[45vh] lg:h-[70vh] bottom-img bg-[#DFF5FF] pt-5">
              <img ref={imgRef}  className="absolute left-[20vw] top-22 w-[70vw] lg:w-[50vw]" src="suk_img6.png" alt="food imgae in app" />
            </div>
          
           
            

        </div>
        </div>   
         
                
    );
  }