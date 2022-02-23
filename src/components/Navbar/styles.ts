import { makeStyles } from '@mui/styles';
import { PRIMARY_DARK } from '../../theme';

export default makeStyles(() => ({
  brandContainer: {
    marginLeft: '-15px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '10px 0',
  },
  brandIcon: {
    color: '#FFFFFF',
    textSize: '50px',
  },
  brandTitle: {
  },
  drawer: {
    width: '200px',
    flexShrink: 0,
    '& .MuiDrawer-paper': {
      backgroundColor: PRIMARY_DARK,
      width: '200px',
      boxSizing: 'border-box',
    },
  },
}));
