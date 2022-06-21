import React, {Suspense} from "react";
import {AppRoute, NestedRoute} from "../routes/routes";
import {Route} from "react-router-dom";

export const getNestedRoute = (route: AppRoute) => {
  if (!route.nestedRoutes) {
    return;
  }

  return (
    <Route path={route.path} key={route.path} element={<Suspense fallback={<div>loading...</div>}>
      {<route.component/>}
    </Suspense>
    }>
      {
        route.nestedRoutes.map((nestedRoute: NestedRoute) => <Route key={nestedRoute.path ? nestedRoute.path : 'index'}
                                                                    path={nestedRoute.path} index={nestedRoute.index}
                                                                    element={<Suspense fallback={<div>loading...</div>}>
                                                                      {<nestedRoute.component/>}
                                                                    </Suspense>
                                                                    }/>)
      }
    </Route>
  )
}
