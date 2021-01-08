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

class TrendTwo extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumbs
          breadCrumbTitle="Trend"
          breadCrumbParent="Vibration"
        />
        <Row className="match-height">

          <Col mb="0" lg="12" sm="12" className="custom-scroll">
            <Card  >
              <Iframe id="Iframe-Pad-15" url="http://10.2.222.216:5601/app/kibana#/dashboard/63e13eb0-f30a-11ea-b0f6-3f4538b96285?embed=true&_g=(filters%3A!()%2CrefreshInterval%3A(pause%3A!t%2Cvalue%3A0)%2Ctime%3A(from%3A'2020-09-06T17%3A00%3A00.000Z'%2Cto%3A'2020-09-07T16%3A30%3A00.000Z"
                      position="absolute"
                      width="100%"
                      id="myId"
                      className="myClassname"
                      height="100%"
                      frameBorder ='0'
                      scrolling="yes"
                      overflow ="hidden"
                      allow="fullscreen"
                      styles={{backgroundColor: "transparent", overflow: "hidden"}}
              />
            </Card>
          </Col>

        </Row>
      </React.Fragment>
    )
  }
}



export default TrendTwo
