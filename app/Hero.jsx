 // components/AnimatedSection.js
'use client';
import { useEffect, useState } from 'react';
import styles from '../styles/animations.module.css';

const AnimatedSection = () => {
  const [isImageVisible, setIsImageVisible] = useState(false);
  const [isMenuIconVisible, setIsMenuIconVisible] = useState(false);
  const [isDownloadButtonVisible, setIsDownloadButtonVisible] = useState(false);
  const [isHeadingVisible, setIsHeadingVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // State to manage the menu

  useEffect(() => {
    // Show the image first
    setIsImageVisible(true);

    // After the image animation completes, show the menu icon and download button
    const imageTimer = setTimeout(() => {
      setIsMenuIconVisible(true);
      setIsDownloadButtonVisible(true);
    }, 1000); // Match this to the duration of the image fade-in animation

    // After the menu icon and download button animations complete, show the heading and paragraph
    const menuIconTimer = setTimeout(() => {
      setIsHeadingVisible(true);
    }, 2000); // Match this to the total duration of the previous animations

    return () => {
      clearTimeout(imageTimer);
      clearTimeout(menuIconTimer);
    };
  }, []);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <div className="main w-full h-auto lg:h-[100vh] flex items-center justify-center bg-[#3EA99F]" id="home">
      <div className="relative container w-full lg:w-[95vw] h-auto lg:h-[95vh] flex flex-col-reverse lg:flex-row items-center lg:items-end gap-5 lg:gap-16 py-[2vw] lg:py-0">
        
        <div className={`absolute top-2 menuicon w-full flex items-center justify-between ${!isMenuIconVisible && styles.hidden}`}>
          <button
            className={`p-4 top-4 left-4 z-50 bg-transparent border-none ${styles.menuIconSlideDown}`}
            onClick={toggleNavbar}
          >
            <img className="w-[7vw] sm:w-[5vw] lg:w-[3.5vw]" src="/menu_icon.png" alt="menu icon" />
          </button>
          
          {/* Navbar */}
          <div 
            className={`fixed inset-0 transition-transform duration-600 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} z-40`} 
            onClick={closeNavbar}
          >
            <div className="flex flex-col h-full max-w-[35vw] xl:w-[20vw] items-center justify-around bg-white text-black rounded-r-xl pl-5 pt-3" onClick={(e) => e.stopPropagation()}>
              <ul className='flex flex-col items-start justify-center gap-2 text-xs'>
                <li><a href="#home" className="text-xs lg:text-sm py-4 hover:text-[#3EA99F] text-bold" onClick={closeNavbar}>Home</a></li>
                <li><a href="#gettoknow" className="text-xs lg:text-sm py-4 hover:text-[#3EA99F] text-bold" onClick={closeNavbar}>Get To Know Us</a></li>
                <li><a href="#features" className="text-xs lg:text-sm py-4 hover:text-[#3EA99F] text-bold" onClick={closeNavbar}>Features</a></li>
                <li><a href="#pricing" className="text-xs lg:text-sm py-4 hover:text-[#3EA99F] text-bold" onClick={closeNavbar}>Pricing Plan</a></li>
                <li><a href="#faq" className="text-xs lg:text-sm py-4 hover:text-[#3EA99F] text-bold" onClick={closeNavbar}>FAQ</a></li>
                <li><a href="#contact" className="text-xs lg:text-sm py-4 hover:text-[#3EA99F] text-bold" onClick={closeNavbar}>Stay Connected</a></li>
              </ul>
              <img className='w-auto lg:w-[10vw]' src="/sukhino_logo.svg" alt="sukhino logo" />
            </div>
          </div>
        </div>

        <button className={`absolute top-2 right-0 w-auto lg:w-[10vw] h-[7vh] border border-white px-2 lg:px-0 rounded text-white ${!isDownloadButtonVisible && styles.hidden} ${styles.downloadButtonSlideDown}`}>
          Download
        </button>

        <div className={`heading w-[80vw] lg:w-[30vw] h-[30vh] text-white ${!isHeadingVisible && styles.hidden} ${styles.headingSlideUp}`}>
          <h1 className="text-6xl font-semibold">Sukhino</h1>
          <p className={`${styles.paragraphSlideUp}`}>Discover personalized diet plans and holistic solutions designed to help you achieve your health and fitness goals</p>
        </div>

        <img className={`w-[50vw] lg:w-auto h-full drop-shadow-2xl ${!isImageVisible && styles.hidden} ${styles.imageFadeIn}`} src="mob_updated.png" alt="app image" />
      </div>
    </div>
  );
};

export default AnimatedSection;
