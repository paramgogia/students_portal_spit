import React from "react";
import '../CSS/footer.css'; // Ensure you have this CSS file for styling
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import BusinessRoundedIcon from '@mui/icons-material/BusinessRounded';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';

const Footer = () => {
  return (
    <footer className="footer-section" id="footer" style={{ fontFamily: 'Inter' }}>
      <div className="container-footer">
        <div className="paramg">
        <div className="single-cta">
              <div className="cta-text">
                <div className="icony" style={{display:'flex'}}><h4>About Us</h4>
                <SchoolRoundedIcon  className="icon" style={{color:'#fff', marginLeft:'10px'}} />
                 </div>
                
                
                <span>Sardar Patel Institute of Technology (S.P.I.T.) in Mumbai fosters academic excellence through innovative programs in engineering and technology. Known for its strong industry connections, skilled faculty, and vibrant student culture, S.P.I.T. offers cutting-edge education and entrepreneurial support, including a Technology and Business Incubation Centre funded by the Government of India.</span>
              </div>
            </div>
        <div className="footer-cta">
          <div className="contact-info">
            <div className="single-cta">
              <div className="cta-text">
              <div className="icony" style={{display:'flex'}}><h4>Find Us</h4>
                <BusinessRoundedIcon  className="icon" style={{color:'#fff', marginLeft:'10px'}} />
                 </div>
                <span>Bharatiya Vidya Bhavans Sardar Patel Institute of Technology Munshi Nagar, Andheri (West), Mumbai 400 058</span>
              </div>
            </div>
            <div className="full-cta">
            <div className="single-cta">
              <div className="cta-text">
              <div className="icony" style={{display:'flex'}}><h4>Call us</h4>
                <CallRoundedIcon  className="icon" style={{color:'#fff', marginLeft:'10px'}} />
                 </div>
                <span><a href="tel:9987001445" style={{ color: '#969595' }}>+91 9987030881</a></span>
              </div>
            </div>
            <div className="single-cta">
              <div className="cta-text">
              <div className="icony" style={{display:'flex'}}><h4>Mail Us</h4>
                <MailOutlineRoundedIcon  className="icon" style={{color:'#fff', marginLeft:'10px'}} />
                 </div>
                <span><a href="mailto:tpo@spit.ac.in" style={{ color: '#969595' }}>kiran.talele@spit.ac.in</a></span>
              </div>
            </div>
            </div>
            
          </div>
          
        </div>
        </div>
     
        <div className="footer-content">
          <div className="footer-widget">
            <div className="footer-widget-heading">
            <div className="icony" style={{display:'flex', marginTop: '20px'}}>
              <h4>Visit Us</h4>
                <LocationOnRoundedIcon  className="icon" style={{color:'#fff', marginLeft:'10px'}} />
                 </div>
            </div>
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.6459337163574!2d72.83354047525427!3d19.123182650489582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9d90e067ba9%3A0x16268e5d6bca2e6a!2sBharatiya%20Vidya%20Bhavan&#39;s%20Sardar%20Patel%20Institute%20of%20Technology%20(SPIT)!5e0!3m2!1sen!2sin!4v1722182181456!5m2!1sen!2sin"
                width="600"
                height="350"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
        <div className="copyright-area" style={{ alignItems: 'center' }}>
          <div className="copyright-text" style={{ textAlign: 'center', color:'#969595' }}>
            <p>&copy;Sardar Patel Institute of Technology, 2024. All Rights Reserved</p>
            <p>Designed by Param Gogia</p>
          </div>
        </div>
    </footer>
  );
};

export default Footer;
