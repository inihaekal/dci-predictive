import React from "react"
import { Row, Col, Card,CardBody,CardTitle,Progress } from "reactstrap"
import Loop from "../loop"
import "../../../assets/scss/pages/dashboard-analytics.scss"
import ExtensionsHeader from "../extensionsHeader"
import Jkone from "../cpos/jk1";
import Jktwo from "../cpos/jk2";
import Jkthree from "../cpos/jk3";





class CposTableFront extends React.Component {
  render() {
    return (
      <React.Fragment>

        <Row className="match-height">

          <Col lg="3" md="12">
            <Jkone />
          </Col>

          <Col lg="3" md="12">
            <Jktwo />
          </Col>





          <Col lg="3" md="12">
            <Jkthree />

          </Col>




        </Row>
      </React.Fragment>
    )
  }
}



export default CposTableFront
