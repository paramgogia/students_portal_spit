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
// import t21 from './team/Training & Placement Team 2020-21.pdf';
// import t22 from './team/Training & Placement Office Team 2021-22.pdf';
// import t23 from './team/Training & Placement Office Team 2022-23.pdf';
// import t24 from './team/Training & Placement Office Team 2023-24.pdf';
// import t25 from './team/Training & Placement Office Team 2024-25.pdf'
const TeamComponent = () => {
    const policies = [
      {
        title: "Training & Placement Team 2024 - 25",
        file: "",
        bgColor: "#9b59b6"
        },
      {
      title: "Training & Placement Team 2023 - 24",
      file: "",
      bgColor: "#4a90e2"
      },
      {
      title: "Training & Placement Team 2022 - 23",
      file: "",
      bgColor: "#50c878"
      },
      {
      title: "Training & Placement Team 2021 - 22",
      file: "",
      bgColor: "#4a90e2"
      },
      {
      title: "Training & Placement Team 2020 - 21",
      file: "" ,
      bgColor: "#50c878"
      },
    ];
    const handleFileDownload = (filePath) => {
        // In a real application, you would implement your file download logic here
        console.log(`Downloading file from: ${filePath}`);
      };

    return (
      <Box sx={{ padding: 3 }}>
        <Typography variant="h1" sx={{ mb: 4, color: '#3e2078', fontWeight: 600 }}>
          Training & Placement Team
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

  export default TeamComponent;