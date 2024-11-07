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
import { FaExternalLinkAlt } from "react-icons/fa";

// import stats24 from './placement_pdf/stats_24.pdf';
// import stats23 from './placement_pdf/stats_23.pdf';
// import stats22 from './placement_pdf/stats_22.pdf';
// import stats21 from './placement_pdf/stats_21.pdf';
// import stats20 from './placement_pdf/stats_20.pdf';
// import prev from './placement_pdf/prevplacement.pdf';
// import details24 from './placement_pdf/details24.pdf';
// import details23 from './placement_pdf/details23.pdf';
// import details22 from './placement_pdf/details22.pdf';
// import details21 from './placement_pdf/details21.pdf';
// import details20 from './placement_pdf/details20.pdf';
import council25 from './council/Students Council 2024-25.pdf';
import council24 from './council/Students Council 2023-24.pdf';
import council23 from './council/Students Council 2022-23.pdf';
import council22 from './council/Students Council 2021-22.pdf';
const Council = () => {
  const policies = [
    // {
    //   title: "Clubs and Committees 2024 - 25",
    //   file: "",
    //   bgColor: "#9b59b6"
    //   },
    {
    title: "Student's Council 2023 - 24",
    file: council25,
    bgColor: "#4a90e2"
    },
    {
        title: "Student's Council 2022 - 23",
        file: council24,
        bgColor: "#9b59b6"
        },
        {
            title: "Student's Council 2021- 22",
            file: council23,
            bgColor: "#4a90e2"
            },
            {
              title: "Student's Council 2023 - 24",
              file: council22,
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
          Student's Council
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

  export default Council;