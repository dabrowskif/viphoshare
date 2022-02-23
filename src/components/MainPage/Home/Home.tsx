import React from 'react';
import { Grid, Typography } from '@mui/material';

import useStyles from './styles';

function MainPage(): JSX.Element {
  const classes = useStyles();

  return (
    <Grid className={classes.mainGrid}>
      <Grid item xs={12}>
        <Typography variant="h3" sx={{ marginBottom: '20px' }}>Welcome to Viphoshare!</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h5">Viphoshare is a website that allows you to post your videos and photos, and share them with your friends.</Typography>
      </Grid>
    </Grid>
  );
}

export default MainPage;
