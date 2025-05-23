import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';

function notificationsLabel(count) {
  if (count === 0) {
    return 'no notifications';
  }
  if (count > 99) {
    return 'more than 99 notifications';
  }
  return `${count} notifications`;
}

export default function AccessibleBadges() {
  return (
    <IconButton aria-label={notificationsLabel(100)} sx={{backgroundColor:"white", mr:3, ml:3}}>
      <Badge badgeContent={100} color="secondary" sx={{backgroundColor:"white"}}>
        <MailIcon sx={{backgroundColor:"white"}}/>
      </Badge>
    </IconButton>
  );
}