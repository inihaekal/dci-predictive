import React from "react"
import Iframe from "react-iframe"
import { Row, Col, Card,CardBody,CardTitle,Progress } from "reactstrap"
import Breadcrumbs from "../../components/@vuexy/breadCrumbs/BreadCrumb"
import "../../assets/scss/pages/dashboard-analytics.scss"
import MainOne from "./summary/mainOne";
import SummaryCrac from "./summary/crac";
import SummaryUps from "./summary/ups";
import SummaryBattery from "./summary/battery";
import SummaryGenerator from "./summary/generator";
import MainTwo from "./summary/mainTwo";
import MainThree from "./summary/mainThree";
import MainFour from "./summary/mainFour";
import SummaryBusbar from "./summary/busbar";
import SummarySwitchboard from "./summary/switchboard";
import SummaryFueltank from "./summary/fueltank";
import SummaryAhu from "./summary/ahu";
import SummaryChiller from "./summary/chiller";
import SummaryWaterTank from "./summary/watertank";
import SummaryDehum from "./summary/dehumidifier";






class summaryDashboard extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumbs
          breadCrumbTitle="Summary "
          breadCrumbParent="Summary Dashboard"
        />

        <MainOne />
        <MainTwo />
        <MainThree />
        <MainFour />
        <SummaryChiller />
        <SummaryCrac />
        <SummaryAhu />
        <SummaryDehum />
        <SummaryBusbar />
        <SummaryUps />
        <SummaryGenerator />
        <SummaryBattery />

        <SummarySwitchboard />
        <SummaryFueltank />


        <SummaryWaterTank />










      </React.Fragment>
    )
  }
}



export default summaryDashboard
