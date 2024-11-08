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
// import hs2020 from './highered_pdf/hs2020.pdf';
// import hs2021 from './highered_pdf/hs2021.pdf';
// import hs2022 from './highered_pdf/hs2022.pdf';
// import hs2023 from './highered_pdf/hs2023.pdf';
// import hs2024 from './highered_pdf/hs2024.pdf';
import award24 from './awards/Awards and Recognition 2023-24.pdf';
import award23 from './awards/Awards and Recognition 2022-23.pdf';
import award22 from './awards/awards21-22-1.pdf';
import award21 from './awards/awards20-21-1.pdf';
import award20 from './awards/awards19-20-1.pdf';
import award19 from './awards/awards18-19-1.pdf';

const HigherEdComponent = () => {
  const policies = [
    // {
    //   title: "Clubs and Committees 2024 - 25",
    //   file: "",
    //   bgColor: "#9b59b6"
    //   },
    {
    title: "Awards & Achievements 2023 - 24",
    file: award24,
    bgColor: "#4a90e2"
    },
    {
    title: "Awards & Achievements 2022 - 23",
    file: award23,
    bgColor: "#50c878"
    },
  {
  title: "Awards & Achievements 2021 - 22",
  file: award22,
  bgColor: "#f39c12"
  },
  {
  title: "Awards & Achievements 2020 - 21",
  file: award21,
  bgColor: "#e74c3c"
  },
  {
  title: "Awards & Achievements 2019 - 20",
  file: award20,
  bgColor: "#8e44ad"
  },
  {
  title: "Awards & Achievements 2018 - 19",
  file: award19,
  bgColor: "#3498db"
  }
   
  ];
    const handleFileDownload = (filePath) => {
        // In a real application, you would implement your file download logic here
        console.log(`Downloading file from: ${filePath}`);
      };

    return (
      <Box sx={{ padding: 3 }}>
        <Typography variant="h1" sx={{ mb: 4, color: '#3e2078', fontWeight: 600 }}>
          Students Awards & Achievement
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

  export default HigherEdComponent;