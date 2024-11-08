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
import minimen from './mentoring/Alumni Mentoring for mini project.pdf';
import mini2 from './mentoring/Process Manual 1st year mentoring.pdf';
// import { FaExternalLinkAlt } from "react-icons/fa";
// import company1920 from './company_pdf/company19-20.pdf';
// import company2021 from './company_pdf/company20-21.pdf';
// import company2122 from './company_pdf/company21-22.pdf';
// import company2223 from './company_pdf/company22-23.pdf';
// import company2324 from './company_pdf/company23-24.pdf'
const CompanyComponent = () => {
    const policies = [
      {
        title: "Alumni Mentoring for Mini Project",
        file: minimen ,
        bgColor: "#9b59b6"
        },
        {
          title: "Process Manual 1st Year Mentoring",
          file: mini2 ,
          bgColor: "#9b59b6"
          },

    ];
    
    const handleFileDownload = (filePath) => {
      // In a real application, you would implement your file download logic here
      console.log(`Downloading file from: ${filePath}`);
      };

    return (
      <Box sx={{ padding: 3 }}>
        <Typography variant="h1" sx={{ mb: 4, color: '#3e2078', fontWeight: 600 }}>
         Mentorship Details
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
          ))}
        </Box>
      </Box>
    );
  };

  export default CompanyComponent;