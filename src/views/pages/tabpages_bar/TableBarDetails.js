import React, { Suspense, lazy } from "react"
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
import Spinner from "../../.././components/@vuexy/spinner/Fallback-spinner"
// Each component is defined in the { route: Component } format.
// e.g.) `/foo` will lazy render `FooPage`.
const components = {
  M: React.lazy(() => import("./BarM")),
  Level_1_A: React.lazy(() => import("./Bar_1_A")),
  Level_1_B: React.lazy(() => import("./Bar_1_B")),
  Level_2_B: React.lazy(() => import("./Bar_2_B")),
  Level_3_A: React.lazy(() => import("./Bar_3_A")),
  Level_3_B: React.lazy(() => import("./Bar_3_B"))
};

const TabBar: React.FC = () => {
  /** The pathname, without any query params. */
  const { pathname } = useLocation();

  /** Returns a route with the root basename. */
  const getRoute = (route: string) => `/bar/${route}`;


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


      <Suspense fallback={<Spinner />}>
          <Switch>
            {renderRoutes()}

            {/* Redirects all unknown paths to `/foo` */}
            <Redirect from="/bar/BarM" to="/bar/BarM" />
          </Switch>
        </Suspense>
      </TabContent>
    </>
  );
};

export default TabBar;
