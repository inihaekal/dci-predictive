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

  "Chiller JK2-A": React.lazy(() => import("../pages/card/jk-2/chiller1")),
  "Chiller JK2-B": React.lazy(() => import("../pages/card/jk-2/chiller2"))


};

const TabCposDetails: React.FC = () => {
  /** The pathname, without any query params. */
  const { pathname } = useLocation();

  /** Returns a route with the root basename. */
  const getRoute = (route: string) => `/cpos/jk2/${route}`;


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
        breadCrumbActive="JK-2"
      />
      <Nav tabs>{renderNavItems()}</Nav>

      <TabContent activeTab={pathname}>
        <React.Suspense fallback={<h1>Loading...</h1>}>
          <Switch>
            {renderRoutes()}

            {/* Redirects all unknown paths to `/foo` */}
            <Redirect from="/cpos/jk2/" to="/cpos/jk2/Chiller%20JK2-A" />
          </Switch>
        </React.Suspense>
      </TabContent>
    </>
  );
};

export default TabCposDetails;
