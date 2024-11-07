import React, { useEffect, useRef } from 'react';
import ctc from '../website_im/ctc.png';
import '../CSS/vertical.css';
import companystats from '../website_im/chart.png'
const AnimatedBarGraph = ()  => {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleIntersection = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const images = document.querySelectorAll('.fade-in img');
          images.forEach((img, i) => {
            setTimeout(() => {
              img.style.opacity = 1;
              img.style.transform = 'translateY(0)';
            }, i * 300);
          });

          observer.disconnect();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (observer && containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div className="contra" id='piechart'>
      <div className="image-container fade-in" ref={containerRef}>
        <div className="image-wrapper">
          <img src={ctc} alt="CTC Details" className="animated-image" style={{marginTop:'15px'}}/>
          <p className="image-text">CTC Highlights</p>
        </div>
        <div className="image-wrapper">
          <img src={companystats} alt="No. of companies per year" className="animated-image" />
          <p className="image-text">Percentage Placement</p>
        </div>
      </div>
      <div className="description">
        <p>
        At SPIT, we are proud to offer a diverse range of career opportunities through our placement program. On average, our graduates secure a package of  15.32LPA, with the median package standing at 13.33 LPA. The roles available span various domains, including technical positions, non-technical roles, and hybrid tech+non-tech roles. The highest salary offered to our students this year is 61.55 LPA. Additionally, we have observed a notable trend in the percentage of students choosing to pursue higher studies, which has been 19.09%. This reflects the growing inclination towards advanced education among our graduates, complementing their professional achievements.
        </p>
      </div>
    </div>
  );
};

export default AnimatedBarGraph;
