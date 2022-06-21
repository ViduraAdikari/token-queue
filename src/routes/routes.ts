import React from "react";
import {TOKEN_ROUTE_PATHS} from "./routePaths";
import GuestHome from "../view/GuestHome";

const DashboardDrawer = React.lazy(() => import("../components/deck/containers/drawer/DashboardDrawer"));
const ServiceList = React.lazy(() => import("../components/deck/containers/pages/ServiceList"));
const TestQueue = React.lazy(() => import("../components/deck/containers/pages/TestQueue"));
const TestServices = React.lazy(() => import("../components/deck/containers/pages/TestServices"));

type NestedRoute = {
  index?: boolean
  path?: string
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
      {index: true, component: ServiceList},
      {path: TOKEN_ROUTE_PATHS.TOKEN_DASHBOARD.nested.queue, component: TestQueue},
      {path: TOKEN_ROUTE_PATHS.TOKEN_DASHBOARD.nested.agent, component: TestServices},
    ]
  },
]

export type {AppRoute, NestedRoute};