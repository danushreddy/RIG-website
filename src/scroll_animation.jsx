import './styles.css';
import React, { useEffect, useState } from 'react';
import './ScrollReveal.css';

const ScrollReveal = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const revealThreshold = 300; // Adjust this threshold as needed.

      if (scrollY > revealThreshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check visibility on component mount.

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`scroll-reveal ${isVisible ? 'visible' : ''}`}>
      <p>Content to reveal as you scroll down.</p>
    </div>
  );
};

export default ScrollReveal;
