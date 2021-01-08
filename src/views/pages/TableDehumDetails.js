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
import "./custom/dashboard2.css";

// Each component is defined in the { route: Component } format.
// e.g.) `/foo` will lazy render `FooPage`.
const components = {

  Dehumidifier: React.lazy(() => import("./tabpages/DehumTableTab"))
};

const TabDehum: React.FC = () => {
  /** The pathname, without any query params. */
  const { pathname } = useLocation();

  /** Returns a route with the root basename. */
  const getRoute = (route: string) => `/dehum/${route}`;


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
            <Redirect from="/dehum/Level_1A" to="/dehum/Level_1A" />
          </Switch>
        </React.Suspense>
      </TabContent>
    </>
  );
};

export default TabDehum;
