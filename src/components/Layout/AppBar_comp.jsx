import Button from '@mui/material/Button';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate, Link  } from 'react-router-dom';  // 引入useNavigate
import TimeClock from './TimeClock'
import TextField from '@mui/material/TextField';
// import Avatar from '@mui/material/Avatar';
import Avatar from './Avatar'
import AccessibleBadges from './AccessibleBadges';
// import { deepOrange, deepPurple } from '@mui/material/colors';

import ChatDialog from './AIdialog'

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default function AppBar_comp({ open, handleDrawerOpen }) {
  const navigate = useNavigate();  // 创建navigate实例

  // const handleLogout = () => {
  //   localStorage.clear();  // 清除localStorage中的信息
  //   navigate('/login');  // 跳转到登录页面
  // };
  

  return (
    <AppBar position="fixed" open={open} sx={{height:{xs:"60px", md:"auto", lg:"auto"}}}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={[
            { marginRight: 5 },
            open && { display: 'none' },
          ]}
        >
          <MenuIcon />
        </IconButton>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Typography variant="h6" noWrap component="div" sx={{width: { xs: 0, sm: 'auto' },}}>
            Tien-Wei Hsu Home Introduction
          </Typography>
        </Link>
        <div style={{ flexGrow: 1 }}></div>
        <Typography variant="h6" noWrap component="div">
          <TextField sx={{background:"white", height:{xs:"40px", md:"auto", lg:"auto"}}} 
          id="outlined-basic" label="Search" variant="outlined" />
        </Typography>
        <div style={{ flexGrow: 1 }}></div>
        <TimeClock/>
        <div style={{ flexGrow: 1 }}></div>

        <ChatDialog/>
        
        <AccessibleBadges/>

        <Avatar/>
        {/* <Avatar sx={{ bgcolor: deepOrange[500] }}>{localStorage.getItem('user')}</Avatar> */}
        {/* <Button color="inherit" sx={{ justifyContent: "flex-start" }}>
        </Button> */}
        {/* <Button onClick={handleLogout} color="inherit" sx={{ justifyContent: "flex-start" }}>
          Logout
        </Button> */}
      </Toolbar>
    </AppBar>
  );
}
