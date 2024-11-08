import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Collapse from '@mui/material/Collapse';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { IoDocumentTextOutline } from "react-icons/io5";
import { GrGroup } from "react-icons/gr";
import { MdQueryStats } from "react-icons/md";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { Card, CardContent } from '@mui/material';
import { FaLaptopCode  } from "react-icons/fa";
import { LiaUniversitySolid } from "react-icons/lia";
import PolicyComponent from './policy';
import StatsComponent from './stats.jsx';
import InternshipComponent from './internship.jsx';
import HigherEdComponent from './highered.jsx';
import CompanyComponent from './companies.jsx';
import TeamComponent from './team.jsx';
import Footer from '../dashboard/Components/Footer';
// project imports
import MainCard from 'ui-component/cards/MainCard';
import Council from './council';
import { IoIosPeople } from "react-icons/io";
import { BsHouse } from "react-icons/bs";
import { LiaAwardSolid } from "react-icons/lia";
import { MdPeopleOutline } from "react-icons/md";
import { HiOutlineDocumentReport } from "react-icons/hi";
// Import Inter font
import '@fontsource/inter';
import useMediaQuery from '@mui/material/useMediaQuery';

// Policy Component


const Statistics = () => {
  const [selectedComponent, setSelectedComponent] = useState(<StatsComponent />);
  const [openSubItems, setOpenSubItems] = useState({});

// Use MUI’s useMediaQuery for responsiveness
const isMobile = useMediaQuery('(max-width:600px)');
const isTablet = useMediaQuery('(max-width:960px)');


  const handleToggleSubItems = (index) => {
    setOpenSubItems((prevOpen) => ({
      ...prevOpen,
      [index]: !prevOpen[index],
    }));
  };

  const menuItems = [
    {
      text: "Student's Council",
      icon:<IoIosPeople />,
      component: <Council/>,
      subItems: [
      ],
    },
  
    {
      text: 'Clubs & Committees',
      icon: <BsHouse />,
      component: <StatsComponent/>,
      subItems: [
      ],
    },
    {
      text: 'Activity Reports',
      icon: <HiOutlineDocumentReport />,
      component: <InternshipComponent/>,
      subItems: [
      ],
    },
    {
      text: 'Awards & Achievements',
      icon: <LiaAwardSolid />,
      component: <HigherEdComponent/>,
      subItems: [
      ],
    },
    {
      text: "Student's Manual & Empowerment Policy",
      icon: <LiaUniversitySolid />,
      component: <PolicyComponent/>,
      subItems: [
      ],
    },
    {
      text: 'Mentoring',
      icon: <MdPeopleOutline />,
      component: <CompanyComponent />,
      subItems: [],
    },
  ];

  const handleMenuItemClick = (component) => {
    setSelectedComponent(component);
  };

  const listItemStyles = {
    padding: '10px 16px',
    borderRadius: 1,
    '&:hover': { backgroundColor: '#5a3c8b' },
    '& .MuiListItemText-root': {
      '& .MuiTypography-root': {
        color: '#ffffff',
      },
    },
  };

  const subItemStyles = {
    pl: 6,
    padding: '8px 16px',
    '&:hover': { backgroundColor: '#6a4cae' },
    '& .MuiListItemText-root': {
      '& .MuiTypography-root': {
        color: '#ffffff',
      },
    },
  };

  return( <>
    <MainCard sx={{ fontFamily: 'Inter, sans-serif' }}>
      <Box sx={{ display: 'flex', display: isTablet ? 'block' : 'flex' }}>
        <Box
          sx={{
            width: isMobile ? '100%' : isTablet ? '100%' : '250px',
            backgroundColor: '#3e2078',
            boxShadow: 1,
            padding: 2,
            borderRadius: 2,
            marginRight: isTablet ? 0 : 3,
            marginBottom: isTablet ? 3 : 0,
            overflowY: 'auto',
            height: isTablet ? 'auto' : '90vh',
            '& *': { color: '#ffffff' },
          }}
        >
          <List>
            {menuItems.map((item, index) => (
              <div key={index}>
                <ListItem
                  button
                  onClick={() => {
                    handleMenuItemClick(item.component);
                    if (item.subItems && item.subItems.length > 0) {
                      handleToggleSubItems(index);
                    }
                  }}
                  sx={listItemStyles}
                >
                  <ListItemIcon sx={{ minWidth: 40, color: '#ffffff' }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText 
                    primary={item.text} 
                    primaryTypographyProps={{ style: { color: '#ffffff' } }}
                  />
                  {item.subItems && item.subItems.length > 0 && (
                    openSubItems[index] ? <ExpandLessIcon /> : <ExpandMoreIcon />
                  )}
                </ListItem>

                {item.subItems && item.subItems.length > 0 && (
                  <Collapse in={openSubItems[index]} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {item.subItems.map((subItem, subIndex) => (
                        <ListItem
                          button
                          key={subIndex}
                          onClick={() => handleMenuItemClick(subItem.component)}
                          sx={subItemStyles}
                        >
                          <ListItemText 
                            primary={subItem.text} 
                            primaryTypographyProps={{ style: { color: '#ffffff' } }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </Collapse>
                )}
                <Divider sx={{ backgroundColor: 'rgba(255, 255, 255, 0.12)' }} />
              </div>
            ))}
          </List>
        </Box>

        <Box sx={{ flexGrow: 1, backgroundColor: '#f5f5f5', borderRadius: 2, p: 2 }}>
          {selectedComponent}
        </Box>
      </Box>
      
    </MainCard>
   <div style={{
    width: '100%',
    overflow: 'hidden',
    margin: '0',
    padding: '0',
    boxSizing: 'border-box'
  }}>
    <Footer />
  </div>
  </>
  );
};

export default Statistics;