import React from "react";
import {
  MDBCarousel,
  MDBCarouselItem,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import db from '../website_final_images/db.jpg';
import ms from '../website_final_images/ms.jpg';
import jpmc from '../website_final_images/jpmc.jpg';

export default function Testimonial() {
  return (
    <MDBContainer className="my-5">
      <MDBCarousel showControls dark>
       
          <MDBCarouselItem className="active text-center">
            <img
              src={db}
              alt="avatar"
              className="rounded-circle shadow-1-strong mb-4"
              style={{ width: "250px" }}
            />
            <MDBRow className="d-flex justify-content-center">
              <MDBCol lg="8">
                <p style={{fontFamily:'Inter', fontWeight:'400'}} className="text-muted">
                  <MDBIcon fas icon="quote-left" className="pe-2" />
                  It is our utmost pleasure to be associated with SPIT. Their students are adeptly trained and approach assignments, tasks, group work in a systematic manner. The students exhibit strong selfmotivation and are wellprepared for their daily work, resulting in their significant contributions to our organization.                
                </p><FormatQuoteIcon style={{fontSize: "3rem"}}/>
              </MDBCol>
            </MDBRow>
          </MDBCarouselItem>

          <MDBCarouselItem className="text-center">
            <img
              src={ms}
              alt="avatar"
              className="rounded-circle shadow-1-strong mb-4"
              style={{ width: "250px" }}
            />
            <MDBRow className="d-flex justify-content-center">
              <MDBCol lg="8">
                <p style={{fontFamily:'Inter', fontWeight:'400'}} className="text-muted">
                  SPIT is an esteemed partner whose students display exceptional eagerness to learn and maintain a consistently positive outlook and attitude toward the industry. They possess robust technical abilities and collaborate effectively with their manager and peers. Additionally, they provide valuable feedback to improve their colleagues' work and readily accept suggestions from others, taking appropriate measures where required.
                </p><FormatQuoteIcon style={{fontSize: "3rem"}}/>
              </MDBCol>
            </MDBRow>
          </MDBCarouselItem>

          <MDBCarouselItem className="text-center">
            <img
              src= {jpmc}
              alt="avatar"
              className="rounded-circle shadow-1-strong mb-4"
              style={{ width: "250px" }}
            />
            <MDBRow className="d-flex justify-content-center">
              <MDBCol lg="8">
          
                <p style={{fontFamily:'Inter', fontWeight:'400'}} className="text-muted">
                  <MDBIcon fas icon="quote-left" className="pe-2" />
                  Our longstanding partnership with SPIT has been exceptionally gratifying. The students demonstrate impressive logical and analytical abilities, leaving us deeply impressed with their caliber. We value this mutually beneficial relationship and look forward to continuing our association.
                </p><FormatQuoteIcon style={{fontSize: "3rem"}}/>
              </MDBCol>
            </MDBRow>
          </MDBCarouselItem>
      </MDBCarousel>
    </MDBContainer>
  );
}