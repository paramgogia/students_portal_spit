import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Collapse from '@mui/material/Collapse';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import { FaExternalLinkAlt } from "react-icons/fa";
// import research24 from './research/2023-24.pdf';
// import research23 from './research/2022-23.pdf';
// import research22 from './research/2021-22.pdf';

// import industry24 from './industry_pdf/industry23-24.pdf';
// import industry23 from './industry_pdf/industry22-23.pdf';
// import industry22 from './industry_pdf/industry21-22.pdf';
// import industry21 from './industry_pdf/industry20-21.pdf';
// import industry20 from './industry_pdf/industry19-20.pdf';
import activity24 from './activity/Annual Activity Report 2023-24.pdf';
import activity23 from './activity/Annual Activity Report 2022-23.pdf';
import activity22 from './activity/Annual Activity Report 2021-22.pdf';

const InternshipComponent = () => {
  const policies = [
    // {
    //   title: "Clubs and Committees 2024 - 25",
    //   file: "",
    //   bgColor: "#9b59b6"
    //   },
    {
    title: "Annual Activity Report 2023 - 24",
    file: activity24,
    bgColor: "#4a90e2"
    },
    {
    title: "Annual Activity Report 2022 - 23",
    file: activity23,
    bgColor: "#50c878"
    },
    {
    title: "Annual Activity Report 2021 - 22",
    file: activity22,
    bgColor: "#4a90e2"
    },
  ];
    const handleFileDownload = (filePath) => {
        // In a real application, you would implement your file download logic here
        console.log(`Downloading file from: ${filePath}`);
      };

    return (
      <Box sx={{ padding: 3 }}>
        <Typography variant="h1" sx={{ mb: 4, color: '#3e2078', fontWeight: 600 }}>
          Activity Report
        </Typography>
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 3 }}>
          {policies.map((policy, index) => (
              <a
              key={index}
              href={policy.file}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
          >
            <Card 
              key={index}
              sx={{
                height: '100%',
                transition: 'transform 0.3s, box-shadow 0.3s',
                cursor: 'pointer',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                },
                position: 'relative',
                overflow: 'hidden',
                borderRadius: 2,
              }}
              onClick={() => handleFileDownload(policy.file)}
            >
              <Box
                sx={{
                  height: '8px',
                  width: '100%',
                  backgroundColor: policy.bgColor,
                }}
              />
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h4" sx={{ mb: 1, fontWeight: 500 }}>
                  {policy.title}
                </Typography>
              </CardContent>
            </Card>
            </a>
          ))

          
          }
          
        </Box>


        
      </Box>
      
    );
  };

  export default InternshipComponent;