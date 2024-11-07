import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { useState } from 'react';
// material-ui
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import useMediaQuery from '@mui/material/useMediaQuery';

// project imports
import { CssBaseline, styled, useTheme } from '@mui/material';
import Header from './Header';
import Sidebar from './Sidebar';
import Customization from '../Customization';
import Breadcrumbs from 'ui-component/extended/Breadcrumbs';
import { SET_MENU } from 'store/actions';
import { drawerWidth } from 'store/constant';

// assets
import { IconChevronRight } from '@tabler/icons-react';
import { padding } from '@mui/system';

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' && prop !== 'theme' })(({ theme, open , noTransition}) => ({
  ...theme.typography.mainContent,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
  transition:  noTransition ? 'none':theme.transitions.create(
    'margin',
    open
      ? {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen
        }
      : {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen
        }
  ),backgroundColor: '#ffffff',
  marginLeft: '0px',
  marginRight: '0px',
  padding: '0px',
  [theme.breakpoints.up('md')]: {
    
    
  },
  [theme.breakpoints.down('md')]: {
   
    
  },
  [theme.breakpoints.down('sm')]: {
   
   
    
  }
}));

// ==============================|| MAIN LAYOUT ||============================== //

const MainLayout = () => {
  const [noTransition, setNoTransition] = useState(true);
  const theme = useTheme();
  const matchDownMd = useMediaQuery(theme.breakpoints.down('md'));
  // Handle left drawer
  const leftDrawerOpened = useSelector((state) => state.customization.opened);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch({ type: SET_MENU, opened: true });
    setTimeout(() => setNoTransition(false), 0);
  }, [dispatch]);

  const handleLeftDrawerToggle = () => {
    dispatch({ type: SET_MENU, opened: !leftDrawerOpened });
  };
  return (
    <Box sx={{ display: 'flex', width: "100%", padding: "-20px !important", overflowX: "hidden" }}>
      <CssBaseline />
      {/* header */}
      <AppBar
        enableColorOnDark
        position="fixed"
        color="inherit"
        elevation={0}
        sx={{
          bgcolor: '#ffffff',
          transition: leftDrawerOpened ? theme.transitions.create('width') : 'none'
        }}
      >
        <Toolbar>
         <Header handleLeftDrawerToggle={handleLeftDrawerToggle} style={{padding: "0 !important"}}/>
        </Toolbar>
      </AppBar>

      {/* drawer */}
 
      {/* main content */}
      <Main theme={theme} open={leftDrawerOpened} noTransition={noTransition}>
        {/* breadcrumb */}
        {/* <Breadcrumbs separator={IconChevronRight} navigation={navigation} icon title rightAlign /> */}
        <Outlet />
      </Main>
    
    </Box>
  );
};

export default MainLayout;
