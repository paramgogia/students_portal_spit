import React, { useRef, useEffect, useState } from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const MyChart = () => {
  const chartRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Optionally unobserve if you only want the animation to run once
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 } // Adjust as needed
    );

    if (chartRef.current) {
      observer.observe(chartRef.current);
    }

    return () => {
      if (chartRef.current) {
        observer.unobserve(chartRef.current);
      }
    };
  }, []);

  const data = [
    { label: 'group A', values: [4, 1, 2] },
    { label: 'group B', values: [3, 6, 5] },
    { label: 'group C', values: [5, 3, 6] }
  ];

  const series = data.map(d => ({ data: d.values }));

  // Define animation configuration
  const animation = {
    duration: 5000, // Duration of the animation
    easing: 'easeOutQuart', // Easing function
    delay: (d, i) => i * 100 // Delay per data point
  };

  return (
    <div ref={chartRef} style={{fontFamily:'Inter'}}>
      {isVisible && (
        <BarChart
          xAxis={[{ scaleType: 'band', data: data.map(d => d.label) }]}
          series={series}
          width={500}
          height={300}
          animation={animation} // Apply animation configuration
        />
      )}
    </div>
  );
};

export default MyChart;
