'use client'
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';   
gsap.registerPlugin(ScrollTrigger);
export default function AI() {
  
    useEffect(() => {
        // Animate the heading from top to its position
        gsap.fromTo(
          '.heading',
          { y: -100, opacity: 0 }, // Start from above with zero opacity
          {
            y: 0,
            opacity: 1,
            duration: 1.5,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: '.heading',
              start: 'top 80%', // Start when the top of the heading is 80% from the top of the viewport
              end: 'bottom 60%',
              scrub: true, // Smoothly animate as you scroll
              toggleActions: 'play none none reverse', // Play on enter and reverse on leave
            },
          }
        );
    
        // Animate the image from invisible to its position with scaling
      //   gsap.fromTo(
      //     '.image',
      //     { scale: 0, opacity: 0 }, // Start invisible with zero scale
      //     {
      //       scale: 1,
      //       opacity: 1,
      //       duration: 6,
      //       ease: 'power3.out',
      //       scrollTrigger: {
      //         trigger: '.image',
      //         start: 'top 80%', // Start when the top of the image is 80% from the top of the viewport
      //         end: 'bottom 60%',
      //         scrub: true, // Smoothly animate as you scroll
      //         toggleActions: 'play none none reverse', // Play on enter and reverse on leave
      //       },
      //     }
      //   );
       }, []);
       
       useEffect(() => {
         
        // Animate each ai-box1 from below to its position one by one
        gsap.utils.toArray('.ai-box1').forEach((box, index) => {
          gsap.fromTo(
            box, 
            { y: 100, opacity: 0 }, 
            { 
              y: 0, 
              opacity: 1, 
              duration: 0.8, 
              ease: 'power3.out',
              scrollTrigger: {
                trigger: box,
                start: 'top 80%',
                toggleActions: 'play reverse play reverse',
              }
            }
          );
        });
      }, []);
      const imageRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      { x: 100, opacity: 0 }, // Start from the right (100px) and invisible (opacity: 0)
      {
        x: 0, // Move to the final position (0px)
        opacity: 1, // Fade in to full visibility (opacity: 1)
        duration: 1, // Duration of the animation
        ease: 'power3.out', // Easing function for a smooth effect
        scrollTrigger: {
          trigger: imageRef.current, // Trigger the animation when the image is in view
          start: 'top 80%', // Start the animation when the top of the image reaches 80% of the viewport height
          end: 'bottom top', // End the animation when the bottom of the image reaches the top of the viewport
          scrub: 1, // Link the animation progress to the scrollbar position for a smooth effect
          toggleActions: 'play none none reverse', // Control the actions on different scroll events
        },
      }
    );
  }, []);
    return(
        <div className="main w-full flex flex-col items-center justify-center gap-10 bg-[#DFF5FF]">
        <div className="w-[95vw] flex flex-col items-center justify-center gap-[7vw] bg-[#DFF5FF] py-16">
            <div className="w-[95vw] ai-content flex flex-col lg:flex-row items-center justify-between">
                <img className="image" src="anime-final.gif" alt="chatbot image" />
                <h1 className="heading w-full lg:w-[60%] text-4xl lg:text-6xl font-semibold">Chat with Our Expert Bot for Immediate Assistance</h1>
            </div>
            <div className="ai-features flex flex-col lg:flex-row items-center justify-center gap-7 lg:gap-0 w-full">
                
                <div className="w-[95vw] lg:w-[50%] boxes flex flex-col items-center justify-center gap-[5vw]">
                    <h2 className='font-semibold text-3xl'>How Does Chatbot works</h2>
                    <div className="two flex flex-col lg:flex-row items-center justify-center gap-5">
                    <div className="ai-box1 w-full lg:w-[20vw] flex flex-col items-start justify-center gap-2 bg-white shadow-md rounded-lg  p-5">
                        <img className='w-[10vw] lg:w-[3vw]' src="Chat.png" alt="chat icon" />
                        <h3 className='font-semibold'>Free Initial Interaction:</h3>
                        <p>Engage with our AI chatbot and ask up to 15 questions at no cost. Perfect for general queries and to get a feel of its capabilities.</p>
                    </div>
                    <div className="ai-box1 w-full lg:w-[20vw] shadow-md rounded-lg bg-white flex flex-col items-start justify-center gap-2 p-5">
                    <img className='w-[10vw] lg:w-[3vw]' src="Chat.png" alt="chat icon" />
                    <h3 className='font-semibold'>General Queries Handling:</h3>
                    <p>AI chatbot is equipped to handle a wide range of general questions, providing quick and accurate responses to various topics.</p>
                    </div>
                    </div>
                    <div className="ai-box1 w-full lg:w-[20vw] shadow-md rounded-lg bg-white flex flex-col items-start justify-center gap-2 p-5">
                    <img className='w-[10vw] lg:w-[3vw]' src="Chat.png" alt="chat icon" />
                    <h3 className='font-semibold'>Personalized Responses:</h3>
                    <p>For users with specific health conditions or data-related queries, the chatbot offers personalized responses tailored to the individual’s health records or data inputs.</p>
                    </div>
                </div>
                <div ref={imageRef} className="w-[80%] lg:w-auto bot">
                    <img className='w-full object-cover' src="bot.png" alt="chat features" />
                </div>
            </div>
        </div>
        </div>
    );
}