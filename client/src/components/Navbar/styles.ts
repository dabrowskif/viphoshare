import { makeStyles } from '@mui/styles';
import { LEFT_NAVBAR_WIDTH } from '../../constants/style';

export default makeStyles((theme) => ({
  brandContainer: {
    marginLeft: '-15px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '10px 0',
  },
  brandIcon: {
    color: '#FFFFFF',
    '&:hover': {
      color: theme.palette.secondary.main,
      transition: 'color 0.3s',
    },
    textSize: '50px',
  },
  drawer: {
    width: LEFT_NAVBAR_WIDTH,
    flexShrink: 0,
    '& .MuiDrawer-paper': {
      boxSizing: 'border-box',
      backgroundColor: theme.palette.primary.main,
      width: LEFT_NAVBAR_WIDTH,
    },
  },
}));
