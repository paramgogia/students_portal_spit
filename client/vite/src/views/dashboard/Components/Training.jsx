import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../CSS/training.css'; // Import your CSS file
import barclays from '../website_final_images/barclays_session2.jpeg';
import dbsess from '../website_final_images/db_session.png';
import phonepe from '../website_final_images/phonepe_session.png';
import amdocs from '../website_final_images/Amdocs.jpeg';
import annual from '../website_final_images/annual1.jpeg';
import alumini from '../website_final_images/aluminis_annual.png'

const Training = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 4000, // 5 seconds
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };

    const cards = [
        {
            id: 1,
            title: "Industry Connect",
            description: "A session by Barclays with our students.",
            image: barclays,
            classname: "unique-card-1"
        },
        {
            id: 2,
            title: "Professional Training",
            description: "Training session by Deutsche Bank.",
            image: dbsess,
            classname: "unique-card-2"
        },
        {
            id: 3,
            title: "Visits",
            description: "A visit to amdocs by our team",
            image: amdocs,
            classname: "unique-card-3"
        },
        {
            id: 4,
            title: "Interactive Session",
            description: "A guidance session by PhonePe selects.",
            image: phonepe,
            classname: "unique-card-4"
        },
        {
            id: 5,
            title: "Annual day",
            description: "Price distribution to merit stqudents.",
            image: annual,
            classname: "unique-card-5"
        },
        {
            id: 6,
            title: "Alumini Meet",
            description: "Meeting with our alumini.",
            image: alumini,
            classname: "unique-card-6"
        }
    ];

    const handleCardClick = (url) => {
        window.location.href = url;
    };

    return (
        <div className="ccr">
            <div style={{
                fontSize: '2.5rem',
                fontFamily: 'Inter',
                color: '#ffffff',
                fontWeight: '800',
                textAlign: 'center',
                margin: '10px',
                marginBottom: '3rem'
            }}>
            Creating industry-ready Professionals
            </div>
            <Slider {...settings}>
                {cards.map(card => (
                    <div 
                        key={card.id} 
                        className={`c ${card.classname}`}
                    >
                        <img src={card.image} alt={card.title} className="c-image" />
                        <div className="cc">
                            <h2>{card.title}</h2>
                            <p>{card.description}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Training;
