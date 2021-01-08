import React from "react"
import { Row, Col } from "reactstrap"
import TemperatureTable from "./temperatureTable"
import Breadcrumbs from "../../components/@vuexy/breadCrumbs/BreadCrumb"
import EevTable from "./eevTable"
import EevTableHigh from "./eevTable_high"
import VibrationTable from "./vibrationTable"
import TabNav from "./TableCracDetails"
import "../../assets/scss/pages/dashboard-analytics.scss"
import { temperature } from "chroma-js"
import TabDehum from "./TableDehumDetails";
import {Tab, Tabs} from "react-bootstrap";
import TabDehumAll from "./dehum/DehumTabJkAll";
import TabDehumOne from "./dehum/DehumTabJkOne";
import TabDehumTwo from "./dehum/DehumTabJkTwo";
import TabDehumThree from "./dehum/DehumTabJkThree";




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

class DehumTableSet extends React.Component {
  render() {
    return (
      <React.Fragment>
          <Breadcrumbs
          breadCrumbTitle="Humidity Dehumidifier"
          breadCrumbParent="Humidity Dehumidifier (in %) Table Details"
        />
        <Row className="match-height">



            <Col lg="12" md="12">

              <Tabs defaultActiveKey="all" id="uncontrolled-tab-example">
                <Tab eventKey="all" title="All">
                  <TabDehumAll />
                </Tab>

              </Tabs>





          </Col>





        </Row>
      </React.Fragment>
    )
  }
}



export default DehumTableSet
