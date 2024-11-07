import { fontFamily, fontWeight, margin, textAlign } from '@mui/system';
import React, { useEffect, useRef, useState } from 'react';

// A functional React component to display CTC statistics
const CTCStatistics = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [highestCTC, setHighestCTC] = useState(0);
  const [averageCTC, setAverageCTC] = useState(0);
  const [medianCTC, setMedianCTC] = useState(0);
  const containerRef = useRef(null);

  // Function to animate the number counting with decimal support
  const animateNumber = (targetValue, duration, setValue) => {
    const precision = 2; // Number of decimal places
    let start = 0;
    let range = targetValue - start;
    let increment = targetValue > start ? 0.1 : -0.1; // Increment for decimal values
    let stepTime = Math.abs(Math.floor(duration / (range / increment)));
    let timer = setInterval(() => {
      start += increment;
      if (increment > 0 ? start >= targetValue : start <= targetValue) {
        start = targetValue;
        clearInterval(timer);
      }
      setValue(parseFloat(start.toFixed(precision)));
    }, stepTime);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing after it becomes visible
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      animateNumber(61.55, 500, setHighestCTC); // Example values
      animateNumber(15.32, 2500, setAverageCTC);
      animateNumber(13.33, 2600, setMedianCTC);
    }
  }, [isVisible]);

  const containerStyle = {
    padding: '5rem 2rem',
    margin: '0 auto',
    width: '90vw',
    textAlign: 'center',
    backgroundColor: '#ffffff', // Light background color for contrast
    borderRadius: '10px',
  };
  
  const headingStyle = {
    fontSize: '3rem',
    marginBottom: '2rem',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontWeight: '800',
    color: '#3e2078', // Dark color for better readability
  };
  
  const statStyle = {
    fontSize: '5rem', // Increased font size for numbers
    fontWeight: '800',
    color: '#969696', // Light red color
    margin: '0.5rem 0rem', // Increased margin for spacing
    letterSpacing: '1px',
    fontFamily: 'Inter',
  };
  
  const labelStyle = {
    fontSize: '2rem',
     // Darker color for contrast
    margin:'0',
    fontFamily: 'Inter',
    color: '##3e2078',
    fontWeight: '700'
  };

  return (
    <section ref={containerRef} style={containerStyle}>
      <div>
        <h1 style={headingStyle}>CTC Highlights 2024</h1>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '9rem', flexWrap: 'wrap' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={statStyle}>{highestCTC}</div>
            <div style={labelStyle}>Highest CTC (LPA)</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={statStyle}>{averageCTC}</div>
            <div style={labelStyle}>Average CTC (LPA)</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={statStyle}>{medianCTC}</div>
            <div style={labelStyle}>Median CTC (LPA)</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTCStatistics;
