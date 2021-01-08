import React, { Suspense, lazy } from "react"
import { Redirect,Router, Switch, Route } from "react-router-dom"
import { history } from "./history"
import { connect } from "react-redux"
import Spinner from "./components/@vuexy/spinner/Loading-spinner"
import { ContextLayout } from "./utility/context/Layout"
import BarDetail from "./views/pages/BarDetail"


// Route-based code splitting
const TrendDehum= lazy(() =>
  import("./views/pages/sensor/trend/dehum")
)

const TrendOne = lazy(() =>
  import("./views/pages/Trend")
)

const TrendTwo = lazy(() =>
  import("./views/pages/Trend2")
)

const Dashboard = lazy(() =>
  import("./views/pages/Dashboard")
)

const Trend = lazy(() =>
  import("./views/pages/trend/Trend")
)


const Login = lazy(() =>
  import("./views/pages/authentication/login/Login")
)

const CposTable = lazy(() =>
  import("./views/pages/TableCposDetails")
)

const CposTablejk1 = lazy(() =>
  import("./views/pages/TableCposDetailsJk1")
)

const CposTablejk2 = lazy(() =>
  import("./views/pages/TableCposDetailsJk2")
)

const CracTable = lazy(() =>
  import("./views/pages/CracTable")
)

const DehumTableSet = lazy(() =>
  import("./views/pages/DehumTableSet")
)

const AhuTableSet = lazy(() =>
  import("./views/pages/AhuTableSet")
)

const BarDetails = lazy(() =>
  import("./views/pages/BarDetail")
)

const forzerofor = lazy(() =>
import ("./views/pages/404")
)

const incidentdashboard = lazy(() =>
import ("./views/pages/incident_dashboard")
)

const summaryDashboard = lazy(() =>
  import ("./views/pages/summary")
)


const summaryDashboardTwo = lazy(() =>
  import ("./views/pages/summary2")
)


const ChartHome = lazy(() =>
import ("./views/chart/Chart")
)

//======================= SENSOR Vibration =========
//======= 3A =====
const Jk1Vib3AZ02 = lazy(() =>
  import ("./views/pages/sensor/trend/vibration/jk1-3a/Vib3-A-Z02")
)

const Jk1Vib3AZ03 = lazy(() =>
  import ("./views/pages/sensor/trend/vibration/jk1-3a/Vib3-A-Z03")
)

const Jk1Vib3AZ04 = lazy(() =>
  import ("./views/pages/sensor/trend/vibration/jk1-3a/Vib3-A-Z04")
)

const Jk1Vib3AZ05 = lazy(() =>
  import ("./views/pages/sensor/trend/vibration/jk1-3a/Vib3-A-Z05")
)

const Jk1Vib3AZ06 = lazy(() =>
  import ("./views/pages/sensor/trend/vibration/jk1-3a/Vib3-A-Z06")
)

const Jk1Vib3AZ07 = lazy(() =>
  import ("./views/pages/sensor/trend/vibration/jk1-3a/Vib3-A-Z07")
)

const Jk1Vib3AZ08 = lazy(() =>
  import ("./views/pages/sensor/trend/vibration/jk1-3a/Vib3-A-Z08")
)

const Jk1Vib3AZ09 = lazy(() =>
  import ("./views/pages/sensor/trend/vibration/jk1-3a/Vib3-A-Z09")
)

const Jk1Vib3AZ10 = lazy(() =>
  import ("./views/pages/sensor/trend/vibration/jk1-3a/Vib3-A-Z10")
)

//=======


//======= 3B =====

const Jk1Vib3BZ02 = lazy(() =>
  import ("./views/pages/sensor/trend/vibration/jk1-3b/Vib3-B-Z02")
)

const Jk1Vib3BZ03 = lazy(() =>
  import ("./views/pages/sensor/trend/vibration/jk1-3b/Vib3-B-Z03")
)

const Jk1Vib3BZ04 = lazy(() =>
  import ("./views/pages/sensor/trend/vibration/jk1-3b/Vib3-B-Z04")
)

const Jk1Vib3BZ05 = lazy(() =>
  import ("./views/pages/sensor/trend/vibration/jk1-3b/Vib3-B-Z05")
)

const Jk1Vib3BZ06 = lazy(() =>
  import ("./views/pages/sensor/trend/vibration/jk1-3b/Vib3-B-Z06")
)

const Jk1Vib3BZ07 = lazy(() =>
  import ("./views/pages/sensor/trend/vibration/jk1-3b/Vib3-B-Z07")
)

const Jk1Vib3BZ08 = lazy(() =>
  import ("./views/pages/sensor/trend/vibration/jk1-3b/Vib3-B-Z08")
)

const Jk1Vib3BZ09 = lazy(() =>
  import ("./views/pages/sensor/trend/vibration/jk1-3b/Vib3-B-Z09")
)

const Jk1Vib3BZ10 = lazy(() =>
  import ("./views/pages/sensor/trend/vibration/jk1-3b/Vib3-B-Z10")
)

const Jk1Vib3BZ11 = lazy(() =>
  import ("./views/pages/sensor/trend/vibration/jk1-3b/Vib3-B-Z11")
)

const Jk1Vib3BZ12 = lazy(() =>
  import ("./views/pages/sensor/trend/vibration/jk1-3b/Vib3-B-Z12")
)

const Jk1Vib3BZ13 = lazy(() =>
  import ("./views/pages/sensor/trend/vibration/jk1-3b/Vib3-B-Z13")
)

//============

//======= 1A =====
const Jk1Vib1AZ03 = lazy(() =>
  import ("./views/pages/sensor/trend/vibration/jk1-1a/Vib1-A-Z03")
)

const Jk1Vib1AZ04 = lazy(() =>
  import ("./views/pages/sensor/trend/vibration/jk1-1a/Vib1-A-Z04")
)

const Jk1Vib1AZ05 = lazy(() =>
  import ("./views/pages/sensor/trend/vibration/jk1-1a/Vib1-A-Z05")
)

const Jk1Vib1AZ09 = lazy(() =>
  import ("./views/pages/sensor/trend/vibration/jk1-1a/Vib1-A-Z09")
)

const Jk1Vib1AZ10 = lazy(() =>
  import ("./views/pages/sensor/trend/vibration/jk1-1a/Vib1-A-Z10")
)

const Jk1Vib1AZ11 = lazy(() =>
  import ("./views/pages/sensor/trend/vibration/jk1-1a/Vib1-A-Z11")
)

//======

//======= 1B =====
const Jk1Vib1BZ03 = lazy(() =>
  import ("./views/pages/sensor/trend/vibration/jk1-1b/Vib1-B-Z03")
)

const Jk1Vib1BZ04 = lazy(() =>
  import ("./views/pages/sensor/trend/vibration/jk1-1b/Vib1-B-Z04")
)

const Jk1Vib1BZ05 = lazy(() =>
  import ("./views/pages/sensor/trend/vibration/jk1-1b/Vib1-B-Z05")
)

const Jk1Vib1BZ08 = lazy(() =>
  import ("./views/pages/sensor/trend/vibration/jk1-1b/Vib1-B-Z08")
)

const Jk1Vib1BZ09 = lazy(() =>
  import ("./views/pages/sensor/trend/vibration/jk1-1b/Vib1-B-Z09")
)

const Jk1Vib1BZ10 = lazy(() =>
  import ("./views/pages/sensor/trend/vibration/jk1-1b/Vib1-B-Z10")
)

//======

//======= 2B =====

const Jk1Vib2BZ02 = lazy(() =>
  import ("./views/pages/sensor/trend/vibration/jk1-2b/Vib2-B-Z02")
)

const Jk1Vib2BZ03 = lazy(() =>
  import ("./views/pages/sensor/trend/vibration/jk1-2b/Vib2-B-Z03")
)

const Jk1Vib2BZ04 = lazy(() =>
  import ("./views/pages/sensor/trend/vibration/jk1-2b/Vib2-B-Z04")
)

const Jk1Vib2BZ05 = lazy(() =>
  import ("./views/pages/sensor/trend/vibration/jk1-2b/Vib2-B-Z05")
)

const Jk1Vib2BZ07 = lazy(() =>
  import ("./views/pages/sensor/trend/vibration/jk1-2b/Vib2-B-Z07")
)

const Jk1Vib2BZ08 = lazy(() =>
  import ("./views/pages/sensor/trend/vibration/jk1-2b/Vib2-B-Z08")
)

const Jk1Vib2BZ09 = lazy(() =>
  import ("./views/pages/sensor/trend/vibration/jk1-2b/Vib2-B-Z09")
)

const Jk1Vib2BZ10 = lazy(() =>
  import ("./views/pages/sensor/trend/vibration/jk1-2b/Vib2-B-Z10")
)

//=========


//======================= SENSOR Vibration End =========



//======================= SENSOR Temperature =========
//======= 3A =====
const Jk1Temp3AZ02 = lazy(() =>
  import ("./views/pages/sensor/trend/temperature/jk1-3a/Vib3-A-Z02")
)

const Jk1Temp3AZ03 = lazy(() =>
  import ("./views/pages/sensor/trend/temperature/jk1-3a/Vib3-A-Z03")
)

const Jk1Temp3AZ04 = lazy(() =>
  import ("./views/pages/sensor/trend/temperature/jk1-3a/Vib3-A-Z04")
)

const Jk1Temp3AZ05 = lazy(() =>
  import ("./views/pages/sensor/trend/temperature/jk1-3a/Vib3-A-Z05")
)

const Jk1Temp3AZ06 = lazy(() =>
  import ("./views/pages/sensor/trend/temperature/jk1-3a/Vib3-A-Z06")
)

const Jk1Temp3AZ07 = lazy(() =>
  import ("./views/pages/sensor/trend/temperature/jk1-3a/Vib3-A-Z07")
)

const Jk1Temp3AZ08 = lazy(() =>
  import ("./views/pages/sensor/trend/temperature/jk1-3a/Vib3-A-Z08")
)

const Jk1Temp3AZ09 = lazy(() =>
  import ("./views/pages/sensor/trend/temperature/jk1-3a/Vib3-A-Z09")
)

const Jk1Temp3AZ10 = lazy(() =>
  import ("./views/pages/sensor/trend/temperature/jk1-3a/Vib3-A-Z10")
)

//=======


//======= 3B =====

const Jk1Temp3BZ02 = lazy(() =>
  import ("./views/pages/sensor/trend/temperature/jk1-3b/Vib3-B-Z02")
)

const Jk1Temp3BZ03 = lazy(() =>
  import ("./views/pages/sensor/trend/temperature/jk1-3b/Vib3-B-Z03")
)

const Jk1Temp3BZ04 = lazy(() =>
  import ("./views/pages/sensor/trend/temperature/jk1-3b/Vib3-B-Z04")
)

const Jk1Temp3BZ05 = lazy(() =>
  import ("./views/pages/sensor/trend/temperature/jk1-3b/Vib3-B-Z05")
)

const Jk1Temp3BZ06 = lazy(() =>
  import ("./views/pages/sensor/trend/temperature/jk1-3b/Vib3-B-Z06")
)

const Jk1Temp3BZ07 = lazy(() =>
  import ("./views/pages/sensor/trend/temperature/jk1-3b/Vib3-B-Z07")
)

const Jk1Temp3BZ08 = lazy(() =>
  import ("./views/pages/sensor/trend/temperature/jk1-3b/Vib3-B-Z08")
)

const Jk1Temp3BZ09 = lazy(() =>
  import ("./views/pages/sensor/trend/temperature/jk1-3b/Vib3-B-Z09")
)

const Jk1Temp3BZ10 = lazy(() =>
  import ("./views/pages/sensor/trend/temperature/jk1-3b/Vib3-B-Z10")
)

const Jk1Temp3BZ11 = lazy(() =>
  import ("./views/pages/sensor/trend/temperature/jk1-3b/Vib3-B-Z11")
)

const Jk1Temp3BZ12 = lazy(() =>
  import ("./views/pages/sensor/trend/temperature/jk1-3b/Vib3-B-Z12")
)

const Jk1Temp3BZ13 = lazy(() =>
  import ("./views/pages/sensor/trend/temperature/jk1-3b/Vib3-B-Z13")
)

//============

//======= 1A =====
const Jk1Temp1AZ03 = lazy(() =>
  import ("./views/pages/sensor/trend/temperature/jk1-1a/Vib1-A-Z03")
)

const Jk1Temp1AZ04 = lazy(() =>
  import ("./views/pages/sensor/trend/temperature/jk1-1a/Vib1-A-Z04")
)

const Jk1Temp1AZ05 = lazy(() =>
  import ("./views/pages/sensor/trend/temperature/jk1-1a/Vib1-A-Z05")
)

const Jk1Temp1AZ09 = lazy(() =>
  import ("./views/pages/sensor/trend/temperature/jk1-1a/Vib1-A-Z09")
)

const Jk1Temp1AZ10 = lazy(() =>
  import ("./views/pages/sensor/trend/temperature/jk1-1a/Vib1-A-Z10")
)

const Jk1Temp1AZ11 = lazy(() =>
  import ("./views/pages/sensor/trend/temperature/jk1-1a/Vib1-A-Z11")
)

//======

//======= 1B =====
const Jk1Temp1BZ03 = lazy(() =>
  import ("./views/pages/sensor/trend/temperature/jk1-1b/Vib1-B-Z03")
)

const Jk1Temp1BZ04 = lazy(() =>
  import ("./views/pages/sensor/trend/temperature/jk1-1b/Vib1-B-Z04")
)

const Jk1Temp1BZ05 = lazy(() =>
  import ("./views/pages/sensor/trend/temperature/jk1-1b/Vib1-B-Z05")
)

const Jk1Temp1BZ08 = lazy(() =>
  import ("./views/pages/sensor/trend/temperature/jk1-1b/Vib1-B-Z08")
)

const Jk1Temp1BZ09 = lazy(() =>
  import ("./views/pages/sensor/trend/temperature/jk1-1b/Vib1-B-Z09")
)


const Jk1Temp1BZ10 = lazy(() =>
  import ("./views/pages/sensor/trend/temperature/jk1-1b/Vib1-B-Z10")
)



//======

//======= 2B =====

const Jk1Temp2BZ02 = lazy(() =>
  import ("./views/pages/sensor/trend/temperature/jk1-2b/Vib2-B-Z02")
)

const Jk1Temp2BZ03 = lazy(() =>
  import ("./views/pages/sensor/trend/temperature/jk1-2b/Vib2-B-Z03")
)

const Jk1Temp2BZ04 = lazy(() =>
  import ("./views/pages/sensor/trend/temperature/jk1-2b/Vib2-B-Z04")
)

const Jk1Temp2BZ05 = lazy(() =>
  import ("./views/pages/sensor/trend/temperature/jk1-2b/Vib2-B-Z05")
)

const Jk1Temp2BZ07 = lazy(() =>
  import ("./views/pages/sensor/trend/temperature/jk1-2b/Vib2-B-Z07")
)

const Jk1Temp2BZ08 = lazy(() =>
  import ("./views/pages/sensor/trend/temperature/jk1-2b/Vib2-B-Z08")
)

const Jk1Temp2BZ09 = lazy(() =>
  import ("./views/pages/sensor/trend/temperature/jk1-2b/Vib2-B-Z09")
)

const Jk1Temp2BZ10 = lazy(() =>
  import ("./views/pages/sensor/trend/temperature/jk1-2b/Vib2-B-Z10")
)

//=========


//======================= SENSOR Temperature End =========








// Set Layout and Component Using App Route
const RouteConfig = ({
  component: Component,
  fullLayout,
  permission,
  user,
  ...rest
}) => (
  <Route
    {...rest}
    render={props => {
      return (
        <ContextLayout.Consumer>
          {context => {
            let LayoutTag =
              fullLayout === true
                ? context.fullLayout
                : context.state.activeLayout === "horizontal"
                ? context.horizontalLayout
                : context.VerticalLayout
              return (
                <LayoutTag {...props} permission={props.user}>
                  <Suspense fallback={<Spinner />}>
                    <Component {...props} />
                  </Suspense>
                </LayoutTag>
              )
          }}
        </ContextLayout.Consumer>
      )
    }}
  />
)
const mapStateToProps = state => {
  return {
    user: state.auth.login.userRole
  }
}

const AppRoute = connect(mapStateToProps)(RouteConfig)

class AppRouter extends React.Component {
  render() {
    return (
      // Set the directory path if you are deploying in sub-folder
      <Router history={history}>
        <Switch>
        <AppRoute exact path="/" component={Login}  fullLayout/>

          <AppRoute
            path="/dashboard"
            component={Dashboard}
          />

<AppRoute
            path="/chart"
            component={ChartHome}
          />


<AppRoute path="/pages/login" component={Login} fullLayout />

<AppRoute path="/pages/incident_dashboard" component={incidentdashboard}  />
<AppRoute path="/summary" component={summaryDashboard}  />
          <AppRoute path="/summarytwo" component={summaryDashboardTwo}  />
<AppRoute path="/pages/TrendOne" component={TrendOne}  />
<AppRoute path="/pages/TrendTwo" component={TrendTwo}  />


          //========= Route Sensor Vibration  1A =====
          <AppRoute path="/pages/trends/vibration/jk1/vib1-a-z03" component={Jk1Vib1AZ03}  />
          <AppRoute path="/pages/trends/vibration/jk1/vib1-a-z04" component={Jk1Vib1AZ04}  />
          <AppRoute path="/pages/trends/vibration/jk1/vib1-a-z05" component={Jk1Vib1AZ05}  />
          <AppRoute path="/pages/trends/vibration/jk1/vib1-a-z09" component={Jk1Vib1AZ09}  />
          <AppRoute path="/pages/trends/vibration/jk1/vib1-a-z10" component={Jk1Vib1AZ10}  />
          <AppRoute path="/pages/trends/vibration/jk1/vib1-a-z11" component={Jk1Vib1AZ11}  />

          //========= Route Sensor Vibration  1B =====
          <AppRoute path="/pages/trends/vibration/jk1/vib1-b-z03" component={Jk1Vib1BZ03}  />
          <AppRoute path="/pages/trends/vibration/jk1/vib1-b-z04" component={Jk1Vib1BZ04}  />
          <AppRoute path="/pages/trends/vibration/jk1/vib1-b-z05" component={Jk1Vib1BZ05}  />
          <AppRoute path="/pages/trends/vibration/jk1/vib1-b-z08" component={Jk1Vib1BZ08}  />
          <AppRoute path="/pages/trends/vibration/jk1/vib1-b-z09" component={Jk1Vib1BZ09}  />
          <AppRoute path="/pages/trends/vibration/jk1/vib1-b-z10" component={Jk1Vib1BZ10}  />

          //========= Route Sensor Vibration  2B =====
          <AppRoute path="/pages/trends/vibration/jk1/vib2-b-z02" component={Jk1Vib2BZ02}  />
          <AppRoute path="/pages/trends/vibration/jk1/vib2-b-z03" component={Jk1Vib2BZ03}  />
          <AppRoute path="/pages/trends/vibration/jk1/vib2-b-z04" component={Jk1Vib2BZ04}  />
          <AppRoute path="/pages/trends/vibration/jk1/vib2-b-z05" component={Jk1Vib2BZ05}  />
          <AppRoute path="/pages/trends/vibration/jk1/vib2-b-z07" component={Jk1Vib2BZ07}  />
          <AppRoute path="/pages/trends/vibration/jk1/vib2-b-z08" component={Jk1Vib2BZ08}  />
          <AppRoute path="/pages/trends/vibration/jk1/vib2-b-z09" component={Jk1Vib2BZ09}  />
          <AppRoute path="/pages/trends/vibration/jk1/vib2-b-z10" component={Jk1Vib2BZ10}  />

          //========= Route Sensor Vibration  3A =====
          <AppRoute path="/pages/trends/vibration/jk1/vib3-a-z02" component={Jk1Vib3AZ02}  />
          <AppRoute path="/pages/trends/vibration/jk1/vib3-a-z03" component={Jk1Vib3AZ03}  />
          <AppRoute path="/pages/trends/vibration/jk1/vib3-a-z04" component={Jk1Vib3AZ04}  />
          <AppRoute path="/pages/trends/vibration/jk1/vib3-a-z05" component={Jk1Vib3AZ05}  />
          <AppRoute path="/pages/trends/vibration/jk1/vib3-a-z06" component={Jk1Vib3AZ06}  />
          <AppRoute path="/pages/trends/vibration/jk1/vib3-a-z07" component={Jk1Vib3AZ07}  />
          <AppRoute path="/pages/trends/vibration/jk1/vib3-a-z08" component={Jk1Vib3AZ08}  />
          <AppRoute path="/pages/trends/vibration/jk1/vib3-a-z09" component={Jk1Vib3AZ09}  />
          <AppRoute path="/pages/trends/vibration/jk1/vib3-a-z10" component={Jk1Vib3AZ10}  />


          //========= Route Sensor Vibration  3B =====
          <AppRoute path="/pages/trends/vibration/jk1/vib3-b-z02" component={Jk1Vib3BZ02}  />
          <AppRoute path="/pages/trends/vibration/jk1/vib3-b-z03" component={Jk1Vib3BZ03}  />
          <AppRoute path="/pages/trends/vibration/jk1/vib3-b-z04" component={Jk1Vib3BZ04}  />
          <AppRoute path="/pages/trends/vibration/jk1/vib3-b-z05" component={Jk1Vib3BZ05}  />
          <AppRoute path="/pages/trends/vibration/jk1/vib3-b-z06" component={Jk1Vib3BZ06}  />
          <AppRoute path="/pages/trends/vibration/jk1/vib3-b-z07" component={Jk1Vib3BZ07}  />
          <AppRoute path="/pages/trends/vibration/jk1/vib3-b-z08" component={Jk1Vib3BZ08}  />
          <AppRoute path="/pages/trends/vibration/jk1/vib3-b-z09" component={Jk1Vib3BZ09}  />
          <AppRoute path="/pages/trends/vibration/jk1/vib3-b-z10" component={Jk1Vib3BZ10}  />
          <AppRoute path="/pages/trends/vibration/jk1/vib3-b-z11" component={Jk1Vib3BZ11}  />
          <AppRoute path="/pages/trends/vibration/jk1/vib3-b-z12" component={Jk1Vib3BZ12}  />
          <AppRoute path="/pages/trends/vibration/jk1/vib3-b-z13" component={Jk1Vib3BZ13}  />


//================================================================================
//================================================================================


          //========= Route Sensor temperature  1A =====
          <AppRoute path="/pages/trends/temperature/jk1/temp1-a-z03" component={Jk1Temp1AZ03}  />
          <AppRoute path="/pages/trends/temperature/jk1/temp1-a-z04" component={Jk1Temp1AZ04}  />
          <AppRoute path="/pages/trends/temperature/jk1/temp1-a-z05" component={Jk1Temp1AZ05}  />
          <AppRoute path="/pages/trends/temperature/jk1/temp1-a-z09" component={Jk1Temp1AZ09}  />
          <AppRoute path="/pages/trends/temperature/jk1/temp1-a-z10" component={Jk1Temp1AZ10}  />
          <AppRoute path="/pages/trends/temperature/jk1/temp1-a-z11" component={Jk1Temp1AZ11}  />

          //========= Route Sensor temperature  1B =====
          <AppRoute path="/pages/trends/temperature/jk1/temp1-b-z03" component={Jk1Temp1BZ03}  />
          <AppRoute path="/pages/trends/temperature/jk1/temp1-b-z04" component={Jk1Temp1BZ04}  />
          <AppRoute path="/pages/trends/temperature/jk1/temp1-b-z05" component={Jk1Temp1BZ05}  />
          <AppRoute path="/pages/trends/temperature/jk1/temp1-b-z08" component={Jk1Temp1BZ08}  />
          <AppRoute path="/pages/trends/temperature/jk1/temp1-b-z09" component={Jk1Temp1BZ09}  />
          <AppRoute path="/pages/trends/temperature/jk1/temp1-b-z10" component={Jk1Temp1BZ10}  />

          //========= Route Sensor temperature  2B =====
          <AppRoute path="/pages/trends/temperature/jk1/temp2-b-z02" component={Jk1Temp2BZ02}  />
          <AppRoute path="/pages/trends/temperature/jk1/temp2-b-z03" component={Jk1Temp2BZ03}  />
          <AppRoute path="/pages/trends/temperature/jk1/temp2-b-z04" component={Jk1Temp2BZ04}  />
          <AppRoute path="/pages/trends/temperature/jk1/temp2-b-z05" component={Jk1Temp2BZ05}  />
          <AppRoute path="/pages/trends/temperature/jk1/temp2-b-z07" component={Jk1Temp2BZ07}  />
          <AppRoute path="/pages/trends/temperature/jk1/temp2-b-z08" component={Jk1Temp2BZ08}  />
          <AppRoute path="/pages/trends/temperature/jk1/temp2-b-z09" component={Jk1Temp2BZ09}  />
          <AppRoute path="/pages/trends/temperature/jk1/temp2-b-z10" component={Jk1Temp2BZ10}  />

          //========= Route Sensor Vibration  3A =====
          <AppRoute path="/pages/trends/temperature/jk1/temp3-a-z02" component={Jk1Temp3AZ02}  />
          <AppRoute path="/pages/trends/temperature/jk1/temp3-a-z03" component={Jk1Temp3AZ03}  />
          <AppRoute path="/pages/trends/temperature/jk1/temp3-a-z04" component={Jk1Temp3AZ04}  />
          <AppRoute path="/pages/trends/temperature/jk1/temp3-a-z05" component={Jk1Temp3AZ05}  />
          <AppRoute path="/pages/trends/temperature/jk1/temp3-a-z06" component={Jk1Temp3AZ06}  />
          <AppRoute path="/pages/trends/temperature/jk1/temp3-a-z07" component={Jk1Temp3AZ07}  />
          <AppRoute path="/pages/trends/temperature/jk1/temp3-a-z08" component={Jk1Temp3AZ08}  />
          <AppRoute path="/pages/trends/temperature/jk1/temp3-a-z09" component={Jk1Temp3AZ09}  />
          <AppRoute path="/pages/trends/temperature/jk1/temp3-a-z10" component={Jk1Temp3AZ10}  />


          //========= Route Sensor Vibration  3B =====
          <AppRoute path="/pages/trends/temperature/jk1/temp3-b-z02" component={Jk1Temp3BZ02}  />
          <AppRoute path="/pages/trends/temperature/jk1/temp3-b-z03" component={Jk1Temp3BZ03}  />
          <AppRoute path="/pages/trends/temperature/jk1/temp3-b-z04" component={Jk1Temp3BZ04}  />
          <AppRoute path="/pages/trends/temperature/jk1/temp3-b-z05" component={Jk1Temp3BZ05} />
          <AppRoute path="/pages/trends/temperature/jk1/temp3-b-z06" component={Jk1Temp3BZ06}  />
          <AppRoute path="/pages/trends/temperature/jk1/temp3-b-z07" component={Jk1Temp3BZ07}  />
          <AppRoute path="/pages/trends/temperature/jk1/temp3-b-z08" component={Jk1Temp3BZ08}  />
          <AppRoute path="/pages/trends/temperature/jk1/temp3-b-z09" component={Jk1Temp3BZ09}  />
          <AppRoute path="/pages/trends/temperature/jk1/temp3-b-z10" component={Jk1Temp3BZ10}  />
          <AppRoute path="/pages/trends/temperature/jk1/temp3-b-z11" component={Jk1Temp3BZ11}  />
          <AppRoute path="/pages/trends/temperature/jk1/temp3-b-z12" component={Jk1Temp3BZ12}  />
          <AppRoute path="/pages/trends/temperature/jk1/temp3-b-z13" component={Jk1Temp3BZ13}  />



          <AppRoute path="/pages/trends/dehum" component={TrendDehum}  />






          <AppRoute
            path="/cpos/jk3"
            component={CposTable}
          />

          <AppRoute
            path="/cpos/jk2"
            component={CposTablejk2}
          />

          <AppRoute
            path="/cpos/jk1"
            component={CposTablejk1}
          />

<AppRoute
          path="/table"
          component={CracTable}
        />

          <AppRoute
            path="/dehum"
            component={DehumTableSet}
          />

          <AppRoute
          path="/ahu"
          component={AhuTableSet}
        />

          <AppRoute
            path="/trend"
            component={Trend}
          />




 <AppRoute
            path="/bar"
            component={BarDetails}
          />

<AppRoute path="*" component={forzerofor} />

<Route path="/404" component={forzerofor} />
                    <Redirect to="/404" />





        </Switch>
      </Router>
    )
  }
}

export default AppRouter
