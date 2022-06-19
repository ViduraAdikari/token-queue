import {createTheme, Theme, ThemeOptions} from "@mui/material/styles";
import {cyan, grey, teal} from "@mui/material/colors/";
import {makeResponsive} from "./themeUtils";

const commonThemeOptions: ThemeOptions = {
  typography: {
    fontSize: 14,
    fontFamily: [
      'Source Code Pro',
      'monospace',
    ].join(','),
  },
  shape: {
    borderRadius: 2,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          fontWeight: 600,
        },
        sizeMedium: {
          padding: '6px 22px',
        },
        sizeLarge: {
          padding: '9px 32px',
          fontSize: '1.2em',
          fontWeight: 600,
        }
      }
    },
  },
}

export const darkThemeOptions: ThemeOptions = {
  palette: {
    mode: 'dark',
    background: {
      default: '#263238',
      paper: '#424242'
    },
    primary: {
      main: cyan[400],
      light: cyan[500],
      dark: cyan[800],
      contrastText: grey[800]
    },
    secondary: {
      main: cyan[300],
      light: cyan[500],
      dark: cyan[900],
      contrastText: teal[300]
    },
  },
  ...commonThemeOptions,
}

export const lightThemeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    background: {
      default: '#f1f1f1',
      paper: '#FBFBFB'
    },
    primary: {
      main: teal[500],
      light: cyan[500],
      dark: cyan[800],
      contrastText: grey[50]
    },
    secondary: {
      main: cyan[600],
      light: cyan[600],
      dark: teal[600],
      contrastText: teal[400]
    },
    common: {
      white: '#fefefe',
      black: '#000000'
    }
  },
  ...commonThemeOptions,
}

export const getTheme = (mode: 'dark' | 'light'): Theme => {
  const theme: Theme = mode === 'dark' ? createTheme(darkThemeOptions) : createTheme(lightThemeOptions);
  return makeResponsive(theme);
}

