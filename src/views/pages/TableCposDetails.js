import React from "react";
import { Nav, NavLink, NavItem, TabContent, TabPane } from "reactstrap";
import {
  NavLink as RouterNavLink,
  Route,
  Switch,
  Redirect,
  useLocation
} from "react-router-dom";
import escape from "lodash.escaperegexp";
import "./custom/dashboard2.css";
import BreadCrumbsCpos from "../pages/breadcrumb/brdashboard"

// Each component is defined in the { route: Component } format.
// e.g.) `/foo` will lazy render `FooPage`.
const components = {
  "Chiller 1-1": React.lazy(() => import("../pages/card/chiller1")),
  "Chiller 1-2": React.lazy(() => import("../pages/card/chiller2")),
  "Chiller 1-3": React.lazy(() => import("../pages/card/chiller3")),
  "Chiller-2": React.lazy(() => import("../pages/card/chiller4")),
  "Chiller-3": React.lazy(() => import("../pages/card/chiller5")),
  "Chiller-4": React.lazy(() => import("../pages/card/chiller6")),

};

const TabCposDetails: React.FC = () => {
  /** The pathname, without any query params. */
  const { pathname } = useLocation();

  /** Returns a route with the root basename. */
  const getRoute = (route: string) => `/cpos/jk3/${route}`;


  const renderNavItems = () =>
    Object.keys(components).map(route => (
      <NavItem key={`${route}-nav-item`}>
        <NavLink tag={RouterNavLink} to={getRoute(route)} exact>
          {escape(route)}
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
      <BreadCrumbsCpos
        breadCrumbTitle="CPOS"
        breadCrumbParent="Chiller"
        breadCrumbActive="JK-3"
      />
      <Nav tabs>{renderNavItems()}</Nav>

      <TabContent activeTab={pathname}>
        <React.Suspense fallback={<h1>Loading...</h1>}>
          <Switch>
            {renderRoutes()}

            {/* Redirects all unknown paths to `/foo` */}
            <Redirect from="/cpos/jk3/" to="/cpos/jk3/Chiller%201-1" />
          </Switch>
        </React.Suspense>
      </TabContent>
    </>
  );
};

export default TabCposDetails;
