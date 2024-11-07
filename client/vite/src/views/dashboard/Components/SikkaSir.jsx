import React, { useRef, useState, useEffect } from 'react';
import '../CSS/TPOCard.css'; // Create this CSS file 
import bnc from '../website_final_images/sikkasir.png'// Create this CSS file
const TPOCard = () => {
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
    <div ref={cardRef} className={`tpo-card ${isVisible ? 'slide-in' : 'slide-out'}`}>
      <div className="c3">
        <div className="ct3">
          <div className="sikkasir"style={{fontSize: '30px',
          color: '#3e2078',
          fontFamily:'Inter',
          fontWeight: '700'}}>
           Message from TPO 
          </div>
          <div style={{fontFamily: 'Inter'}}>
          
          "The Training and Placement Office at Sardar Patel Institute of Technology (S.P.I.T.) is committed to fostering student excellence and growth. Through expert-led workshops, structured curriculum, comprehensive labs, and innovative projects, students are equipped to excel in their fields. Participation in competitions and regular seminars further enhance their practical skills. The Sardar Patel Technology Business Incubator (SPTBI) encourages entrepreneurship, offering industry exposure through internships in student startups. With a dynamic culture and commitment to excellence, S.P.I.T. prepares students for a successful and fulfilling future."
          </div>
          <br />
          <div style={{textAlign: 'left', marginRight: '5px', fontFamily:'Inter' }}>
          Shri. Vinod Sikka
          <br/>
          Head of Training & Placement Office, S.P.I.T.
          </div>
        </div>
        <div className="person1">
          <div className="container11">
            <div className="container-inner1">
            <img className="img1" src={bnc} alt="Principal" />
            </div>

    
          </div>
          </div>
      </div>
    </div>
  );
};

export default TPOCard;
