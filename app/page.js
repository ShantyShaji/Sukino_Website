'use client';
import React, { useEffect, useState } from 'react';
import FAQ from "./Components/FAQ";
import Features from "./Components/Features";
import Get from "./Components/GetToKnow";
import Hero from "./Components/Hero";
import Image from "./Components/Image";
import Track from "./Components/Track";
import getapp, { GetApp } from "./Components/GetApp";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Loader from './Components/Loader';
import AI from './Components/AI';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay for loading content (e.g., fetching data or other setup)
    const loadContent = async () => {
      try {
        // Simulate network delay or other setup
        await new Promise(resolve => setTimeout(resolve, 2000)); // 2 seconds delay
      } catch (error) {
        console.error('Failed to load content:', error);
      } finally {
        setIsLoading(false); // Hide loader when done
      }
    };

    loadContent();
  }, []);
  return (
       <div className="main w-full flex flex-col overflow-hidden">
         {/* <Header /> */}
         {isLoading ? <Loader /> : <div>
         <Hero />
            <Get />
            <Track />
             <Features />
             <AI/>
             <Image />
             <FAQ />
               <GetApp />
               <Contact />
               <Footer />
               </div>
               }
        </div>
           
  );
}
