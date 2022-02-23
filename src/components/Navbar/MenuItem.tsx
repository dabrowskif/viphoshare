import React from 'react';

import {
  ListItem, ListItemButton, ListItemIcon, ListItemText,
} from '@mui/material';
import UploadIcon from '@mui/icons-material/Upload';
import HomeIcon from '@mui/icons-material/Home';

function MenuItem(props: { name: string }): JSX.Element {
  const { name } = props;

  const getIcon = (): JSX.Element => {
    switch (name) {
      case 'Upload':
        return <UploadIcon />;
      case 'Home':
        return <HomeIcon />;
      default:
        throw new Error();
    }
  };

  return (
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemIcon sx={{ color: '#FFFFFF' }}>
          {getIcon()}
        </ListItemIcon>
        <ListItemText
          primary={name}
        />
      </ListItemButton>
    </ListItem>
  );
}

export default MenuItem;
