"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const titleRef = useRef(null);
  const paragraphRef = useRef(null);
  const formRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
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
        delay: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: paragraphRef.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      }
    );

    gsap.fromTo(
      formRef.current.children,
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      imageRef.current,
      { x: 50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        delay: 0.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);
    
// form validation
   
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [message, setMessage] = useState('');
const [errors, setErrors] = useState({});

// Function to validate form fields
const validate = () => {
  const newErrors = {};

  // Validate name: only letters and spaces allowed
  if (!name) {
    newErrors.name = 'Name is required';
  } else if (!/^[A-Za-z ]+$/.test(name)) {
    newErrors.name = 'Invalid name: Only letters and spaces are allowed';
  }

  // Validate email: must be a valid email address
  if (!email) {
    newErrors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    newErrors.email = 'Invalid email address';
  }

  // Validate message: minimum length of 10 characters
  if (!message) {
    newErrors.message = 'Message is required';
  } else if (message.length < 10) {
    newErrors.message = 'Message must be at least 10 characters long';
  }

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};

// Function to handle form submission
const handleSubmit = (e) => {
  e.preventDefault();
  if (validate()) {
    // Clear form fields after successful submission
    setName('');
    setEmail('');
    setMessage('');
  }
};

    return (
        <div className="pricing w-full h-auto lg:h-[120vh] flex flex-col items-center justify-center gap-[5vw] bg-[#DFF5FF]" id="contact"> 
        <div className="title flex flex-col items-center justify-center gap-3">
          <h1 ref={titleRef} className=" text-6xl font-semibold text-center">Stay Connected</h1>
          <p ref={paragraphRef} className=" text-sm">Discover the key features that set us apart.</p>
          </div>
            <div className="bx w-full flex flex-col lg:flex-row  items-center lg:items-start justify-center lg:gap-16">
        
  
    <div className="contact-form w-[60vw] lg:w-[40vw] pb-10">
      <form ref={formRef}
        onSubmit={handleSubmit}
        className="flex flex-col items-start justify-center gap-[2vw]"
      >
        <input
          type="text"
          className={`w-full h-[5vh] rounded shadow-md pl-3 ${errors.name ? 'border-red-500' : ''}`}
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        
        <input
          type="email"
          className={`w-full h-[5vh] rounded shadow-md  pl-3 ${errors.email ? 'border-red-500' : ''}`}
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        
        <textarea
          className={`w-full h-[30vh] rounded shadow-md pl-3 ${errors.message ? 'border-red-500' : ''}`}
          placeholder="Message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
        
        <button
          type="submit"
          className="w-[20vw] sm:w-[10vw] lg:w-[7vw] h-[5vh] bg-[#5B43BD] rounded-3xl text-white"
        >
          SEND
        </button>
      </form>
    </div>


              <div className="contact-img w-[60vw] lg:w-[50vw] pb-7 lg:pb-0">
                <img ref={imageRef} className='animate-from-bottom w-full h-full rounded-lg object-cover' src="contact_suk.png" alt="smartphone image" />
              </div>
            </div>
          </div>
    );
  }