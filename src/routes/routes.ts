import React from "react";
import {TOKEN_ROUTE_PATHS} from "./routePaths";
import GuestHome from "../view/GuestHome";

const DashboardDrawer = React.lazy(() => import("../components/deck/containers/drawer/DashboardDrawer"));
const ServiceList = React.lazy(() => import("../components/deck/containers/pages/ServiceList"));
const DisplayQueue = React.lazy(() => import("../components/deck/containers/pages/DisplayQueue"));
const TestServices = React.lazy(() => import("../components/deck/containers/pages/TestServices"));
const GetAToken = React.lazy(() => import("../components/deck/containers/pages/GetAToken"));

type NestedRoute = {
  index?: boolean
  path?: string
  isNavLink: boolean
  component: any,
}

type AppRoute = {
  path: string,
  component: any,
  nestedRoutes?: NestedRoute[]
}

export const TokenQueueRoutes: AppRoute[] = [
  {path: TOKEN_ROUTE_PATHS.GUEST_LOGIN, component: GuestHome},
  {
    path: TOKEN_ROUTE_PATHS.TOKEN_DASHBOARD.main, component: DashboardDrawer, nestedRoutes: [
      {index: true, isNavLink: true, component: ServiceList},
      {...TOKEN_ROUTE_PATHS.TOKEN_DASHBOARD.nested.token, component: GetAToken},
      {...TOKEN_ROUTE_PATHS.TOKEN_DASHBOARD.nested.queue, component: DisplayQueue},
      {...TOKEN_ROUTE_PATHS.TOKEN_DASHBOARD.nested.agent, component: TestServices},
    ]
  },
]

export type {AppRoute, NestedRoute};