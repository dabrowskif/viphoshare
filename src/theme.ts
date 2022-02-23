import { createTheme } from '@mui/material';

export const PRIMARY_LIGHT = '#f0f2f5';
export const PRIMARY_MAIN = '#297EBF';
export const PRIMARY_DARK = '#022E51';
export const PRIMARY_CONTRAST = '#FFFFFF';

export const SECONDARY_MAIN = '#B74803';

const theme = createTheme({
  palette: {
    text: {
      primary: PRIMARY_CONTRAST,
    },
    primary: {
      light: PRIMARY_LIGHT,
      main: PRIMARY_MAIN,
      dark: PRIMARY_DARK,
      contrastText: PRIMARY_CONTRAST,
    },
    secondary: {
      main: SECONDARY_MAIN,
    },
  },
  components: {
  },
});

export default theme;
