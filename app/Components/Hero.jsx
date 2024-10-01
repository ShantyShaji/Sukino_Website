'use client';
import { useEffect, useRef, useState, Suspense } from 'react';
import styles from '../styles/animations.module.css';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

gsap.registerPlugin(ScrollTrigger);

const IPhoneModel = ({ scrollProgress }) => {
  const { scene } = useGLTF('/New folder/scene.gltf');
  const modelRef = useRef();

  useFrame(() => {
    if (modelRef.current) {
      let rotation;
      if (scrollProgress < 0.5) {
        rotation = Math.PI * scrollProgress * 4;
      } else {
        rotation = (scrollProgress) * Math.PI * 4;
      }
      modelRef.current.rotation.y = rotation + Math.PI;
    }
  });

  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={[50, 50, 50]}
      position={[0, -4, 0]}
      rotation={[0, Math.PI, 0]}
    />
  );
};


const AnimatedSection = () => {
  const [isMenuIconVisible, setIsMenuIconVisible] = useState(false);
  const [isDownloadButtonVisible, setIsDownloadButtonVisible] = useState(false);
  const [isHeadingVisible, setIsHeadingVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const canvasRef = useRef();

  useEffect(() => {
    ScrollTrigger.matchMedia({
      // Default animation (for screens wider than 1280px)
      "(min-width: 1281px)": function () {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: "#gettoknow",
            start: "top bottom",
            end: "bottom top",
            scrub: 2,
            onUpdate: (self) => {
              setScrollProgress(self.progress);
            },
          },
        });
        tl.to(canvasRef.current, {
          y: '105vh',
          x: '-40vw',
          duration: 1.5,
          ease: "power3.inOut",
        })
          .to(canvasRef.current, {
            y: '220vh',
            x: '10vw',
            duration: 1.5,
            ease: "power3.inOut",
          });
      },

      // For screen widths between 1024px and 1280px
      "(min-width: 1024px) and (max-width: 1280px)": function () {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: "#gettoknow",
            start: "top bottom",
            end: "bottom top",
            scrub: 2,
            onUpdate: (self) => {
              setScrollProgress(self.progress);
            },
          },
        });
        tl.to(canvasRef.current, {
          y: '105vh',  // Adjust y position for 1024-1280px screens
          x: '-42vw',
          duration: 1.5,
          ease: "power3.inOut",
        })
          .to(canvasRef.current, {
            y: '242vh',  // Adjust y position for 1024-1280px screens
            x: '10vw',
            duration: 1.5,
            ease: "power3.inOut",
          });
      },






      // dimension-768 to 1024

      "(min-width: 768px) and (max-width: 1024px)": function () {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: "#gettoknow",
            start: "top bottom",
            end: "bottom top",
            scrub: 2,
            onUpdate: (self) => {
              setScrollProgress(self.progress);
            },
          },
        });
        tl.to(canvasRef.current, {
          y: '145vh',  // Adjust y position for 1024-1280px screens
          x: '0vw',
          duration: 0.5,
          ease: "power3.inOut",
        })
          .to(canvasRef.current, {
            y: '150vh',  // Adjust y position for 1024-1280px screens
            x: '0vw',
            duration: 1.5,
            ease: "power3.inOut",
          });
      },






      
      // dimension-640 to 768

      "(min-width: 600px) and (max-width: 768px)": function () {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: "#gettoknow",
            start: "top bottom",
            end: "bottom top",
            scrub: 2,
            onUpdate: (self) => {
              setScrollProgress(self.progress);
            },
          },
        });
        tl.to(canvasRef.current, {
          y: '135vh',  // Adjust y position for 1024-1280px screens
          x: '0vw',
          duration: 0.5,
          ease: "power3.inOut",
        })
          .to(canvasRef.current, {
            y: '140vh',  // Adjust y position for 1024-1280px screens
            x: '0vw',
            duration: 1.5,
            ease: "power3.inOut",
          });
      }




    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMenuIconVisible(true);
      setIsDownloadButtonVisible(true);
    }, 1000);

    const menuIconTimer = setTimeout(() => {
      setIsHeadingVisible(true);
    }, 2000);

    return () => {
      clearTimeout(timer);
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

          <div className={`fixed inset-0 transition-transform duration-600 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} z-40`} onClick={closeNavbar}>
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

        <div ref={canvasRef} className="canvas-container w-[50vw] h-full flex items-center justify-center ">
          <Canvas camera={{ position: [0, 0, 10], fov: 50 }} style={{ width: '50vw', height: '100vh' }} className=' w-full flex items-center justify-center'>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} />
            <Suspense fallback={null}>
              <IPhoneModel scrollProgress={scrollProgress} />
            </Suspense>
          </Canvas>
        </div>
      </div>
    </div>
  );
};

export default AnimatedSection;
