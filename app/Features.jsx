'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import 'remixicon/fonts/remixicon.css';

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);
export default function Features() {
  
  const firstRowRefs = useRef([]);
  const secondRowRefs = useRef([]);
  const titleRef = useRef(null);
  const paragraphRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
          end: 'bottom top',
          scrub: 1,
          toggleActions: 'play none none reverse',
        },
      }
    );

    gsap.fromTo(
      paragraphRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        delay: 0.5, // Delay to ensure the heading appears first
        scrollTrigger: {
          trigger: paragraphRef.current,
          start: 'top 80%',
          end: 'bottom top',
          scrub: 1,
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);
  useEffect(() => {
    // Animate boxes from left to right
    firstRowRefs.current.forEach((box, i) => {
      gsap.fromTo(
        box,
        { x: '-100%', opacity: 0 },
        {
          x: '0%',
          opacity: 1,
          duration: 0.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: box,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
          delay: i * 0.2,
        }
      );
    });

   // Animate boxes from right to left
   secondRowRefs.current.forEach((box, i) => {
    gsap.fromTo(
      box,
      { x: '100%', opacity: 0 },
      {
        x: '0%',
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: box,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        delay: i * 0.2,
      }
    );
  });
}, []);
    return (
        <div className="w-full h-auto lg:h-[95vh] flex flex-col items-center justify-center py-[15vw] lg:py-[30vw]" id="features">
        <div  className="features w-[95vw] flex flex-col items-center justify-center gap-[3vw]" id="feature">
        <div className="title flex flex-col items-center justify-center">
          <h1 ref={titleRef} className="text-6xl font-semibold">Features</h1>
          <p ref={paragraphRef} className="text-sm">Discover the key features that set us apart.</p>
          </div>
          <div className="bx flex flex-col items-center justify-center gap-[5vw]">
            {/* first-row */}
            <div className="w-full first-row flex flex-col lg:flex-row gap-[5vw] lg:gap-[10vw]">
            <div ref={(el) => (firstRowRefs.current[0] = el)} className="box1 w-full lg:w-[25vw] h-[37vh] md-[40vh] lg:h-[37vh] rounded-2xl flex flex-col items-start justify-center pl-5 hover:shadow-md ">
              <img className="w-[10vw] sm:w-[5vw] lg:w-[4vw]" src="diet_plans.svg" alt="diet plans logo" />
              <h2 className="text-[1.3rem] semi-bold">Personalized Diet Plans</h2>
              <p className="w-[80%]">Customizable diet plans tailored to weight loss, weight gain, and mental well-being.</p>
            </div>
            <div ref={(el) => (firstRowRefs.current[1] = el)} className="box1 w-full lg:w-[25vw] h-[37vh] md-[40vh] lg:h-[37vh] rounded-2xl flex flex-col items-start justify-center pl-5 hover:shadow-md">
              <img className="w-[10vw] sm:w-[5vw] lg:w-[4vw]" src="progress.svg" alt="progress tracking logo" />
              <h2 className="text-[1.3rem] semi-bold">Progress Tracking</h2>
              <p className="w-[80%]">Tools to monitor and remind users to stay hydrated throughout the day.</p>
            </div>
            <div ref={(el) => (firstRowRefs.current[2] = el)} className="box1 w-full lg:w-[25vw] h-[37vh] md-[40vh] lg:h-[37vh] rounded-2xl flex flex-col items-start justify-center pl-5 hover:shadow-md">
              <img className="w-[10vw] sm:w-[5vw] lg:w-[4vw]" src="goal.svg" alt="goal logo" />
              <h2 className="text-[1.3rem] semi-bold">Goal Setting</h2>
              <p className="w-[80%]">Customizable diet plans tailored to weight loss, weight gain, and mental well-being.</p>
            </div>
            
            </div>
            {/* second row */}
            <div className="w-full second-row flex flex-col lg:flex-row gap-[5vw] lg:gap-[10vw]">
            <div ref={(el) => (secondRowRefs.current[0] = el)} className="box1 w-full lg:w-[25vw] h-[37vh] md-[40vh] lg:h-[37vh] rounded-2xl flex flex-col items-start justify-center pl-5 hover:shadow-md">
              <img className="w-[10vw] sm:w-[5vw] lg:w-[4vw]" src="mental.svg" alt="human brain logo" />
              <h2 className="text-[1.3rem] semi-bold">Mental Well-being</h2>
              <p className="w-[80%]"> Boost your mental well-being with meditation, stress management, and mood tracking.</p>
            </div>
            <div ref={(el) => (secondRowRefs.current[1] = el)} className="box1 w-full lg:w-[25vw] h-[37vh] md-[40vh] lg:h-[37vh] rounded-2xl flex flex-col items-start justify-center pl-5 hover:shadow-md">
              <img className="w-[10vw] sm:w-[5vw] lg:w-[4vw]" src="workout.svg" alt="workouting logo" />
              <h2 className="text-[1.3rem] semi-bold">Workout Guides</h2>
              <p className="w-[80%]">Integrated the exercise routines including yoga, keto, and Zumba, with step-by-step guides.</p>
            </div>
            <div ref={(el) => (secondRowRefs.current[2] = el)} className="box1 w-full lg:w-[25vw] h-[37vh] md-[40vh] lg:h-[37vh] rounded-2xl flex flex-col items-start justify-center pl-5 hover:shadow-md">
              <img className="w-[10vw] sm:w-[5vw] lg:w-[4vw]" src="reminders.svg" alt="remainder logo" />
              <h2 className="text-[1.3rem] semi-bold">Customizable Reminders</h2>
              <p className="w-[80%]">Notifications for meal times, exercise routines, and hydration.</p>
            </div>
            </div>
          </div>
        </div>
        </div>      
    );
  }