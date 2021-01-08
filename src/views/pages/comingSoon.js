import React from "react"
import Iframe from "react-iframe"
import { Row, Col, Card,CardBody,CardTitle,Progress } from "reactstrap"
import TemperatureTable from "./temperatureTable"
import Breadcrumbs from "../../components/@vuexy/breadCrumbs/BreadCrumb"
import EevTable from "./eevTable"
import EevTableHigh from "./eevTable_high"
import VibrationTable from "./vibrationTable"
import Loop from "./loop"
import GaugeChart from "react-gauge-chart"
import SalesCard from "./SalesCard"
import "../../assets/scss/pages/dashboard-analytics.scss" 
import { temperature } from "chroma-js"
import ExtensionsHeader from "./extensionsHeader"



let $primary = "#7367F0",
  $danger = "#EA5455",
  $warning = "#FF9F43",
  $info = "#00cfe8",
  $primary_light = "#9c8cfc",
  $warning_light = "#FFC085",
  $danger_light = "#f29292",
  $info_light = "#1edec5",
  $stroke_color = "#e8e8e8",
  $label_color = "#e7eef7",
  $white = "#fff"

class ComingSoon extends React.Component {
  render() {
    return (
      <React.Fragment>
          <Breadcrumbs
          breadCrumbTitle="Incident Dashboard"
          breadCrumbParent="Incident Dashboard"
        />
        <Row className="match-height">
       
          <Col mb="0" lg="12" sm="12" className="custom-scroll">

          <Iframe url="https://api-iot.dci-indonesia.com/inrespredictive-web/home.jsp"
            position="absolute"
            width="100%"
            id="myId"
            className="myClassname"
            height="100%"
            frameBorder ='0'
            scrolling="no"
            overflow ="hidden"
            />

          </Col>

        </Row>
      </React.Fragment>
    )
  }
}



export default ComingSoon