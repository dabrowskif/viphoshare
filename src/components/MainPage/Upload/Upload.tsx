import { Grid, Grow, Typography } from '@mui/material';
import React from 'react';

import useStyles from './styles';

function Upload(): JSX.Element {
  const classes = useStyles();

  return (
    <Grow in timeout={1000}>
      <Grid className={classes.mainGrid}>
        <Grid item xs={12}>
          <Typography variant="h3">Upload video or photo</Typography>
        </Grid>
        <Grid item xs={12} className={classes.resourceUpload}>
          <Typography variant="h5">Drop your file here!</Typography>
          <Typography variant="h6">Or &gt;upload&lt; them manually.</Typography>
        </Grid>
      </Grid>
    </Grow>
  );
}

export default Upload;
