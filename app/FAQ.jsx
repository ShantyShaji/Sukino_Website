 'use client';
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

const faqData = [
  { id: '01', question: 'Can I track my sleep patterns with Sukhino?', answer: 'Yes, Sukhino includes a sleep tracking feature. You can log your sleep patterns manually or sync with compatible sleep-tracking devices. To access this feature, go to the “Sleep” section in the app and enter your sleep data or connect your device.' },
  { id: '02', question: "How do I log my meals and monitor my nutrition?", answer: 'To log your meals, navigate to the “Nutrition” or “Food Diary” section. You can manually enter the foods you eat or scan barcodes for easier tracking. The app provides nutritional information and helps you monitor your daily intake to stay on track with your dietary goals.' },
  { id: '03', question: 'What types of workouts can I find in the app?', answer: 'Sukhino offers a variety of workouts, including strength training, cardio, yoga, and flexibility exercises. You can browse workout categories, follow guided exercise routines, and create your own custom workouts. Explore the “Workouts” section to find options that suit your fitness level and goals.' },
  { id: '04', question: 'How do I access my historical data and trends?', answer: 'To view your historical data and trends, go to the “Progress” or “Statistics” section in the app. Here, you can review past workouts, track changes in your health metrics, and analyze your progress over time. Use the filters and graphs to get detailed insights into your data.' },
  { id: '05', question: 'How do I track and manage my hydration?', answer: 'To track your hydration, go to the “Hydration” or “Water Intake” section of the app. You can log the amount of water you drink daily and set hydration goals. The app will provide reminders and track your progress towards meeting your daily water intake targets.' },
];

const FAQItem = ({ id, question, answer, isOpen, toggleOpen }) => {
  return (
    <div className="border-b border-black py-4">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => toggleOpen(id)}
      >
        <h3 className="text-lg font-medium text-black">{id + ' ' + question}</h3>
        <span className="text-2xl text-black">{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && (
        <div className="mt-2">
          <p className="text-black">{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  const titleRef = useRef(null);
  const faqItemsRef = useRef([]);

  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: titleRef.current,
        start: 'top 80%',  // Trigger animation when the element is 80% from the top of the viewport
        once: true,        // Ensures the animation only happens once
        scrub: false,      // Disable scrubbing (animation only happens once and doesn't reverse)
        markers: false,    // Set to true if you want to see markers for debugging
      }
    });

    // Animate the title
    timeline.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },  // Start with title invisible and shifted down
      { opacity: 1, y: 0, duration: 1 }
    );

    // Animate each FAQ item one by one
    faqItemsRef.current.forEach((item, index) => {
      timeline.fromTo(
        item,
        { opacity: 0, y: 30 },  // Start with item invisible and shifted down
        { opacity: 1, y: 0, duration:0.3 },
        `-=${0.4 - (index * 0.1)}`  // Slight overlap between the animations
      );
    });

    return () => {
      // Clean up the ScrollTrigger instance
      timeline.scrollTrigger.kill();
    };
  }, []);

  const [openId, setOpenId] = useState(null);

  const toggleOpen = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="title w-[95vw] mx-auto p-4 py-32" id="faq">
      <h1 ref={titleRef} className="text-6xl font-bold mb-8 text-black text-center lg:text-left">FAQ</h1>
      {faqData.map((item, index) => (
        <div
          ref={(el) => (faqItemsRef.current[index] = el)}
          key={item.id}
        >
          <FAQItem
            {...item}
            isOpen={openId === item.id}
            toggleOpen={toggleOpen}
          />
        </div>
      ))}
    </div>
  );
};

export default FAQ;
