import React from 'react';
import {AppBarProps as MuiAppBarProps} from "@mui/material/AppBar/AppBar";
import {styled} from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import {DRAWER_WIDTH} from "../../../../const/values";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({theme, open}) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: DRAWER_WIDTH,
  }),
}));

type DrawerAppBarProps = {
  open: boolean
  onDrawerOpen: () => void
}

const DrawerAppBar: React.FC<DrawerAppBarProps> = (props: DrawerAppBarProps) => {

  const {open, onDrawerOpen} = props;

  const handleIconButtonClick = () => {
    onDrawerOpen();
  }

  return (
    <AppBar sx={{
      mt: 5,
    }} open={open}>
      <Toolbar>
        <Typography variant="h6" noWrap sx={{flexGrow: 1}} component="div">
          Token Queue
        </Typography>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleIconButtonClick}
          sx={{...(open && {display: 'none'})}}
        >
          <MenuIcon/>
        </IconButton>
      </Toolbar>
    </AppBar>
  )
};

export default DrawerAppBar;