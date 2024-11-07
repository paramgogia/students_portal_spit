import React, { useEffect, useRef, useState } from 'react';
import '../CSS/timeline.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from '@mui/icons-material/Work';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import GroupIcon from '@mui/icons-material/Group';
import BuildIcon from '@mui/icons-material/Build';
import SchoolIcon from '@mui/icons-material/School';
import SPJIMR from '../website_final_images/spjimr-ses.jpg';
import mocki from '../website_final_images/mock-i-omkar.jpg';
import barc from '../website_final_images/barc-anan.jpg';
import lti from '../website_final_images/ltisess.jpg';
import mockt from '../website_final_images/mockt.jpg';
const Timeline = () => {

  return (
    
    <VerticalTimeline 
    lineColor={'#3e2078'}
    >
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#3e2078', color: '#fff', fontFamily: "Inter"}}
    contentArrowStyle={{ borderRight: '7px solid  #3e2078' }}
    date="2011 - present"
    iconStyle={{ background: '#3e2078', color: '#fff', border: '2px solid'}}
    icon={<PrecisionManufacturingIcon />}
  >
    <img src={SPJIMR} alt="SPJIMR" className="spjimr" />
    <h3 style={{marginTop: "1rem", fontWeight: "700"}} className="vertical-timeline-element-title">Industry Sessions</h3>
    <p style={{fontWeight: "200"}}>
    Sessions by experts from top companies like PhonePe and Deutsche Bank bridge the gap between students and industry.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#3e2078', color: '#fff', fontFamily: "Inter"}}
    contentArrowStyle={{ borderRight: '7px solid  #3e2078' }}
    date="2011 - present"
    iconStyle={{ background: '#3e2078', color: '#fff' }}
    icon={<WorkspacePremiumIcon />}
  >
    <img src={mockt} alt="DSA" className="spjimr" />
    <h3 style={{marginTop: "1rem", fontWeight: "700"}} className="vertical-timeline-element-title">DSA Preparation & Hackathon</h3>
    <p style={{fontWeight: "200"}}>
    Regular programming tests prepare students for placements and identify technical gaps. Participation in top hackathons offer students a chance to showcase skills and earn early placements..
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#3e2078', color: '#fff', fontFamily: "Inter"}}
    contentArrowStyle={{ borderRight: '7px solid  #3e2078' }}
    date="2011 - present"
    iconStyle={{ background: '#3e2078', color: '#fff' }}
    icon={<GroupIcon />}
  >
    <img src={mocki} alt="Mock Interview" className="spjimr" />
    <h3 style={{marginTop: "1rem", fontWeight: "700"}} className="vertical-timeline-element-title">Mock Interview</h3>
    <p style={{fontWeight: "200"}}>
    Placed final-year students conduct mock interviews and provide feedback on technical and non-technical aspects to prepare students for placements.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#3e2078', color: '#fff', fontFamily: "Inter"}}
    contentArrowStyle={{ borderRight: '7px solid  #3e2078' }}
    date="2011 - present"
    iconStyle={{ background: '#3e2078', color: '#fff' }}
    icon={<BuildIcon />}
  >
    <img src={lti} alt="LTI" className="spjimr" />
    <h3 style={{marginTop: "1rem", fontWeight: "700"}} className="vertical-timeline-element-title">Workshop & Sessions</h3>
    <p style={{fontWeight: "200"}}>
    Placed students and interns offer guidance to clear doubts and aid preparation.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#3e2078', color: '#fff', fontFamily: "Inter"}}
    contentArrowStyle={{ borderRight: '7px solid  #3e2078' }}
    date="2011 - present"
    iconStyle={{ background: '#3e2078', color: '#fff' }}
    icon={<SchoolIcon />}
  >
    <img src={barc} alt="Barclays" className="spjimr" />
    <h3 style={{marginTop: "1rem", fontWeight: "700"}} className="vertical-timeline-element-title">Scope Courses</h3>
    <p style={{fontWeight: "200"}}>
    Credit-based courses by industry partners like JPMC and Barclays ensure students gain practical knowledge and industry readiness.
    </p>
  </VerticalTimelineElement>
  </VerticalTimeline>
  );
};

export default Timeline;
