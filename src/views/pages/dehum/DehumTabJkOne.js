import React from "react";
import { Nav, NavLink, NavItem, TabContent, TabPane } from "reactstrap";
import {
  NavLink as RouterNavLink,
  Route,
  Switch,
  Redirect,
  useLocation
} from "react-router-dom";
import startCase from "lodash.startcase";
import ".././custom/dashboard2.css";

// Each component is defined in the { route: Component } format.
// e.g.) `/foo` will lazy render `FooPage`.
const components = {

  JK_1_2A: React.lazy(() => import("./jk1/jk12a")),
  JK_1_3A: React.lazy(() => import("./jk1/jk13a")),
  JK_1_3B: React.lazy(() => import("./jk1/jk13b"))
};

const TabDehumOne: React.FC = () => {
  /** The pathname, without any query params. */
  const { pathname } = useLocation();

  /** Returns a route with the root basename. */
  const getRoute = (route: string) => `/dehum/jk1/${route}`;


  const renderNavItems = () =>
    Object.keys(components).map(route => (
      <NavItem key={`${route}-nav-item`}>
        <NavLink tag={RouterNavLink} to={getRoute(route)} exact>
          {startCase(route)}
        </NavLink>
      </NavItem>
    ));

  /**
   * Renders `Route` components with their respective lazily loaded children
   * wrapped inside a `TabPane`.
   */
  const renderRoutes = () =>
    Object.entries(components).map(([route, Component]) => (
      <Route key={`${route}-route`} path={getRoute(route)}>
        <TabPane tabId={getRoute(route)}>
          <Component />
        </TabPane>
      </Route>
    ));

  return (
    <>
      <Nav tabs>{renderNavItems()}</Nav>

      <TabContent activeTab={pathname}>
        <React.Suspense fallback={<h1>Loading...</h1>}>
          <Switch>
            {renderRoutes()}

            {/* Redirects all unknown paths to `/foo` */}
            <Redirect from="/dehum/jk1/" to="/dehum/jk1/" />
          </Switch>
        </React.Suspense>
      </TabContent>
    </>
  );
};

export default TabDehumOne;
