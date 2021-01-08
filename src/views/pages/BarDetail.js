import React, { Component, Suspense } from "react"
import { Row, Col } from "reactstrap"
import TemperatureTable from "./temperatureTable"
import Breadcrumbs from "../../components/@vuexy/breadCrumbs/BreadCrumb"
import EevTable from "./eevTable"
import EevTableHigh from "./eevTable_high"
import VibrationTable from "./vibrationTable"
import TabBar from "./tabpages_bar/TableBarDetails"
import Spinner from "../../components/@vuexy/spinner/Fallback-spinner" ;
import "../../assets/scss/pages/dashboard-analytics.scss" 
import { temperature } from "chroma-js"



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

  const CustomLoader = () => (
    <div style={{ padding: '2px' }}>
      <Spinner />
    </div>
  );

class BarDetail extends React.Component {
  render() {
    return (
      <React.Fragment>
          <Breadcrumbs
          breadCrumbTitle="Bar Details"
          breadCrumbParent="CRAC Bar Details"
        />
        <Row className="match-height">
       
          <Col lg="12" md="12">
 
<TabBar />
          </Col>


        </Row>
      </React.Fragment>
    )
  }
}



export default BarDetail