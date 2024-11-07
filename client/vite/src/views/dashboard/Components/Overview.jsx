import React, { useRef, useState, useEffect } from 'react';
import '../CSS/InstituteCard.css'; // Ensure this CSS file is created

const InstituteCard = () => {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div ref={cardRef} className={`institute-card ${isVisible ? 'slide-in' : 'slide-out'}`}>
      <div className="c1">
        <div className="ct1">
          <h2>Institute Overview</h2>
          <p>Sardar Patel Institute of Technology (S.P.I.T.), nestled in Bhavan’s lush 47-acre campus in Andheri, Mumbai, stands as a beacon of academic excellence since 2005. Offering courses in Computer Engineering, Electronics and Telecommunication Engineering, Data Science, Artificial Intelligence/Machine Learning, and Master in Computer Applications, S.P.I.T. combines a cutting-edge curriculum with distinguished faculty. Our talented students excel in technical and extracurricular activities, with top companies recruiting from our campus. S.P.I.T. hosts the successful technocultural event, Oculus, and houses a pioneering Technology and Business Incubation Centre funded by the Government of India. Committed to innovation and excellence, S.P.I.T. inspires students to strive for perfection in all endeavors.</p>
        </div>
        <div className="ci1">
          <img src="https://via.placeholder.com/150" alt="Institute" />
        </div>
      </div>
    </div>
  );
};

export default InstituteCard;
