import React from 'react';
import {useTheme} from '@mui/material/styles';
import Box from '@mui/material/Box';
import DrawerAppBar from "../../cartons/drawer/DrawerAppBar";
import DrawerNav, {DrawerNavItem} from "../../cartons/navbar/DrawerNav";
import {Outlet} from "react-router-dom";
import {NestedRoutePath, TOKEN_ROUTE_PATHS} from "../../../../routes/routePaths";
import {NestedRoute} from "../../../../routes/routes";

const DashboardDrawer: React.FC = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const drawerNavItems: DrawerNavItem[] = [];
  const servicesListItem: DrawerNavItem = {
    path: TOKEN_ROUTE_PATHS.TOKEN_DASHBOARD.main,
    label: 'Get a Token'
  }
  drawerNavItems.push(servicesListItem);

  const dashboardNestedRoutes: NestedRoutePath = TOKEN_ROUTE_PATHS.TOKEN_DASHBOARD.nested;
  for (const [key, nestedRoute] of Object.entries(dashboardNestedRoutes)) {
    if (!nestedRoute.isNavLink) {
      continue;
    }

    const drawerNavItem: DrawerNavItem = {
      path: TOKEN_ROUTE_PATHS.TOKEN_DASHBOARD.main + '/' + nestedRoute.path,
      label: nestedRoute.label
    }
    drawerNavItems.push(drawerNavItem);
  }

  return (
    <Box sx={{display: 'flex', mt: 0}}>
      <DrawerAppBar open={open} onDrawerOpen={handleDrawerOpen}/>

      <Box
        component="main"
        sx={{mt: 5, pt: 5, width: '100%'}}
      >
        <Outlet/>
      </Box>

      <DrawerNav open={open} theme={theme} onDrawerClose={handleDrawerClose}
                 drawerNavItems={drawerNavItems}/>
    </Box>
  )
};

export default DashboardDrawer;