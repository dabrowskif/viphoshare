import React from 'react';
import { Grid, Grow, Typography } from '@mui/material';

import useStyles from './styles';

function MainPage(): JSX.Element {
  const classes = useStyles();

  return (
    <Grow in timeout={1000}>
      <Grid className={classes.mainGrid}>
        <Grid item xs={12}>
          <Typography variant="h3" sx={{ marginBottom: '20px' }}>
            Welcome to Viphoshare!
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" sx={{ marginBottom: '40px' }}>
            Viphoshare is a website that allows you to post your
            videos and photos, and share them with your friends.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5">
            Upload your first video or photo here!
          </Typography>
        </Grid>
      </Grid>
    </Grow>
  );
}

export default MainPage;
