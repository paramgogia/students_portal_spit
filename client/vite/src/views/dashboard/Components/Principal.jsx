import React, { useRef, useState, useEffect } from 'react';
import '../CSS/PrincipalCard.css'; // Create this CSS file
import bnc from '../website_final_images/bnc_final.png' ;
const PrincipalCard = () => {
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
    <div ref={cardRef} className={`principal-card ${isVisible ? 'slide-in' : 'slide-out'}`}>
      <div className="c2">
        <div className="person" >
          <div className="container1">
            <div className="container-inner">
            <img className="img" src={bnc} alt="Principal" />
            </div>

    
          </div>
          
        </div>
        <div className="ct2">
          <div className="princititle" style={{fontSize: '30px',
          color: '#3e2078',
          fontFamily:'Inter',
          fontWeight: '700',
          marginTop: '40px'}}>
          Message from the Principal
          </div>
          <div style={{fontFamily:'Inter', marginRight:'80px', color: "#cccccc"}}>
          "As the Principal of Sardar Patel Institute of Technology (S.P.I.T.), I take pride in our institute's educational and placement achievements. Since 1938, as part of Bharatiya Vidya Bhavan, S.P.I.T. has delivered value-based education rooted in Indian culture. Our students' success in securing placements at top companies like Apple, Nvidia, Google, and Tesla reflects our commitment to excellence. With over 200 students employed in the Bay Area, our global impact is clear. We foster an inclusive environment that ensures our students are well-prepared to contribute to society. Welcome to the S.P.I.T. family as we continue our journey toward a brighter future."
          </div>
          
        <br/>
  <div style={{textAlign: 'left', marginRight: '20px', color: "#cccccc"}}>
  Dr. Bhalachandra Chaudhary
  <br/>
    Principal, Sardar Patel Institute of Technology
  </div>
        
          
        </div>
        
      </div>
    </div>
  );
};

export default PrincipalCard;
