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
    MuiButton: {
      styleOverrides: {
        outlined: {
          backgroundColor: PRIMARY_MAIN,
          border: `1px solid ${SECONDARY_MAIN}`,
          color: 'white',
          margin: '0 15px',
          '&:hover': {
            boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
            transition: 'background-color 0.5s, box-shadow 0.3s',
            border: `1px solid ${SECONDARY_MAIN}`,
            background: SECONDARY_DARK,
          },
        },
      },
    },
  },
};

export default createTheme(theme);
