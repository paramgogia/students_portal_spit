import Typography from '@mui/material/Typography';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import Footer from 'views/dashboard/Components/Footer';
import param from './team_images/param_final_final.png';
import niranjan from './team_images/niranjan.png';

const styles = {
  colleges: {
    width: '100%',
    height: 'auto',
    padding: '20px 0px'
  },
  container: {
    width: '95%',
    height: 'auto'
  },
  heading: {
    fontFamily: 'Poppins',
    fontSize: '30px',
    fontWeight: 600,
    color: '#1c4386',
    textAlign: 'center',
    transition: 'all 0.3s ease'
  },
  container2: {
    width: '100%',
    alignItems: 'center',
    display: 'flex',
    fontFamily: 'Poppins',
    flexWrap: 'wrap',
    justifyContent: 'center',
    margin: 'auto'
  },
  person: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    width: '700px',
    height: 'auto',
    margin: '2rem'
  },
  container1: {
    position: 'relative', // Added position relative
    borderRadius: '50%',
    height: '700px',
    WebkitTapHighlightColor: 'transparent',
    transform: 'scale(0.48)',
    transition: 'transform 250ms cubic-bezier(0.4, 0, 0.2, 1)',
    width: '700px',
    overflow: 'visible' // Changed from hidden to visible
  },
  containerInner: {
    borderRadius: '50%',
    position: 'relative',
    transformOrigin: '50%',
    width: '700px',
    height: '700px',
    overflow: 'hidden' // Added overflow hidden here instead
  },
  img: {
    pointerEvents: 'none',
    position: 'relative',
    transform: 'translateY(20px)',
    transformOrigin: '50% bottom',
    transition: 'transform 300ms cubic-bezier(0.4, 0, 0.2, 1)',
    width: '700px',
    height: '700px',
    objectFit: 'cover',
    borderRadius: '50%',
     // Added explicit z-index
      },
      divider: {
        backgroundColor: '#ca6060',
        height: '2.5px',
        width: '160px'
      },
      name: {
        color: '#404245',
        fontSize: '20px',
        fontWeight: 600,
        marginTop: '16px',
        textAlign: 'center'
      },
      designation: {
        color: '#404245',
        fontSize: '16px',
        fontWeight: 600,
        marginTop: '8px',
        textAlign: 'center'
      },
      description: {
        color: '#404245',
        fontSize: '16px',
        fontWeight: 400,
        marginTop: '1rem',
        textAlign: 'justify'
      },
      hoverContainerInner: {
        content: '',
        position: 'absolute',
        bottom: '-170px',
        left: '0',
        width: 'calc(90% + 30px)',
        height: 'calc(90% + 10px)',
        backgroundColor: '#3e2078',
        borderRadius: '50%',
        zIndex: '-1',
        scale: '1.12',
        boxShadow: 'none',
        transition: 'border-radius 0.3s 0.1s, background-color 0.3s'
      },
      hoverContainerInnerHover: {
        borderRadius: '33% 67% 50% 50% / 50% 14% 86% 50%',
        boxShadow: 'rgb(0 0 2 / 35%) 0 20px 30px -10px',
        backgroundColor: '#fff',
        transition: 'border-radius 0.3s 0.1s',
        zIndex: '-1'
      },
      
};

const OurTeam = ({ team = [] }) => {
  const sampleTeam = [
    {
      name: "Param Gogia",
      image: param,
    },
    {
      name: "Niranjan Devadiga",
      image: niranjan,
    }
  ];

  const teamData = team.length > 0 ? team : sampleTeam;

  const handleHover = (e) => {
    const container = e.currentTarget;
    const img = container.querySelector('img');
    const hoverElement = container.querySelector('.hover-element');
    
    container.style.transform = 'scale(0.54)';
    if (img) img.style.transform = 'translateY(0) scale(1.2)';
    if (hoverElement) {
      hoverElement.style.borderRadius = '33% 67% 50% 50% / 50% 14% 86% 50%';
      hoverElement.style.backgroundColor = '#1c4386';
      hoverElement.style.boxShadow = 'rgb(0 0 2 / 35%) 0 20px 30px -10px';
      hoverElement.style.transform = 'scale(1.1)'; // Added scale effect
    }
  };

  const handleHoverExit = (e) => {
    const container = e.currentTarget;
    const img = container.querySelector('img');
    const hoverElement = container.querySelector('.hover-element');
    
    container.style.transform = 'scale(0.48)';
    if (img) img.style.transform = 'translateY(20px)';
    if (hoverElement) {
      hoverElement.style.borderRadius = '50%';
      hoverElement.style.backgroundColor = '#fff';
      hoverElement.style.boxShadow = 'none';
      hoverElement.style.transform = 'scale(1)'; // Reset scale
    }
  };

  return (
    <div style={styles.colleges}>
      <div style={styles.container}>
        <h1 style={styles.heading}>Meet Our Team</h1>
        <div style={styles.container2}>
       < div className="container-inner">
            <img className="img" src={param} alt="Principal" />
            </div>
          {teamData.map((member, index) => (
            <div key={index} style={styles.person}>
              <div 
                style={styles.container1}
                onMouseEnter={handleHover}
                onMouseLeave={handleHoverExit}
              >
                <div style={styles.containerInner}>
                  <div className="hover-element" style={styles.hoverContainerInner} />
                  <img
                    style={styles.img}
                    src={member.image}
                    alt={member.name}
                  />
                </div>
              </div>
              <div style={styles.divider}></div>
              <div style={styles.name}>{member.name}</div>
              <div style={styles.designation}>{member.designation}</div>
              <div style={styles.description}>{member.description}</div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default OurTeam;