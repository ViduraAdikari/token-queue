import React from 'react';
import {styled, Theme} from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const DrawerHeader = styled('div')(({theme}) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));

type DrawerHeaderElementProps = {
  theme: Theme
  onDrawerClose: () => void
}

const DrawerHeaderElement: React.FC<DrawerHeaderElementProps> = (props: DrawerHeaderElementProps) => {

  const {theme, onDrawerClose} = props;

  const handleArrowIconClick = () => {
    onDrawerClose();
  };

  return (
    <DrawerHeader sx={{mt: 5}}>
      <IconButton onClick={handleArrowIconClick}>
        {theme.direction === 'rtl' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
      </IconButton>
    </DrawerHeader>
  )
};

export default DrawerHeaderElement;