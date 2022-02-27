import React from 'react';

import {
  Divider, Drawer, IconButton, List, Typography,
} from '@mui/material';

import ScreenShareIcon from '@mui/icons-material/ScreenShare';

import MenuItem from './MenuItem';
import useStyles from './styles';

function Navbar(): JSX.Element {
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      anchor="left"
    >
      <div className={classes.brandContainer}>
        <IconButton>
          <ScreenShareIcon className={classes.brandIcon} />
        </IconButton>
        <Typography>
          Viphoshare
        </Typography>
      </div>
      <Divider sx={{ marginBottom: '20px', borderColor: '#FFFFFF' }} />
      <List>
        <MenuItem name="Home" />
        <MenuItem name="Upload" />
      </List>
    </Drawer>
  );
}

export default Navbar;
