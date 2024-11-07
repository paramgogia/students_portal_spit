import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LogoSection from '../LogoSection';
 import TPOLogo from './TPOLogo';
// import policy24 from '../../../views/statistics/policy_pdf/policy_2024-25.pdf';
// import policy23 from '../../../views/statistics/policy_pdf/policy_2023-24.pdf';
// import policy22 from '../../../views/statistics/policy_pdf/policy_2022-23.pdf';
// import policy21 from '../../../views/statistics/policy_pdf/policy_2021-22.pdf';
// import policy20 from '../../../views/statistics/policy_pdf/policy_2020-21.pdf';
const Header = ({ handleLeftDrawerToggle }) => {
  const theme = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPolicyOpen, setIsPolicyOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerStyle = {
    transition: 'all 0.3s ease',
    height: isScrolled ? '50px' : '70px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 'fit-content',
    margin: '0',
    padding: '0'
  };

  const linkStyle = {
    color: theme.palette.text.primary,
    textDecoration: 'none',
    fontSize: '1.13rem',
    fontWeight: 500,
    margin: '20px',
    transition: 'color 0.3s ease',
    cursor: 'pointer',
    '&:hover': {
      color: theme.palette.primary.main,
    }
  };

  const dropdownStyle = {
    position: 'relative',
    display: 'inline-block'
  };

  const dropdownContentStyle = {
    position: 'absolute',
    top: '100%',
    right: '0',
    backgroundColor: '#fff',
    minWidth: '200px',
    boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
    borderRadius: '8px',
    padding: '8px 0',
    zIndex: 1000,
    opacity: isPolicyOpen ? 1 : 0,
    visibility: isPolicyOpen ? 'visible' : 'hidden',
    transform: isPolicyOpen ? 'translateY(0)' : 'translateY(-10px)',
    transition: 'all 0.3s ease'
  };

  const dropdownItemStyle = {
    padding: '12px 20px',
    display: 'block',
    color: theme.palette.text.primary,
    textDecoration: 'none',
    fontSize: '1rem',
    transition: 'all 0.2s ease',
    '&:hover': {
      backgroundColor: 'rgba(0,0,0,0.04)',
      color: theme.palette.primary.main
    }
  };

  return (
    <Box sx={headerStyle}>
      <LogoSection />
      <Box sx={{ flexGrow: 1 }} />
      {!isScrolled && (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <TPOLogo />
        </Box>
      )}
      <Box
        component="nav"
        sx={{
          display: { xs: 'none', md: 'flex' },
          alignItems: 'center',
          marginRight: '40px',
          position: 'fixed',
          right: '20px',
          top: isScrolled ? '10px' : '20px',
        }}
      >
        {/* <Typography component="a" href="https://online.fliphtml5.com/yrhqk/urgp/#p=1" target='blank' sx={linkStyle}>
          Brochure
        </Typography>
        
        <Box sx={dropdownStyle}
          onMouseEnter={() => setIsPolicyOpen(true)}
          onMouseLeave={() => setIsPolicyOpen(false)}
        >
          <Typography sx={linkStyle}>
            Policy
          </Typography>
          <Box sx={dropdownContentStyle}>
            <Typography component="a" target="_blank" href={policy24} sx={dropdownItemStyle}>
              Policy 2024-25
            </Typography>
            <Typography component="a" target="_blank" href={policy23} sx={dropdownItemStyle}>
              Policy 2023-24
            </Typography>
            <Typography component="a" target="_blank" href={policy22} sx={dropdownItemStyle}>
              Policy 2022-23
            </Typography>
            <Typography component="a" target="_blank" href={policy21} sx={dropdownItemStyle}>
              Policy 2021-22
            </Typography>
            <Typography component="a" target="_blank" href={policy20} sx={dropdownItemStyle}>
              Policy 2020-21
            </Typography>
          </Box>
        </Box> */}
{/* 
        <Typography component="a" href="/statistics" sx={linkStyle}>
          Statistics
        </Typography> */}
        {/* <Typography component="a" href="/our-team" sx={linkStyle}>
          Our Team
        </Typography> */}
        <Typography component="a" href="#footer" sx={linkStyle}>
          Contact Us
        </Typography>
      </Box>
    </Box>
  );
};

Header.propTypes = {
  handleLeftDrawerToggle: PropTypes.func
};

export default Header;