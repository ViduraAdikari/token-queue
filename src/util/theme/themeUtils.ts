import {Theme} from "@mui/material/styles";
import {blueGrey, grey} from "@mui/material/colors";

const makeResponsive = (theme: Theme): Theme => {
  theme.typography.h1 = {
    fontSize: '3rem',
    [theme.breakpoints.down("lg")]: {
      fontSize: '2.8rem'
    },
    [theme.breakpoints.down("md")]: {
      fontSize: '2.5rem'
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: '1.5rem',
      fontWeight: 500
    },
    color: theme.palette.mode === 'light' ? blueGrey[600] : grey[400],
    fontWeight: 600
  }

  theme.typography.h2 = {
    fontSize: '2rem',
    fontWeight: 400,
    [theme.breakpoints.down("lg")]: {
      fontSize: '1.7rem'
    },
    [theme.breakpoints.down("md")]: {
      fontSize: '1.5rem'
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: '1.1rem',
    },
    color: theme.palette.mode === 'light' ? blueGrey[400] : grey[500],
  }

  theme.typography.body2 = {
    fontWeight: 400,
    color: theme.palette.mode === 'light' ? grey[800] : grey[300],
    lineHeight: 1.8,
    fontSize: '.9rem',
  }

  return theme;
}

export {makeResponsive};