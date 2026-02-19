import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Courses } from './components/Courses';
import { Testimonials } from './components/Testimonials';
import { ContactSection } from './components/ContactSection';
import { AdmissionPopup } from './components/AdmissionPopup';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

const App: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show popup after 2 seconds
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Courses />
        <Testimonials />
      </main>
      <ContactSection />
      
      <AdmissionPopup 
        isOpen={showPopup} 
        onClose={() => setShowPopup(false)} 
      />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;