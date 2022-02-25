import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  mainGrid: {
    width: '100%',
    position: 'relative',
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: '100px',
  },
  resourceUpload: {
    marginTop: '80px',
    height: '400px',
    backgroundColor: theme.palette.primary.main,
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    border: `2px dashed ${theme.palette.secondary.main}`,
  },
}));
