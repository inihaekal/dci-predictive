import React from "react"
import { Row, Col } from "reactstrap"
import Breadcrumbs from "../../components/@vuexy/breadCrumbs/BreadCrumb"
import Chart1 from "./Chart-1-a-z10"
import "../../assets/scss/plugins/charts/apex-charts.scss"
let $primary = "#7367F0",
  $success = "#28C76F",
  $danger = "#EA5455",
  $warning = "#FF9F43",
  $info = "#00cfe8",
  $label_color_light = "#dae1e7"

let themeColors = [$primary, $success, $danger, $warning, $info]

class ApexCharts extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumbs
          breadCrumbTitle="1-A-Z10"
          breadCrumbParent="Charts"
          breadCrumbActive="1-A-Z10"
        />
        <Row>
          <Col sm="12">
          
          </Col>
          <Col lg="12" md="12">
            <Chart1 themeColors={themeColors} />
          </Col>
          
        </Row>
      </React.Fragment>
    )
  }
}

export default ApexCharts
