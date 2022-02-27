import React, {
  ChangeEvent, useRef, useState,
} from 'react';
import {
  Button, Grid, Grow, Typography,
} from '@mui/material';
/* @ts-ignore */
import { Player } from 'video-react';

import useStyles from './styles';
import { CustomVideo } from '../../../ts/types';

function Upload(): JSX.Element {
  const classes = useStyles();
  const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const [file, setFile] = useState<CustomVideo | undefined>();

  const handleFileChange = (event: ChangeEvent): void => {
    const target = event.target as HTMLInputElement;
    const newFile: File = (target.files as FileList)[0];

    console.log(newFile);

    setFile({ ...file, source: newFile, url: URL.createObjectURL(newFile) });
  };

  const handleFileChoose = (): void => {
    inputRef.current.click();
  };

  return (
    <Grow in timeout={1000}>
      <Grid className={classes.mainGrid}>
        <Grid item xs={12} sx={{ marginBottom: '40px' }}>
          <Typography variant="h3">Upload video or photo</Typography>
        </Grid>
        {!file
          && (
            <Grid item xs={12} className={classes.resourceUpload}>
              <Typography variant="h5">Drop your file here!</Typography>
              <Typography variant="h6" sx={{ marginTop: '10px' }}>
                Or
                <input
                  ref={inputRef}
                  type="file"
                  onChange={handleFileChange}
                  accept=".mp4"
                  style={{ display: 'none' }}
                />
                <Button variant="outlined" onClick={handleFileChoose}>
                  upload
                </Button>
                them manually.
              </Typography>
            </Grid>
          )}
        <Grid item xs={12}>
          {
            file?.source
            && (
              <>
                {/* <video
                  width="960px"
                  height="540px"
                  controls
                  src={file?.url}
                /> */}
                <Player
                  className={classes.videoPlayer}
                  playsInline
                  src={file?.url}
                />
              </>
            )
          }
        </Grid>
      </Grid>
    </Grow>
  );
}

export default Upload;
