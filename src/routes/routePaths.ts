interface INestedRoute {
  path: string
  label: string
  isNavLink: boolean
}

export type NestedRoutePath = {
  [key: string]: INestedRoute
}

const DASHBOARD_NESTED: NestedRoutePath = {
  token: {path: 'get-a-token', label: 'Get a Token', isNavLink: false},
  queue: {path: 'display-queue', label: 'Display Queue', isNavLink: true},
  agent: {path: 'agent-counter', label: 'Agent Counter', isNavLink: true},
}

export const TOKEN_ROUTE_PATHS = {
  GUEST_LOGIN: '/',
  TOKEN_DASHBOARD: {
    main: '/token-dashboard',
    nested: DASHBOARD_NESTED
  }
}