import { createTheme, Theme } from '@mui/material';

// const PRIMARY_LIGHT = 'rgb(82, 82, 82)';
// const PRIMARY_MAIN = 'rgb(50, 50, 50)';
// const PRIMARY_DARK = 'rgb(0, 0, 0)';
// const PRIMARY_CONTRAST = 'rgb(255, 255, 255)';

const PRIMARY_LIGHT = 'rgb(82, 82, 82)';
const PRIMARY_MAIN = 'rgb(50, 50, 50)';
const PRIMARY_DARK = 'rgb(0, 0, 0)';
const PRIMARY_CONTRAST = 'rgb(255, 255, 255)';

const SECONDARY_LIGHT = 'rgb(255, 0, 0)';
const SECONDARY_MAIN = 'rgb(255, 0, 0)';
const SECONDARY_DARK = 'rgb(83, 21, 22)';

declare module '@mui/styles/defaultTheme' {
  interface DefaultTheme extends Theme { }
}

const theme = {
  palette: {
    text: {
      primary: PRIMARY_CONTRAST,
    },
    primary: {
      light: PRIMARY_LIGHT,
      main: PRIMARY_MAIN,
      dark: PRIMARY_DARK,
    },
    secondary: {
      light: SECONDARY_LIGHT,
      main: SECONDARY_MAIN,
      dark: SECONDARY_DARK,
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: PRIMARY_CONTRAST,
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: PRIMARY_CONTRAST,
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: PRIMARY_LIGHT,
          },
        },
      },
    },
  },
};

export default createTheme(theme);
