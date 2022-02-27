import React from 'react';
import {
  Button, Grid, Grow, Typography,
} from '@mui/material';

import { Link } from 'react-router-dom';
import useStyles from './styles';

function MainPage(): JSX.Element {
  const classes = useStyles();

  return (
    <Grow in timeout={1000}>
      <Grid className={classes.mainGrid}>
        <Grid item xs={12}>
          <Typography variant="h2" sx={{ marginBottom: '10px' }}>
            Welcome to Viphoshare!
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" sx={{ marginBottom: '100px' }}>
            Viphoshare is a website that allows you to post your
            videos and photos, and share them with your friends.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5">
            Upload your first video or photo
            <Button
              variant="outlined"
              component={Link}
              to="/upload"
            >
              here!
            </Button>
          </Typography>
        </Grid>
      </Grid>
    </Grow>
  );
}

export default MainPage;
