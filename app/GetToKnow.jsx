'use client';
import { useEffect, useRef } from 'react';
  import gsap from 'gsap';
  import ScrollTrigger from 'gsap/ScrollTrigger';
  
  gsap.registerPlugin(ScrollTrigger);
 
export default function Get() {
  
  
 
    const imageRef = useRef(null);
    const titleRef = useRef(null);
    const paragraphRefs = useRef([]);
  
    useEffect(() => {
      gsap.fromTo(
        titleRef.current,
        { y: -50, opacity: 0 },
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
        imageRef.current,
        { x: -100, opacity: 0 }, // Start from the left (-100px) and invisible (opacity: 0)
        {
          x: 0, // Move to the final position (0px)
          opacity: 1, // Fade in to full visibility (opacity: 1)
          duration: 2, // Duration of the animation
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
  
      paragraphRefs.current.forEach((paragraph, index) => {
        gsap.fromTo(
          paragraph,
          { x: 50, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 2,
            ease: 'power3.out',
            delay: index * 0.2,
            scrollTrigger: {
              trigger: paragraph,
              start: 'top 80%',
              end: 'bottom top',
              scrub: 1,
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    }, []);
  
 
 
    return (
      <div className="w-full h-auto flex items-center justify-center pb-10" id="gettoknow">
          <div className="container w-[95vw] h-auto lg:h-[95vh] xl:h-auto flex flex-col lg:flex-row items-start justify-between pt-[7vw] ">
          <img ref={imageRef} className="w-[70vw] lg:w-[35vw] " src="suk_img2-Recovered.png" alt="app interface" />
          <div  className=" content h-auto lg:h-[79vh] xl:h-auto flex flex-col gap-3">
            <div ref={titleRef}  className="title flex flex-col gap-1">
              <h1 className=" text-6xl font-semibold">Get to Know Us</h1>
              <p className="text-sm">Discover the key features that set us apart.</p>
            </div><br/>
            <p
          ref={(el) => (paragraphRefs.current[0] = el)}
          className="text-lg mb-4"
        >
          Sukhino is your ultimate wellness companion, offering personalized diet plans and holistic solutions to help you achieve your health goals. Whether you're looking to lose weight, gain muscle, or enhance your mental well-being, Sukhino provides a comprehensive approach to wellness. <br /><br />
        </p>
        <p
          ref={(el) => (paragraphRefs.current[1] = el)}
          className="text-lg mb-4"
        >
          Our app features tailored diet plans for weight loss and weight gain, along with a focus on mental health. Engage in a variety of exercises, including yoga, keto routines, and Zumba, all paired with the perfect music to keep you motivated and focused. With Sukhino, you can nourish your body with the right foods, stay active with enjoyable workouts, and find peace of mind—all in one place. <br /><br />
        </p>
        <p
          ref={(el) => (paragraphRefs.current[2] = el)}
          className="text-lg"
        >
          Start your journey to a balanced, healthier life with Sukhino today.
        </p>
          </div>
          </div>


      {/* <div className="w-[92.5vw] flex flex-col lg:flex-row items-center justify-center gap-[5vw] bg-red-600">
        <div className="img w-full lg:w-[35vw] pt-[6vw]">
         <img className="w-[70vw] lg:w-[37vw] " src="suk_img2-Recovered.png" alt="app interface" />
         </div>
       

      <div className="get-to-know w-[90vw]  lg:w-[50vw] flex flex-col items-center justify-center gap-[3vw]" id="get">
      <div className="heading1 w-full flex flex-col items-start justfify-around">
      <h1 className="text-[2rem] lg:text-[4rem]">Get to Know Us</h1>
      <p className="text-[0.9rem]">Discover the key features that set us apart.</p>
      </div>
      <p className="fade-in text-justify">Sukhino is your ultimate wellness companion, offering personalized diet plans and holistic solutions to help you achieve your health goals. Whether you're looking to lose weight, gain muscle, or enhance your mental well-being, Sukhino provides a comprehensive approach to wellness. <br /><br />

Our app features tailored diet plans for weight loss and weight gain, along with a focus on mental health. Engage in a variety of exercises, including yoga, keto routines, and Zumba, all paired with the perfect music to keep you motivated and focused. With Sukhino, you can nourish your body with the right foods, stay active with enjoyable workouts, and find peace of mind—all in one place. <br /><br />

Start your journey to a balanced, healthier life with Sukhino today.</p>
    </div>
    
    </div>  */}
    </div>      
    );
  }