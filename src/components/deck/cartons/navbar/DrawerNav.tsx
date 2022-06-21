import React from 'react';
import {DRAWER_WIDTH} from "../../../../const/values";
import DrawerHeaderElement from "../../elements/drawer/DrawerHeaderElement";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Drawer from "@mui/material/Drawer";
import {Theme} from "@mui/material/styles";
import Box from "@mui/material/Box";
import {NavLink} from "react-router-dom";

export type DrawerNavItem = {
  path: string
  label: string
}

type DrawerNavProps = {
  open: boolean
  theme: Theme
  drawerNavItems: DrawerNavItem[] | null
  onDrawerClose: () => void
}

const DrawerNav: React.FC<DrawerNavProps> = (props: DrawerNavProps) => {

  const {open, theme, drawerNavItems, onDrawerClose} = props;

  const handleDrawerClose = () => {
    onDrawerClose();
  };

  let activeStyle = {
    textDecoration: "underline",
  };

  const renderNavItems = () => {
    if (!drawerNavItems) {
      return <Box sx={{px: 3}}>No links here yet...</Box>;
    }

    return (
      <List sx={{
        pt: 0,
      }}>
        {drawerNavItems.map((navItem: DrawerNavItem) => (
          <ListItem key={navItem.path} disablePadding sx={{
            '& a': {
              py: 1,
              width: '100%',
              textDecoration: 'none',
              color: theme => theme.palette.text.primary,
            }
          }}>
            <NavLink to={navItem.path} >
              <ListItemText primary={'#' + navItem.label} sx={{px: 1}}/>
            </NavLink>
          </ListItem>
        ))}
      </List>
    )
  }

  return (
    <Drawer
      sx={{
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: DRAWER_WIDTH,
        },
      }}
      variant="persistent"
      anchor="right"
      open={open}
    >
      <DrawerHeaderElement theme={theme} onDrawerClose={handleDrawerClose}/>
      <Divider/>
      {renderNavItems()}
      <Divider/>

    </Drawer>
  )
};

export default DrawerNav;