import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  mainGrid: {
    width: '100%',
    position: 'relative',
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: '40px',
  },
  resourceUpload: {
    width: '960px',
    height: '540px',
    backgroundColor: theme.palette.primary.main,
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    border: `2px dashed ${theme.palette.secondary.main}`,
    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 10px 15px',
  },
  uploadButton: {
    // color: '#2196F3',
    // borderColor: '#2196F3',
    // background: 'transparent',
    // position: 'relative',
    // overflow: 'hidden',
    // '&::after': {
    //   content: '',
    //   position: 'absolute',
    //   background: '#2196F3',
    //   width: '150%',
    //   paddingTop: '150%',
    //   transition: '0.25s ease',
    //   transform: 'rotate(25deg)',
    //   top: '-100%',
    //   left: '-190%',
    // },
    // '&:hover': {
    //   color: '#FFF',
    //   '&:after': {
    //     left: '-30%',
    //   },
    // },
  },
  videoPlayer: {
    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 10px 15px',
  },
}));
