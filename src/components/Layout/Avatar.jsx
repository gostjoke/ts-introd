import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Popover from "@mui/material/Popover";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import NotificationsIcon from "@mui/icons-material/Notifications";
// import Badge from "@mui/material/Badge";
import { deepOrange, deepPurple } from '@mui/material/colors';

// 
import { useNavigate, Link  } from 'react-router-dom';

const AvatarDemo = () => {
  const [avatarEl, setAvatarEl] = useState(null);
  const [invisible, setInvisible] = useState(false);

  const handleAvatarClick = (e) => {
    setAvatarEl(e.currentTarget);
  };

  const handleAvatarClose = () => {
    setAvatarEl(null);
  };

  const [notifyEl, setNotifyEl] = useState(null);

  const handleBadgeVisibility = () => {
    setInvisible(!invisible);
  };

  const handleNotifyOpen = (e) => {
    setNotifyEl(e.currentTarget);
    if (!invisible) {
      handleBadgeVisibility();
    }
  };

  const handleNotifyClose = () => {
    setNotifyEl(null);
  };

  const open = Boolean(avatarEl);
  const id = open ? "simpe-popover" : undefined;

  const notifyOpen = Boolean(notifyEl);
  const notifyId = notifyOpen ? "simpe-notify" : undefined;

  const navigate = useNavigate();  // 创建navigate实例

  const handleLogout = () => {
    localStorage.clear();  // 清除localStorage中的信息
    navigate('/login');  // 跳转到登录页面
  };


  return (
    <div>
      <Stack direction="row" spacing={1}>
        {/* <Button aria-describedby={id} onClick={handleNotifyOpen}>
          <Badge
            color="warning"
            overlap="circular"
            badgeContent="1"
            invisible={invisible}
            showZero={true}
          >
            <NotificationsIcon />
          </Badge>
        </Button> */}
        <Button aria-describedby={id} onClick={handleAvatarClick} sx={{ width:'100%', height:'100%' }}>
          <Avatar sx={{ bgcolor: deepOrange[500], fontSize: `${localStorage?.getItem('user').length*0.125 || 0}rem` }}>{localStorage?.getItem('user') || "0"}</Avatar>
          <KeyboardArrowDownIcon />
        </Button>
      </Stack>

      <Popover
        id={id}
        open={open}
        anchorEl={avatarEl}
        onClose={handleAvatarClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
      >
        <List disablePadding>
          <ListItem disablePadding>
            <ListItemButton href="/myaccount/">
              <ListItemText primary="My Account" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton href="/changepassword/">
              <ListItemText primary="Change Password" />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Favorites" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Setting" />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton onClick={handleLogout}>
              <ListItemText primary="Log out" />
            </ListItemButton>
          </ListItem>
        </List>
      </Popover>

      <Popover
        id={notifyId}
        open={notifyOpen}
        anchorEl={notifyEl}
        onClose={handleNotifyClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
      >
        <List disablePadding>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Avatar" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Favorites" />
            </ListItemButton>
          </ListItem>
        </List>
      </Popover>
    </div>
  );
};

export default AvatarDemo;
