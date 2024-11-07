import { useEffect, useState } from 'react';
import React from 'react';
// material-ui
import Grid from '@mui/material/Grid';

// project imports


import { gridSpacing } from 'store/constant';
// assets
import StorefrontTwoToneIcon from '@mui/icons-material/StorefrontTwoTone';
import { Box } from '@mui/system';


//INPUTS by PARAM
import "@fontsource/inter";
import { CCarousel, CImage } from '@coreui/react';
import { CCarouselItem } from '@coreui/react';

import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CSS/slider.css';
import Marquee from 'react-fast-marquee';
import Statistics from 'views/statistics';
//images
import entrance from './website_final_images/entrance.jpg';
import spjimr from './website_final_images/spjimr_fin.jpg';
import db from './website_final_images/db_session.png';
import microsoft from './website_final_images/microsoft.jpg';
import barclays from './website_final_images/barclays.jpg';
import dblogo from './website_final_images/db.jpg';
import deloite from './website_final_images/deloitte.jpg';
import dolat from './website_final_images/dolat.jpg';
import enfusion from './website_final_images/enfusion.jpg';
import gep  from './website_final_images/GEP.jpg';
import iss from './website_final_images/iss.jpg';
import jpmc from './website_final_images/jpmc.jpg';
import merkle from './website_final_images/merkle.jpg';
import morgan from './website_final_images/ms.jpg';
import msci from './website_final_images/MSCI.jpg';
import nomura from './website_final_images/nomura.jpg';
import oracle from './website_final_images/oracle.jpg';
import phonepe from './website_final_images/phonepe.jpg';
import quantiphi from './website_final_images/quantiphi.jpg';
import trilogy from './website_final_images/Trilogy.jpg';
import versor from './website_final_images/versor.jpg';
import wi from './website_final_images/workindia.jpg';
import baker from './website_final_images/baker.jpg';
import incred from './website_final_images/incred.jpg';
import ib from './website_final_images/ib.jpg';
import college1 from './website_final_images/college1.jpg';
import college2 from './website_final_images/college2.jpg';
import college3 from './website_final_images/college3.jpg';
import college4 from './website_final_images/college4.jpg';
import conference from './website_final_images/conference.jpg';
import lobby from './website_final_images/lobby.jpg';
//components

import Overview from './Components/Overview';
import PrincipalCard from './Components/Principal';
import TPOCard from './Components/SikkaSir';
import Training from './Components/Training';
import PieChart from './Components/PieChart';
import AnimatedBarGraph from './Components/VerticalBar';
import Chart from './Components/Charts';
import { BarChart } from '@mui/x-charts/BarChart';
import Bar from './Components/Bar'
import Salary from './Components/Salary';
import Companies from './Components/Companies';
import Testimonial from './Components/Testimonial';
import Team from './Components/Team';
import Timeline from './Components/Timeline';
import Footer from './Components/Footer';
import { Diversity1Outlined } from '@mui/icons-material';
// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {


  return (
    /*
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <EarningCard isLoading={isLoading} />
          </Grid>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <TotalOrderLineChartCard isLoading={isLoading} />
          </Grid>
          <Grid item lg={4} md={12} sm={12} xs={12}>
            <Grid container spacing={gridSpacing}>
              <Grid item sm={6} xs={12} md={6} lg={12}>
                <TotalIncomeDarkCard isLoading={isLoading} />
              </Grid>
              <Grid item sm={6} xs={12} md={6} lg={12}>
                <TotalIncomeLightCard
                  {...{
                    isLoading: isLoading,
                    total: 203,
                    label: 'Total Income',
                    icon: <StorefrontTwoToneIcon fontSize="inherit" />
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} md={8}>
            <TotalGrowthBarChart isLoading={isLoading} />
          </Grid>
          <Grid item xs={12} md={4}>
            <PopularCard isLoading={isLoading} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    */

    <>

{/* 

<CCarousel controls transition="crossfade" style={{width:'100%', margin: '0 auto', display:'block'}}>
  <CCarouselItem>
    <CImage className="d-block w-100" src={college3} alt="slide 1" style={{ height: '400px', width: '50vw', objectFit: 'cover' }} />
  </CCarouselItem>
  <CCarouselItem>
    <CImage className="d-block w-100" src={conference} alt="slide 2" style={{ height: '400px', width: '50vw', objectFit: 'cover' }} />
  </CCarouselItem>
  <CCarouselItem>
    <CImage className="d-block w-100" src={lobby} alt="slide 3" style={{ height: '400px', width: '50vw', objectFit: 'cover' }} />
  </CCarouselItem>
  <CCarouselItem>
    <CImage className="d-block w-100" src={college2} alt="slide 3" style={{ height: '400px', width: '50vw', objectFit: 'cover' }} />
  </CCarouselItem>
</CCarousel>




      <div>
        <PrincipalCard />
      </div>
      <div>
        <TPOCard />
      </div>


      <div style={{ marginTop: '20px' }}>
        <Training />
      </div>

      <div style={{ marginTop: '10px' }}>
        <Salary />
      </div>
      <section id="PieChart">
      <div style={{ marginTop: '10px' }}>
        <PieChart />
      </div>
      </section>
      


      <div style={{ marginTop: '10px' }} >
        <AnimatedBarGraph />
      </div>
      <div style={{
          fontFamily: 'Inter',
          fontSize: '40px',
          color: '#3e2078',
          textAlign: 'center',
          marginTop: '40px',
          marginBottom: '40px',
          // marginLeft: '80px',
          fontWeight: '800'
        }}>Our Events</div>
        <Timeline />

      <div className="Appa">
        <div className="slider-title">
          <h1>Our Estemeed Recruiters</h1>
        </div>

        <div >
          <Marquee direction="right" speed={50} delay={5}>
            <div className="image_wrapper">
              <img src={microsoft} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={trilogy} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={phonepe} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={jpmc} alt="" />
            </div>
            <div>
              <img src={morgan} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={msci} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={dblogo} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={oracle} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={gep} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={wi} alt="" />
            </div>
          </Marquee>
        </div>

        <div style={{marginTop:'20px'
        }}>
          <Marquee direction="left" speed={50} delay={5}>
            <div className="image_wrapper">
              <img src={barclays} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={dolat} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={nomura} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={iss} alt="" />
            </div>
            <div>
              <img src={merkle} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={quantiphi} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={ib} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={baker} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={incred} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={deloite} alt="" />
            </div>
          </Marquee>
        </div>
      </div>


      <div style={{ margin: '10px' }}>
        <div style={{
          fontSize: '40px', justifyContent: 'center', display: 'flex',  fontFamily: 'Inter', fontWeight: '800', color: '#3e2078'
        }}>
          Testimonials from Our Recruiters
        </div>
        <Testimonial />
      </div>

      <div style={{ marginTop: '10px', }}>
        <Team />
      </div>
      <div style={{
        width: '100%',
        overflow: 'hidden',
        margin: '0',
        padding: '0',
        boxSizing: 'border-box'
      }}>
        <Footer />
      </div> */}


    </>

  );
};

export default Dashboard;
