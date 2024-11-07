import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// material-ui
import ButtonBase from '@mui/material/ButtonBase';

// project imports
import config from 'config';
import Logo from 'ui-component/Logo';
import { MENU_OPEN } from 'store/actions';
import logo from './SPIT Logo Brown.png'
import { Box } from '@mui/system';
// ==============================|| MAIN LOGO ||============================== //

const LogoSection = () => {
  const defaultId = useSelector((state) => state.customization.defaultId);
  const dispatch = useDispatch();
  return (
    <Box  sx={{ height: '70px', width: 'fit-content', margin:'0px', padding: '0px', display: 'flex', justifyContent:'center'}}>
      <a href="/" style={{ height: '100%', width: '100%' }}>
    <img src={logo} alt="SPIT Logo" style={{ height: '100%', width: '100%' }} />
  </a>
     </Box>
      
  );
};

export default LogoSection;
