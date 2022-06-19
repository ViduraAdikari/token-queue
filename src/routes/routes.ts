import React from "react";
import {TOKEN_ROUTE_PATHS} from "./routePaths";
import GuestHome from "../view/GuestHome";

const TokenDashboard = React.lazy(() => import("../view/TokenDashboard"));

export const TokenQueueRoutes = [
  {path: TOKEN_ROUTE_PATHS.GUEST_LOGIN, component: GuestHome},
  {path: TOKEN_ROUTE_PATHS.TOKEN_DASHBOARD, component: TokenDashboard},
]