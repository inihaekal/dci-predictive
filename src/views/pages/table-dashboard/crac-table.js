import React from "react"
import { Row, Col, Card,CardBody,CardTitle,Progress } from "reactstrap"
import TemperatureTable from "../temperatureTable"
import EevTable from "../eevTable"
import EevTableHigh from "../eevTable_high"
import VibrationTable from "../vibrationTable"
import Loop from "../loop"
import "../../../assets/scss/pages/dashboard-analytics.scss"
import ExtensionsHeader from "../extensionsHeader"





class CracTableFront extends React.Component {
  render() {
    return (
      <React.Fragment>

        <Row className="match-height">


          <Col lg="3" md="12">
            <TemperatureTable />
          </Col>
          <Col lg="3" md="12">
            <EevTable />
          </Col>

          <Col lg="3" md="12">
            <EevTableHigh />
          </Col>

          <Col lg="3" md="12">
            <VibrationTable />
          </Col>

          <ExtensionsHeader
            title="Status"
          />
          <Col lg="12" sm="12" className="custom-scroll">

            <Loop />

          </Col>


        </Row>
      </React.Fragment>
    )
  }
}



export default CracTableFront
